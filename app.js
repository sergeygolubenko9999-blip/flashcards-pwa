/* Словникові картки — логіка застосунку (без збірки, чистий JS) */

const ICONS = {
  'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  'plane': '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  'bed': '<path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5"/><path d="M3 18h18"/><path d="M3 13V7a2 2 0 0 1 2-2h4v6"/><line x1="3" y1="20" x2="3" y2="18"/><line x1="21" y1="20" x2="21" y2="18"/>',
  'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  'backpack': '<rect x="5" y="8" width="14" height="13" rx="3"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><rect x="9" y="12" width="6" height="4" rx="1"/>',
  'landmark': '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 21 8 3 8"/>',
  'briefcase': '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'tree-pine': '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-3"/>',
  'umbrella': '<path d="M12 2a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z"/><path d="M12 11v9a2 2 0 0 1-2 2"/><line x1="12" y1="2" x2="12" y2="4"/>',
  'coffee': '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
  'car': '<path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13"/><path d="M2 13h20v4a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H8a2 2 0 1 1-4 0H3a1 1 0 0 1-1-1Z"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'x': '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'arrow-left': '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  'refresh-cw': '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  'plus-circle': '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
  'cloud': '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'hash': '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  'palette': '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="14" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="14" r="1.2" fill="currentColor"/><circle cx="10" cy="15" r="1.2" fill="currentColor"/>',
  'paw': '<circle cx="7" cy="8" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="17" cy="8" r="2"/><path d="M12 12c-3 0-6 2-6 5a3 3 0 0 0 3 3c1 0 2-.5 3-.5s2 .5 3 .5a3 3 0 0 0 3-3c0-3-3-5-6-5z"/>',
  'utensils': '<path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 2c-2.5 0-5 2-5 6v6a2 2 0 0 0 2 2h1v6"/>',
  'user': '<circle cx="12" cy="8" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/>',
  'shirt': '<path d="M8 3 4 6l2 3v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2-3-4-3-2 2h-4z"/>',
  'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'sliders': '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  'smile': '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
};

function icon(name, size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
}

/* ---------------------------------------------------------------------- */
/* STATE                                                                   */
/* ---------------------------------------------------------------------- */

const PROGRESS_KEY = 'fc_progress_v1';
const LANG_KEY = 'fc_lang_v1';

const state = {
  view: 'home',
  activeCatId: null,
  lang: localStorage.getItem(LANG_KEY) || 'ua',
  progress: {},
  index: 0,
  flipped: false,
};

try {
  const raw = localStorage.getItem(PROGRESS_KEY);
  state.progress = raw ? JSON.parse(raw) : {};
} catch (e) {
  state.progress = {};
}

const flatCategories = CATEGORIES.map(cat => ({
  ...cat,
  words: cat.words.map((w, i) => ({ ...w, id: `${cat.id}:${i}` })),
}));

function saveProgress() {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress)); } catch (e) {}
}
function saveLang() {
  try { localStorage.setItem(LANG_KEY, state.lang); } catch (e) {}
}

function totalWords() { return flatCategories.reduce((s, c) => s + c.words.length, 0); }
function totalKnown() { return Object.values(state.progress).filter(v => v === 'known').length; }

/* ---------------------------------------------------------------------- */
/* RENDER                                                                  */
/* ---------------------------------------------------------------------- */

const root = document.getElementById('app');

function render() {
  root.innerHTML = state.view === 'home' ? renderHome() : renderCategory();
  bindEvents();
}

function langPill(idPrefix) {
  return `
    <div class="lang-pill" role="group" aria-label="Мова перекладу">
      <button class="pill-btn ${state.lang === 'ua' ? 'active' : ''}" data-action="set-lang" data-lang="ua">UA</button>
      <button class="pill-btn ${state.lang === 'ru' ? 'active' : ''}" data-action="set-lang" data-lang="ru">RU</button>
    </div>`;
}

function renderHome() {
  const known = totalKnown();
  const total = totalWords();
  const pct = total ? Math.round((known / total) * 100) : 0;

  const tiles = flatCategories.map(cat => {
    const k = cat.words.filter(w => state.progress[w.id] === 'known').length;
    return `
      <button class="tile" data-action="open-cat" data-cat="${cat.id}">
        <div class="tile-tab" style="background:${cat.accent}"></div>
        <div class="tile-body">
          <div class="tile-icon" style="background:${cat.accent}22; color:${cat.accent}">${icon(cat.icon, 18)}</div>
          <div class="tile-label">${cat.label}</div>
          <div class="tile-count">${k}/${cat.words.length} відомо</div>
        </div>
      </button>`;
  }).join('');

  return `
    <div class="wrap">
      <div class="home-header">
        <div>
          <div class="eyebrow">КАРТОТЕКА · ENGLISH</div>
          <h1 class="title">Словникові картки</h1>
          <div class="subtitle">Оберіть розділ і вчіть слова та фрази за темами</div>
        </div>
        ${langPill()}
      </div>

      <div class="progress-bar-row">
        <div class="mono muted">ВИВЧЕНО ${known}/${total}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="mono gold">${pct}%</div>
      </div>

      <div class="tile-grid">${tiles}</div>
    </div>`;
}

function renderCategory() {
  const cat = flatCategories.find(c => c.id === state.activeCatId);
  if (!cat) { state.view = 'home'; return renderHome(); }
  const word = cat.words[state.index];
  const known = cat.words.filter(w => state.progress[w.id] === 'known').length;
  const no = String(state.index + 1).padStart(3, '0');
  const total = String(cat.words.length).padStart(3, '0');

  return `
    <div class="wrap narrow">
      <div class="cat-top">
        <button class="back-btn" data-action="go-home">${icon('arrow-left', 15)} ДО РОЗДІЛІВ</button>
        ${langPill()}
      </div>

      <div class="cat-header">
        <span class="dot" style="background:${cat.accent}"></span>
        <h2 class="cat-title">${cat.label}</h2>
        <div class="mono muted">${known}/${cat.words.length}</div>
      </div>

      <div class="perspective">
        <div class="card-inner ${state.flipped ? 'flipped' : ''}" data-action="flip" tabindex="0" role="button" aria-label="Перевернути картку">
          <div class="face front">
            <div class="face-tab" style="background:${cat.accent}"></div>
            <div class="hole"></div>
            <div class="face-body">
              <div class="mono small muted-ink">ENGLISH</div>
              <div class="word-en">${word.en}</div>
            </div>
            <div class="face-footer">
              <span class="mono tiny hint">натисніть, щоб перевернути</span>
              <span class="mono tiny hint">№ ${no}/${total}</span>
            </div>
          </div>
          <div class="face back lines">
            <div class="face-tab" style="background:${cat.accent}"></div>
            <div class="face-body">
              <div class="mono small muted-ink">${state.lang === 'ua' ? 'УКРАЇНСЬКА' : 'РУССКИЙ'}</div>
              <div class="word-tr">${state.lang === 'ua' ? word.ua : word.ru}</div>
            </div>
            <div class="face-footer right">
              <span class="mono tiny hint">№ ${no}/${total}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="nav-row">
        <button class="nav-btn" data-action="step" data-delta="-1" aria-label="Попередня картка">${icon('chevron-left', 18)}</button>
        <div class="mono muted nav-count">${state.index + 1} / ${cat.words.length}</div>
        <button class="nav-btn" data-action="step" data-delta="1" aria-label="Наступна картка">${icon('chevron-right', 18)}</button>
      </div>

      <div class="answer-row">
        <button class="btn btn-learning" data-action="mark" data-status="learning">${icon('x', 16)} Ще вчу</button>
        <button class="btn btn-known" data-action="mark" data-status="known">${icon('check', 16)} Знаю</button>
      </div>

      <button class="reset-link" data-action="reset-cat">${icon('refresh-cw', 12)} скинути прогрес розділу</button>
    </div>`;
}

/* ---------------------------------------------------------------------- */
/* EVENTS                                                                  */
/* ---------------------------------------------------------------------- */

function bindEvents() {
  root.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', onAction);
  });
  const cardInner = root.querySelector('.card-inner');
  if (cardInner) {
    cardInner.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(); }
    });
  }
  document.onkeydown = (e) => {
    if (state.view !== 'category') return;
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };
}

function onAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;
  if (action === 'set-lang') {
    state.lang = el.dataset.lang;
    saveLang();
    render();
  } else if (action === 'open-cat') {
    openCategory(el.dataset.cat);
  } else if (action === 'go-home') {
    state.view = 'home';
    state.activeCatId = null;
    render();
  } else if (action === 'flip') {
    toggleFlip();
  } else if (action === 'step') {
    step(parseInt(el.dataset.delta, 10));
  } else if (action === 'mark') {
    mark(el.dataset.status);
  } else if (action === 'reset-cat') {
    resetCategory();
  }
}

function openCategory(catId) {
  const cat = flatCategories.find(c => c.id === catId);
  if (!cat) return;
  const firstUnknown = cat.words.findIndex(w => state.progress[w.id] !== 'known');
  state.activeCatId = catId;
  state.index = firstUnknown === -1 ? 0 : firstUnknown;
  state.flipped = false;
  state.view = 'category';
  render();
}

function toggleFlip() {
  state.flipped = !state.flipped;
  render();
}

function step(delta) {
  const cat = flatCategories.find(c => c.id === state.activeCatId);
  if (!cat) return;
  const n = cat.words.length;
  state.index = (state.index + delta + n) % n;
  state.flipped = false;
  render();
}

function mark(status) {
  const cat = flatCategories.find(c => c.id === state.activeCatId);
  if (!cat) return;
  const word = cat.words[state.index];
  state.progress[word.id] = status;
  saveProgress();
  const n = cat.words.length;
  state.index = (state.index + 1) % n;
  state.flipped = false;
  render();
}

function resetCategory() {
  const cat = flatCategories.find(c => c.id === state.activeCatId);
  if (!cat) return;
  cat.words.forEach(w => { delete state.progress[w.id]; });
  saveProgress();
  state.index = 0;
  state.flipped = false;
  render();
}

/* ---------------------------------------------------------------------- */
/* INIT                                                                    */
/* ---------------------------------------------------------------------- */

render();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
