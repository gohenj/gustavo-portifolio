# Gustavo Mendonça — Portfólio

Portfólio pessoal com visual escuro e energia roxa inspirada em Jujutsu Kaisen. HTML, CSS e JavaScript, sem instalação de dependências ou build.

## Abrir localmente

Com Node.js instalado, na pasta deste projeto:

```sh
node server.mjs
```

Acesse `http://127.0.0.1:5174`. Encerre com Ctrl+C. O Arena Pulse continua sendo um projeto separado; uma cópia de sua versão compilada está incluída em `dist/projects/arena` para a demonstração funcionar também na hospedagem.

## Editar

- `dist/index.html`: textos, tecnologias, links e projetos.
- `dist/styles.css`: identidade visual, responsividade e animações.
- `dist/app.js`: expansão de domínio, filtros e detalhes dos projetos.
- `dist/assets/arena-pulse.png`: captura real da interface do Arena Pulse.

As artes do Nexus e de tarefas são composições ilustrativas, não capturas das aplicações. As tecnologias e descrições são baseadas nos repositórios públicos fornecidos. Não há formulário enviando mensagens: os contatos abrem GitHub e LinkedIn.

O botão de domínio intensifica a composição de energia. As animações respeitam `prefers-reduced-motion`. As fontes externas têm alternativas locais caso o Google Fonts esteja indisponível.

## Atualizar o Arena Pulse

Depois de `npm run build` na pasta do Arena Pulse, copie o conteúdo de `dist` para `dist/projects/arena` neste portfólio. Seu Vite precisa usar `base: './'` para funcionar nessa subpasta.
