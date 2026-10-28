// Dados das fichas técnicas. Edite os textos e as tecnologias aqui.
window.portfolioProjectDetails = {
  "barber": {
    "title": "Barber Pro",
    "category": "Aplicação full stack · Barbearia",
    "status": "Aplicação publicada",
    "summary": "Agendamento e gestão para barbearias: do horário do cliente à organização da agenda, serviços e produtos pela equipe.",
    "image": "assets/barber-pro.jpg",
    "imageAlt": "Interface real do Barber Pro",
    "links": [
      {
        "label": "Abrir aplicação",
        "href": "https://barber-pro-teste.onrender.com"
      }
    ],
    "objective": "Reunir a experiência do cliente e a operação da barbearia em uma aplicação: consultar serviços, reservar horários e organizar os atendimentos e o catálogo.",
    "features": [
      "Escolha de serviço, profissional e data, com cálculo de disponibilidade.",
      "Cadastro, login, consulta e cancelamento dos agendamentos do cliente.",
      "Acesso da equipe por perfil: administrador e barbeiro.",
      "Gestão de serviços, profissionais, catálogo de cortes e produtos.",
      "Relatórios financeiros e acompanhamento dos atendimentos.",
      "Confirmações e lembretes por Web Push, quando habilitados e autorizados.",
      "Recuperação de senha de clientes por e-mail confirmado, com SMTP configurado."
    ],
    "stack": [
      {
        "group": "Linguagens e interface",
        "items": [
          [
            "Python",
            "Lógica do servidor, regras de agendamento e API."
          ],
          [
            "HTML e CSS",
            "Estrutura das páginas, identidade visual e responsividade."
          ],
          [
            "JavaScript",
            "Interações do cliente e da equipe; requisições pela Fetch API."
          ]
        ]
      },
      {
        "group": "Frameworks e persistência",
        "items": [
          [
            "Flask",
            "Entrega as páginas e expõe as rotas HTTP da aplicação."
          ],
          [
            "Flask-SQLAlchemy",
            "Mapeia clientes, profissionais, serviços e reservas para tabelas."
          ],
          [
            "SQLite",
            "Banco de dados padrão usado pelo projeto."
          ],
          [
            "Flask-Cors",
            "Configura o acesso à API nos cenários de desenvolvimento."
          ],
          [
            "Werkzeug",
            "Geração e verificação dos hashes de senha."
          ]
        ]
      },
      {
        "group": "Bibliotecas de apoio",
        "items": [
          [
            "APScheduler",
            "Execução das rotinas de lembretes e processamento de avisos."
          ],
          [
            "pywebpush",
            "Entrega de notificações aos serviços de push dos navegadores."
          ],
          [
            "holidays e python-dateutil",
            "Calendário, feriados e tratamento de datas."
          ],
          [
            "Pillow",
            "Tratamento e validação das imagens enviadas."
          ],
          [
            "python-dotenv",
            "Carregamento da configuração por variáveis de ambiente."
          ]
        ]
      },
      {
        "group": "Publicação e integrações opcionais",
        "items": [
          [
            "Render e Gunicorn",
            "Hospedagem de teste e execução WSGI no ambiente de produção."
          ],
          [
            "Service Worker e Web Push",
            "APIs do navegador para notificações; dependem de HTTPS e permissão."
          ],
          [
            "Twilio",
            "Integração de WhatsApp presente no código; depende de credenciais e configuração."
          ],
          [
            "PostgreSQL",
            "Alternativa ao SQLite, disponível por configuração e instalação de driver."
          ]
        ]
      }
    ],
    "flow": [
      [
        "Interface web",
        "HTML, CSS e JavaScript enviam consultas e ações com fetch."
      ],
      [
        "API Flask",
        "Valida a sessão, o perfil e as regras de disponibilidade."
      ],
      [
        "Persistência",
        "SQLAlchemy relaciona os modelos e grava no SQLite."
      ],
      [
        "Avisos",
        "Uma fila e rotinas agendadas processam notificações quando habilitadas."
      ]
    ],
    "decisions": [
      [
        "Regras no servidor",
        "A disponibilidade considera duração do serviço, expediente e conflitos de agenda."
      ],
      [
        "Responsabilidades separadas",
        "Frontend, modelos de dados e módulos de rotas ficam organizados em arquivos próprios."
      ],
      [
        "Permissões por perfil",
        "Cliente, barbeiro e administrador têm operações diferentes."
      ]
    ],
    "concepts": [
      "Modelagem relacional",
      "API HTTP e sessões",
      "Regras de agenda",
      "Integrações assíncronas",
      "Testes de backend e interface"
    ],
    "note": "A ficha descreve a versão local analisada. Notificações, e-mail e integrações externas exigem configuração; a demonstração hospedada pode ter recursos diferentes.",
    "next": "Consolidar armazenamento persistente na hospedagem e validar os fluxos de notificações e recuperação de senha no ambiente publicado."
  },
  "birthday": {
    "title": "Niver do Jão",
    "category": "Frontend · Convite digital",
    "status": "Projeto publicado",
    "summary": "Um convite de aniversário com identidade de futebol brasileiro, formulário de presença e integração com serviços externos.",
    "image": "assets/niver-jao.jpg",
    "imageAlt": "Recorte da interface do Niver do Jão",
    "links": [
      {
        "label": "Abrir convite",
        "href": "https://niver-do-jao.vercel.app"
      },
      {
        "label": "Ver código",
        "href": "https://github.com/gohenj/niver_do_jao"
      }
    ],
    "objective": "Concentrar as informações da comemoração e a resposta do convidado em uma página simples, personalizada e fácil de usar.",
    "features": [
      "Convite visual com tema de futebol brasileiro.",
      "Campo de nome e escolha entre comparecer ou não.",
      "Validação do nome obrigatório e da escolha de presença.",
      "Envio HTTP para Google Apps Script e Telegram.",
      "Tela de retorno após o envio e opção de responder novamente."
    ],
    "stack": [
      {
        "group": "Linguagens",
        "items": [
          [
            "JavaScript e JSX",
            "Lógica do formulário e composição da interface em componentes."
          ],
          [
            "HTML e CSS",
            "Documento base e estilos da página."
          ]
        ]
      },
      {
        "group": "Bibliotecas e estilos",
        "items": [
          [
            "React",
            "Renderização declarativa e estado com useState."
          ],
          [
            "React DOM",
            "Monta a aplicação React no documento."
          ],
          [
            "Tailwind CSS",
            "Classes utilitárias para cores, espaçamento e layout responsivo."
          ]
        ]
      },
      {
        "group": "Ferramentas",
        "items": [
          [
            "Vite",
            "Servidor de desenvolvimento e geração da versão de produção."
          ],
          [
            "PostCSS e Autoprefixer",
            "Processamento dos estilos no desenvolvimento e no build."
          ],
          [
            "Oxlint",
            "Análise estática do código."
          ],
          [
            "Vercel",
            "Publicação do frontend."
          ]
        ]
      },
      {
        "group": "Integrações",
        "items": [
          [
            "Fetch API",
            "Cliente HTTP nativo do navegador."
          ],
          [
            "Google Apps Script",
            "Endpoint externo usado para enviar nome e resposta."
          ],
          [
            "Telegram Bot API",
            "Envio de mensagens de confirmação aos organizadores."
          ],
          [
            "Persistência externa",
            "O repositório não inclui um banco próprio nem o código do Apps Script."
          ]
        ]
      }
    ],
    "flow": [
      [
        "Formulário React",
        "O estado mantém nome, escolha de presença e retorno do envio."
      ],
      [
        "Validação",
        "O envio exige um nome e uma escolha explícita de participação."
      ],
      [
        "Serviços externos",
        "fetch envia as informações ao Apps Script e à API do Telegram."
      ],
      [
        "Retorno visual",
        "O componente alterna entre formulário e mensagem de resposta enviada."
      ]
    ],
    "decisions": [
      [
        "Estado local",
        "useState atende ao fluxo concentrado em uma tela, sem biblioteca global de estado."
      ],
      [
        "Estilos utilitários",
        "Tailwind organiza a identidade visual e as adaptações de layout."
      ],
      [
        "Integrações HTTP",
        "A interface usa APIs externas para apoiar o registro e os avisos."
      ]
    ],
    "concepts": [
      "Formulários controlados",
      "Estado e renderização condicional",
      "Requisições assíncronas",
      "Identidade visual"
    ],
    "note": "O registro e os avisos dependem de serviços externos. Este projeto não inclui servidor ou banco de dados próprios.",
    "next": "Levar as integrações para uma camada de servidor, adicionar estado de carregamento e conferir as respostas HTTP antes de exibir sucesso."
  },
  "arena": {
    "title": "Arena Pulse",
    "category": "Frontend · Dashboard de esports",
    "status": "Primeiro sprint",
    "summary": "Dashboard responsivo para explorar partidas, filtrar jogos e montar uma seleção de favoritos com dados tipados.",
    "image": "assets/arena-pulse.png",
    "imageAlt": "Dashboard Arena Pulse com estatísticas e partidas",
    "links": [
      {
        "label": "Ver demonstração",
        "href": "projects/arena/"
      }
    ],
    "objective": "Construir uma base de dashboard de esports que demonstre componentização, tipagem, filtros e adaptação para diferentes tamanhos de tela.",
    "features": [
      "Visão geral, lista de partidas e favoritos.",
      "Busca por time ou campeonato combinada com filtro por jogo.",
      "Cards de partidas ao vivo, agendadas e finalizadas.",
      "Favoritos salvos no localStorage, com tratamento de falha na gravação.",
      "Estado vazio com ação para restaurar a lista.",
      "Menu móvel, foco visível e navegação por teclado."
    ],
    "stack": [
      {
        "group": "Linguagens",
        "items": [
          [
            "TypeScript e TSX",
            "Modelos de partidas, tipagem das props e componentes."
          ],
          [
            "HTML e CSS",
            "Estrutura do documento e estilos do dashboard."
          ]
        ]
      },
      {
        "group": "Bibliotecas",
        "items": [
          [
            "React e React DOM",
            "Componentização, renderização e estado da experiência."
          ],
          [
            "Tailwind CSS",
            "Utilitários de estilo combinados com CSS próprio."
          ],
          [
            "Lucide React",
            "Ícones usados nos controles e cards."
          ]
        ]
      },
      {
        "group": "Ferramentas",
        "items": [
          [
            "Vite",
            "Desenvolvimento local e build de produção."
          ],
          [
            "TypeScript Compiler",
            "Checagem estática antes do build."
          ],
          [
            "npm",
            "Dependências e comandos do projeto."
          ]
        ]
      },
      {
        "group": "Dados e armazenamento",
        "items": [
          [
            "Mocks tipados",
            "Partidas e resultados fictícios definidos no código."
          ],
          [
            "localStorage",
            "Persistência dos favoritos no próprio navegador."
          ],
          [
            "Sem backend neste sprint",
            "Ainda não há API real, banco de dados nem comunicação por Socket.IO."
          ]
        ]
      }
    ],
    "flow": [
      [
        "Dados tipados",
        "Os modelos descrevem jogos, times e estados das partidas."
      ],
      [
        "Estado da tela",
        "App mantém busca, filtro, navegação e favoritos."
      ],
      [
        "Componentes",
        "Sidebar, Header, StatCard e MatchCard recebem dados e callbacks."
      ],
      [
        "Persistência local",
        "Os favoritos são recuperados e salvos no navegador."
      ]
    ],
    "decisions": [
      [
        "Componentes reutilizáveis",
        "Os cards recebem props e eventos sem conhecer o armazenamento ou aplicar os filtros."
      ],
      [
        "Contadores derivados",
        "As estatísticas são calculadas a partir das partidas disponíveis."
      ],
      [
        "Escopo progressivo",
        "Dados locais permitem trabalhar primeiro a interface e suas interações."
      ]
    ],
    "concepts": [
      "Props e callbacks",
      "Modelagem em TypeScript",
      "Filtros combinados",
      "Persistência local",
      "Responsividade"
    ],
    "note": "Partidas, resultados e horários são demonstrativos. A navegação atual usa estado local, sem rotas por URL.",
    "next": "Introduzir TanStack Router, Axios e TanStack Query, com estados de carregamento e erro, antes de conectar uma API real. Esses recursos ainda não fazem parte da stack implementada."
  }
};

