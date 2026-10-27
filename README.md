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
- `dist/app.js`: galeria, filtros, temas e detalhes dos projetos.
- `dist/assets/arena-pulse.png`: captura real da interface do Arena Pulse.

As artes do Nexus e de tarefas são composições ilustrativas, não capturas das aplicações. As tecnologias e descrições são baseadas nos repositórios públicos fornecidos. Não há formulário enviando mensagens: os contatos abrem GitHub e LinkedIn.

As animações respeitam `prefers-reduced-motion`. As fontes externas têm alternativas locais caso o Google Fonts esteja indisponível.

## Animações da referência

- Nome em movimento contínuo, entrada da abertura e objeto 3D de tecnologias.
- Galeria de projetos em perspectiva, com seleção, setas, indicadores e rotação automática a cada 4,5 segundos. Pausa com foco, ponteiro sobre a galeria, aba oculta ou controle de pausa.
- Digitação dos títulos na primeira entrada da seção e revelação dos cards ao rolar.
- Temas claro/escuro com expansão circular nos navegadores com View Transitions; troca direta nos demais.
- Controle global de pausa no rodapé e respeito à preferência de movimento reduzido do sistema.

As animações adaptam a referência à identidade roxa. A abertura usa o vídeo de referência fornecido e tipografia, pois nenhuma foto pessoal foi fornecida.

## Vídeo de fundo

A expansão de domínio foi removida, incluindo Canvas, partículas e seus eventos. A abertura agora usa um trecho de 5,8 segundos do vídeo enviado, comprimido em H.264, sem áudio e em loop (aproximadamente 546 KiB). A rolagem do nome aparece à frente do vídeo e uma camada escura protege a legibilidade dos textos.

O vídeo só recebe sua URL quando puder reproduzir. Em telas de até 700 px, com economia de dados ou movimento reduzido, começa com uma imagem estática de aproximadamente 22 KB. Em celular, a reprodução pode ser solicitada pelo botão. Com movimento reduzido, a imagem permanece estática. A reprodução pausa ao sair da abertura, ocultar a aba, usar o controle do vídeo ou pausar as animações no rodapé. O vídeo fica restrito à abertura; as demais seções mantêm seu visual.

Edite `dist/hero-video.css` para o enquadramento e contraste, e `dist/hero-video.js` para as regras de reprodução. Os assets ficam em `dist/assets/jujutsu-hero.mp4` e `dist/assets/jujutsu-poster.jpg`.

## Atualizar o Arena Pulse

Depois de `npm run build` na pasta do Arena Pulse, copie o conteúdo de `dist` para `dist/projects/arena` neste portfólio. Seu Vite precisa usar `base: './'` para funcionar nessa subpasta.
