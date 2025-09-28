const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/test-metadata', (req, res) => {
    res.json({
        message: 'Metadata proxy server is running',
        timestamp: new Date().toISOString(),
        status: 'online'
    });
});

// Extract metadata from radio stream URLs
const STREAM_METADATA_APIS = {
    // StreamTheWorld based streams
    'streamtheworld.com': {
        type: 'streamtheworld',
        baseUrl: 'https://np.tritondigital.com/public/nowplaying'
    },
    // Icecast/Shoutcast streams  
    'icecast': {
        type: 'icecast',
        endpoint: '/status-json.xsl'
    }
};

// Track API response cache
const apiCache = {};
const CACHE_DURATION = 10000; // 10 seconds

// No fake metadata - only real API calls

function normalizeText(input) {
    if (!input) return '';
    let s = String(input).trim().replace(/\s+/g, ' ').replace(/\0/g, '');
    // Fix typical mojibake from UTF-8 read as ISO-8859-1
    if (/Ã|Â|Ä|Å|â€™|â€œ|â€/.test(s)) {
        try {
            const utf8 = Buffer.from(s, 'latin1').toString('utf8');
            if (utf8 && !/\uFFFD/.test(utf8)) {
                s = utf8;
            }
        } catch (_) {}
    }
    // Minimal HTML entity decoding
    s = s
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
        .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)));
    return s.trim();
}

// Build candidate mount names from a StreamTheWorld stream code
function buildStwCandidates(codeRaw) {
    const candidates = new Set();
    let code = codeRaw.split('?')[0];
    code = code.replace(/\.(aac|mp3)$/i, '');
    // Remove bitrate and codec suffixes
    candidates.add(code);
    candidates.add(code.replace(/(\d+)(AAC|MP3)?$/i, ''));
    candidates.add(code.replace(/_(\d+)(AAC|MP3)?$/i, ''));
    candidates.add(code.replace(/_?SC$/i, ''));
    candidates.add(code.replace(/(AAC|MP3)$/i, ''));
    candidates.add(code.replace(/_AACLIVE\d*$/i, ''));
    candidates.add(code.replace(/_AACLIVE$/i, ''));
    candidates.add(code.replace(/_AAC$/i, ''));
    candidates.add(code.replace(/_128$/i, ''));
    // Common station id without suffixes
    const base = code.replace(/(_?SC|_?AAC(LIVE)?\d*|_?MP3|\d+)$/gi, '');
    candidates.add(base);
    return Array.from(candidates).filter(Boolean);
}

// Extract metadata from stream URL
function getMetadataUrlFromStreamUrl(streamUrl) {
    try {
        const url = new URL(streamUrl);
        
        // StreamTheWorld URLs - try multiple candidates and endpoints
        if (url.hostname.includes('streamtheworld.com')) {
            const pathParts = url.pathname.split('/');
            const streamCode = pathParts[pathParts.length - 1].replace('.aac', '').replace('.mp3', '');
            const codes = buildStwCandidates(streamCode);
            const urls = [];
            for (const c of codes) {
                urls.push(`https://np.tritondigital.com/public/nowplaying?mountName=${c}&numberToFetch=1&eventType=track`);
                urls.push(`https://np.tritondigital.com/public/nowplaying?stationId=${c}&numberToFetch=1&eventType=track`);
            }
            return urls;
        }
        
        // Icecast/Shoutcast streams - try multiple endpoints
        if (url.port || url.pathname.includes('stream') || url.pathname.includes('playlist') || url.pathname.includes('aac') || url.pathname === '/;') {
            const baseUrl = `${url.protocol}//${url.hostname}${url.port ? ':' + url.port : ''}`;
            
            // Try multiple possible metadata endpoints
            const endpoints = [
                `${baseUrl}/status-json.xsl`,
                `${baseUrl}/status.xsl`,
                `${baseUrl}/7.html`,
                `${baseUrl}/admin/stats.xml`,
                `${baseUrl}/statistics`,
                `${baseUrl}/streaminfo.txt`
            ];
            
            return endpoints; // Return all candidates
        }
        
        return null;
    } catch (error) {
        console.log(`❌ Invalid stream URL: ${streamUrl}`);
        return null;
    }
}

// Try to read ICY metadata directly from the stream (Shoutcast/Icecast)
async function fetchIcyMetadata(streamUrl) {
    try {
        const controller = new AbortController();
        const abortTimeout = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(streamUrl, {
            headers: {
                'Icy-MetaData': '1',
                'User-Agent': 'Winamp/5.09',
                'Accept': '*/*',
                'Connection': 'close'
            },
            redirect: 'follow',
            signal: controller.signal
        });
        clearTimeout(abortTimeout);

        const headerTitle = response.headers.get('icy-title');
        if (headerTitle && headerTitle.trim()) {
            return headerTitle.trim();
        }

        const metaIntHeader = response.headers.get('icy-metaint');
        if (!metaIntHeader || !response.body) {
            return null;
        }

        const metaInt = parseInt(metaIntHeader, 10);
        if (Number.isNaN(metaInt) || metaInt <= 0) {
            return null;
        }

        // Accumulate Node stream data until we reach first metadata block
        const maxBytes = metaInt + 4096;
        let receivedLength = 0;
        let chunks = [];

        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                try { response.body.destroy(); } catch (_) {}
                resolve();
            }, 8000);

            response.body.on('data', (chunk) => {
                if (!Buffer.isBuffer(chunk)) {
                    chunk = Buffer.from(chunk);
                }
                chunks.push(chunk);
                receivedLength += chunk.length;
                if (receivedLength >= maxBytes) {
                    clearTimeout(timeout);
                    try { response.body.destroy(); } catch (_) {}
                    resolve();
                }
            });
            response.body.on('end', () => { clearTimeout(timeout); resolve(); });
            response.body.on('error', (err) => { clearTimeout(timeout); resolve(); });
        });

        const buffer = Buffer.concat(chunks);
        if (buffer.length > metaInt + 1) {
            const metaLen = buffer[metaInt] * 16;
            const start = metaInt + 1;
            const end = Math.min(start + metaLen, buffer.length);
            if (end > start) {
                const metaSlice = buffer.slice(start, end);
                const metaStr = metaSlice.toString('latin1');
                const match = metaStr.match(/StreamTitle='([^']*)'/i);
                if (match && match[1] && match[1].trim()) {
                    const latin = match[1].trim();
                    const utf8Candidate = Buffer.from(latin, 'latin1').toString('utf8');
                    const chosen = /Ã|Â|\uFFFD/.test(latin) ? utf8Candidate : latin;
                    return normalizeText(chosen);
                }
            }
        }

        return null;
    } catch (error) {
        console.log(`❌ ICY metadata fetch failed for ${streamUrl}: ${error.message}`);
        return null;
    }
}

// Fetch metadata from stream URL
async function fetchMetadata(streamUrl) {
    try {
        console.log(`🔍 Fetching real metadata from stream: ${streamUrl}`);
        
        // Check cache first
        const cacheKey = streamUrl;
        const now = Date.now();
        if (apiCache[cacheKey] && (now - apiCache[cacheKey].timestamp < CACHE_DURATION)) {
            console.log(`📋 Using cached metadata: ${apiCache[cacheKey].data.song}`);
            return apiCache[cacheKey].data;
        }
        
        // Try stream URL-derived metadata endpoints
        const metadataCandidates = getMetadataUrlFromStreamUrl(streamUrl);
        if (!metadataCandidates) {
            console.log(`📻 No metadata URL available for stream: ${streamUrl}`);
        } else {
            const candidateList = Array.isArray(metadataCandidates) ? metadataCandidates : [metadataCandidates];
            for (const metadataUrl of candidateList) {
                try {
                    console.log(`📡 Trying metadata URL: ${metadataUrl}`);
                    const response = await fetch(metadataUrl, {
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                            'Accept': 'application/json, text/html, */*',
                            'Cache-Control': 'no-cache'
                        },
                        timeout: 8000
                    });
                    if (!response.ok) {
                        continue;
                    }

                    const contentType = response.headers.get('content-type') || '';
                    let result = null;
                    if (contentType.includes('application/json')) {
        const data = await response.json();
                        // StreamTheWorld JSON
                        if (!result && data.nowplaying && data.nowplaying.length > 0) {
                            const track = data.nowplaying[0];
                            const title = (track.cue_title || '').trim();
                            const artist = (track.cue_artist || '').trim();
                            const combined = (artist && title) ? `${artist} - ${title}` : (title || null);
                            if (combined) {
                                result = { song: combined, source: 'StreamTheWorld JSON', streamUrl };
                            }
                        }
                        // Icecast JSON
                        if (!result && data.icestats && data.icestats.source) {
                            const source = Array.isArray(data.icestats.source) ? data.icestats.source[0] : data.icestats.source;
                            const title = (source.title || '').trim();
                            if (title) {
                                result = { song: title, source: 'Icecast JSON', streamUrl };
                            }
                        }
                        // Other common JSON
                        if (!result) {
                            const title = (data.current_song || data.song || data.track || data.title || data.name || '').trim();
                            const artist = (data.artist || data.performer || '').trim();
                            const combined = (artist && title) ? `${artist} - ${title}` : (title || null);
                            if (combined) {
                                result = { song: combined, source: 'Stream JSON', streamUrl };
                            }
                        }
                    } else {
                        const text = await response.text();
                        // Triton XML
                        if (!result && (text.toLowerCase().includes('<nowplaying') || text.toLowerCase().includes('<nowplayingresponse'))) {
                            const a = (text.match(/<artist[^>]*>([^<]+)<\/artist>/i) || [])[1];
                            const b = (text.match(/<title[^>]*>([^<]+)<\/title>/i) || [])[1];
                            const tTitle = (text.match(/<cue_title[^>]*>([^<]+)<\/cue_title>/i) || [])[1] || b;
                            const tArtist = (text.match(/<cue_artist[^>]*>([^<]+)<\/cue_artist>/i) || [])[1] || a;
                            const title = tTitle ? tTitle.trim() : '';
                            const artist = tArtist ? tArtist.trim() : '';
                            const combined = (artist && title) ? `${artist} - ${title}` : (title || null);
                            if (combined) {
                                result = { song: combined, source: 'StreamTheWorld XML', streamUrl };
                            }
                        }
                        // Icecast XML
                        if (!result && (text.includes('<icestats') || text.includes('<source'))) {
                            const xTitle = (text.match(/<title[^>]*>([^<]+)<\/title>/i) || [])[1] || (text.match(/<song[^>]*>([^<]+)<\/song>/i) || [])[1];
                            if (xTitle && xTitle.trim()) {
                                result = { song: xTitle.trim(), source: 'Icecast XML', streamUrl };
                            }
                        }
                        // Shoutcast v1 (7.html)
                        if (!result && metadataUrl.endsWith('/7.html')) {
                            const parts = text.split(',');
                            if (parts.length >= 7) {
                                const scTitle = (parts[6] || '').trim();
                                if (scTitle) {
                                    result = { song: scTitle, source: 'Shoutcast 7.html', streamUrl };
                                }
                            }
                        }
                    }

                    if (result && result.song && result.song.length > 2) {
                        console.log(`✅ Found stream metadata: ${result.song}`);
                        apiCache[cacheKey] = { data: result, timestamp: now };
                        return result;
                    }
                } catch (err) {
                    console.log(`❌ Metadata fetch failed for ${metadataUrl}: ${err.message}`);
                }
            }
        }
        
        // Final attempt: ICY metadata from stream
        const icy = await fetchIcyMetadata(streamUrl);
        if (icy && icy.length > 2) {
            const result = { song: icy, source: 'ICY', streamUrl };
            console.log(`✅ Found ICY metadata: ${icy}`);
            apiCache[cacheKey] = { data: result, timestamp: now };
            return result;
        }

        console.log(`📻 No real metadata available for stream: ${streamUrl}`);
        return null;
        
    } catch (error) {
        console.error(`❌ Stream metadata error for ${streamUrl}:`, error.message);
        return null;
    }
}

// Metadata proxy endpoint - expects stream URL in request body
app.post('/metadata', async (req, res) => {
    const { streamUrl } = req.body;
    try {
        if (!streamUrl) {
            return res.status(400).json({
                success: false,
                error: 'Stream URL is required',
                timestamp: new Date().toISOString()
            });
        }
        
        const metadata = await fetchMetadata(streamUrl);
        if (metadata) {
            res.json({
                success: true,
                data: metadata,
                timestamp: new Date().toISOString()
            });
        } else {
            res.json({
                success: false,
                data: {
                    song: 'Canlı Yayın',
                    source: 'no-metadata'
                },
                message: 'No metadata available'
            });
        }
    } catch (error) {
        console.error('Metadata endpoint error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Legacy endpoint for backwards compatibility
app.get('/metadata/:stationCode', async (req, res) => {
    res.json({
        success: false,
        data: {
            song: 'Canlı Yayın',
            source: 'legacy-endpoint'
        },
        message: 'Use POST /metadata with streamUrl in body instead'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎵 Radyo Dinle Server running on http://localhost:${PORT}`);
    console.log(`📡 Metadata proxy available at http://localhost:${PORT}/metadata/:stationCode`);
    console.log(`🧪 Test endpoint: http://localhost:${PORT}/test-metadata`);
});
