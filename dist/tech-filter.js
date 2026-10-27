const stackFilters = [...document.querySelectorAll('[data-tech-filter]')];
const stackCards = [...document.querySelectorAll('[data-tech-area]')];
stackFilters.forEach(button => button.addEventListener('click', () => {
  stackFilters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  stackCards.forEach(card => {
    card.hidden = card.dataset.techArea !== button.dataset.techFilter;
    if (card.hidden) return;
    const position = count++;
    if (motionEnabled && !reducedMotion.matches) card.animate([
      { opacity: 0, transform: 'translateY(12px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 300, delay: Math.min(position * 25, 150), fill: 'backwards', easing: 'ease-out' });
  });
  const area = { frontend: 'Frontend', backend: 'Backend', data: 'Dados', tools: 'Ferramentas' }[button.dataset.techFilter];
  document.querySelector('#tech-status').textContent = `${count} tecnologias de ${area}.`;
}));

// Examples remain reachable even if the project list was filtered earlier.
document.querySelectorAll('.stack-evidence a[href^="#projeto-"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target?.hidden) document.querySelector('[data-filter="all"]').click();
  });
});
