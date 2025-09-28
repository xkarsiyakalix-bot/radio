// Simple standalone profile logic (localStorage-backed)
let contacts = [];
let blockedUsers = [];
let directMessages = {}; // { username: [{from, text, ts}] }
let activeDmUser = null;

const profileDisplayName = document.getElementById('profileDisplayName');
const profileDisplayCity = document.getElementById('profileDisplayCity');
const profileAvatarPreview = document.getElementById('profileAvatarPreview');
const pFavoritesCount = document.getElementById('pFavoritesCount');
const pContactsCount = document.getElementById('pContactsCount');
const pBlockedCount = document.getElementById('pBlockedCount');
const addContactInput = document.getElementById('addContactInput');
const addContactBtn = document.getElementById('addContactBtn');
const contactsListEl = document.getElementById('contactsList');
const blockedListEl = document.getElementById('blockedList');
const dmHeader = document.getElementById('dmHeader');
const dmMessages = document.getElementById('dmMessages');
const dmInput = document.getElementById('dmInput');
const dmSendBtn = document.getElementById('dmSendBtn');

function loadStore() {
  try {
    contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    blockedUsers = JSON.parse(localStorage.getItem('blockedUsers') || '[]');
    directMessages = JSON.parse(localStorage.getItem('directMessages') || '{}');
  } catch (_) {}
  const headerData = JSON.parse(localStorage.getItem('profileHeader') || '{}');
  if (headerData.name) profileDisplayName.textContent = headerData.name;
  if (headerData.city) profileDisplayCity.textContent = headerData.city;
  if (headerData.avatar) profileAvatarPreview.src = headerData.avatar;
}

function saveStore() {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  localStorage.setItem('blockedUsers', JSON.stringify(blockedUsers));
  localStorage.setItem('directMessages', JSON.stringify(directMessages));
}

function updateCounters() {
  pContactsCount.textContent = String(contacts.length || 0);
  pBlockedCount.textContent = String(blockedUsers.length || 0);
  const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
  pFavoritesCount.textContent = String(favs.length || 0);
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
  updateCounters();
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
  updateCounters();
}

function addContact() {
  const name = (addContactInput.value || '').trim();
  if (!name) return;
  if (contacts.includes(name)) return;
  if (blockedUsers.includes(name)) return;
  contacts.push(name);
  saveStore();
  addContactInput.value = '';
  renderContacts();
}

function removeContact(username) {
  contacts = contacts.filter(u => u !== username);
  if (activeDmUser === username) openDm(null);
  saveStore();
  renderContacts();
}

function blockUser(username) {
  removeContact(username);
  if (!blockedUsers.includes(username)) blockedUsers.push(username);
  saveStore();
  renderBlocked();
}

function unblockUser(username) {
  blockedUsers = blockedUsers.filter(u => u !== username);
  saveStore();
  renderBlocked();
}

function openDm(username) {
  activeDmUser = username;
  if (!username) {
    dmHeader.textContent = 'Bir kişi seçin';
    dmMessages.innerHTML = '';
    dmInput.disabled = true;
    dmSendBtn.disabled = true;
    return;
  }
  dmHeader.textContent = `@${username}`;
  dmInput.disabled = false;
  dmSendBtn.disabled = false;
  renderDm();
}

function renderDm() {
  dmMessages.innerHTML = '';
  const msgs = (directMessages[activeDmUser] || []).slice(-100);
  msgs.forEach(m => {
    const el = document.createElement('div');
    el.className = `dm-message ${m.from === 'me' ? 'me' : 'them'}`;
    el.textContent = m.text;
    dmMessages.appendChild(el);
  });
  dmMessages.scrollTop = dmMessages.scrollHeight;
}

function sendDm() {
  const text = (dmInput.value || '').trim();
  if (!text || !activeDmUser) return;
  if (!directMessages[activeDmUser]) directMessages[activeDmUser] = [];
  directMessages[activeDmUser].push({ from: 'me', text, ts: Date.now() });
  saveStore();
  dmInput.value = '';
  renderDm();
}

function init() {
  loadStore();
  updateCounters();
  renderContacts();
  renderBlocked();
  addContactBtn.addEventListener('click', addContact);
  dmSendBtn.addEventListener('click', sendDm);
  dmInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendDm(); });
}

document.addEventListener('DOMContentLoaded', init);



