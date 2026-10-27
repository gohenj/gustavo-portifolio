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

## Animações da referência

- Nome em movimento contínuo, entrada da abertura e objeto 3D de tecnologias.
- Galeria de projetos em perspectiva, com seleção, setas, indicadores e rotação automática a cada 4,5 segundos. Pausa com foco, ponteiro sobre a galeria, aba oculta ou controle de pausa.
- Digitação dos títulos na primeira entrada da seção e revelação dos cards ao rolar.
- Temas claro/escuro com expansão circular nos navegadores com View Transitions; troca direta nos demais.
- Onda de energia ao expandir o domínio.
- Controle global de pausa no rodapé e respeito à preferência de movimento reduzido do sistema.

As animações adaptam a referência à identidade roxa. A abertura usa energia e tipografia, pois nenhuma foto pessoal foi fornecida.

## Expansão de domínio

O botão abre uma vinheta de 2,2 segundos e transforma o fundo de toda a página num ambiente cósmico roxo, com eclipse, nebulosas, plano em perspectiva e partículas com profundidade. A página continua navegável. Use o botão fixo “Sair do domínio”, Escape ou o botão original para sair. O tema anterior é preservado.

As partículas são desenhadas em Canvas, limitadas a 85 em telas pequenas e 150 nas maiores, em aproximadamente 30 quadros por segundo. A renderização para ao sair, ocultar a aba ou pausar o movimento. A preferência de movimento reduzido elimina a vinheta e mantém o ambiente estático. “Pausar partículas” controla também o movimento decorativo do ambiente; a pausa global continua disponível no rodapé.

## Atualizar o Arena Pulse

Depois de `npm run build` na pasta do Arena Pulse, copie o conteúdo de `dist` para `dist/projects/arena` neste portfólio. Seu Vite precisa usar `base: './'` para funcionar nessa subpasta.
