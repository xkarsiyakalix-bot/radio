// Netlify Function: Metadata proxy from stream URL
// Only real data; tries Triton (StreamTheWorld) and Icecast/Shoutcast status endpoints

// Ensure fetch exists in the Netlify runtime (Node < 18 fallback)
let fetchFn = global.fetch;
try {
  if (typeof fetchFn === 'undefined') {
    // node-fetch v2 (CJS)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    fetchFn = require('node-fetch');
  }
} catch (_) {
  // ignore, will fail later if truly unavailable
}

function buildResponse(statusCode, bodyObj) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  return { statusCode, headers, body: JSON.stringify(bodyObj) };
}

function getMetadataUrlFromStreamUrl(streamUrl) {
  try {
    const url = new URL(streamUrl);
    if (url.hostname.includes('streamtheworld.com')) {
      const last = url.pathname.split('/').filter(Boolean).pop() || '';
      const code = last.replace(/\.(aac|mp3)$/i, '').replace(/\?.*$/, '');
      return [`https://np.tritondigital.com/public/nowplaying?mountName=${code}&numberToFetch=1&eventType=track`];
    }
    const base = `${url.protocol}//${url.hostname}${url.port ? ':' + url.port : ''}`;
    return [
      `${base}/status-json.xsl`,
      `${base}/status.xsl`,
      `${base}/7.html`,
      `${base}/admin/stats.xml`,
      `${base}/statistics`,
      `${base}/streaminfo.txt`
    ];
  } catch (e) {
    return [];
  }
}

function normalizeText(input) {
  if (!input) return '';
  let s = String(input).trim().replace(/\s+/g, ' ').replace(/\0/g, '');
  if (/Ã|Â|Ä|Å|â€™|â€œ|â€/.test(s)) {
    try { s = Buffer.from(s, 'latin1').toString('utf8'); } catch (_) {}
  }
  return s;
}

async function timedFetch(url, opts = {}, ms = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetchFn(url, { ...opts, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
}

async function tryParseResponse(res, streamUrl, endpointUrl) {
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const data = await res.json().catch(() => null);
    if (data) {
      // Triton JSON format
      if (data.nowplaying && Array.isArray(data.nowplaying) && data.nowplaying.length) {
        const track = data.nowplaying[0];
        const title = normalizeText(track.cue_title || track.title);
        const artist = normalizeText(track.cue_artist || track.artist || '');
        const song = title && artist ? `${artist} - ${title}` : (title || null);
        if (song) return { song, source: 'Triton JSON', streamUrl };
      }
      // Icecast JSON
      if (data.icestats && data.icestats.source) {
        const src = Array.isArray(data.icestats.source) ? data.icestats.source[0] : data.icestats.source;
        const title = normalizeText(src.title || src.streamtitle || '');
        if (title) return { song: title, source: 'Icecast JSON', streamUrl };
      }
      // Generic keys
      const generic = normalizeText(data.current_song || data.song || data.track || data.title || data.name);
      if (generic) return { song: generic, source: 'JSON', streamUrl };
    }
    return null;
  }

  const text = await res.text().catch(() => '');
  const t = text || '';

  // XML: <title> or <song>
  if (t.includes('<')) {
    const mTitle = t.match(/<title[^>]*>([^<]+)<\/title>/i) || t.match(/<song[^>]*>([^<]+)<\/song>/i);
    if (mTitle && mTitle[1]) {
      const song = normalizeText(mTitle[1]);
      if (song) return { song, source: 'XML', streamUrl };
    }
    // Shoutcast admin XML sometimes uses StreamTitle
    const mSc = t.match(/StreamTitle=['\"]([^'\"]+)['\"]/i);
    if (mSc && mSc[1]) {
      const song = normalizeText(mSc[1]);
      if (song) return { song, source: 'Shoutcast XML', streamUrl };
    }
  }

  // 7.html legacy format: comma-separated, last item often current title
  if (/7\.html/i.test(endpointUrl)) {
    const parts = t.split(',');
    const last = parts[parts.length - 1] || '';
    const song = normalizeText(last);
    if (song && song.length > 1) return { song, source: 'Shoutcast 7.html', streamUrl };
  }

  // Plain text variants
  const mStreamTitle = t.match(/StreamTitle=['\"]([^'\"]+)['\"]/i);
  if (mStreamTitle && mStreamTitle[1]) {
    const song = normalizeText(mStreamTitle[1]);
    if (song) return { song, source: 'StreamTitle', streamUrl };
  }
  const mCurrent = t.match(/Current Song\s*[:=-]\s*(.+)/i);
  if (mCurrent && mCurrent[1]) {
    const song = normalizeText(mCurrent[1]);
    if (song) return { song, source: 'PlainText', streamUrl };
  }
  return null;
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return buildResponse(204, {});
  }
  if (event.httpMethod !== 'POST') {
    return buildResponse(405, { success: false, error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const streamUrl = body.streamUrl;
    if (!streamUrl) {
      return buildResponse(400, { success: false, error: 'Stream URL is required' });
    }

    const endpoints = getMetadataUrlFromStreamUrl(streamUrl);
    for (const endpoint of endpoints) {
      try {
        const res = await timedFetch(endpoint, {
          headers: {
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json, text/html, */*',
            'Cache-Control': 'no-cache'
          }
        }, 8000);
        if (!res.ok) continue;
        const parsed = await tryParseResponse(res, streamUrl, endpoint);
        if (parsed && parsed.song && parsed.song.length > 1) {
          return buildResponse(200, { success: true, data: parsed, timestamp: new Date().toISOString() });
        }
      } catch (_) { /* try next */ }
    }

    return buildResponse(200, {
      success: false,
      data: { song: 'Canlı Yayın', source: 'no-metadata' },
      message: 'No metadata available'
    });
  } catch (error) {
    return buildResponse(500, { success: false, error: String(error) });
  }
};


