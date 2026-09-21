const STATE_KEY = 'arg_your_found_state_v2_1';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STATE_KEY)) || {}; }
  catch { return {}; }
}
function saveState(patch) {
  const next = { ...loadState(), ...patch };
  localStorage.setItem(STATE_KEY, JSON.stringify(next));
  return next;
}
function localTimestamp() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function resetGame() {
  localStorage.removeItem(STATE_KEY);
  location.href = 'index.html';
}

// Progress gates keep accidental direct links from bypassing the reveal.
const currentPage = location.pathname.split('/').pop();
const progress = loadState();
const postReveal = ['reveal.html', 'diary.html', 'choice.html'];
if (currentPage === 'photo.html' && !progress.identityRestored) location.replace('recover.html');
if (postReveal.includes(currentPage) && !progress.visualRestored) location.replace(progress.identityRestored ? 'photo.html' : 'recover.html');
if (['choice.html','photo.html','recover.html','reveal.html','diary.html'].includes(currentPage) && progress.ending) location.replace(progress.ending === 'restore' ? 'ending-restore.html' : 'ending-delete.html');
if (currentPage?.startsWith('ending-') && !progress.ending) location.replace('choice.html');
