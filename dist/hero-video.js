// The background video is fetched only when it is eligible to play.
const heroFilm = document.querySelector('.hero-film-video');
const filmToggle = document.querySelector('#film-toggle');
const filmStatus = document.querySelector('#film-status');
const mobileFilm = window.matchMedia('(max-width: 700px)');
let heroInView = true;
let filmUserPaused = false;
let filmManualPlay = false;
let filmPlayAttempt = 0;
let filmFailed = false;

function filmCanPlay() {
  if (filmFailed || !motionEnabled || reducedMotion.matches || filmUserPaused || document.hidden || !heroInView) return false;
  return filmManualPlay || (!mobileFilm.matches && !navigator.connection?.saveData);
}

function updateFilmButton() {
  const playing = !heroFilm.paused && !heroFilm.ended;
  filmToggle.textContent = playing ? 'Pausar vídeo Ⅱ' : 'Reproduzir fundo ▷';
  filmToggle.setAttribute('aria-label', playing ? 'Pausar vídeo de fundo' : 'Reproduzir vídeo de fundo');
  filmToggle.setAttribute('aria-pressed', String(playing));
}

async function syncHeroFilm() {
  const attempt = ++filmPlayAttempt;
  if (!filmCanPlay()) { heroFilm.pause(); updateFilmButton(); return; }
  if (!heroFilm.getAttribute('src')) {
    heroFilm.src = heroFilm.dataset.videoSrc;
    heroFilm.muted = true;
  }
  try {
    await heroFilm.play();
    if (attempt !== filmPlayAttempt || !filmCanPlay()) {
      if (!filmCanPlay()) heroFilm.pause();
      return;
    }
    heroFilm.classList.add('is-playing');
  } catch {
    // Autoplay can be denied by the browser; the poster remains visible.
  }
  updateFilmButton();
}

filmToggle.addEventListener('click', () => {
  if (!motionEnabled || reducedMotion.matches) {
    filmStatus.textContent = 'O fundo estático respeita sua preferência de movimento reduzido. As animações podem ser controladas no rodapé ou nas preferências do sistema.';
    return;
  }
  if (!heroFilm.paused) { filmUserPaused = true; filmManualPlay = false; }
  else { filmUserPaused = false; filmManualPlay = true; }
  syncHeroFilm();
});
heroFilm.addEventListener('playing', () => { heroFilm.classList.add('is-playing'); updateFilmButton(); });
heroFilm.addEventListener('pause', updateFilmButton);
heroFilm.addEventListener('error', () => {
  filmFailed = true;
  heroFilm.classList.remove('is-playing');
  filmToggle.hidden = true;
  filmStatus.textContent = 'Vídeo indisponível. Exibindo imagem de fundo.';
});
if ('IntersectionObserver' in window) {
  const filmObserver = new IntersectionObserver(([entry]) => {
    heroInView = entry.isIntersecting;
    syncHeroFilm();
  }, { threshold: .03 });
  filmObserver.observe(document.querySelector('.hero'));
}
document.addEventListener('visibilitychange', syncHeroFilm);
motionButton.addEventListener('click', syncHeroFilm);
reducedMotion.addEventListener('change', syncHeroFilm);
mobileFilm.addEventListener('change', syncHeroFilm);
syncHeroFilm();
