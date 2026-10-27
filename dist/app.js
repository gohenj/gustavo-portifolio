const toggle = document.querySelector('#domain-toggle');
toggle.addEventListener('click', () => {
  const expanded = document.body.classList.toggle('domain-active');
  toggle.setAttribute('aria-pressed', String(expanded));
  toggle.innerHTML = `<span class="domain-symbol">✧</span> ${expanded ? 'Recolher domínio' : 'Expandir domínio'}`;
  document.querySelector('#domain-status').textContent = expanded ? 'Domínio expandido. Energia roxa intensificada.' : 'Domínio recolhido. Visual original restaurado.';
});

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
  document.querySelector('.project-pair').hidden = count === 1 && button.dataset.filter === 'frontend';
  document.querySelector('#project-status').textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
}));

const details = {
  arena: {
    title: 'Arena Pulse',
    html: '<p>Primeiro sprint de um dashboard de esports, construído com React, TypeScript, Vite e Tailwind CSS.</p><ul><li>Componentes reutilizáveis para navegação, estatísticas e partidas.</li><li>Busca e filtro por jogo, com estado vazio.</li><li>Favoritos persistidos no localStorage.</li><li>Layout responsivo e navegação por teclado.</li></ul><p>As partidas e os horários são demonstrativos. A integração com API e as atualizações em tempo real são próximos passos.</p>'
  },
  tasks: {
    title: 'Uma API, três camadas',
    html: '<p>O projeto de tarefas conecta uma API central a dois tipos de cliente.</p><ul><li>Backend: Java, Spring Boot e Spring Data JPA.</li><li>Web: Angular, TypeScript, HTML e CSS.</li><li>Desktop: JavaFX.</li><li>Banco de dados: H2 em memória para desenvolvimento.</li></ul><p>A API expõe operações para criar, listar, atualizar e remover tarefas.</p>'
  }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  const detail = details[button.dataset.detail];
  document.querySelector('#dialog-title').textContent = detail.title;
  document.querySelector('#dialog-body').innerHTML = detail.html;
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
