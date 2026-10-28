// Accessible project sheets, backed by the editable data in project-data.js.
const projectSheets = window.portfolioProjectDetails;
const detailBody = document.querySelector('#dialog-body');
let detailOpener;
function detailText(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}
function detailLink(link) {
  return `<a href="${detailText(link.href)}" target="_blank" rel="noopener noreferrer">${detailText(link.label)} <span aria-hidden="true">↗</span></a>`;
}
function setDetailTab(name, focus = false) {
  dialog.querySelectorAll('[data-detail-tab]').forEach(tab => {
    const selected = tab.dataset.detailTab === name;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  dialog.querySelectorAll('[data-detail-panel]').forEach(panel => {
    panel.hidden = panel.dataset.detailPanel !== name;
  });
}
function openProjectSheet(key, opener) {
  const project = projectSheets[key];
  if (!project) return;
  detailOpener = opener;
  document.querySelector('#dialog-title').textContent = project.title;
  const tabs = [['overview', 'Visão geral'], ['stack', 'Tecnologias'], ['architecture', 'Como funciona']];
  detailBody.innerHTML = `
    <div class="detail-intro"><p class="detail-kicker">${detailText(project.category)} <span>${detailText(project.status)}</span></p><p class="detail-summary">${detailText(project.summary)}</p><div class="detail-links">${project.links.map(detailLink).join('')}</div></div>
    <div class="detail-tabs" role="tablist" aria-label="Detalhes do ${detailText(project.title)}">${tabs.map(([id, label], index) => `<button type="button" role="tab" id="detail-tab-${id}" data-detail-tab="${id}" aria-controls="detail-panel-${id}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">${label}</button>`).join('')}</div>
    <section class="detail-panel" role="tabpanel" id="detail-panel-overview" aria-labelledby="detail-tab-overview" data-detail-panel="overview" tabindex="0">
      <div class="detail-overview"><div><h3>O objetivo</h3><p>${detailText(project.objective)}</p></div><img class="detail-cover ${key === 'birthday' ? 'detail-cover-invite' : ''}" src="${detailText(project.image)}" alt="${detailText(project.imageAlt)}" /></div>
      <h3>O que o projeto faz</h3><ul class="detail-features">${project.features.map(feature => `<li>${detailText(feature)}</li>`).join('')}</ul>
      <div class="detail-concepts"><h3>Conceitos explorados</h3><div>${project.concepts.map(concept => `<span>${detailText(concept)}</span>`).join('')}</div></div>
    </section>
    <section class="detail-panel" role="tabpanel" id="detail-panel-stack" aria-labelledby="detail-tab-stack" data-detail-panel="stack" tabindex="0" hidden>
      <p class="detail-section-lead">As tecnologias e o papel de cada uma no projeto.</p><div class="detail-stack">${project.stack.map(group => `<section class="detail-stack-group"><h3>${detailText(group.group)}</h3><dl>${group.items.map(([name, purpose]) => `<div><dt>${detailText(name)}</dt><dd>${detailText(purpose)}</dd></div>`).join('')}</dl></section>`).join('')}</div>
    </section>
    <section class="detail-panel" role="tabpanel" id="detail-panel-architecture" aria-labelledby="detail-tab-architecture" data-detail-panel="architecture" tabindex="0" hidden>
      <h3>Do clique ao resultado</h3><ol class="detail-flow">${project.flow.map(([title, description], index) => `<li><span class="detail-step">0${index + 1}</span><div><h4>${detailText(title)}</h4><p>${detailText(description)}</p></div></li>`).join('')}</ol>
      <h3>Escolhas na implementação</h3><div class="detail-decisions">${project.decisions.map(([title, description]) => `<div><h4>${detailText(title)}</h4><p>${detailText(description)}</p></div>`).join('')}</div>
      <div class="detail-next"><h3>Próximos passos</h3><p>${detailText(project.next)}</p></div>
    </section><p class="detail-note">${detailText(project.note)}</p>`;
  detailBody.querySelectorAll('[data-detail-tab]').forEach(tab => tab.addEventListener('click', () => setDetailTab(tab.dataset.detailTab)));
  detailBody.querySelector('[role="tablist"]').addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const buttons = [...detailBody.querySelectorAll('[data-detail-tab]')];
    let index = buttons.indexOf(document.activeElement);
    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = buttons.length - 1;
    else index = (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
    setDetailTab(buttons[index].dataset.detailTab, true);
  });
  detailBody.scrollTop = 0;
  dialog.showModal();
  document.querySelector('#close-dialog').focus();
}
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => openProjectSheet(button.dataset.detail, button)));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => detailOpener?.focus({ preventScroll: true }));
