// Radio stations data
const radioStations = [
    {
        id: 1,
        name: "Metro FM",
        categories: ["Yabanci Müzik"],
        city: "İstanbul",
        country: "tr",
        logo: "images/metrofm.png",
        streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/METRO_FM128AAC.aac",
        streamtheworldCode: "METRO_FM128AAC",
        website: "https://metrofm.com.tr/",
        facebook: "https://www.facebook.com/MetroFm/",
        instagram: "https://www.instagram.com/metrofmtr/",
        twitter: "https://x.com/metro_fm",
        youtube: "https://www.youtube.com/powerfm",
        phone: "+90 212 368 6200",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Türkiye'nin İlk ve En Çok Dinlenen Yabancı Müzik Radyosu!",
        image: "images/metrofm1.jpeg"
    },
    {
        id: 2,
        name: "Kral FM",
        categories: ["Arabesk,Fantazi"],
        city: "İstanbul",
        country: "tr",
        logo: "images/kralfm.jpg",
        streamUrl: "https://dygedge2.radyotvonline.net/kralfm/playlist.m3u8",
        website: "https://www.kralmuzik.com.tr",
        facebook: "https://facebook.com/kralfm",
        instagram: "https://instagram.com/kralfm",
        twitter: "https://twitter.com/kralfm",
        youtube: "https://www.youtube.com/kralfm",
        phone: "+90 212 335 00 00",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "İlaç Gibi Radyo!",
        image: "images/kralfm1.jpg"
    },
    {
        id: 3,
        name: "Radyo D",
        categories: ["pop, slow, rock, arabesk, rap"],
        city: "İstanbul",
        country: "tr",
        logo: "images/radyod.jpg",
        streamUrl: "https:\/\/moondigitaledge2.radyotvonline.net\/radyod\/playlist.m3u8",
        website: "https://www.radyod.com",
        facebook: "https://www.facebook.com/radyod104",
        instagram: "https://www.instagram.com/radyod104",
        twitter: "https://x.com/radyod104",
        youtube: "https://www.youtube.com/radyod",
        phone: "0 (212) 413 53 11",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Hayatın İçinde, Her Zaman Seninle! 💜",
        image: "images/radyod1.jpeg"
    },
    {
        id: 4,
        name: "Number One FM",
        categories: ["Türkçe Pop"],
        city: "İstanbul",
        country: "tr",
        logo: "images/number1.jpg",
        streamUrl: "https://n10101m.mediatriple.net/numberoneturk",
        website: "https://www.numberone.com.tr/",
        facebook: "https://www.facebook.com/Number1FM/",
        instagram: "https://www.instagram.com/number1official/",
        twitter: "https://x.com/number1tvfm",
        youtube: "",
        phone: "0216 425 36 40",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Türkiye'nin Bir Numarası",
        image: "images/number11.jpeg"
    },
    {
        id: 5,
        name: "Radyo EGE",
        categories: ["Pop, Rock, Caz, Elektronik, Alaturka, Nostaljik"],
        city: "İzmir",
        country: "tr",
        logo: "images/radyoege.jpg",
        streamUrl: "https://istek.ozelip.com/radyoege",
        website: "https://www.radyoege.com.tr/",
        facebook: "https://www.facebook.com/radyoege",
        instagram: "https://www.instagram.com/radyoege",
        twitter: "https://twitter.com/radyoege",
        youtube: "https://www.youtube.com/radyoege",
        phone: "0232 463 45 44",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Radyo EGE",
        image: "images/radyoege1.png"
    },
    {
        id: 6,
        name: "Baba Radyo",
        categories: ["Arabesk"],
        city: "İstanbul",
        country: "tr",
        logo: "images/babaradyo.png",
        streamUrl: "http://officialbabaradyo.radyotvonline.net/babaofficial",
        website: "https://www.babaradyo.com",
        facebook: "https://www.facebook.com/BABARADYO/",
        instagram: "https://www.instagram.com/babaradyo/",
        twitter: "https://x.com/baba_radyo",
        youtube: "",
        phone: "+90 212 251 76 77",
        likes: 620,
        userLikes: 0,
        isPopular: true,
        slogan: "BABANI DİNLE",
        image: "images/babaradyo1.png"
    },
    {
        id: 7,
        name: "Radyo 35",
        categories: ["Türkçe Pop"],
        city: "İzmir",
        country: "tr",
        logo: "images/radyo35.png",
        streamUrl: "https://yayin.turkhosted.com/6012/stream",
        website: "https://www.radyo35.com",
        facebook: "https://www.facebook.com/89Radyo35",
        instagram: "https://www.instagram.com/radyo35com/#",
        twitter: "https://x.com/radyo35",
        youtube: "https://www.youtube.com/radyo35",
        phone: "+90 232 278 89 89",
        likes: 540,
        userLikes: 0,
        isPopular: true,
        slogan: "Radyolarin Efesi RADYO 35",
        image: "images/radyo351.jpg"
    },
    {
        id: 8,
        name: "Süper FM",
        categories: ["Türkçe Pop", "Slow"],
        city: "İstanbul",
        country: "tr",
        logo: "images/superfm.jpg",
        streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FM_SC?/;",
        website: "https://superfm.com.tr/",
        facebook: "https://www.facebook.com/superfm/",
        instagram: "https://www.instagram.com/superfm/",
        twitter: "https://twitter.com/superfm",
        youtube: "https://www.youtube.com/superfm",
        phone: "+90 212 368 62 12",
        likes: 920,
        userLikes: 0,
        isPopular: true,
        slogan: "Sınırsız Hit Müzik",
        image: "images/superfm1.svg"
    },
    {
        id: 9,
        name: "Radyo Viva",
        categories: ["Pop"],
        city: "İstanbul",
        country: "tr",
        logo: "images/radyoviva.jpeg",
        streamUrl: "http://46.20.3.231/;",
        website: "https://www.radyoviva.com.tr",
        facebook: "https://www.facebook.com/radyoviva",
        instagram: "https://www.instagram.com/radyoviva",
        twitter: "https://twitter.com/radyoviva",
        youtube: "https://www.youtube.com/radyoviva",
        phone: "(+90) 212 352 05 56",
        likes: 780,
        userLikes: 0,
        isPopular: true,
        slogan: "Radyo Viva",
        image: "images/radyoviva.jpeg"
    },
    {
        id: 10,
        name: "Power Love",
        categories: ["Slow, Love"],
        city: "İstanbul",
        country: "tr",
        logo: "images/powerlove.png",
        streamUrl: "https://listen.powerapp.com.tr/powerlove/abr/playlist.m3u8",
        website: "https://www.powerapp.com.tr/radios/powerlove/",
        facebook: "https://www.facebook.com/powerapp",
        instagram: "https://www.instagram.com/powerappworld/",
        twitter: "https://x.com/powerappworld",
        youtube: "https://www.youtube.com/c/PowerAppMusic",
        phone: "+90 216 554 04 00",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Türkiyenin en çok sevilen radyosu",
        image: "images/powerlove.png"
    },
    {
        id: 11,
        name: "Best FM",
        categories: ["Slow"],
        city: "İstanbul",
        country: "tr",
        logo: "images/bestfm9.jpg",
        streamUrl: "http://bestfm64k.radyotvonline.net/bestfmaac",
        website: "https://www.bestfm.com.tr",
        facebook: "https://www.facebook.com/BestFM",
        instagram: "https://www.instagram.com/bestfm.com.tr",
        twitter: "https://x.com/BestFM",
        youtube: "https://www.youtube.com/channel/UCod-SnaZG87hpU-6AhGVqhg",
        phone: "+90 212 251 76 77",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Radyonuz Açık Olsun",
        image: "images/bestfm.png"
    },
    {
        id: 12,
        name: "Radyo Izmir FM",
        categories: ["Türk Halk Müziği"],
        city: "İzmir",
        country: "tr",
        logo: "https://static.mytuner.mobi/media/tvos_radios/911/radyo-izmir-fm.5c2b2f80.png",
        streamUrl: "https://usa4.fastcast4u.com/proxy/radyoizmirfm?mp=/mp3stream128",
        website: "https://www.radyotatlises.com",
        facebook: "https://www.facebook.com/radyotatlises",
        instagram: "https://www.instagram.com/radyotatlises",
        twitter: "https://twitter.com/radyotatlises",
        youtube: "https://www.youtube.com/radyotatlises",
        phone: "+90 232 444 11 20",
        likes: 720,
        userLikes: 0,
        isPopular: true,
        slogan: "Anadolu'nun Sesi",
        image: "https://via.placeholder.com/600x200?text=Radyo+Izmir+FM"
    },
    {
        id: 13,
        name: "Radyo Tatlıses",
        categories: ["Arabesk, Fantazi"],
        city: "İstanbul",
        country: "tr",
        logo: "images/tatlises.png",
        streamUrl: "https://sslyayin.radyoyayini.com:7009/default",
        website: "https://www.radyotatlises.com",
        facebook: "https://www.facebook.com/radyotatlises",
        instagram: "https://www.instagram.com/radyotatlises",
        twitter: "https://twitter.com/radyotatlises",
        youtube: "https://www.youtube.com/radyotatlises",
        phone: "",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "YİNE, YENİDEN, KALDIĞIMIZ YERDEN",
        image: "images/tatlises.png"
    },
    {
        id: 14,
        name: "Imbat FM",
        categories: ["pop, news, folk, turkish"],
        city: "İzmir",
        country: "tr",
        logo: "images/imbatfm.png",
        streamUrl: "http://162.244.80.20:8788/;",
        website: "https://www.radyotatlises.com",
        facebook: "https://www.facebook.com/radyotatlises",
        instagram: "https://www.instagram.com/radyotatlises",
        twitter: "https://twitter.com/radyotatlises",
        youtube: "https://www.youtube.com/radyotatlises",
        phone: "",
        likes: 10,
        userLikes: 0,
        currentSong: "İbrahim Tatlıses - Mavi Mavi",
        isPopular: true,
        slogan: "Tam 90 Imbat FM",
        image: "images/imbatfm.png"
    },
    {
        id: 15,
        name: "JOY FM",
        categories: ["rock, pop"],
        city: "İstanbul",
        country: "tr",
        logo: "images/joyfm.jpg",
        streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FMAAC.aac",
        website: "https://joyfm.com.tr/",
        facebook: "https://www.facebook.com/JoyFm",
        instagram: "https://www.instagram.com/joyfmtr/",
        twitter: "https://x.com/JoyFM",
        youtube: "https://www.youtube.com/channel/UCc8zOxg__CHX5DQ0hQrZMBQ",
        phone: "+90 212 368 62 30",
        likes: 10,
        userLikes: 0,
        currentSong: "İbrahim Tatlıses - Mavi Mavi",
        isPopular: true,
        slogan: "Joy FM Canlı Yayın",
        image: "images/joyfm1.webp"
    },
    {
        id: 16,
        name: "Alem FM",
        categories: ["rock, pop"],
        city: "İstanbul",
        country: "tr",
        logo: "images/alemfm.jpg",
        streamUrl: "https://alemfm.radyotvonline.net/alemfmaac",
        website: "https://www.alemfm.com/",
        facebook: "https://www.facebook.com/alemfmcom/",
        instagram: "https://www.instagram.com/alemfmcom/",
        twitter: "https://x.com/alemfmcom",
        youtube: "https://www.youtube.com/channel/UCS1c4-TpGcQ-N28RaU_GMZw",
        phone: "0(212) 473 20 00",
        likes: 10,
        userLikes: 0,
        currentSong: "İbrahim Tatlıses - Mavi Mavi",
        isPopular: true,
        slogan: "Cümle alem burada!",
        image: "images/alemfm1.jpg"
    },
    {
        id: 17,
        name: "Show Radyo",
        categories: ["rock, pop"],
        city: "İstanbul",
        country: "tr",
        logo: "images/showradyo.jpg",
        streamUrl: "https://edge1.radyotvonline.net/shoutcast/play/showradyo",
        website: "https://www.showradyo.com.tr",
        facebook: "https://www.facebook.com/alemfmcom/",
        instagram: "https://www.instagram.com/showradyo/",
        twitter: "https://x.com/ShowRadyo",
        youtube: "https://www.youtube.com/@show-radyo-viva",
        phone: " +90 212 325 90 90",
        likes: 10,
        userLikes: 0,
        currentSong: "İbrahim Tatlıses - Mavi Mavi",
        isPopular: true,
        slogan: "Show Radyo",
        image: "images/showradyo.png"
    },
    {
        id: 18,
        name: "slow Türk",
        categories: ["Slow"],
        city: "İstanbul",
        country: "tr",
        logo: "images/slowturk.png",
        streamUrl: "https://radyo.duhnet.tv/ak_dtvh_slowturk",
        website: "https://www.slowturk.com.tr/",
        facebook: "https://www.facebook.com/slowturkradyo",
        instagram: "https://www.instagram.com/slowturkradyo/",
        twitter: "https://x.com/SlowTurk_Radyo",
        youtube: "",
        phone: "0 (216) 556 90 00",
        likes: 10,
        userLikes: 0,
        currentSong: "İbrahim Tatlıses - Mavi Mavi",
        isPopular: true,
        slogan: "Aşkın Frekansi",
        image: "images/slowturk1.jpeg"
    },
    {
        id: 19,
        name: "Radyo Ankara",
        categories: ["Pop", "Rock"],
        city: "Ankara",
        country: "tr",
        logo: "images/ankararadyo.jpg",
        streamUrl: "https://ssl22.radyotelekom.com/8152/stream",
        website: "https://www.radyoankara.net/",
        facebook: "",
        instagram: "https://www.instagram.com/radyoankara106.7/",
        twitter: "",
        youtube: "",
        phone: "Canlı Yayın – Whatsapp İletişim Hattı : 0312 255 30 30",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Müziğin Başkenti",
        image: "images/radyoankara1.jpg"
    },
    {
        id: 20,
        name: "Karadeniz FM",
        categories: ["Pop", "folk", "arabic"],
        city: "İstanbul",
        country: "tr",
        logo: "images/karadenizfm.jpg",
        streamUrl: "https://moondigitaledge.radyotvonline.net/karadenizfm/playlist.m3u8",
        website: "https://www.karadenizfm.com.tr/",
        facebook: "https://www.facebook.com/Karadenizfm982/",
        instagram: "https://www.instagram.com/karadenizfm/",
        twitter: "https://x.com/Karadeniz_fm",
        youtube: "https://www.youtube.com/karadenizfmofficial",
        phone: "0212 912 30 30​",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Türkiye’nin İlk Karadeniz Radyosu",
        image: "images/karadenizfm1.jpg"
    },
    {
        id: 21,
        name: "Power Türk",
        categories: ["Pop",],
        city: "İstanbul",
        country: "tr",
        logo: "images/powerturk.png",
        streamUrl: "https://live.powerapp.com.tr/powerturk/abr/playlist.m3u8",
        website: "https://www.karadenizfm.com.tr/",
        facebook: "https://www.facebook.com/PowerTurk",
        instagram: "https://www.instagram.com/powerturk.fm/",
        twitter: "https://x.com/PowerturkFM",
        youtube: "https://www.youtube.com/@PowTurk",
        phone: "+90 216 554 04 00​",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Önce Muzik.",
        image: "images/powerturk1.jpg"
    },
    {
        id: 22,
        name: "Kiss APP",
        categories: ["pop", "rnb", "rap", "hip-hop",],
        city: "İstanbul",
        country: "tr",
        logo: "images/kissfm.jpg",
        streamUrl: "https://kiss.radyotvonline.net/kissfm",
        website: "https://kissfm.kissapp.com.tr/",
        facebook: "https://www.facebook.com/Kissfm.tr?mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/kiss.tr/",
        twitter: "https://x.com/kissapptr",
        youtube: "",
        phone: "​",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Kiss Dünyası Kiss App'de",
        image: "images/kissfm1.jpg"
    },
    {
        id: 23,
        name: "Radyo Fenomen",
        categories: ["pop", "dance", "rap",],
        city: "İstanbul",
        country: "tr",
        logo: "images/fenomen.jpg",
        streamUrl: "https://live.radyofenomen.com/fenomen/abr/playlist.m3u8",
        website: "https://www.radyofenomen.com/",
        facebook: "https://www.facebook.com/radyofenomen",
        instagram: "https://www.instagram.com/radyofenomen/#",
        twitter: "https://x.com/radyofenomen",
        youtube: "https://www.youtube.com/user/radyofenomenmaksimum",
        phone: "0216 474 60 60​",
        likes: 10,
        userLikes: 0,
        isPopular: true,
        slogan: "Maksimum Hit Müzik",
        image: "images/fenomen1.png"
    },
];

// Audio player
const audioPlayer = new Audio();
let currentStation = null;
let isPlaying = false;
let history = JSON.parse(localStorage.getItem('history')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let likedStations = JSON.parse(localStorage.getItem('likedStations')) || [];
let isLoggedIn = false;
let currentUser = {
    name: "Misafir Kullanıcı",
    city: "Şehir Seçilmedi",
    email: "",
    password: "",
    avatar: "https://via.placeholder.com/100"
};

// Pagination variables
let currentPage = 1;
const itemsPerPage = 25;
let filteredStations = [];
let totalPages = Math.ceil(radioStations.length / itemsPerPage);

// DOM elements
const stationsList = document.getElementById('stationsList');
const loadingIndicator = document.getElementById('loadingIndicator');
const volumeControl = document.getElementById('volumeControl');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const categorySelect = document.getElementById('categorySelect');
const citySelect = document.getElementById('citySelect');
const filterButtons = document.querySelectorAll('.filter-btn');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const logoutBtn = document.querySelector('.logout-btn');
const userAvatar = document.getElementById('userAvatar');
const avatarUpload = document.getElementById('avatarUpload');
const userName = document.querySelector('.user-name');
const userCity = document.querySelector('.city-name');
const historyCount = document.getElementById('historyCount');
const favoritesCount = document.getElementById('favoritesCount');
const likesCount = document.getElementById('likesCount');
const historyList = document.getElementById('historyList');
const favoritesList = document.getElementById('favoritesList');
const profileForm = document.getElementById('profileForm');
const profileName = document.getElementById('profileName');
const profileCity = document.getElementById('profileCity');
const profileEmail = document.getElementById('profileEmail');
const currentPassword = document.getElementById('currentPassword');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const toggleCurrentPassword = document.getElementById('toggleCurrentPassword');
const toggleNewPassword = document.getElementById('toggleNewPassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
// Profile tab elements
const addContactInput = document.getElementById('addContactInput');
const addContactBtn = document.getElementById('addContactBtn');
const contactsListEl = document.getElementById('contactsList');
const blockedListEl = document.getElementById('blockedList');
const pFavoritesCount = document.getElementById('pFavoritesCount');
const pContactsCount = document.getElementById('pContactsCount');
const pBlockedCount = document.getElementById('pBlockedCount');
const dmHeader = document.getElementById('dmHeader');
const dmMessages = document.getElementById('dmMessages');
const dmInput = document.getElementById('dmInput');
const dmSendBtn = document.getElementById('dmSendBtn');
const profileAvatarPreview = document.getElementById('profileAvatarPreview');
const profileDisplayName = document.getElementById('profileDisplayName');
const profileDisplayCity = document.getElementById('profileDisplayCity');
const recommendationsList = document.getElementById('recommendationsList');
const modernPlayerLogo = document.getElementById('modernPlayerLogo');
const modernPlayerTitle = document.getElementById('modernPlayerTitle');
const modernPlayerArtist = document.getElementById('modernPlayerArtist');
const modernPlayBtn = document.getElementById('modernPlayBtn');
const modernPrevBtn = document.getElementById('modernPrevBtn');
const modernNextBtn = document.getElementById('modernNextBtn');
const likeBtn = document.getElementById('likeBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareBtn = document.getElementById('shareBtn');
const facebookBtn = document.getElementById('facebookBtn');
const twitterBtn = document.getElementById('twitterBtn');
const instagramBtn = document.getElementById('instagramBtn');
const youtubeBtn = document.getElementById('youtubeBtn');
const websiteBtn = document.getElementById('websiteBtn');
const shareModal = document.getElementById('shareModal');
const shareWhatsApp = document.getElementById('shareWhatsApp');
const shareFacebook = document.getElementById('shareFacebook');
const shareTwitter = document.getElementById('shareTwitter');
const countrySelect = document.getElementById('countrySelect');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const nightModeBtn = document.getElementById('nightModeBtn');
const currentRadioName = document.getElementById('currentRadioName');
const pageButtons = document.getElementById('pageButtons');
const equalizer = document.getElementById('equalizer');
const likeCount = document.getElementById('likeCount');
const listenerCount = document.getElementById('listenerCount');

// Radio info elements
const radioInfoName = document.getElementById('radioInfoName');
const radioInfoCity = document.getElementById('radioInfoCity');
const radioInfoSlogan = document.getElementById('radioInfoSlogan');
const radioInfoPhone = document.getElementById('radioInfoPhone');
const radioInfoImage = document.getElementById('radioInfoImage');
const radioSocialFacebook = document.getElementById('radioSocialFacebook');
const radioSocialTwitter = document.getElementById('radioSocialTwitter');
const radioSocialInstagram = document.getElementById('radioSocialInstagram');
const radioSocialYoutube = document.getElementById('radioSocialYoutube');

// Contact form elements
const contactForm = document.getElementById('contactForm');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactSubject = document.getElementById('contactSubject');
const contactMessage = document.getElementById('contactMessage');

// Modal elements
const registerModal = document.getElementById('registerModal');
const loginModal = document.getElementById('loginModal');
const resetModal = document.getElementById('resetModal');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const resetForm = document.getElementById('resetForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const showReset = document.getElementById('showReset');
const showLoginFromReset = document.getElementById('showLoginFromReset');
const closeBtns = document.querySelectorAll('.close-btn');

// Initialize
function init() {
    renderStations();
    setupFilters();
    audioPlayer.volume = volumeControl.value / 100;
    
    // Load history, favorites and liked stations from localStorage
    updateHistoryInData();
    updateFavoritesInData();
    updateLikedStationsInData();
    
    // Update user profile
    updateUserProfile();
    
    // Check login status
    checkLoginStatus();
    
    // Load history and favorites lists
    renderHistoryList();
    renderFavoritesList();
    
    // Set up tab switching
    setupTabs();

    // Init profile data and UI
    initProfileData();
    renderContacts();
    renderBlocked();
    bindProfileUI();
    
    // Load recommended stations
    renderRecommendedStations();
    
    // Set up country select
    setupCountrySelect();
    
    // Update pagination
    updatePagination();
    
    // Check for night mode preference
    checkNightMode();
    
    // Setup page buttons
    setupPageButtons();
    
    // Hide equalizer initially
    equalizer.style.display = 'none';
}

// Setup page buttons
function setupPageButtons() {
    pageButtons.innerHTML = '';
    
    // Calculate total pages based on filtered stations or all stations
    const totalItems = filteredStations.length > 0 ? filteredStations.length : radioStations.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Show page buttons from 1 to totalPages
    const maxVisibleButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
    
    if (endPage - startPage + 1 < maxVisibleButtons) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }
    
    // Create page buttons
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.className = 'page-button';
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            renderStations();
            updatePageButtons();
        });
        pageButtons.appendChild(button);
    }
    
    updatePageButtons();
}

// Update page buttons
function updatePageButtons() {
    const buttons = pageButtons.querySelectorAll('.page-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (parseInt(button.textContent) === currentPage) {
            button.classList.add('active');
        }
    });
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Check and apply night mode
function checkNightMode() {
    const nightMode = localStorage.getItem('nightMode') === 'true';
    if (nightMode) {
        document.body.classList.add('night-mode');
        nightModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('night-mode');
        nightModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Toggle night mode
function toggleNightMode() {
    const isNightMode = document.body.classList.toggle('night-mode');
    localStorage.setItem('nightMode', isNightMode);
    
    if (isNightMode) {
        nightModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        nightModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Update user profile display
function updateUserProfile() {
    userAvatar.src = currentUser.avatar;
    userName.textContent = currentUser.name;
    userCity.textContent = currentUser.city;
    historyCount.textContent = history.length;
    favoritesCount.textContent = favorites.length;
    likesCount.textContent = likedStations.length;
    
    if (isLoggedIn) {
        profileName.value = currentUser.name;
        profileCity.value = currentUser.city;
        profileEmail.value = currentUser.email;
    } else {
        profileName.value = "";
        profileCity.value = "";
        profileEmail.value = "";
    }
}

// Check login status
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        isLoggedIn = true;
        currentUser = JSON.parse(loggedInUser);
        updateUserProfile();
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        isLoggedIn = false;
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }
}

// Setup tabs
function setupTabs() {
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            tabLinks.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            const tabId = link.getAttribute('data-tab');
            link.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Render radio stations with pagination
function renderStations() {
    stationsList.innerHTML = '';
    noResults.style.display = 'none';
    
    const stationsToRender = filteredStations.length > 0 ? filteredStations : radioStations;
    
    if (stationsToRender.length === 0) {
        noResults.style.display = 'block';
        pageButtons.innerHTML = '';
        return;
    }
    
    // Sort stations
    if (document.querySelector('.filter-btn.active').dataset.filter === 'popular') {
        stationsToRender.sort((a, b) => b.likes - a.likes);
    } else {
        stationsToRender.sort((a, b) => a.id - b.id);
    }
    
    // Pagination
    totalPages = Math.ceil(stationsToRender.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, stationsToRender.length);
    const stationsToShow = stationsToRender.slice(startIndex, endIndex);
    
    // Render stations
    stationsToShow.forEach(station => {
        const stationElement = document.createElement('div');
        stationElement.className = 'radio-station';
        stationElement.dataset.id = station.id;
        stationElement.innerHTML = `
            <div class="radio-logo-container">
                <div class="station-overlay" title="Radyo">
                    <i class="ri-radio-2-line"></i>
                </div>
                <img src="${station.logo}" alt="${station.name}" class="radio-logo" loading="lazy">
                <div class="favorite-icon" data-id="${station.id}">
                    ${favorites.includes(station.id) ? '<i class="ri-star-fill"></i>' : '<i class="ri-star-line"></i>'}
                </div>
                <div class="like-count">
                    <i class="ri-heart-2-line"></i> ${station.likes}
                </div>
            </div>
            <div class="radio-name" style="font-weight: normal; font-size: 0.9rem;">${station.name}</div>
        `;
        
        stationElement.addEventListener('click', () => selectStation(station));
        
        const favoriteIcon = stationElement.querySelector('.favorite-icon');
        favoriteIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(station.id);
        });
        
        stationsList.appendChild(stationElement);
    });
    
    // Update pagination
    updatePagination();
    setupPageButtons();
    updatePageButtons();
}

// Update pagination buttons
function updatePagination() {
    const totalItems = filteredStations.length > 0 ? filteredStations.length : radioStations.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    if (totalPages <= 1) {
        prevPageBtn.style.display = 'none';
        nextPageBtn.style.display = 'none';
    } else {
        prevPageBtn.style.display = 'block';
        nextPageBtn.style.display = 'block';
    }
}

// Render history list
function renderHistoryList() {
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = '<div class="empty-message">Henüz dinleme geçmişiniz yok</div>';
        return;
    }
    
    // Show all items
    const reversedHistory = [...history].reverse();
    
    reversedHistory.forEach(historyItem => {
        const station = radioStations.find(s => s.id === historyItem.stationId);
        if (station) {
            const historyElement = document.createElement('div');
            historyElement.className = 'history-item';
            historyElement.dataset.id = station.id;
            historyElement.innerHTML = `
                <img src="${station.logo}" alt="${station.name}" class="history-logo" loading="lazy">
                <div class="history-info">
                    <div class="history-name">${station.name}</div>
                </div>
            `;
            
            historyElement.addEventListener('click', () => {
                selectStation(station);
            });
            
            historyList.appendChild(historyElement);
        }
    });
}

// Render favorites list
function renderFavoritesList() {
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<div class="empty-message">Henüz favori radyonuz yok</div>';
        return;
    }
    
    // Show all items
    favorites.forEach(stationId => {
        const station = radioStations.find(s => s.id === stationId);
        if (station) {
            const favoriteElement = document.createElement('div');
            favoriteElement.className = 'favorite-item';
            favoriteElement.dataset.id = station.id;
            favoriteElement.innerHTML = `
                <img src="${station.logo}" alt="${station.name}" class="favorite-logo" loading="lazy">
                <div class="favorite-info">
                    <div class="favorite-name">${station.name}</div>
                </div>
                <button class="favorite-btn" data-id="${station.id}"><i class="fas fa-times"></i></button>
            `;
            
            favoriteElement.addEventListener('click', (e) => {
                if (!e.target.classList.contains('favorite-btn') && !e.target.closest('.favorite-btn')) {
                    selectStation(station);
                }
            });
            
            const removeBtn = favoriteElement.querySelector('.favorite-btn');
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(station.id);
            });
            
            favoritesList.appendChild(favoriteElement);
        }
    });
}

// Render recommended stations
function renderRecommendedStations(currentCategory = null) {
    recommendationsList.innerHTML = '';
    
    // Get all stations except the current one if playing
    let availableStations = radioStations.filter(station => 
        !currentStation || station.id !== currentStation.id
    );
    
    // If current category is specified, prioritize stations with the same category
    if (currentCategory) {
        const sameCategoryStations = availableStations.filter(station => 
            station.categories.includes(currentCategory)
        );
        
        // If we have enough same-category stations, use them
        if (sameCategoryStations.length >= 7) {
            availableStations = sameCategoryStations;
        } else {
            // Otherwise, mix with popular stations
            const popularStations = availableStations.sort((a, b) => b.likes - a.likes);
            
            availableStations = [...new Set([...sameCategoryStations, ...popularStations])];
        }
    } else {
        // If no current category, use popular stations
        availableStations = availableStations.sort((a, b) => b.likes - a.likes);
    }
    
    // Shuffle the array to get random recommendations
    availableStations = shuffleArray(availableStations);
    
    // Take first 8 stations
    const recommendedStations = availableStations.slice(0, 7);
    
    if (recommendedStations.length === 0) {
        recommendationsList.innerHTML = '<div class="empty-message">Öneri bulunamadı</div>';
        return;
    }
    
    recommendedStations.forEach(station => {
        const recommendedElement = document.createElement('div');
        recommendedElement.className = 'recommended-station';
        recommendedElement.dataset.id = station.id;
        recommendedElement.innerHTML = `
            <img src="${station.logo}" alt="${station.name}" class="recommended-logo" loading="lazy">
            <div class="recommended-name">${station.name}</div>
        `;
        
        recommendedElement.addEventListener('click', () => {
            selectStation(station);
        });
        
        recommendationsList.appendChild(recommendedElement);
    });
}

// Helper function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Setup filter dropdowns
function setupFilters() {
    // Get all unique categories from all stations
    const allCategories = [];
    radioStations.forEach(station => {
        station.categories.forEach(category => {
            if (!allCategories.includes(category)) {
                allCategories.push(category);
            }
        });
    });
    
    // Sort categories alphabetically
    allCategories.sort();
    
    // Add categories to select
    allCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase();
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    // Get all unique cities
    const cities = [...new Set(radioStations.map(station => station.city))];
    cities.sort();
    
    // Add cities to select
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.toLowerCase();
        option.textContent = city;
        citySelect.appendChild(option);
    });
    
    categorySelect.addEventListener('change', filterStations);
    citySelect.addEventListener('change', filterStations);
}

// Setup country select
function setupCountrySelect() {
    countrySelect.addEventListener('change', (e) => {
        const selectedCountry = e.target.value;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const countryName = selectedOption.text;
        
        // Redirect to country-specific site
        window.location.href = `https://${selectedCountry}.radiodinle.com`;
    });
}

function filterStations() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const selectedCategory = categorySelect.value;
    const selectedCity = citySelect.value;
    const selectedCountry = countrySelect.value;
    
    filteredStations = radioStations.filter(station => {
        const matchesSearch = station.name.toLowerCase().includes(searchTerm) || 
                             station.categories.some(g => g.toLowerCase().includes(searchTerm)) || 
                             station.city.toLowerCase().includes(searchTerm);
        
        const matchesFilter = activeFilter === 'all' || 
                            (activeFilter === 'favorites' && favorites.includes(station.id)) ||
                            (activeFilter === 'popular' && station.isPopular);
        
        const matchesCategory = selectedCategory === 'all' || 
                               station.categories.some(g => g.toLowerCase() === selectedCategory);
        
        const matchesCity = selectedCity === 'all' || 
                          station.city.toLowerCase() === selectedCity;
        
        const matchesCountry = selectedCountry === 'all' || 
                             station.country === selectedCountry;
        
        return matchesSearch && matchesFilter && matchesCategory && matchesCity && matchesCountry;
    });
    
    // Reset to first page and render
    currentPage = 1;
    renderStations();
}

// Add to history
function addToHistory(stationId) {
    if (!isLoggedIn) return;
    
    history = history.filter(item => item.stationId !== stationId);
    
    history.push({
        stationId,
        timestamp: new Date().getTime()
    });
    
    if (history.length > 50) {
        history = history.slice(history.length - 50);
    }
    
    localStorage.setItem('history', JSON.stringify(history));
    updateHistoryInData();
    historyCount.textContent = history.length;
    renderHistoryList();
}

// Toggle favorite station
function toggleFavorite(stationId) {
    if (!isLoggedIn) {
        showModal('loginModal');
        return;
    }
    
    const index = favorites.indexOf(stationId);
    
    if (index === -1) {
        favorites.push(stationId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesInData();
    favoritesCount.textContent = favorites.length;
    renderFavoritesList();
    renderStations(filteredStations.length > 0 ? filteredStations : radioStations);
    
    if (document.querySelector('.filter-btn.active').dataset.filter === 'favorites') {
        filterStations();
    }
}

// Toggle like station
function toggleLike(stationId) {
    if (!isLoggedIn) {
        showModal('loginModal');
        return;
    }
    
    const station = radioStations.find(s => s.id === stationId);
    if (!station) return;
    
    const index = likedStations.indexOf(stationId);
    
    if (index === -1) {
        // Like the station
        likedStations.push(stationId);
        station.likes++;
        station.userLikes = 1;
    } else {
        // Unlike the station
        likedStations.splice(index, 1);
        station.likes--;
        station.userLikes = 0;
    }
    
    localStorage.setItem('likedStations', JSON.stringify(likedStations));
    updateLikedStationsInData();
    likesCount.textContent = likedStations.length;
    renderStations(filteredStations.length > 0 ? filteredStations : radioStations);
    
    // Update like count display if this is the current station
    if (currentStation && currentStation.id === stationId) {
        likeCount.textContent = station.likes;
    }
    
    // Save updated likes to localStorage
    localStorage.setItem('radioStations', JSON.stringify(radioStations));
}

// Update history in data
function updateHistoryInData() {
    radioStations.forEach(station => {
        station.isInHistory = history.some(item => item.stationId === station.id);
    });
}

// Update favorites in data
function updateFavoritesInData() {
    radioStations.forEach(station => {
        station.isFavorite = favorites.includes(station.id);
    });
}

// Update liked stations in data
function updateLikedStationsInData() {
    radioStations.forEach(station => {
        station.isLiked = likedStations.includes(station.id);
    });
}


// Simple function to show station name
function getStationDisplay(station) {
    return `${station.name} - Canlı Yayın`;
}

// Real working API endpoints - ONLY VERIFIED WORKING APIS
const REAL_APIS = {
    // Only add APIs that we have verified work and return real data
};

// Fetch real metadata from proxy server
async function fetchNowPlaying(station) {
    try {
        let metadataText = "Canlı Yayın";
        let foundMetadata = false;
        
        // Get station code for metadata API
        let stationCode = station.streamtheworldCode || station.name.toUpperCase().replace(/\s+/g, '_');
        
        // Map station names to proper codes
        const stationCodes = {
            'Metro FM': 'METRO_FM128AAC',
            'Kral FM': 'KRAL_FM',
            'Power Türk': 'POWER_TURK',
            'Radyo D': 'RADYO_D',
            'Joy FM': 'JOY_FM',
            'Süper FM': 'SUPER_FM',
            'Power Love': 'POWER_LOVE',
            'Radyo Viva': 'RADYO_VIVA',
            'Slow Türk': 'SLOW_TÜRK',
            'Radyo Fenomen': 'RADYO_FENOMEN',
            'Best FM': 'BEST_FM',
            'Karadeniz FM': 'KARADENIZ_FM',
            'Radyo 35': 'RADYO_35',
            'Radyo İzmir FM': 'RADYO_IZMIR_FM',
            'Radyo Ankara': 'RADYO_ANKARA',
            'Radyo EGE': 'RADYO_EGE',
            'Baba Radyo': 'BABA_RADYO',
            'İmbat FM': 'IMBAT_FM',
            'Number One FM': 'NUMBER_ONE_FM',
            'Kiss App': 'KISS_APP',
            'Alem FM': 'ALEM_FM',
            'Radyo Tatlıses': 'RADYO_TATLISES',
            'Show Radyo': 'SHOW_RADYO'
        };
        
        if (stationCodes[station.name]) {
            stationCode = stationCodes[station.name];
        }
        
        try {
            // Call our proxy server with stream URL
            const baseUrl = (typeof window !== 'undefined' && window.location && window.location.hostname && !/localhost|127\.0\.0\.1/.test(window.location.hostname))
                ? '/metadata'
                : 'http://localhost:3000/metadata';
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify({
                    streamUrl: station.streamUrl
                })
            });
            
            if (response.ok) {
                const result = await response.json();
                
                if (result.success && result.data && result.data.song) {
                    metadataText = result.data.song;
                    foundMetadata = true;
                    
                    // If we have separate artist and title, combine them
                    if (result.data.artist && result.data.title) {
                        metadataText = `${result.data.artist} - ${result.data.title}`;
                    }
                    
                    console.log(`✅ Real metadata from ${result.data.source}: ${metadataText}`);
                } else {
                    console.log(`📻 No metadata available for ${station.name}`);
                }
            }
        } catch (error) {
            console.log('Proxy server not available, showing live broadcast.');
        }
        
        // Update the display
        if (modernPlayerArtist) {
            modernPlayerArtist.textContent = metadataText;
        }
        // Update JSON-LD MusicRecording
        try {
            updateNowPlayingSchema(metadataText);
        } catch (_) {}
        
        if (foundMetadata) {
            console.log(`🎵 ${station.name}: ${metadataText}`);
        } else {
            console.log(`📻 ${station.name}: Showing live broadcast`);
        }
        
    } catch (error) {
        console.log('Metadata fetch error:', error);
        if (modernPlayerArtist) {
            modernPlayerArtist.textContent = "Canlı Yayın";
        }
        try { updateNowPlayingSchema("Canlı Yayın"); } catch (_) {}
    }
}


let metadataUpdateInterval = null;
let contacts = [];
let blockedUsers = [];
let directMessages = {}; // { username: [{from, text, timestamp}] }
let activeDmUser = null;

function saveProfileStore() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    localStorage.setItem('blockedUsers', JSON.stringify(blockedUsers));
    localStorage.setItem('directMessages', JSON.stringify(directMessages));
}

function loadProfileStore() {
    try {
        contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        blockedUsers = JSON.parse(localStorage.getItem('blockedUsers') || '[]');
        directMessages = JSON.parse(localStorage.getItem('directMessages') || '{}');
    } catch (_) {}
}

function initProfileData() {
    loadProfileStore();
    updateProfileCounters();
    // Mirror from profile form to header
    profileDisplayName.textContent = profileName.value || 'Misafir Kullanıcı';
    profileDisplayCity.textContent = profileCity.value || 'Şehir Seçilmedi';
}

function updateProfileCounters() {
    pFavoritesCount.textContent = String(favorites.length || 0);
    pContactsCount.textContent = String(contacts.length || 0);
    pBlockedCount.textContent = String(blockedUsers.length || 0);
}

function renderContacts() {
    contactsListEl.innerHTML = '';
    if (!contacts.length) {
        contactsListEl.innerHTML = '<div class="empty-message">Kişi eklemediniz</div>';
    }
    contacts.forEach(username => {
        const el = document.createElement('div');
        el.className = 'contact-item';
        el.innerHTML = `
            <div class="contact-left">
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(username)}" class="contact-avatar" alt="${username}">
                <div class="contact-name">${username}</div>
            </div>
            <div class="contact-actions">
                <button class="icon-btn" data-action="dm" title="Mesaj"><i class="ri-message-2-line"></i></button>
                <button class="icon-btn" data-action="block" title="Engelle"><i class="ri-forbid-2-line"></i></button>
                <button class="icon-btn" data-action="remove" title="Kaldır"><i class="ri-user-unfollow-line"></i></button>
            </div>
        `;
        el.querySelector('[data-action="dm"]').addEventListener('click', () => openDm(username));
        el.querySelector('[data-action="block"]').addEventListener('click', () => blockUser(username));
        el.querySelector('[data-action="remove"]').addEventListener('click', () => removeContact(username));
        contactsListEl.appendChild(el);
    });
    updateProfileCounters();
}

function renderBlocked() {
    blockedListEl.innerHTML = '';
    if (!blockedUsers.length) {
        blockedListEl.innerHTML = '<div class="empty-message">Engelli kullanıcı yok</div>';
    }
    blockedUsers.forEach(username => {
        const el = document.createElement('div');
        el.className = 'blocked-item';
        el.innerHTML = `
            <div class="contact-left">
                <img src="https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(username)}" class="contact-avatar" alt="${username}">
                <div class="contact-name">${username}</div>
            </div>
            <div class="contact-actions">
                <button class="icon-btn" data-action="unblock" title="Engeli Kaldır"><i class="ri-shield-check-line"></i></button>
            </div>
        `;
        el.querySelector('[data-action="unblock"]').addEventListener('click', () => unblockUser(username));
        blockedListEl.appendChild(el);
    });
    updateProfileCounters();
}

function bindProfileUI() {
    if (addContactBtn) {
        addContactBtn.addEventListener('click', () => {
            const name = (addContactInput.value || '').trim();
            if (!name) return;
            if (contacts.includes(name)) return;
            if (blockedUsers.includes(name)) return;
            contacts.push(name);
            saveProfileStore();
            addContactInput.value = '';
            renderContacts();
        });
    }
    if (dmSendBtn) {
        dmSendBtn.addEventListener('click', sendDm);
    }
    if (dmInput) {
        dmInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendDm(); });
    }
}

function removeContact(username) {
    contacts = contacts.filter(u => u !== username);
    // also close dm if open
    if (activeDmUser === username) openDm(null);
    saveProfileStore();
    renderContacts();
}

function blockUser(username) {
    removeContact(username);
    if (!blockedUsers.includes(username)) blockedUsers.push(username);
    saveProfileStore();
    renderBlocked();
}

function unblockUser(username) {
    blockedUsers = blockedUsers.filter(u => u !== username);
    saveProfileStore();
    renderBlocked();
}

function openDm(username) {
    activeDmUser = username;
    if (!username) {
        dmHeader.textContent = 'Kişi seçin';
        dmInput.disabled = true; dmSendBtn.disabled = true;
        dmMessages.innerHTML = '';
        return;
    }
    dmHeader.textContent = `${username} ile sohbet`;
    dmInput.disabled = false; dmSendBtn.disabled = false;
    renderDmMessages(username);
}

function renderDmMessages(username) {
    dmMessages.innerHTML = '';
    const msgs = (directMessages[username] || []);
    msgs.forEach(m => {
        const row = document.createElement('div');
        row.className = 'dm-message' + (m.from === 'me' ? ' me' : '');
        row.innerHTML = `<div class="dm-bubble">${escapeHtml(m.text)}</div>`;
        dmMessages.appendChild(row);
    });
    dmMessages.scrollTop = dmMessages.scrollHeight;
}

function sendDm() {
    if (!activeDmUser) return;
    const text = (dmInput.value || '').trim();
    if (!text) return;
    if (blockedUsers.includes(activeDmUser)) return;
    directMessages[activeDmUser] = directMessages[activeDmUser] || [];
    directMessages[activeDmUser].push({ from: 'me', text, timestamp: Date.now() });
    saveProfileStore();
    dmInput.value = '';
    renderDmMessages(activeDmUser);
}

function escapeHtml(str) {
    return str.replace(/[&<>"])/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch] || ch));
}

function updateNowPlayingSchema(text) {
    const el = document.getElementById('schema-now-playing');
    if (!el) return;
    const data = {
        "@context": "https://schema.org",
        "@type": "MusicRecording",
        "name": "Canlı Yayın",
        "byArtist": { "@type": "MusicGroup", "name": "-" }
    };
    if (text && text.includes(' - ')) {
        const [artist, title] = text.split(' - ');
        data.name = title.trim();
        data.byArtist.name = artist.trim();
    } else if (text && text !== 'Canlı Yayın') {
        data.name = text;
        data.byArtist.name = '-';
    }
    el.textContent = JSON.stringify(data);
}


async function selectStation(station) {
    document.querySelectorAll('.radio-station').forEach(el => {
        el.classList.remove('active-radio');
    });
    
    const selectedElement = document.querySelector(`.radio-station[data-id="${station.id}"]`);
    if (selectedElement) {
        selectedElement.classList.add('active-radio');
    }
    
    currentStation = station;
    currentRadioName.textContent = station.name;
    
    modernPlayerLogo.src = station.logo;
    modernPlayerTitle.textContent = station.name;

    // Try to fetch metadata
    fetchNowPlaying(station);

    // Add slogan below artist-song info
    let sloganElem = document.getElementById('modernPlayerSlogan');
    if (!sloganElem) {
        sloganElem = document.createElement('div');
        sloganElem.id = 'modernPlayerSlogan';
        sloganElem.className = 'modern-player-slogan';
        modernPlayerArtist.parentNode.insertBefore(sloganElem, modernPlayerArtist.nextSibling);
    }
    sloganElem.textContent = station.slogan || '';
    
    // Clear any existing metadata update interval
    if (metadataUpdateInterval) {
        clearInterval(metadataUpdateInterval);
        metadataUpdateInterval = null;
    }
    
    // Start metadata updates every 10 seconds
    metadataUpdateInterval = setInterval(() => {
        if (currentStation) {
            fetchNowPlaying(currentStation);
        }
    }, 10000);
    
    // Update like button state
    const likeIcon = likeBtn.querySelector('i');
    if (likedStations.includes(station.id)) {
        likeIcon.classList.remove('far');
        likeIcon.classList.add('fas');
        likeBtn.classList.add('active');
    } else {
        likeIcon.classList.remove('fas');
        likeIcon.classList.add('far');
        likeBtn.classList.remove('active');
    }
    
    // Update like count
    likeCount.textContent = station.likes;
    
    // Update listener count with random number around the base
    listenerCount.textContent = Math.floor(station.likes * 1.2 + Math.random() * 100).toLocaleString();
    
    // Update favorite button state
    const favoriteIcon = favoriteBtn.querySelector('i');
    if (favorites.includes(station.id)) {
        favoriteIcon.classList.remove('far');
        favoriteIcon.classList.add('fas');
        favoriteBtn.classList.add('active');
    } else {
        favoriteIcon.classList.remove('fas');
        favoriteIcon.classList.add('far');
        favoriteBtn.classList.remove('active');
    }
    
    // Update radio info
    updateRadioInfo(station);
    
    addToHistory(station.id);
    renderRecommendedStations(station.categories[0]);
    playStation();
}

// Update radio info section
function updateRadioInfo(station) {
    radioInfoName.textContent = station.name;
    radioInfoCity.textContent = station.city;
    radioInfoSlogan.textContent = station.slogan || "-";
    radioInfoPhone.textContent = station.phone || "-";
    radioInfoImage.src = station.image || "https://via.placeholder.com/600x200?text=Radyo+Görseli";
    
    // Fit image to container
    radioInfoImage.style.objectFit = 'cover';
    radioInfoImage.style.width = '100%';
    radioInfoImage.style.height = '100%';
    
    // Update social media links
    radioSocialFacebook.href = station.facebook || "#";
    radioSocialTwitter.href = station.twitter || "#";
    radioSocialInstagram.href = station.instagram || "#";
    radioSocialYoutube.href = station.youtube || "#";
    
    // Disable social buttons if no link available
    radioSocialFacebook.style.display = station.facebook ? "flex" : "none";
    radioSocialTwitter.style.display = station.twitter ? "flex" : "none";
    radioSocialInstagram.style.display = station.instagram ? "flex" : "none";
    radioSocialYoutube.style.display = station.youtube ? "flex" : "none";
}

// Play the selected station
function playStation() {
    if (!currentStation) return;
    
    loadingIndicator.style.display = 'block';
    audioPlayer.src = currentStation.streamUrl;
    
    audioPlayer.play()
        .then(() => {
            isPlaying = true;
            loadingIndicator.style.display = 'none';
            modernPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
            equalizer.style.display = 'flex';
            
            // Start equalizer animation
            animateEqualizer();
            
            // Radio is now playing
        })
        .catch(error => {
            loadingIndicator.style.display = 'none';
            console.error('Playback error for', currentStation?.name, ':', error);
            
            // Show user-friendly error message
            modernPlayerArtist.textContent = "❌ Bağlantı hatası - Başka radyo deneyin";
            
            // Try alternative stream URL if available
            if (currentStation && currentStation.streamUrl.includes('https://')) {
                console.log('Trying HTTP version instead of HTTPS...');
                const httpUrl = currentStation.streamUrl.replace('https://', 'http://');
                audioPlayer.src = httpUrl;
                audioPlayer.play().catch(e => {
                    console.error('HTTP fallback also failed:', e);
                });
            }
        });
}

// Animate equalizer bars
function animateEqualizer() {
    const bars = document.querySelectorAll('.equalizer-bar');
    bars.forEach((bar, index) => {
        // Randomize animation duration for each bar
        const duration = 0.8 + Math.random() * 0.4;
        bar.style.animation = `equalize ${duration}s infinite ease-in-out`;
    });
}

// Pause the current station
function pauseStation() {
    audioPlayer.pause();
    isPlaying = false;
    modernPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
    equalizer.style.display = 'none';
    
    // Clear metadata updates when paused
    if (metadataUpdateInterval) {
        clearInterval(metadataUpdateInterval);
        metadataUpdateInterval = null;
    }
}

// Register function
function register(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value;
    const city = document.getElementById('regCity').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;
    
    if (password !== passwordConfirm) {
        alert('Şifreler eşleşmiyor!');
        return;
    }
    
    if (password.length < 6) {
        alert('Şifre en az 6 karakter olmalıdır!');
        return;
    }
    
    isLoggedIn = true;
    currentUser = {
        name,
        city,
        email,
        password,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
    };
    
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    updateUserProfile();
    checkLoginStatus();
    
    registerForm.reset();
    hideModal('registerModal');
}

// Login function
function login(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        alert('Lütfen e-posta ve şifre girin!');
        return;
    }
    
    const name = email.split('@')[0];
    isLoggedIn = true;
    currentUser = {
        name,
        city: "İstanbul",
        email,
        password,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
    };
    
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    updateUserProfile();
    checkLoginStatus();
    
    loginForm.reset();
    hideModal('loginModal');
}

// Reset password function
function resetPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('resetEmail').value;
    
    if (!email) {
        alert('Lütfen e-posta adresinizi girin!');
        return;
    }
    
    // Here you would normally send a password reset email
    // For demo purposes, we'll just show an alert
    alert(`Şifre sıfırlama bağlantısı ${email} adresine gönderildi. Lütfen e-postanızı kontrol edin.`);
    
    resetForm.reset();
    hideModal('resetModal');
}

// Logout function
function logout() {
    isLoggedIn = false;
    currentUser = {
        name: "Misafir Kullanıcı",
        city: "Şehir Seçilmedi",
        email: "",
        password: "",
        avatar: "https://via.placeholder.com/100"
    };
    
    localStorage.removeItem('loggedInUser');
    updateUserProfile();
    checkLoginStatus();
}

// Save profile settings
function saveProfile(e) {
    e.preventDefault();
    
    if (!isLoggedIn) {
        showModal('loginModal');
        return;
    }
    
    if (currentPassword.value && currentPassword.value !== currentUser.password) {
        alert('Mevcut şifre hatalı!');
        return;
    }
    
    if (newPassword.value !== confirmPassword.value) {
        alert('Yeni şifreler eşleşmiyor!');
        return;
    }
    
    currentUser.name = profileName.value;
    currentUser.city = profileCity.value;
    currentUser.email = profileEmail.value;
    
    if (newPassword.value) {
        currentUser.password = newPassword.value;
    }
    
    localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
    updateUserProfile();
    
    currentPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
}

// Handle avatar upload
function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            currentUser.avatar = event.target.result;
            localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            updateUserProfile();
        };
        reader.readAsDataURL(file);
    }
}

// Toggle password visibility
function togglePasswordVisibility(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    
    if (input.type === 'password') {
        input.type = 'text';
        toggle.classList.remove('fa-eye');
        toggle.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        toggle.classList.remove('fa-eye-slash');
        toggle.classList.add('fa-eye');
    }
}

// Show modal
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Hide modal
function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Share station
function shareStation(platform) {
    if (!currentStation) return;
    
    let url = '';
    let text = `${currentStation.name} radyosunu dinliyorum!`;
    
    switch(platform) {
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + currentStation.website)}`;
            window.open(url, '_blank');
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentStation.website)}&quote=${encodeURIComponent(text)}`;
            window.open(url, '_blank', 'width=600,height=400');
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentStation.website)}`;
            window.open(url, '_blank', 'width=600,height=400');
            break;
    }
    
    hideModal('shareModal');
}

// Open social media link
function openSocialMedia(platform) {
    if (!currentStation) return;
    
    let url = '';
    
    switch(platform) {
        case 'facebook':
            url = currentStation.facebook;
            break;
        case 'twitter':
            url = currentStation.twitter;
            break;
        case 'instagram':
            url = currentStation.instagram;
            break;
        case 'youtube':
            url = currentStation.youtube;
            break;
        case 'website':
            url = currentStation.website;
            break;
    }
    
    if (url) {
        window.open(url, '_blank');
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    if (!isLoggedIn) {
        showModal('loginModal');
        return;
    }
    
    if (!currentStation) {
        alert('Lütfen önce bir radyo seçiniz.');
        return;
    }
    
    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const subject = contactSubject.value;
    const message = contactMessage.value.trim();
    
    if (!name || !email || !subject || !message) {
        alert('Lütfen tüm alanları doldurunuz.');
        return;
    }
    
    // Here you would normally send the message to the server
    // For demo purposes, we'll just show an alert
    alert(`Mesajınız ${currentStation.name} radyosuna başarıyla gönderildi!\n\nKonu: ${subject}\nMesaj: ${message}`);
    
    // Reset form
    contactForm.reset();
}

// Event listeners
modernPlayBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseStation();
    } else if (currentStation) {
        playStation();
    }
});

volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value / 100;
});

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message && currentStation) {
        const username = isLoggedIn ? currentUser.name : 'Misafir';
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `
            <span class="message-sender">${username} (${currentStation.name}):</span> ${message}
        `;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterStations();
    });
});

searchInput.addEventListener('input', filterStations);
loginBtn.addEventListener('click', () => showModal('loginModal'));
registerBtn.addEventListener('click', () => showModal('registerModal'));
logoutBtn.addEventListener('click', logout);
registerForm.addEventListener('submit', register);
loginForm.addEventListener('submit', login);
resetForm.addEventListener('submit', resetPassword);
profileForm.addEventListener('submit', saveProfile);
userAvatar.addEventListener('click', () => {
    if (isLoggedIn) {
        avatarUpload.click();
    }
});
avatarUpload.addEventListener('change', handleAvatarUpload);
toggleCurrentPassword.addEventListener('click', () => togglePasswordVisibility('currentPassword', 'toggleCurrentPassword'));
toggleNewPassword.addEventListener('click', () => togglePasswordVisibility('newPassword', 'toggleNewPassword'));
toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword'));
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal('loginModal');
    showModal('registerModal');
});
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal('registerModal');
    showModal('loginModal');
});
showReset.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal('loginModal');
    showModal('resetModal');
});
showLoginFromReset.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal('resetModal');
    showModal('loginModal');
});
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        hideModal('registerModal');
        hideModal('loginModal');
        hideModal('resetModal');
        hideModal('shareModal');
    });
});
window.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        hideModal('registerModal');
    }
    if (e.target === loginModal) {
        hideModal('loginModal');
    }
    if (e.target === resetModal) {
        hideModal('resetModal');
    }
    if (e.target === shareModal) {
        hideModal('shareModal');
    }
});

likeBtn.addEventListener('click', () => {
    if (currentStation) {
        toggleLike(currentStation.id);
        
        const likeIcon = likeBtn.querySelector('i');
        if (likedStations.includes(currentStation.id)) {
            likeIcon.classList.remove('far');
            likeIcon.classList.add('fas');
            likeBtn.classList.add('active');
        } else {
            likeIcon.classList.remove('fas');
            likeIcon.classList.add('far');
            likeBtn.classList.remove('active');
        }
    }
});

favoriteBtn.addEventListener('click', () => {
    if (currentStation) {
        toggleFavorite(currentStation.id);
        
        const favoriteIcon = favoriteBtn.querySelector('i');
        if (favorites.includes(currentStation.id)) {
            favoriteIcon.classList.remove('far');
            favoriteIcon.classList.add('fas');
            favoriteBtn.classList.add('active');
        } else {
            favoriteIcon.classList.remove('fas');
            favoriteIcon.classList.add('far');
            favoriteBtn.classList.remove('active');
        }
    }
});

shareBtn.addEventListener('click', () => {
    if (currentStation) {
        showModal('shareModal');
    }
});

facebookBtn.addEventListener('click', () => openSocialMedia('facebook'));
twitterBtn.addEventListener('click', () => openSocialMedia('twitter'));
instagramBtn.addEventListener('click', () => openSocialMedia('instagram'));
youtubeBtn.addEventListener('click', () => openSocialMedia('youtube'));
websiteBtn.addEventListener('click', () => openSocialMedia('website'));

shareWhatsApp.addEventListener('click', () => shareStation('whatsapp'));
shareFacebook.addEventListener('click', () => shareStation('facebook'));
shareTwitter.addEventListener('click', () => shareStation('twitter'));

// Pagination buttons
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderStations();
        updatePageButtons();
    }
});

nextPageBtn.addEventListener('click', () => {
    const totalItems = filteredStations.length > 0 ? filteredStations.length : radioStations.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        renderStations();
        updatePageButtons();
    }
});

// Contact form submission
contactForm.addEventListener('submit', handleContactForm);

// Night mode toggle
nightModeBtn.addEventListener('click', toggleNightMode);


// Initialize the app
init();