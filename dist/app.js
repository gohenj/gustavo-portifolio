const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) count++;
  });
  document.querySelector('.project-pair').hidden = [...document.querySelector('.project-pair').children].every(project => project.hidden);
  document.querySelector('#project-status').textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
}));

// As fichas são renderizadas por project-details.js a partir de project-data.js.
const dialog = document.querySelector('#project-dialog');
document.querySelector('#year').textContent = new Date().getFullYear();

// Motion preferences apply to autoplay, decorative loops and entrance effects.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled = !reducedMotion.matches;
const motionButton = document.createElement('button');
motionButton.className = 'motion-preference';
document.querySelector('.footer').append(motionButton);
function updateMotionPreference() {
  document.body.classList.toggle('motion-paused', !motionEnabled);
  motionButton.textContent = motionEnabled ? 'Pausar animações Ⅱ' : 'Ativar animações ▷';
  motionButton.setAttribute('aria-pressed', String(!motionEnabled));
}
motionButton.addEventListener('click', () => {
  motionEnabled = !motionEnabled;
  updateMotionPreference();
  updateGalleryTimer();
});
reducedMotion.addEventListener('change', () => {
  motionEnabled = !reducedMotion.matches;
  updateMotionPreference();
  updateGalleryTimer();
});
updateMotionPreference();

// Keep the complete heading available to screen readers while its visual copy types.
document.querySelectorAll('.section h2').forEach(heading => {
  const accessibleText = document.createElement('span');
  accessibleText.className = 'sr-only';
  accessibleText.textContent = heading.innerText.replace(/\n/g, ' ');
  const visual = document.createElement('span');
  visual.className = 'typed-heading';
  visual.setAttribute('aria-hidden', 'true');
  while (heading.firstChild) visual.append(heading.firstChild);
  let delay = 0;
  const textNodes = [];
  const walker = document.createTreeWalker(visual, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    if (walker.currentNode.textContent.trim() && !walker.currentNode.parentElement.closest('.contact-star')) textNodes.push(walker.currentNode);
  }
  textNodes.forEach(node => {
    const span = document.createElement('span');
    span.className = 'typed-fragment';
    span.textContent = node.textContent;
    span.style.setProperty('--type-delay', `${delay}s`);
    span.style.setProperty('--type-steps', Math.max(2, node.textContent.trim().length));
    const duration = Math.min(.75, Math.max(.25, node.textContent.length * .035));
    span.style.setProperty('--type-duration', `${duration}s`);
    delay += duration;
    node.replaceWith(span);
  });
  heading.append(accessibleText, visual);
  heading.classList.add('motion-heading');
});

const revealElements = document.querySelectorAll('.motion-heading, .project, .about-copy, .tech-group, .contact-copy');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -20px 0px' });
  revealElements.forEach((element, index) => {
    element.classList.add('reveal-ready');
    element.style.setProperty('--reveal-delay', `${(index % 3) * .08}s`);
    observer.observe(element);
  });
}

// Perspective gallery: autoplay pauses for focus, pointer hover and background tabs.
const gallery = document.querySelector('.work-gallery');
const slides = [...document.querySelectorAll('[data-slide]')];
const dots = [...document.querySelectorAll('[data-gallery-dot]')];
const galleryProjects = [
  { title: 'Barber Pro', summary: 'Agendamento para barbearia, escolha de serviços e vitrine de produtos.', href: 'https://barber-pro-teste.onrender.com' },
  { title: 'Niver do Jão', summary: 'Convite digital com formulário de presença, React e identidade de futebol brasileiro.', href: 'https://niver-do-jao.vercel.app' },
  { title: 'Arena Pulse', summary: 'Dashboard de esports com React, TypeScript e Tailwind CSS.', href: 'projects/arena/' }
];
let activeSlide = 0;
let galleryAutoplay = true;
let galleryTimer;
let galleryHovered = false;
let galleryFocused = false;
const autoplayButton = document.querySelector('#gallery-autoplay');
function selectSlide(index, announce = false) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    const offset = (slideIndex - activeSlide + slides.length) % slides.length;
    slide.dataset.position = offset === 0 ? 'center' : offset === 1 ? 'right' : 'left';
    slide.setAttribute('aria-pressed', String(slideIndex === activeSlide));
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === activeSlide);
    dot.setAttribute('aria-pressed', String(index === activeSlide));
  });
  const project = galleryProjects[activeSlide];
  document.querySelector('#gallery-title').textContent = project.title;
  document.querySelector('#gallery-summary').textContent = project.summary;
  document.querySelector('#gallery-index').textContent = `0${activeSlide + 1} / 03`;
  document.querySelector('#gallery-link').href = project.href;
  if (announce) document.querySelector('#gallery-status').textContent = `${project.title}. Projeto ${activeSlide + 1} de 3.`;
  if (motionEnabled) document.querySelector('.gallery-description').animate([{ opacity: .2, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 400, easing: 'ease-out' });
}
function updateGalleryTimer() {
  clearInterval(galleryTimer);
  const canPlay = galleryAutoplay && motionEnabled;
  autoplayButton.textContent = canPlay ? 'Pausar rotação Ⅱ' : 'Ativar rotação ▷';
  autoplayButton.setAttribute('aria-pressed', String(canPlay));
  if (canPlay && !galleryHovered && !galleryFocused && !document.hidden) galleryTimer = setInterval(() => selectSlide(activeSlide + 1), 4500);
}
function selectManually(index) { selectSlide(index, true); updateGalleryTimer(); }
slides.forEach((slide, index) => slide.addEventListener('click', () => selectManually(index)));
dots.forEach((dot, index) => dot.addEventListener('click', () => selectManually(index)));
document.querySelector('#gallery-prev').addEventListener('click', () => selectManually(activeSlide - 1));
document.querySelector('#gallery-next').addEventListener('click', () => selectManually(activeSlide + 1));
autoplayButton.addEventListener('click', () => {
  if (!motionEnabled) { motionEnabled = true; galleryAutoplay = true; updateMotionPreference(); }
  else galleryAutoplay = !galleryAutoplay;
  updateGalleryTimer();
});
gallery.addEventListener('pointerenter', () => { galleryHovered = true; updateGalleryTimer(); });
gallery.addEventListener('pointerleave', () => { galleryHovered = false; updateGalleryTimer(); });
gallery.addEventListener('focusin', () => { galleryFocused = true; updateGalleryTimer(); });
gallery.addEventListener('focusout', event => { galleryFocused = gallery.contains(event.relatedTarget); updateGalleryTimer(); });
document.addEventListener('visibilitychange', updateGalleryTimer);
selectSlide(0);
updateGalleryTimer();

// Circular light/dark reveal, matching the reference's expanding theme wipe.
const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', async () => {
  const rect = themeToggle.getBoundingClientRect();
  const x = rect.x + rect.width / 2;
  const y = rect.y + rect.height / 2;
  const changeTheme = () => {
    const light = document.body.classList.toggle('light-theme');
    themeToggle.setAttribute('aria-pressed', String(light));
    themeToggle.setAttribute('aria-label', light ? 'Ativar tema escuro' : 'Ativar tema claro');
    themeToggle.textContent = light ? '☾' : '☼';
  };
  if (!document.startViewTransition || !motionEnabled) { changeTheme(); return; }
  const transition = document.startViewTransition(changeTheme);
  try {
    await transition.ready;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] }, { duration: 800, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' });
  } catch { /* Theme still changes if a browser cannot animate the transition. */ }
});

// A slowly rotating skills object mirrors the dimensional detail in the reference.
const skillObject = document.createElement('div');
skillObject.className = 'skill-object';
skillObject.setAttribute('aria-hidden', 'true');
skillObject.innerHTML = '<div class="skill-cube"><span>REACT</span><span>TYPESCRIPT</span><span>CRIAR</span><span>EVOLUIR</span><span>✧</span><span>GUSTAVO</span></div>';
document.querySelector('.about-title').append(skillObject);


