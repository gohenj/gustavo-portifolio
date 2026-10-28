# Gustavo Mendonça — Portfólio

Marca: kanji 悟 (Satoru), com traços da fonte caligráfica Yuji Boku e detalhe roxo. O desenho é SVG convertido em curvas, sem carregar a fonte japonesa no navegador. Usado no cabeçalho, rodapé e favicon. Crédito da fonte: Yuji Boku, SIL Open Font License, incluída em `dist/assets/YujiBoku-OFL.txt`.

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
- `dist/app.js`: galeria, filtros, temas e detalhes dos projetos.
- `dist/assets/arena-pulse.png`: captura real da interface do Arena Pulse.

As artes do Nexus e de tarefas são composições ilustrativas, não capturas das aplicações. As tecnologias e descrições são baseadas nos repositórios públicos fornecidos. Não há formulário enviando mensagens: os contatos abrem GitHub e LinkedIn.

As animações respeitam `prefers-reduced-motion`. As fontes externas têm alternativas locais caso o Google Fonts esteja indisponível.

## Animações da referência

- Nome fixo na abertura, entrada suave e objeto 3D de tecnologias nas seções seguintes.
- Galeria de projetos em perspectiva, com seleção, setas, indicadores e rotação automática a cada 4,5 segundos. Pausa com foco, ponteiro sobre a galeria, aba oculta ou controle de pausa.
- Digitação dos títulos na primeira entrada da seção e revelação dos cards ao rolar.
- Temas claro/escuro com expansão circular nos navegadores com View Transitions; troca direta nos demais.
- Controle global de pausa no rodapé e respeito à preferência de movimento reduzido do sistema.

As animações adaptam a referência à identidade roxa. A abertura usa o vídeo de referência fornecido e tipografia, pois nenhuma foto pessoal foi fornecida.

## Vídeo de fundo

A expansão de domínio foi removida, incluindo Canvas, partículas e seus eventos. A abertura usa a nova referência limpa (35,47 segundos, 1020 × 576), com a trilha de vídeo H.264 copiada sem recompressão e apenas o áudio removido. O arquivo tem aproximadamente 4,57 MB. O nome aparece inteiro e fixo, com uma apresentação direta; o vídeo tem mais destaque no lado direito.

O vídeo só recebe sua URL quando puder reproduzir. Em telas de até 700 px, com economia de dados ou movimento reduzido, começa com uma imagem estática de aproximadamente 51 KB. Em celular, a reprodução pode ser solicitada pelo botão. Com movimento reduzido, a imagem permanece estática. A reprodução pausa ao sair da abertura, ocultar a aba, usar o controle do vídeo ou pausar as animações no rodapé. O vídeo fica restrito à abertura; as demais seções mantêm seu visual.

Edite `dist/hero-video.css` para o enquadramento e contraste, e `dist/hero-video.js` para as regras de reprodução. Os assets ficam em `dist/assets/jujutsu-source.mp4` e `dist/assets/jujutsu-source-poster.jpg`.

## Atualizar o Arena Pulse

Depois de `npm run build` na pasta do Arena Pulse, copie o conteúdo de `dist` para `dist/projects/arena` neste portfólio. Seu Vite precisa usar `base: './'` para funcionar nessa subpasta.



## Projetos atuais e cards de tecnologias

A seleção principal passou a ser Barber Pro, Niver do Jão e Arena Pulse. As capturas são das interfaces publicadas; o convite teve o endereço do evento excluído por recorte. O formulário de presença e o agendamento não foram enviados durante a inspeção. A stack do Niver foi conferida no package.json público (React, JavaScript, Tailwind e Vite). O repositório informado do Barber Pro retornou 404 no acesso público, por isso sua stack interna e código não são anunciados sem confirmação.

A seção de tecnologias tem 28 cards em quatro filtros: Frontend (10), Backend (7), Dados (5) e Ferramentas (6). As experiências anteriores continuam identificadas. Ícones locais do Devicon v2.16.0, com licença em dist/assets/tech/LICENSE.txt; os símbolos complementares são SVGs simples. O filtro é implementado em dist/tech-filter.js, com estilos em dist/projects-tech.css.

## Fichas técnicas dos projetos

Os textos e as stacks ficam em `dist/project-data.js`, separados da apresentação. `dist/project-details.js` monta a janela e suas três abas (Visão geral, Tecnologias, Como funciona); `dist/project-details.css` define o layout responsivo. As abas aceitam setas, Home e End, a janela fecha com Escape e devolve o foco ao botão de origem.

A stack do Barber Pro foi confirmada no código local fornecido: Python, Flask, frontend HTML/CSS/JavaScript e SQLite com Flask-SQLAlchemy. Integrações opcionais e recursos dependentes de configuração são identificados como tais. A ficha do convite foi conferida no código público; não foram enviados formulários ou notificações durante a revisão.
