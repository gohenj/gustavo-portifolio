// Full-page domain: decorative space stays behind usable portfolio content.
const domainSpace = document.createElement('div');
domainSpace.className = 'domain-space';
domainSpace.setAttribute('aria-hidden', 'true');
domainSpace.hidden = true;
domainSpace.innerHTML = '<div class="domain-nebula nebula-a"></div><div class="domain-nebula nebula-b"></div><div class="domain-eclipse"></div><canvas class="domain-stars"></canvas><div class="domain-horizon"></div><div class="domain-vignette"></div>';
document.body.prepend(domainSpace);

const domainEntry = document.createElement('div');
domainEntry.className = 'domain-entry';
domainEntry.setAttribute('aria-hidden', 'true');
domainEntry.hidden = true;
domainEntry.innerHTML = '<div class="entry-ring"></div><div class="entry-copy"><span>領域展開</span><p>EXPANSÃO DE DOMÍNIO</p><strong>VAZIO<br /><em>INFINITO.</em></strong><small>ALÉM DOS LIMITES DO COMUM.</small></div>';
document.body.append(domainEntry);

const domainControls = document.createElement('div');
domainControls.className = 'domain-controls';
domainControls.hidden = true;
domainControls.innerHTML = '<div class="domain-indicator"><span></span><div>VAZIO INFINITO<small>DOMÍNIO ATIVO</small></div></div><button class="domain-motion" type="button">Pausar partículas Ⅱ</button><button class="domain-exit" type="button">Sair do domínio <span>×</span></button>';
document.body.append(domainControls);
const exitDomain = domainControls.querySelector('.domain-exit');
const pauseDomain = domainControls.querySelector('.domain-motion');
const starCanvas = domainSpace.querySelector('canvas');
const starContext = starCanvas.getContext('2d', { alpha: true });
let domainOpen = false;
let domainParticlesPaused = false;
let domainFrame = 0;
let domainIntroTimer;
let domainLastFrame = 0;
let domainWidth = 0;
let domainHeight = 0;
let domainParticles = [];
let domainPointerX = 0;
let domainPointerY = 0;
let domainPointerFrame = 0;

function domainHasMotion() {
  return motionEnabled && !reducedMotion.matches && !domainParticlesPaused;
}

function makeDomainParticle(initial = false) {
  const angle = Math.random() * Math.PI * 2;
  const distance = 35 + Math.random() * 650;
  return { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance, z: initial ? 60 + Math.random() * 1100 : 1160, size: .5 + Math.random() * 1.5, blue: Math.random() > .8 };
}

function resizeDomain() {
  if (!domainOpen || !starContext) return;
  domainWidth = window.innerWidth;
  domainHeight = window.innerHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  starCanvas.width = Math.round(domainWidth * ratio);
  starCanvas.height = Math.round(domainHeight * ratio);
  starCanvas.style.width = `${domainWidth}px`;
  starCanvas.style.height = `${domainHeight}px`;
  starContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  domainParticles = Array.from({ length: domainWidth < 700 ? 85 : 150 }, () => makeDomainParticle(true));
  drawDomain(0);
}

function drawDomain(delta) {
  if (!starContext) return;
  starContext.clearRect(0, 0, domainWidth, domainHeight);
  const centerX = domainWidth * .7 + domainPointerX * 15;
  const centerY = domainHeight * .42 + domainPointerY * 12;
  const projection = Math.min(domainWidth, domainHeight) * .8;
  for (let i = 0; i < domainParticles.length; i++) {
    let particle = domainParticles[i];
    particle.z -= delta * .045;
    if (particle.z < 25) particle = domainParticles[i] = makeDomainParticle();
    const depth = projection / particle.z;
    const x = centerX + particle.x * depth;
    const y = centerY + particle.y * depth;
    if (x < -30 || x > domainWidth + 30 || y < -30 || y > domainHeight + 30) continue;
    const radius = Math.max(.4, Math.min(2.6, particle.size * depth));
    const opacity = Math.min(.8, .18 + depth * .22);
    starContext.fillStyle = particle.blue ? `rgba(140,192,255,${opacity})` : `rgba(212,175,255,${opacity})`;
    starContext.beginPath();
    starContext.arc(x, y, radius, 0, Math.PI * 2);
    starContext.fill();
    if (depth > 1.6) {
      starContext.strokeStyle = `rgba(184,130,255,${opacity * .25})`;
      starContext.lineWidth = .6;
      starContext.beginPath();
      starContext.moveTo(x, y);
      starContext.lineTo(x + (x - centerX) * .018, y + (y - centerY) * .018);
      starContext.stroke();
    }
  }
}

function animateDomain(time) {
  domainFrame = 0;
  if (!domainOpen || !domainHasMotion() || document.hidden) return;
  const delta = domainLastFrame ? Math.min(time - domainLastFrame, 65) : 0;
  if (!domainLastFrame || delta >= 32) { drawDomain(delta); domainLastFrame = time; }
  domainFrame = requestAnimationFrame(animateDomain);
}

function updateDomainMotion() {
  cancelAnimationFrame(domainFrame);
  domainFrame = 0;
  domainLastFrame = 0;
  const moving = domainHasMotion();
  domainSpace.classList.toggle('domain-still', !moving);
  pauseDomain.textContent = moving ? 'Pausar partículas Ⅱ' : 'Ativar partículas ▷';
  pauseDomain.setAttribute('aria-pressed', String(!moving));
  if (domainOpen && moving && !document.hidden) domainFrame = requestAnimationFrame(animateDomain);
  if (!moving) {
    domainSpace.style.setProperty('--domain-x', '0');
    domainSpace.style.setProperty('--domain-y', '0');
    if (domainOpen) drawDomain(0);
    clearTimeout(domainIntroTimer);
    domainEntry.hidden = true;
  }
}

function setDomain(open) {
  if (domainOpen === open) return;
  domainOpen = open;
  document.body.classList.toggle('domain-active', open);
  domainSpace.hidden = !open;
  domainControls.hidden = !open;
  toggle.setAttribute('aria-pressed', String(open));
  toggle.innerHTML = `<span class="domain-symbol">✧</span> ${open ? 'Recolher domínio' : 'Expandir domínio'}`;
  document.querySelector('#domain-status').textContent = open ? 'Domínio expandido. Ambiente imersivo roxo ativo. Use Sair do domínio ou Escape para voltar.' : 'Domínio encerrado. Visual anterior restaurado.';
  clearTimeout(domainIntroTimer);
  domainEntry.hidden = true;
  if (open) {
    domainParticlesPaused = false;
    resizeDomain();
    updateDomainMotion();
    if (domainHasMotion()) {
      domainEntry.hidden = false;
      domainIntroTimer = setTimeout(() => { domainEntry.hidden = true; }, 2200);
    }
    exitDomain.focus({ preventScroll: true });
  } else {
    cancelAnimationFrame(domainFrame);
    cancelAnimationFrame(domainPointerFrame);
    domainFrame = 0;
    domainPointerFrame = 0;
    domainLastFrame = 0;
    domainPointerX = domainPointerY = 0;
    domainSpace.style.setProperty('--domain-x', '0');
    domainSpace.style.setProperty('--domain-y', '0');
    toggle.focus({ preventScroll: true });
  }
}

toggle.addEventListener('click', () => setDomain(!domainOpen));
exitDomain.addEventListener('click', () => setDomain(false));
pauseDomain.addEventListener('click', () => {
  if (!motionEnabled || reducedMotion.matches) {
    document.querySelector('#domain-status').textContent = 'Movimento reduzido ativo. O ambiente permanece estático. Você pode controlar as animações no rodapé ou nas preferências do sistema.';
    return;
  }
  domainParticlesPaused = !domainParticlesPaused;
  updateDomainMotion();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && domainOpen && !dialog.open) { event.preventDefault(); setDomain(false); }
});
window.addEventListener('resize', resizeDomain);
window.addEventListener('pointermove', event => {
  if (!domainOpen || !domainHasMotion() || event.pointerType !== 'mouse') return;
  domainPointerX = (event.clientX / innerWidth - .5) * 2;
  domainPointerY = (event.clientY / innerHeight - .5) * 2;
  if (!domainPointerFrame) domainPointerFrame = requestAnimationFrame(() => {
    domainPointerFrame = 0;
    if (!domainOpen) return;
    domainSpace.style.setProperty('--domain-x', String(domainPointerX));
    domainSpace.style.setProperty('--domain-y', String(domainPointerY));
  });
}, { passive: true });
document.addEventListener('visibilitychange', updateDomainMotion);
motionButton.addEventListener('click', updateDomainMotion);
reducedMotion.addEventListener('change', updateDomainMotion);
