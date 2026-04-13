const DEFAULT_LANGUAGE = 'pt';
const VIDEO_SOURCES = {
    pt: 'https://www.youtube.com/embed/YXwcNZW_7K8?si=P0D_qY3-csawYkYl',
    en: 'https://www.youtube.com/embed/DI8dNYUsfCQ?si=mMmM09RkYOhzSkVH'
};
const VIDEO_LINKS = {
    pt: 'https://www.youtube.com/watch?v=YXwcNZW_7K8',
    en: 'https://www.youtube.com/watch?v=DI8dNYUsfCQ'
};
const VIDEO_THUMBNAILS = {
    pt: 'https://img.youtube.com/vi/YXwcNZW_7K8/hqdefault.jpg',
    en: 'https://img.youtube.com/vi/DI8dNYUsfCQ/hqdefault.jpg'
};
const LABEL_LINE_WORDS = [
    {
        word: '開発',
        reading: 'kaihatsu',
        meaning: {
            pt: 'desenvolvimento',
            en: 'development'
        }
    },
    {
        word: '技術',
        reading: 'gijutsu',
        meaning: {
            pt: 'tecnologia',
            en: 'technology'
        }
    },
    {
        word: 'コード',
        reading: 'kodo',
        meaning: {
            pt: 'código',
            en: 'code'
        }
    },
    {
        word: '設計',
        reading: 'sekkei',
        meaning: {
            pt: 'arquitetura / design técnico',
            en: 'architecture / technical design'
        }
    },
    {
        word: '実装',
        reading: 'jisso',
        meaning: {
            pt: 'implementação',
            en: 'implementation'
        }
    },
    {
        word: '構築',
        reading: 'kochiku',
        meaning: {
            pt: 'construção',
            en: 'construction'
        }
    }
];
const SKILL_FILTERS = ['all', 'frontend', 'backend', 'database', 'tools'];
const PROJECT_FILTERS = ['all', 'impact', 'product', 'client', 'creative'];
const SKILLS_DATA = [
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: 'assets/images/js.webp',
        category: 'frontend',
        level: 92,
        levelKey: 'advanced',
        tags: ['DOM', 'APIs', 'Automations'],
        description: {
            pt: 'Base do meu trabalho no front-end: interações, consumo de APIs, automações e lógica para interfaces dinâmicas.',
            en: 'The foundation of my front-end work: interactions, API consumption, automations, and logic for dynamic interfaces.'
        }
    },
    {
        id: 'react',
        name: 'React',
        icon: 'assets/images/react.webp',
        category: 'frontend',
        level: 86,
        levelKey: 'advanced',
        tags: ['Components', 'State', 'SPA'],
        description: {
            pt: 'Uso React para componentizar interfaces, organizar estado e criar experiências web mais escaláveis.',
            en: 'I use React to componentize interfaces, organize state, and build more scalable web experiences.'
        }
    },
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        icon: 'assets/images/bootstrap.webp',
        category: 'frontend',
        level: 78,
        levelKey: 'intermediate',
        tags: ['Responsive UI', 'Grid', 'Components'],
        description: {
            pt: 'Ferramenta útil para acelerar layouts responsivos e criar bases visuais consistentes quando o projeto pede velocidade.',
            en: 'A useful tool for speeding up responsive layouts and creating consistent visual foundations when a project needs speed.'
        }
    },
    {
        id: 'figma',
        name: 'Figma',
        icon: 'assets/images/figma.webp',
        category: 'tools',
        level: 76,
        levelKey: 'intermediate',
        tags: ['UI', 'Prototype', 'Design'],
        description: {
            pt: 'Uso para planejar telas, validar fluxos e transformar ideias em interfaces antes de partir para o código.',
            en: 'I use it to plan screens, validate flows, and turn ideas into interfaces before moving into code.'
        }
    },
    {
        id: 'csharp',
        name: 'C#',
        icon: 'assets/images/csharp.webp',
        category: 'backend',
        level: 88,
        levelKey: 'advanced',
        tags: ['OOP', '.NET', 'MVC'],
        description: {
            pt: 'Uma das minhas principais linguagens para desenvolvimento back-end, aplicações web e soluções em ambiente Microsoft.',
            en: 'One of my main languages for back-end development, web applications, and solutions in the Microsoft ecosystem.'
        }
    },
    {
        id: 'aspdotnet',
        name: 'ASP .NET',
        icon: 'assets/images/aspdotnet.webp',
        category: 'backend',
        level: 84,
        levelKey: 'advanced',
        tags: ['MVC', 'Web Apps', 'APIs'],
        description: {
            pt: 'Uso ASP .NET para construir aplicações MVC, fluxos internos e soluções web voltadas a regras de negócio.',
            en: 'I use ASP .NET to build MVC applications, internal flows, and web solutions focused on business rules.'
        }
    },
    {
        id: 'java',
        name: 'Java',
        icon: 'assets/images/java.webp',
        category: 'backend',
        level: 78,
        levelKey: 'intermediate',
        tags: ['OOP', 'Spring Boot', 'APIs'],
        description: {
            pt: 'Tenho experiência com Java em APIs, orientação a objetos e projetos com Spring Boot.',
            en: 'I have experience with Java in APIs, object-oriented programming, and Spring Boot projects.'
        }
    },
    {
        id: 'python',
        name: 'Python',
        icon: 'assets/images/python.webp',
        category: 'backend',
        level: 82,
        levelKey: 'advanced',
        tags: ['Automation', 'Scripts', 'Data'],
        description: {
            pt: 'Uso Python para automações, scripts, coleta de dados e soluções rápidas para problemas repetitivos.',
            en: 'I use Python for automations, scripts, data collection, and quick solutions for repetitive problems.'
        }
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        icon: 'assets/images/postgresql.webp',
        category: 'database',
        level: 84,
        levelKey: 'advanced',
        tags: ['SQL', 'Reports', 'Queries'],
        description: {
            pt: 'Trabalho com consultas SQL, análise de dados, relatórios e estruturação de informações para tomada de decisão.',
            en: 'I work with SQL queries, data analysis, reports, and structuring information for decision-making.'
        }
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        icon: 'assets/images/mongodb.webp',
        category: 'database',
        level: 72,
        levelKey: 'intermediate',
        tags: ['NoSQL', 'Documents', 'Data Modeling'],
        description: {
            pt: 'Uso MongoDB para modelagem flexível de dados e aplicações que se beneficiam de documentos NoSQL.',
            en: 'I use MongoDB for flexible data modeling and applications that benefit from NoSQL documents.'
        }
    },
    {
        id: 'git',
        name: 'Git',
        icon: 'assets/images/git.webp',
        category: 'tools',
        level: 88,
        levelKey: 'advanced',
        tags: ['Versioning', 'Branches', 'Collaboration'],
        description: {
            pt: 'Uso Git para versionamento, organização de entregas, trabalho em equipe e histórico claro de evolução.',
            en: 'I use Git for version control, delivery organization, teamwork, and a clear history of progress.'
        }
    },
    {
        id: 'postman',
        name: 'Postman',
        icon: 'assets/images/postman.webp',
        category: 'tools',
        level: 80,
        levelKey: 'intermediate',
        tags: ['APIs', 'Tests', 'Requests'],
        description: {
            pt: 'Uso Postman para testar APIs, documentar requests e validar integrações antes de levar ao produto.',
            en: 'I use Postman to test APIs, document requests, and validate integrations before bringing them into the product.'
        }
    }
];

const PROJECTS_DATA = [
    {
        id: 'amparo',
        category: 'impact',
        url: 'https://diogojp202.github.io/ProjetoAmparoAoRS/',
        image: 'assets/images/AMPARO AO RS.webp',
        techs: ['HTML', 'CSS', 'NodeJS'],
        name: {
            pt: 'Projeto Amparo Ao RS',
            en: 'Projeto Amparo Ao RS'
        },
        description: {
            pt: 'Plataforma web criada para apoiar a população do Rio Grande do Sul durante as enchentes, reunindo informação útil para quem precisava de ajuda e para quem queria contribuir.',
            en: 'A web platform built to support people in Rio Grande do Sul during the floods, gathering useful information for those who needed help and for those who wanted to contribute.'
        },
        role: {
            pt: 'Front-end e estrutura informativa',
            en: 'Front-end and information structure'
        },
        result: {
            pt: 'Projeto de impacto social com navegação direta',
            en: 'Social impact project with direct navigation'
        },
        alt: {
            pt: "Notebook e celular com capa do Projeto Amparo Ao RS.",
            en: 'Notebook and phone displaying the Projeto Amparo Ao RS cover.'
        }
    },
    {
        id: 'vel',
        category: 'product',
        url: 'https://vel-desktop.vercel.app/',
        image: 'assets/images/VEL.webp',
        techs: ['React', 'AWS', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
        name: {
            pt: 'VEL',
            en: 'VEL'
        },
        description: {
            pt: 'Produto para melhorar a gestão de empresas de entregas rápidas, conectando entregadores, restaurantes e organização operacional em uma experiência mais clara.',
            en: 'A product designed to improve fast delivery business management, connecting couriers, restaurants, and operational organization in a clearer experience.'
        },
        role: {
            pt: 'Full-stack e Scrum Master',
            en: 'Full-stack and Scrum Master'
        },
        result: {
            pt: 'Produto completo apresentado no Demoday PROA',
            en: 'Complete product presented at PROA Demoday'
        },
        alt: {
            pt: 'Projeto VEL em uma composição de telas.',
            en: 'VEL project shown in a screen composition.'
        }
    },
    {
        id: 'cemiterios',
        category: 'client',
        url: 'https://cemiterioszonasulsp.com.br/',
        image: 'assets/images/CEMITERIOS.webp',
        techs: ['HTML', 'CSS', 'JavaScript', 'SEO'],
        name: {
            pt: 'Cemitérios e Crematórios Zona Sul',
            en: 'Cemiterios e Crematorios Zona Sul'
        },
        description: {
            pt: 'Landing page para busca local de jazigos e crematórios, construída com foco em clareza, responsividade e presença orgânica.',
            en: 'A landing page for local searches about burial plots and crematoriums, built with clarity, responsiveness, and organic presence in mind.'
        },
        role: {
            pt: 'Landing page, responsivo e SEO',
            en: 'Landing page, responsive UI, and SEO'
        },
        result: {
            pt: 'Primeiras posições em buscas locais',
            en: 'Top positions in local searches'
        },
        alt: {
            pt: 'Projeto Cemitérios e Crematórios Zona Sul.',
            en: 'Cemiterios e Crematorios Zona Sul project.'
        }
    },
    {
        id: 'cubobank',
        category: 'product',
        url: 'https://diogojp202.github.io/CuboBank/',
        image: 'assets/images/CUBO BANK.webp',
        techs: ['HTML', 'CSS', 'JavaScript'],
        name: {
            pt: 'CuboBank',
            en: 'CuboBank'
        },
        description: {
            pt: 'Simulação de caixa eletrônico com fluxo de operações, ajustes de interface, múltiplas funcionalidades e persistência de dados em cache.',
            en: 'An ATM simulation with operation flows, interface improvements, multiple features, and cached data persistence.'
        },
        role: {
            pt: 'Interface, regras de tela e cache',
            en: 'Interface, screen logic, and cache'
        },
        result: {
            pt: 'Experiência bancária interativa no navegador',
            en: 'Interactive banking experience in the browser'
        },
        alt: {
            pt: 'Projeto CuboBank.',
            en: 'CuboBank project.'
        }
    },
    {
        id: 'freedom-lens',
        category: 'client',
        url: 'https://diogojp202.github.io/FreedonLents/',
        image: 'assets/images/FREEDOM LENS.webp',
        techs: ['HTML', 'CSS', 'JavaScript'],
        name: {
            pt: 'Freedom Lens',
            en: 'Freedom Lens'
        },
        description: {
            pt: 'Landing page visual para venda, pensada para destacar o produto, manter boa leitura em diferentes telas e conduzir o usuário com poucos atritos.',
            en: 'A visual sales landing page designed to highlight the product, keep good readability across screens, and guide users with low friction.'
        },
        role: {
            pt: 'UI, responsividade e página de venda',
            en: 'UI, responsiveness, and sales page'
        },
        result: {
            pt: 'Experiência focada em conversão',
            en: 'Conversion-focused experience'
        },
        alt: {
            pt: 'Projeto Freedom Lens.',
            en: 'Freedom Lens project.'
        }
    },
    {
        id: 'dark-souls',
        category: 'creative',
        url: 'https://projeto-dark-souls-3.vercel.app/',
        image: 'assets/images/DARK_SOULS_3.webp',
        techs: ['HTML', 'CSS', 'JavaScript'],
        name: {
            pt: 'Projeto Dark Souls 3',
            en: 'Dark Souls 3 Project'
        },
        description: {
            pt: 'Site temático que apresenta os bosses do jogo com uma breve introdução, características e atmosfera visual inspirada no universo de Dark Souls.',
            en: 'A themed website presenting the game bosses with a brief introduction, characteristics, and a visual mood inspired by the Dark Souls universe.'
        },
        role: {
            pt: 'Interface temática e catálogo visual',
            en: 'Themed interface and visual catalog'
        },
        result: {
            pt: 'Projeto criativo com foco em atmosfera',
            en: 'Creative project focused on atmosphere'
        },
        alt: {
            pt: 'Projeto Dark Souls 3.',
            en: 'Dark Souls 3 project.'
        }
    },
    {
        id: 'old-school',
        category: 'creative',
        url: 'https://diogojp202.github.io/MultiversoNews/',
        image: 'assets/images/MULTIVERSO NEWS.webp',
        techs: ['HTML', 'CSS', 'JavaScript'],
        name: {
            pt: 'Old School Comics',
            en: 'Old School Comics'
        },
        description: {
            pt: 'Site de notícias com direção visual inspirada em cartoons old school preto e branco, com layout responsivo e personalidade mais editorial.',
            en: 'A news website with a visual direction inspired by black-and-white old-school cartoons, responsive layout, and a more editorial personality.'
        },
        role: {
            pt: 'Direção visual e front-end',
            en: 'Visual direction and front-end'
        },
        result: {
            pt: 'Identidade forte para conteúdo editorial',
            en: 'Strong identity for editorial content'
        },
        alt: {
            pt: 'Projeto Old School Comics.',
            en: 'Old School Comics project.'
        }
    }
];

const EDUCATION_DATA = [
    {
        id: 'ads',
        icon: 'assets/images/GLOBE_icon.webp',
        category: {
            pt: 'Graduação',
            en: 'Degree'
        },
        title: {
            pt: 'Análise e Desenvolvimento de Sistemas',
            en: 'Systems Analysis and Development'
        },
        school: {
            pt: 'Faculdade Impacta',
            en: 'Impacta College'
        },
        date: {
            pt: '08/2024 à 12/2026',
            en: '08/2024 to 12/2026'
        },
        focus: {
            pt: 'Sistemas, web e arquitetura',
            en: 'Systems, web, and architecture'
        },
        description: {
            pt: 'Formação que consolida minha base em engenharia de software, análise de requisitos, desenvolvimento web, banco de dados e construção de soluções escaláveis.',
            en: 'A degree that strengthens my foundation in software engineering, requirements analysis, web development, databases, and scalable solution design.'
        }
    },
    {
        id: 'java',
        icon: 'assets/images/atomo_icon.webp',
        category: {
            pt: 'Full-stack',
            en: 'Full-stack'
        },
        title: {
            pt: 'Desenvolvedor Full-stack Java',
            en: 'Full-stack Java Developer'
        },
        school: {
            pt: 'Senac São Paulo - Instituto Proa',
            en: 'Senac São Paulo - Instituto Proa'
        },
        date: {
            pt: '08/2024 à 12/2026',
            en: '08/2024 to 12/2026'
        },
        focus: {
            pt: 'Java, React, APIs e agilidade',
            en: 'Java, React, APIs, and agility'
        },
        description: {
            pt: 'Formação prática voltada a produto, front-end, back-end, banco de dados e trabalho em equipe, conectando código com entrega real.',
            en: 'A practical program focused on product thinking, front-end, back-end, databases, and teamwork, connecting code with real delivery.'
        }
    },
    {
        id: 'electronics',
        icon: 'assets/images/AIM_Icon.webp',
        category: {
            pt: 'Técnico',
            en: 'Technical'
        },
        title: {
            pt: 'Técnico em Eletrônica',
            en: 'Electronics Technician'
        },
        school: {
            pt: 'Etec Aprígio Gonzaga',
            en: 'Etec Aprígio Gonzaga'
        },
        date: {
            pt: '01/2020 à 12/2022',
            en: '01/2020 to 12/2022'
        },
        focus: {
            pt: 'Lógica, hardware e diagnóstico',
            en: 'Logic, hardware, and diagnostics'
        },
        description: {
            pt: 'Minha origem técnica trouxe repertório em lógica, eletrônica, manutenção, leitura de problemas e atenção aos detalhes antes mesmo do desenvolvimento web.',
            en: 'My technical background gave me experience in logic, electronics, maintenance, problem reading, and attention to detail before web development.'
        }
    }
];

const EXPERIENCE_DATA = [
    {
        id: 'rb',
        icon: 'assets/images/GLOBE_icon.webp',
        url: 'https://www.rbinvestimentos.com/',
        category: {
            pt: 'Atual',
            en: 'Current'
        },
        company: {
            pt: 'RB Investimentos',
            en: 'RB Investimentos'
        },
        role: {
            pt: 'Estagiário de desenvolvimento de software',
            en: 'Software Development Intern'
        },
        date: {
            pt: '12/2024 - Atual',
            en: '12/2024 - Present'
        },
        description: {
            pt: 'Atuo no desenvolvimento e manutenção de sistemas internos para o mercado financeiro com C#, .NET e SQL Server. Especializado em automação de processos que reduzem operações de horas para minutos (~95% de ganho de eficiência). Participo da integração com APIs financeiras (B3 e fornecedores), análise e resolução de incidentes em produção. Responsabilidades incluem: desenvolvimento de aplicações ASP.NET Core MVC, otimização de SQL Server, automações para processamento de dados, interfaces internas para operação e documentação técnica.',
            en: 'I develop and maintain internal systems for the financial market using C#, .NET, and SQL Server. Specialized in process automation, reducing operations from hours to minutes (~95% efficiency gain). I participate in integration with financial APIs (B3 and providers), production incident analysis and resolution. Responsibilities include: ASP.NET Core MVC applications, SQL Server optimization, data processing automation, internal operation interfaces, and technical documentation.'
        },
        result: {
            pt: 'Dados, relatórios e automações no mercado financeiro',
            en: 'Data, reports, and automations for the financial market'
        },
        tags: ['SQL', 'C#', '.NET', 'MVC', 'Reports', 'Automation']
    },
    {
        id: 'vel',
        icon: 'assets/images/AIM_Icon.webp',
        url: 'https://vel-desktop.vercel.app/sobrenos',
        category: {
            pt: 'Produto',
            en: 'Product'
        },
        company: {
            pt: 'VEL',
            en: 'VEL'
        },
        role: {
            pt: 'Desenvolvedor Full Stack e Scrum Master',
            en: 'Full Stack Developer and Scrum Master'
        },
        date: {
            pt: '02/2024 - 07/2024',
            en: '02/2024 - 07/2024'
        },
        description: {
            pt: 'Atuação como Scrum Master e desenvolvedor full stack em equipe multidisciplinar, liderando a organização do fluxo de trabalho e contribuindo diretamente no desenvolvimento. Estruturei e conduzi o processo ágil com cerimônias (dailys, planejamento, sprints), gestão de backlog em Trello com Matriz GUT e alinhamento contínuo do time. Desenvolvi frontend em React integrado ao backend via APIs, apoiei desenvolvimento de APIs REST com Java e Spring Boot, e participei da modelagem MySQL. Diferenciais: liderança em ambiente de pressão com prazos curtos, promoção de engajamento com dailys em inglês, combinação de liderança técnica e desenvolvimento prático.',
            en: 'I worked as Scrum Master and full-stack developer in a multidisciplinary team, leading workflow organization and directly contributing to development. I structured and conducted the agile process with ceremonies (dailys, planning, sprints), backlog management in Trello with GUT Matrix, and continuous team alignment. I developed React frontend integrated with backend via APIs, supported REST API development with Java and Spring Boot, and participated in MySQL modeling. Highlights: leadership in high-pressure environments with tight deadlines, engagement promotion with English dailys, combining technical leadership and hands-on development.'
        },
        result: {
            pt: 'Entrega full-stack com liderança ágil',
            en: 'Full-stack delivery with agile leadership'
        },
        tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'Scrum', 'Trello']
    },
    {
        id: 'freelance',
        icon: 'assets/images/star_icon.webp',
        url: '',
        category: {
            pt: 'Freelance',
            en: 'Freelance'
        },
        company: {
            pt: 'Projetos para clientes',
            en: 'Client projects'
        },
        role: {
            pt: 'Desenvolvedor Full-Stack Freelancer',
            en: 'Freelance Full-Stack Developer'
        },
        date: {
            pt: '01/2022 - Atual',
            en: '01/2022 - Present'
        },
        description: {
            pt: 'Atuação independente no desenvolvimento de soluções web, desde a prospecção de clientes até a entrega final. Crio sistemas para diferentes contextos (negócios locais, instituições e organizações) com forte atuação em automação de processos, digitalização de operações e substituição de controles manuais por sistemas estruturados. Principais entregas: plataformas de gestão com controle de usuários, estoque e operações internas (escola de taiko, igreja e outras); automação de fluxos baseados em planilhas; landing pages e sites com foco em performance, usabilidade e conversão; soluções para usuários não técnicos garantindo simplicidade e adoção. Ciclo completo: levantamento de requisitos, planejamento de prazos, desenvolvimento frontend/backend, suporte em hospedagem e infraestrutura, comunicação direta durante todo o projeto.',
            en: 'Independent work developing web solutions from client prospecting to final delivery. I build systems for different contexts (local businesses, institutions, and organizations) with strong focus on process automation, operations digitization, and replacing manual controls with structured systems. Key deliverables: management platforms with user controls, inventory, and internal operations (taiko school, church, and others); automation of spreadsheet-based workflows; landing pages and sites focused on performance, usability, and conversion; solutions designed for non-technical users ensuring simplicity and adoption. Full cycle: requirements gathering, timeline planning, frontend/backend development, hosting and infrastructure support, direct communication throughout the project.'
        },
        result: {
            pt: 'Sistemas de gestão, automações e sites com foco em adoção real',
            en: 'Management systems, automations, and websites focused on real adoption'
        },
        tags: ['Full-stack', 'Automation', 'Management Systems', 'SEO', 'Hosting', 'Client Discovery']
    },
    {
        id: 'concentrix',
        icon: 'assets/images/Triangulo_Warning_icon.webp',
        url: 'https://www.concentrix.com/pt-br/',
        category: {
            pt: 'Infraestrutura',
            en: 'Infrastructure'
        },
        company: {
            pt: 'Concentrix',
            en: 'Concentrix'
        },
        role: {
            pt: 'Aprendiz TI',
            en: 'IT Apprentice'
        },
        date: {
            pt: '01/2023 - 12/2023',
            en: '01/2023 - 12/2023'
        },
        description: {
            pt: 'Atuação em infraestrutura de TI, suporte técnico e automação de processos com foco em organização, manutenção e operação de ambientes corporativos. Responsável por gerenciamento e configuração de redes (VLANs e DHCP), organização e mapeamento de ambientes corporativos, gestão de usuários e máquinas em cenários complexos. Principais atividades: manutenção de desktops e laptops (hardware/software), instalação e configuração de sistemas operacionais, organização e identificação de cabeamento em datacenters. Diferenciais: automação de rotinas técnicas para otimização operacional, atendimento de tickets e resolução de problemas técnicos, participação em reuniões bilíngues, apoio na estruturação de infraestrutura para novos clientes.',
            en: 'I worked on IT infrastructure, technical support, and process automation with focus on organizing, maintaining, and operating corporate environments. Responsible for network management and configuration (VLANs and DHCP), infrastructure mapping and organization, user and machine management in complex scenarios. Main activities: desktop and laptop maintenance (hardware/software), installation and configuration of operating systems, cabling organization and identification in datacenters. Highlights: automation of technical routines for operational optimization, ticket handling and technical problem resolution, participation in bilingual meetings, support for infrastructure structuring of new clients.'
        },
        result: {
            pt: 'Base sólida em suporte, redes e operação',
            en: 'Solid foundation in support, networks, and operations'
        },
        tags: ['DHCP', 'VLAN', 'Support', 'Hardware', 'Tickets', 'Automation']
    }
];

const translations = {
    pt: {
        meta: {
            title: 'Diogo Antonny',
            description: 'Diogo Antonny portfólio. Um portfólio feito para mostrar um pouco mais quem é Diogo Antonny.',
            keywords: 'HTML, CSS, JavaScript, Portfólio, portfolio, Diogo Antonny'
        },
        language: {
            toggleAria: 'Mudar para inglês',
            kicker: 'Idioma',
            nextCode: 'EN'
        },
        video: {
            title: 'Vídeo de apresentação em português',
            eyebrow: 'Apresentação',
            heading: 'Conheça meu trabalho em vídeo',
            description: 'Escolha o idioma do vídeo e veja uma apresentação rápida sobre minha trajetória, minhas experiências e o que venho construindo.',
            languageGroupLabel: 'Idioma do vídeo',
            languageLabel: 'Idioma do vídeo',
            portuguese: 'Português',
            english: 'Inglês',
            openOnYouTube: 'Abrir no YouTube',
            previewAlt: 'Prévia do vídeo de apresentação em português'
        },
        labelLine: {
            aria: 'Letreiro de conceitos em japonês',
            modalTitle: 'Significado',
            readingLabel: 'Leitura',
            meaningLabel: 'Tradução'
        },
        nav: {
            homeAria: 'Voltar ao topo',
            openMenuAria: 'Abrir menu',
            closeMenuAria: 'Fechar menu',
            about: 'SOBRE',
            skills: 'HABILIDADES',
            projects: 'PROJETOS',
            education: 'FORMAÇÕES',
            experience: 'PROFISSIONAL',
            curiosities: 'CURIOSIDADES'
        },
        about: {
            kicker: 'Sobre mim',
            title: 'Sobre mim',
            intro: 'Sou Diogo Antonny, desenvolvedor full-stack com mais de três anos no mercado de tecnologia e experiência criando soluções para o mercado financeiro.',
            description: 'Gosto de estudar com constância, transformar problemas em automações úteis e criar experiências que unem tecnologia, lógica e criatividade. Também estudo idiomas, crio jogos e tenho a música como uma das minhas fontes de inspiração.',
            highlightsAria: 'Destaques sobre Diogo',
            highlights: {
                finance: {
                    label: 'Mercado financeiro',
                    value: 'Soluções, dados e automações'
                },
                languages: {
                    label: 'Idiomas',
                    value: 'Inglês avançado, japonês básico'
                },
                creative: {
                    label: 'Criatividade',
                    value: 'Jogos, música e interfaces'
                },
                mindset: {
                    label: 'Mentalidade',
                    value: 'Estudo, melhoria contínua e entrega'
                }
            }
        },
        skills: {
            kicker: 'Stack técnico',
            title: 'Habilidades',
            description: 'Tecnologias que uso para criar interfaces, APIs, automações, consultas, integrações e produtos web com foco em clareza e entrega.',
            filtersLabel: 'Filtrar tecnologias',
            levelLabel: 'Domínio',
            selectAria: 'Selecionar tecnologia',
            categories: {
                all: 'Todas',
                frontend: 'Front-end',
                backend: 'Back-end',
                database: 'Dados',
                tools: 'Ferramentas'
            },
            levels: {
                advanced: 'Avançado',
                intermediate: 'Intermediário'
            }
        },
        projects: {
            kicker: 'Portfólio',
            title: 'Projetos',
            description: 'Uma seleção de projetos com foco em impacto, produto, experiência visual e entrega técnica.',
            filtersLabel: 'Filtrar projetos',
            roleLabel: 'Minha atuação',
            resultLabel: 'Destaque',
            viewProject: 'Ver projeto',
            selectAria: 'Selecionar projeto',
            categories: {
                all: 'Todos',
                impact: 'Impacto',
                product: 'Produto',
                client: 'Clientes',
                creative: 'Criativos'
            }
        },
        education: {
            kicker: 'Formação',
            title: 'Vida Acadêmica',
            description: 'Minha base acadêmica combina desenvolvimento de sistemas, formação full-stack e uma origem técnica em eletrônica.',
            timelineLabel: 'Linha do tempo acadêmica',
            periodLabel: 'Período',
            focusLabel: 'Foco',
            selectAria: 'Selecionar formação',
            ads: {
                title: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
                school: 'Faculdade Impacta',
                date: '08/2024 à 12/2026'
            },
            java: {
                title: 'DESENVOLVEDOR FULL-STACK JAVA',
                school: 'Senac São Paulo - Instituto Proa',
                date: '08/2024 à 12/2026'
            },
            electronics: {
                title: 'TÉCNICO EM ELETRÔNICA',
                school: 'Etec Aprígio Gonzaga',
                date: '01/2020 à 12/2022'
            },
            award: {
                label: 'Premiação',
                title: 'Aluno Destaque <br> PROA 2024',
                description: 'Reconhecimento pela evolução técnica, colaboração e entrega durante a formação no Instituto PROA.'
            }
        },
        experience: {
            kicker: 'Trajetória',
            title: 'Experiências Profissionais',
            description: 'Minha trajetória junta desenvolvimento de software, dados, automações, liderança de produto e suporte técnico.',
            timelineLabel: 'Linha do tempo profissional',
            periodLabel: 'Período',
            resultLabel: 'Destaque',
            viewCompany: 'Ver empresa',
            selectAria: 'Selecionar experiência',
            rb: {
                date: '12/2024 - Atual',
                role: 'Estagiário de desenvolvimento de software',
                description: 'Atuei na área de desenvolvimento da empresa, trabalhando com queries SQL, agendamento de dados, análise de grandes volumes de informação e geração de relatórios a partir de requisições SQL. Além disso, participei do desenvolvimento de software e aplicações web, utilizando a arquitetura MVC e tecnologias da Microsoft, como .NET e C#. Também contribuí para a implementação de inteligência artificial nos processos da empresa, focando em automação e inovação.'
            },
            vel: {
                date: '02/2024 - 07/2024',
                role: 'Desenvolvedor Full Stack e Scrum Master',
                description: 'Atuação como Scrum Master e desenvolvedor full stack em equipe multidisciplinar, liderando a organização do fluxo de trabalho e contribuindo diretamente no desenvolvimento da solução. Responsável por estruturar e conduzir o processo ágil, garantindo alinhamento do time, priorização eficiente e entrega dentro dos prazos. Principais responsabilidades: condução de cerimônias ágeis (dailys, planejamento, sprints), gestão e priorização de backlog em Trello com Matriz GUT, organização do fluxo de trabalho e distribuição de tarefas. No desenvolvimento: frontend em React integrado ao backend via APIs, apoio em APIs REST com Java e Spring Boot, participação na modelagem e implementação MySQL. Diferenciais: liderança em ambiente de pressão com prazos curtos, promoção de engajamento e comunicação com dailys em inglês, combinação de liderança técnica e desenvolvimento prático.'
            },
            freelance: {
                date: '01/2022 - Atual',
                role: 'Desenvolvedor Full-Stack Freelancer',
                description: 'Atuação independente no desenvolvimento de soluções web, desde a prospecção de clientes até a entrega final. Crio sistemas para diferentes contextos (negócios locais, instituições e organizações) com forte atuação em automação de processos, digitalização de operações e substituição de controles manuais por sistemas estruturados. Principais entregas: plataformas de gestão com controle de usuários, estoque e operações internas (escola de taiko, igreja e outras); automação de fluxos baseados em planilhas; landing pages e sites com foco em performance, usabilidade e conversão; soluções para usuários não técnicos garantindo simplicidade e adoção. Ciclo completo: levantamento de requisitos, planejamento de prazos, desenvolvimento frontend/backend, suporte em hospedagem e infraestrutura, comunicação direta durante todo o projeto.'
            },
            concentrix: {
                date: '01/2023 - 12/2023',
                role: 'Aprendiz TI',
                description: 'Atuação em infraestrutura de TI, suporte técnico e automação de processos com foco em organização, manutenção e operação de ambientes corporativos. Responsável por gerenciamento e configuração de redes (VLANs e DHCP), organização e mapeamento de ambientes corporativos, gestão de usuários e máquinas em cenários complexos. Principais atividades: manutenção de desktops e laptops (hardware/software), instalação e configuração de sistemas operacionais, organização e identificação de cabeamento em datacenters. Diferenciais: automação de rotinas técnicas para otimização operacional, atendimento de tickets e resolução de problemas técnicos, participação em reuniões bilíngues, apoio na estruturação de infraestrutura para novos clientes e operações.'
            }
        },
        curiosities: {
            title: 'Curiosidades',
            description: 'Conhece um pouco mais sobre o que me move e inspira além do código.',
            games: {
                title: 'Games',
                description: 'Sou apaixonado por jogos desafiadores e sou um gamedev. Pretendo um dia publicar meus próprios jogos.'
            },
            languages: {
                title: 'Línguas',
                description: 'Adoro estudar e falar outras línguas estrangeiras como inglês e mandarim. Tenho o sonho de explorar o mundo.'
            },
            music: {
                title: 'Música',
                description: 'Música faz parte da minha vida, gosto de ouvir e tocar. É algo que me inspira e me estimula.'
            },
            sports: {
                title: 'Esportes',
                description: 'Adoro praticar esportes como skateboarding, calistenia e natação. É algo indispensável na minha vida.'
            }
        },
        contact: {
            title: 'Fale comigo e vamos construir algo incrível!',
            subtitle: 'Sempre aberto para novas oportunidades, projetos e conversas sobre tecnologia.',
            description: 'Procurando um desenvolvedor para seu projeto? Vamos conversar!',
            button: 'Entre em Contato'
        },
        footer: {
            copyright: '© Diogo Antonny - 2025. Todos os direitos reservados.'
        },
        images: {
            profileAlt: 'Foto do Diogo Antonny',
            figmaAlt: 'Ícone do Figma',
            reactAlt: 'Ícone do React',
            bootstrapAlt: 'Ícone do Bootstrap',
            javascriptAlt: 'Ícone do Javascript',
            postgresqlAlt: 'Ícone do Postgresql',
            postmanAlt: 'Ícone do Postman',
            pythonAlt: 'Ícone do Python',
            javaAlt: 'Ícone do Java',
            mongodbAlt: 'Ícone do MongoDB',
            gitAlt: 'Ícone do Git',
            csharpAlt: 'Ícone do C Sharp',
            aspdotnetAlt: 'Ícone do ASP .NET',
            displayAlt: 'Imagem de um display.',
            amparoAlt: "Notebook e celular com capa de um projeto chamado 'Projeto Amparo Ao RS'.",
            velAlt: 'Projeto VEL.',
            cemiteriosAlt: 'Projeto Cemiterios e Crematorios Zona Sul.',
            cubobankAlt: 'Projeto CuboBank.',
            freedonlentsAlt: 'Projeto FreedonLents.',
            darkSoulsAlt: 'Projeto Dark Souls 3.',
            oldSchoolAlt: 'Projeto MultiversoNews.',
            prevArrowAlt: 'Seta anterior',
            nextArrowAlt: 'Próxima seta',
            globeAlt: 'Ícone do globo',
            matureAlt: 'Ícone Mature ESR',
            warningAlt: 'Ícone de alerta',
            atomAlt: 'Ícone de átomo',
            targetAlt: 'Ícone de um alvo',
            cdAlt: 'Ícone do CD-AUDIO',
            trophyAlt: 'Imagem do troféu Aluno Destaque PROA 2024',
            coffeeAlt: 'Foto do Diogo segurando uma xícara de café.',
            linkedinAlt: 'Ícone Linkedin',
            githubAlt: 'Ícone Github',
            linktreeAlt: 'Ícone Linktree',
            beecrowdAlt: 'Ícone Beecrowd',
            gitCharacterAlt: 'Personagem do Github baseado no Diogo.'
        }
    },
    en: {
        meta: {
            title: 'Diogo Antonny',
            description: 'Diogo Antonny portfolio. A portfolio made to show a little more about who Diogo Antonny is.',
            keywords: 'HTML, CSS, JavaScript, portfolio, Diogo Antonny'
        },
        language: {
            toggleAria: 'Switch to Portuguese',
            kicker: 'Language',
            nextCode: 'PT'
        },
        video: {
            title: 'Presentation video in English',
            eyebrow: 'Presentation',
            heading: 'Get to know my work on video',
            description: 'Choose the video language and watch a quick presentation about my journey, my experience, and what I have been building.',
            languageGroupLabel: 'Video language',
            languageLabel: 'Video language',
            portuguese: 'Portuguese',
            english: 'English',
            openOnYouTube: 'Open on YouTube',
            previewAlt: 'English presentation video preview'
        },
        labelLine: {
            aria: 'Japanese concepts marquee',
            modalTitle: 'Meaning',
            readingLabel: 'Reading',
            meaningLabel: 'Translation'
        },
        nav: {
            homeAria: 'Back to top',
            openMenuAria: 'Open menu',
            closeMenuAria: 'Close menu',
            about: 'ABOUT',
            skills: 'SKILLS',
            projects: 'PROJECTS',
            education: 'EDUCATION',
            experience: 'EXPERIENCE',
            curiosities: 'CURIOSITIES'
        },
        about: {
            kicker: 'About me',
            title: 'About me',
            intro: 'I am Diogo Antonny, a full-stack developer with over three years in the technology market and experience building solutions for the financial market.',
            description: 'I enjoy studying consistently, turning problems into useful automations, and creating experiences that combine technology, logic, and creativity. I also study languages, create games, and see music as one of my sources of inspiration.',
            highlightsAria: 'Highlights about Diogo',
            highlights: {
                finance: {
                    label: 'Financial market',
                    value: 'Solutions, data, and automations'
                },
                languages: {
                    label: 'Languages',
                    value: 'Advanced English, basic Japanese'
                },
                creative: {
                    label: 'Creativity',
                    value: 'Games, music, and interfaces'
                },
                mindset: {
                    label: 'Mindset',
                    value: 'Study, continuous improvement, and delivery'
                }
            }
        },
        skills: {
            kicker: 'Technical stack',
            title: 'Skills',
            description: 'Technologies I use to build interfaces, APIs, automations, queries, integrations, and web products with clarity and delivery in mind.',
            filtersLabel: 'Filter technologies',
            levelLabel: 'Level',
            selectAria: 'Select technology',
            categories: {
                all: 'All',
                frontend: 'Front-end',
                backend: 'Back-end',
                database: 'Data',
                tools: 'Tools'
            },
            levels: {
                advanced: 'Advanced',
                intermediate: 'Intermediate'
            }
        },
        projects: {
            kicker: 'Portfolio',
            title: 'Projects',
            description: 'A selected set of projects focused on impact, product thinking, visual experience, and technical delivery.',
            filtersLabel: 'Filter projects',
            roleLabel: 'My role',
            resultLabel: 'Highlight',
            viewProject: 'View project',
            selectAria: 'Select project',
            categories: {
                all: 'All',
                impact: 'Impact',
                product: 'Product',
                client: 'Clients',
                creative: 'Creative'
            }
        },
        education: {
            kicker: 'Education',
            title: 'Academic Life',
            description: 'My academic foundation combines systems development, full-stack training, and a technical background in electronics.',
            timelineLabel: 'Academic timeline',
            periodLabel: 'Period',
            focusLabel: 'Focus',
            selectAria: 'Select education item',
            ads: {
                title: 'SYSTEMS ANALYSIS AND DEVELOPMENT',
                school: 'Impacta College',
                date: '08/2024 to 12/2026'
            },
            java: {
                title: 'FULL-STACK JAVA DEVELOPER',
                school: 'Senac São Paulo - Instituto Proa',
                date: '08/2024 to 12/2026'
            },
            electronics: {
                title: 'ELECTRONICS TECHNICIAN',
                school: 'Etec Aprígio Gonzaga',
                date: '01/2020 to 12/2022'
            },
            award: {
                label: 'Award',
                title: 'Outstanding Student <br> PROA 2024',
                description: 'Recognition for technical growth, collaboration, and delivery during the Instituto PROA program.'
            }
        },
        experience: {
            kicker: 'Career',
            title: 'Professional Experiences',
            description: 'My career combines software development, data, automations, product leadership, and technical support.',
            timelineLabel: 'Professional timeline',
            periodLabel: 'Period',
            resultLabel: 'Highlight',
            viewCompany: 'View company',
            selectAria: 'Select experience',
            rb: {
                date: '12/2024 - Present',
                role: 'Software Development Intern',
                description: "I worked in the company's development area, handling SQL queries, data scheduling, analyzing large volumes of information, and generating reports from SQL requests. Additionally, I participated in software and web application development, utilizing the MVC architecture and Microsoft technologies such as .NET and C#. I also contributed to implementing artificial intelligence in the company's processes, focusing on automation and innovation."
            },
            vel: {
                date: '02/2024 - 07/2024',
                role: 'Full Stack Developer and Scrum Master',
                description: 'I worked as Scrum Master and full-stack developer in a multidisciplinary team, leading workflow organization and directly contributing to solution development. Responsible for structuring and conducting the agile process, ensuring team alignment, efficient prioritization, and delivery within established timelines. Main responsibilities: conducting agile ceremonies (dailys, planning, sprints), backlog management and prioritization in Trello with GUT Matrix, workflow organization and task distribution. Development work: React frontend integrated with backend via APIs, support for REST APIs with Java and Spring Boot, participation in MySQL modeling and implementation. Highlights: leadership in high-pressure environments with tight deadlines, engagement and communication promotion with English dailys, combining technical leadership and hands-on development.'
            },
            freelance: {
                date: '01/2022 - Present',
                role: 'Freelance Full-Stack Developer',
                description: 'Independent work developing web solutions from client prospecting to final delivery. I build systems for different contexts (local businesses, institutions, and organizations) with strong focus on process automation, operations digitization, and replacing manual controls with structured systems. Key deliverables: management platforms with user controls, inventory, and internal operations (taiko school, church, and others); automation of spreadsheet-based workflows; landing pages and sites focused on performance, usability, and conversion; solutions designed for non-technical users ensuring simplicity and adoption. Full cycle: requirements gathering, timeline planning, frontend/backend development, hosting and infrastructure support, direct communication throughout the project.'
            },
            concentrix: {
                date: '01/2023 - 12/2023',
                role: 'IT Apprentice',
                description: 'I worked on IT infrastructure, technical support, and process automation with focus on organizing, maintaining, and operating corporate environments. Responsible for network management and configuration (VLANs and DHCP), infrastructure mapping and organization, user and machine management in complex scenarios. Main activities: desktop and laptop maintenance (hardware/software), installation and configuration of operating systems, cabling organization and identification in datacenters. Highlights: automation of technical routines for operational optimization, ticket handling and technical problem resolution, participation in bilingual meetings, support for infrastructure structuring of new clients and operations.'
            }
        },
        curiosities: {
            title: 'Curiosities',
            description: 'Get to know a little more about what drives and inspires me beyond code.',
            games: {
                title: 'Games',
                description: 'I am passionate about challenging games and I am a game developer. I intend to publish my own games one day.'
            },
            languages: {
                title: 'Languages',
                description: 'I love studying and speaking foreign languages such as English and Mandarin. I dream of exploring the world.'
            },
            music: {
                title: 'Music',
                description: 'Music is a part of my life; I love listening to and playing music. It inspires and stimulates me.'
            },
            sports: {
                title: 'Sports',
                description: 'I love practicing sports such as skateboarding, calisthenics, and swimming. It is an essential part of my life.'
            }
        },
        contact: {
            title: "Contact me and let's build something amazing!",
            subtitle: 'Always open to new opportunities, projects, and conversations about technology.',
            description: 'Looking for a developer for your project? Let\'s talk!',
            button: 'Get in Touch'
        },
        footer: {
            copyright: '© Diogo Antonny - 2025. All rights reserved.'
        },
        images: {
            profileAlt: 'Photo of Diogo Antonny',
            figmaAlt: 'Figma icon',
            reactAlt: 'React icon',
            bootstrapAlt: 'Bootstrap icon',
            javascriptAlt: 'JavaScript icon',
            postgresqlAlt: 'PostgreSQL icon',
            postmanAlt: 'Postman icon',
            pythonAlt: 'Python icon',
            javaAlt: 'Java icon',
            mongodbAlt: 'MongoDB icon',
            gitAlt: 'Git icon',
            csharpAlt: 'C# icon',
            aspdotnetAlt: 'ASP .NET icon',
            displayAlt: 'Display image.',
            amparoAlt: "Notebook and phone displaying a project cover called 'Projeto Amparo Ao RS'.",
            velAlt: 'VEL project.',
            cemiteriosAlt: 'Cemiterios e Crematorios Zona Sul project.',
            cubobankAlt: 'CuboBank project.',
            freedonlentsAlt: 'FreedonLents project.',
            darkSoulsAlt: 'Dark Souls 3 project.',
            oldSchoolAlt: 'MultiversoNews project.',
            prevArrowAlt: 'Previous arrow',
            nextArrowAlt: 'Next arrow',
            globeAlt: 'Globe icon',
            matureAlt: 'Mature ESR icon',
            warningAlt: 'Warning icon',
            atomAlt: 'Atom icon',
            targetAlt: 'Target icon',
            cdAlt: 'CD-AUDIO icon',
            trophyAlt: 'Image of the PROA 2024 Outstanding Student trophy',
            coffeeAlt: 'Photo of Diogo holding a cup of coffee.',
            linkedinAlt: 'LinkedIn icon',
            githubAlt: 'GitHub icon',
            linktreeAlt: 'Linktree icon',
            beecrowdAlt: 'Beecrowd icon',
            gitCharacterAlt: 'GitHub character based on Diogo.'
        }
    }
};

let currentLanguage = DEFAULT_LANGUAGE;
let currentVideoLanguage = DEFAULT_LANGUAGE;
let activeLabelLineWord = null;
let activeSkillFilter = 'all';
let activeSkillId = 'javascript';
let activeProjectFilter = 'all';
let activeProjectId = 'amparo';
let activeEducationId = 'ads';
let activeExperienceId = 'rb';

function normalizeLanguage(language) {
    if (!language) {
        return null;
    }

    const normalizedLanguage = language.toLowerCase();

    if (normalizedLanguage.startsWith('pt')) {
        return 'pt';
    }

    if (normalizedLanguage.startsWith('en')) {
        return 'en';
    }

    return null;
}

function getTranslation(language, key) {
    const languageDictionary = translations[language] || translations[DEFAULT_LANGUAGE];
    const fallbackDictionary = translations[DEFAULT_LANGUAGE];

    const findValue = (dictionary) => key
        .split('.')
        .reduce((value, keyPart) => value?.[keyPart], dictionary);

    return findValue(languageDictionary) ?? findValue(fallbackDictionary) ?? '';
}

function getLabelLineWordMarkup(wordItem, index, isDuplicate = false) {
    return `
        <button class="label-word" type="button" data-label-word-index="${index}" aria-label="${wordItem.word}, ${wordItem.reading}"${isDuplicate ? ' tabindex="-1"' : ''}>
            <span class="label-word-jp">${wordItem.word}</span>
        </button>
    `;
}

function getLabelLineGroupMarkup(repeatCount, isDuplicate = false) {
    return Array.from({ length: repeatCount }, () => LABEL_LINE_WORDS
        .map((wordItem, index) => getLabelLineWordMarkup(wordItem, index, isDuplicate))
        .join(''))
        .join('');
}

function updateLabelLineModal() {
    const modal = document.querySelector('[data-label-line-modal]');

    if (!modal || !activeLabelLineWord) {
        return;
    }

    modal.querySelector('[data-label-modal-title]').textContent = getTranslation(currentLanguage, 'labelLine.modalTitle');
    modal.querySelector('[data-label-modal-word]').textContent = activeLabelLineWord.word;
    modal.querySelector('[data-label-modal-reading-label]').textContent = getTranslation(currentLanguage, 'labelLine.readingLabel');
    modal.querySelector('[data-label-modal-reading]').textContent = activeLabelLineWord.reading;
    modal.querySelector('[data-label-modal-meaning-label]').textContent = getTranslation(currentLanguage, 'labelLine.meaningLabel');
    modal.querySelector('[data-label-modal-meaning]').textContent = activeLabelLineWord.meaning[currentLanguage] || activeLabelLineWord.meaning[DEFAULT_LANGUAGE];
}

function positionLabelLineModal() {
    const labelLine = document.querySelector('#LabelLine');
    const modal = document.querySelector('[data-label-line-modal]');

    if (!labelLine || !modal || modal.hidden) {
        return;
    }

    const labelLinePosition = labelLine.getBoundingClientRect();
    const modalTop = Math.max(16, labelLinePosition.top - modal.offsetHeight - 12);

    modal.style.setProperty('--label-modal-top', `${modalTop}px`);
}

function showLabelLineModal(wordItem) {
    const labelLine = document.querySelector('#LabelLine');
    const modal = document.querySelector('[data-label-line-modal]');

    if (!labelLine || !modal) {
        return;
    }

    activeLabelLineWord = wordItem;
    updateLabelLineModal();
    labelLine.classList.add('is-paused');
    modal.hidden = false;
    positionLabelLineModal();
}

function hideLabelLineModal() {
    const labelLine = document.querySelector('#LabelLine');
    const modal = document.querySelector('[data-label-line-modal]');

    activeLabelLineWord = null;
    labelLine?.classList.remove('is-paused');

    if (modal) {
        modal.hidden = true;
    }
}

function shouldUseVideoPreview() {
    return ['file:', 'http:'].includes(window.location.protocol)
        && ['localhost', '127.0.0.1', '0.0.0.0', '[::1]'].includes(window.location.hostname);
}

function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const languageFromUrl = normalizeLanguage(params.get('lang'));

    if (languageFromUrl) {
        return languageFromUrl;
    }

    try {
        const savedLanguage = normalizeLanguage(localStorage.getItem('portfolioLanguage'));

        if (savedLanguage) {
            return savedLanguage;
        }
    } catch {
        return DEFAULT_LANGUAGE;
    }

    return DEFAULT_LANGUAGE;
}

function updateLanguageUrl(language) {
    try {
        const url = new URL(window.location.href);

        if (language === DEFAULT_LANGUAGE) {
            url.searchParams.delete('lang');
        } else {
            url.searchParams.set('lang', language);
        }

        window.history.replaceState(null, '', url.toString());
    } catch {
        // Keeping language changes functional is more important than URL cleanup.
    }
}

function saveLanguagePreference(language) {
    try {
        localStorage.setItem('portfolioLanguage', language);
    } catch {
        // The page can still switch languages if storage is unavailable.
    }
}

function syncVideoWithLanguage(language) {
    const nextVideoLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE;
    const iframeVideo = document.querySelector('#Video iframe');
    const videoButtons = document.querySelectorAll('[data-video-language]');
    const videoLink = document.querySelector('[data-video-link]');
    const videoPreview = document.querySelector('[data-video-preview]');
    const videoPreviewImage = document.querySelector('[data-video-preview-image]');
    const videoPlayer = iframeVideo?.closest('.video-player');

    if (!iframeVideo) {
        return;
    }

    currentVideoLanguage = nextVideoLanguage;
    const useVideoPreview = shouldUseVideoPreview();
    const videoSource = VIDEO_SOURCES[nextVideoLanguage] || VIDEO_SOURCES[DEFAULT_LANGUAGE];
    const videoHref = VIDEO_LINKS[nextVideoLanguage] || VIDEO_LINKS[DEFAULT_LANGUAGE];
    const videoThumbnail = VIDEO_THUMBNAILS[nextVideoLanguage] || VIDEO_THUMBNAILS[DEFAULT_LANGUAGE];
    const iframeSource = useVideoPreview ? 'about:blank' : videoSource;

    if (iframeVideo.getAttribute('src') !== iframeSource) {
        iframeVideo.src = iframeSource;
    }

    iframeVideo.setAttribute('title', getTranslation(nextVideoLanguage, 'video.title'));
    videoPlayer?.classList.toggle('uses-link-preview', useVideoPreview);

    if (videoLink) {
        videoLink.href = videoHref;
    }

    if (videoPreview) {
        videoPreview.href = videoHref;
        videoPreview.hidden = !useVideoPreview;
    }

    if (videoPreviewImage) {
        videoPreviewImage.src = videoThumbnail;
        videoPreviewImage.alt = getTranslation(nextVideoLanguage, 'video.previewAlt');
    }

    videoButtons.forEach((button) => {
        const isActive = normalizeLanguage(button.dataset.videoLanguage) === nextVideoLanguage;

        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function applyLanguage(language, options = {}) {
    const nextLanguage = normalizeLanguage(language) || DEFAULT_LANGUAGE;

    currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage === 'pt' ? 'pt-BR' : 'en';
    document.title = getTranslation(nextLanguage, 'meta.title');
    document.body.dataset.language = nextLanguage;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = getTranslation(nextLanguage, element.dataset.i18n);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        element.innerHTML = getTranslation(nextLanguage, element.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
        element.dataset.i18nAttr.split(';').forEach((attributePair) => {
            const separatorIndex = attributePair.indexOf(':');

            if (separatorIndex === -1) {
                return;
            }

            const attributeName = attributePair.slice(0, separatorIndex).trim();
            const translationKey = attributePair.slice(separatorIndex + 1).trim();

            element.setAttribute(attributeName, getTranslation(nextLanguage, translationKey));
        });
    });

    const menuButton = document.querySelector('#menuH');

    if (menuButton) {
        const menuIsOpen = document.body.classList.contains('menu-open');
        menuButton.setAttribute('aria-label', getTranslation(nextLanguage, menuIsOpen ? 'nav.closeMenuAria' : 'nav.openMenuAria'));
    }

    updateLabelLineModal();
    updateSkillExplorer();
    updateProjectExplorer();
    updateEducationTimeline();
    updateExperienceTimeline();
    syncVideoWithLanguage(nextLanguage);

    if (options.persist !== false) {
        saveLanguagePreference(nextLanguage);
    }

    if (options.updateUrl !== false) {
        updateLanguageUrl(nextLanguage);
    }
}

function setupSiteLanguage() {
    const languageToggle = document.querySelector('#languageToggle');

    applyLanguage(getInitialLanguage(), { persist: false, updateUrl: false });

    if (!languageToggle) {
        return;
    }

    languageToggle.addEventListener('click', () => {
        applyLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
    });
}

// Hamburger Menu Functionality
function setupHamburgerMenu() {
    const menuH = document.querySelector('#menuH');
    const greenLine = document.querySelector('#GreenLine');
    const nav = document.querySelector('nav');
    let isMenuOpen = false;

    if (!menuH || !greenLine || !nav) {
        return;
    }

    const isMobileMenu = () => window.innerWidth <= 820;

    const setMenuState = (nextState) => {
        isMenuOpen = nextState;
        menuH.classList.toggle('menuHX', isMenuOpen);
        greenLine.classList.toggle('GreenBlock', isMenuOpen);
        document.body.classList.toggle('menu-open', isMenuOpen);
        menuH.setAttribute('aria-expanded', String(isMenuOpen));
        menuH.setAttribute('aria-label', getTranslation(currentLanguage, isMenuOpen ? 'nav.closeMenuAria' : 'nav.openMenuAria'));
        nav.style.display = isMobileMenu() ? (isMenuOpen ? 'flex' : 'none') : '';
    };

    menuH.addEventListener('click', () => setMenuState(!isMenuOpen));

    menuH.addEventListener('keydown', (event) => {
        if (!['Enter', ' '].includes(event.key)) {
            return;
        }

        event.preventDefault();
        setMenuState(!isMenuOpen);
    });

    nav.addEventListener('click', (event) => {
        if (isMobileMenu() && event.target.closest('a')) {
            setMenuState(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 820) {
            setMenuState(false);
            nav.style.display = '';
        } else {
            nav.style.display = isMenuOpen ? 'flex' : 'none';
        }
    });
}

// Label Line Functionality
function setupLabelLine() {
    const line = document.querySelector('#inside');
    const labelLine = document.querySelector('#LabelLine');
    let currentRepeatCount = 1;
    let resizeTimeout;

    if (!line || !labelLine) {
        return;
    }

    const bindWordEvents = () => {
        labelLine.querySelectorAll('[data-label-word-index]').forEach((wordElement) => {
            const wordItem = LABEL_LINE_WORDS[Number(wordElement.dataset.labelWordIndex)];

            wordElement.addEventListener('mouseenter', () => showLabelLineModal(wordItem));
            wordElement.addEventListener('focus', () => showLabelLineModal(wordItem));
            wordElement.addEventListener('mouseleave', hideLabelLineModal);
            wordElement.addEventListener('blur', hideLabelLineModal);
        });
    };

    const renderLabelLine = (repeatCount) => {
        currentRepeatCount = repeatCount;
        hideLabelLineModal();

        line.innerHTML = `
            <div class="label-line-group">${getLabelLineGroupMarkup(repeatCount)}</div>
            <div class="label-line-group" aria-hidden="true">${getLabelLineGroupMarkup(repeatCount, true)}</div>
        `;

        bindWordEvents();
    };

    const fitLabelLineToViewport = () => {
        const firstGroup = line.querySelector('.label-line-group');

        if (!firstGroup) {
            return;
        }

        const singleSequenceWidth = firstGroup.scrollWidth / currentRepeatCount;

        if (!singleSequenceWidth) {
            return;
        }

        const targetRepeatCount = Math.max(2, Math.ceil((labelLine.offsetWidth * 1.6) / singleSequenceWidth));

        if (targetRepeatCount !== currentRepeatCount) {
            renderLabelLine(targetRepeatCount);
        }
    };

    if (!labelLine.querySelector('[data-label-line-modal]')) {
        labelLine.insertAdjacentHTML('beforeend', `
            <div class="label-line-modal" data-label-line-modal role="tooltip" hidden>
                <span class="label-line-modal-title" data-label-modal-title></span>
                <strong class="label-line-modal-word" data-label-modal-word></strong>
                <p><span data-label-modal-reading-label></span>: <b data-label-modal-reading></b></p>
                <p><span data-label-modal-meaning-label></span>: <b data-label-modal-meaning></b></p>
            </div>
        `);
    }

    renderLabelLine(currentRepeatCount);
    fitLabelLineToViewport();

    window.addEventListener('resize', () => {
        window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
            fitLabelLineToViewport();
            positionLabelLineModal();
        }, 150);
    });
}

function getSkillCategoryLabel(category) {
    return getTranslation(currentLanguage, `skills.categories.${category}`);
}

function getSkillLevelLabel(levelKey) {
    return getTranslation(currentLanguage, `skills.levels.${levelKey}`);
}

function getActiveSkillList() {
    if (activeSkillFilter === 'all') {
        return SKILLS_DATA;
    }

    return SKILLS_DATA.filter((skill) => skill.category === activeSkillFilter);
}

function renderSkillDetail(skill) {
    const skillDetail = document.querySelector('.skill-detail');

    if (!skillDetail || !skill) {
        return;
    }

    skillDetail.querySelector('[data-skill-category]').textContent = getSkillCategoryLabel(skill.category);
    skillDetail.querySelector('[data-skill-icon]').src = skill.icon;
    skillDetail.querySelector('[data-skill-icon]').alt = '';
    skillDetail.querySelector('[data-skill-name]').textContent = skill.name;
    skillDetail.querySelector('[data-skill-description]').textContent = skill.description[currentLanguage] || skill.description[DEFAULT_LANGUAGE];
    skillDetail.querySelector('[data-skill-level-label]').textContent = getSkillLevelLabel(skill.levelKey);
    skillDetail.querySelector('[data-skill-meter]').style.width = `${skill.level}%`;

    const tags = skillDetail.querySelector('[data-skill-tags]');
    tags.innerHTML = skill.tags.map((tag) => `<span>${tag}</span>`).join('');
}

function renderSkillFilters() {
    const filters = document.querySelector('[data-skills-filters]');

    if (!filters) {
        return;
    }

    filters.innerHTML = SKILL_FILTERS
        .map((filter) => `
            <button class="skill-filter ${filter === activeSkillFilter ? 'is-active' : ''}" type="button" data-skill-filter="${filter}" aria-pressed="${filter === activeSkillFilter}">
                ${getSkillCategoryLabel(filter)}
            </button>
        `)
        .join('');
}

function renderSkillGrid() {
    const grid = document.querySelector('[data-skills-grid]');

    if (!grid) {
        return;
    }

    const visibleSkills = getActiveSkillList();

    if (!visibleSkills.some((skill) => skill.id === activeSkillId)) {
        activeSkillId = visibleSkills[0]?.id || SKILLS_DATA[0].id;
    }

    grid.innerHTML = visibleSkills
        .map((skill) => `
            <button class="skill-card ${skill.id === activeSkillId ? 'is-active' : ''}" type="button" data-skill-id="${skill.id}" aria-pressed="${skill.id === activeSkillId}" aria-label="${getTranslation(currentLanguage, 'skills.selectAria')}: ${skill.name}">
                <span class="skill-card-icon"><img src="${skill.icon}" alt=""></span>
                <span class="skill-card-name">${skill.name}</span>
                <span class="skill-card-category">${getSkillCategoryLabel(skill.category)}</span>
            </button>
        `)
        .join('');
}

function updateSkillExplorer() {
    const section = document.querySelector('#skills');

    if (!section) {
        return;
    }

    renderSkillFilters();
    renderSkillGrid();
    renderSkillDetail(SKILLS_DATA.find((skill) => skill.id === activeSkillId) || SKILLS_DATA[0]);
}

function setupSkills() {
    const section = document.querySelector('#skills');

    if (!section) {
        return;
    }

    section.addEventListener('click', (event) => {
        const filterButton = event.target.closest('[data-skill-filter]');
        const skillButton = event.target.closest('[data-skill-id]');

        if (filterButton) {
            activeSkillFilter = filterButton.dataset.skillFilter;
            updateSkillExplorer();
            return;
        }

        if (skillButton) {
            activeSkillId = skillButton.dataset.skillId;
            updateSkillExplorer();
        }
    });

    updateSkillExplorer();
}

function getProjectCategoryLabel(category) {
    return getTranslation(currentLanguage, `projects.categories.${category}`);
}

function getLocalizedProjectField(project, field) {
    return project[field]?.[currentLanguage] || project[field]?.[DEFAULT_LANGUAGE] || '';
}

function getActiveProjectList() {
    if (activeProjectFilter === 'all') {
        return PROJECTS_DATA;
    }

    return PROJECTS_DATA.filter((project) => project.category === activeProjectFilter);
}

function getProjectFilterCount(filter) {
    if (filter === 'all') {
        return PROJECTS_DATA.length;
    }

    return PROJECTS_DATA.filter((project) => project.category === filter).length;
}

function renderProjectFeature(project) {
    const feature = document.querySelector('.project-feature');

    if (!feature || !project) {
        return;
    }

    const projectName = getLocalizedProjectField(project, 'name');
    const projectImage = feature.querySelector('[data-project-image]');
    const projectLink = feature.querySelector('[data-project-link]');

    projectImage.src = project.image;
    projectImage.alt = getLocalizedProjectField(project, 'alt');
    feature.querySelector('[data-project-category]').textContent = getProjectCategoryLabel(project.category);
    feature.querySelector('[data-project-name]').textContent = projectName;
    feature.querySelector('[data-project-description]').textContent = getLocalizedProjectField(project, 'description');
    feature.querySelector('[data-project-role]').textContent = getLocalizedProjectField(project, 'role');
    feature.querySelector('[data-project-result]').textContent = getLocalizedProjectField(project, 'result');
    feature.querySelector('[data-project-techs]').innerHTML = project.techs.map((tech) => `<span>${tech}</span>`).join('');

    projectLink.href = project.url;
    projectLink.setAttribute('aria-label', `${getTranslation(currentLanguage, 'projects.viewProject')}: ${projectName}`);
}

function renderProjectFilters() {
    const filters = document.querySelector('[data-project-filters]');

    if (!filters) {
        return;
    }

    filters.innerHTML = PROJECT_FILTERS
        .map((filter) => `
            <button class="project-filter ${filter === activeProjectFilter ? 'is-active' : ''}" type="button" data-project-filter="${filter}" aria-pressed="${filter === activeProjectFilter}">
                <span>${getProjectCategoryLabel(filter)}</span>
                <strong>${getProjectFilterCount(filter)}</strong>
            </button>
        `)
        .join('');
}

function renderProjectList() {
    const list = document.querySelector('[data-project-list]');

    if (!list) {
        return;
    }

    const visibleProjects = getActiveProjectList();

    if (!visibleProjects.some((project) => project.id === activeProjectId)) {
        activeProjectId = visibleProjects[0]?.id || PROJECTS_DATA[0].id;
    }

    list.innerHTML = visibleProjects
        .map((project, index) => {
            const projectName = getLocalizedProjectField(project, 'name');
            const projectTechs = project.techs.slice(0, 3).join(' / ');

            return `
                <button class="project-card ${project.id === activeProjectId ? 'is-active' : ''}" type="button" data-project-id="${project.id}" aria-pressed="${project.id === activeProjectId}" aria-label="${getTranslation(currentLanguage, 'projects.selectAria')}: ${projectName}">
                    <span class="project-card-index">${String(index + 1).padStart(2, '0')}</span>
                    <span class="project-card-image"><img src="${project.image}" alt=""></span>
                    <span class="project-card-content">
                        <strong>${projectName}</strong>
                        <small>${getProjectCategoryLabel(project.category)}</small>
                        <em>${projectTechs}</em>
                    </span>
                </button>
            `;
        })
        .join('');
}

function updateProjectExplorer() {
    const section = document.querySelector('#projetos');

    if (!section) {
        return;
    }

    renderProjectFilters();
    renderProjectList();
    renderProjectFeature(PROJECTS_DATA.find((project) => project.id === activeProjectId) || PROJECTS_DATA[0]);
}

function setupProjects() {
    const section = document.querySelector('#projetos');

    if (!section) {
        return;
    }

    section.addEventListener('click', (event) => {
        const filterButton = event.target.closest('[data-project-filter]');
        const projectButton = event.target.closest('[data-project-id]');

        if (filterButton) {
            activeProjectFilter = filterButton.dataset.projectFilter;
            updateProjectExplorer();
            return;
        }

        if (projectButton) {
            activeProjectId = projectButton.dataset.projectId;
            updateProjectExplorer();
        }
    });

    section.addEventListener('pointerover', (event) => {
        if (event.pointerType === 'touch') {
            return;
        }

        const projectButton = event.target.closest('[data-project-id]');

        if (projectButton && projectButton.dataset.projectId !== activeProjectId) {
            activeProjectId = projectButton.dataset.projectId;
            updateProjectExplorer();
        }
    });

    updateProjectExplorer();
}

function getLocalizedEducationField(educationItem, field) {
    return educationItem[field]?.[currentLanguage] || educationItem[field]?.[DEFAULT_LANGUAGE] || '';
}

function renderEducationFeature(educationItem) {
    const feature = document.querySelector('.education-feature');

    if (!feature || !educationItem) {
        return;
    }

    const educationIcon = feature.querySelector('[data-education-icon]');

    educationIcon.src = educationItem.icon;
    educationIcon.alt = '';
    feature.querySelector('[data-education-category]').textContent = getLocalizedEducationField(educationItem, 'category');
    feature.querySelector('[data-education-title]').textContent = getLocalizedEducationField(educationItem, 'title');
    feature.querySelector('[data-education-school]').textContent = getLocalizedEducationField(educationItem, 'school');
    feature.querySelector('[data-education-description]').textContent = getLocalizedEducationField(educationItem, 'description');
    feature.querySelector('[data-education-date]').textContent = getLocalizedEducationField(educationItem, 'date');
    feature.querySelector('[data-education-focus]').textContent = getLocalizedEducationField(educationItem, 'focus');
}

function renderEducationTimeline() {
    const list = document.querySelector('[data-education-list]');

    if (!list) {
        return;
    }

    list.innerHTML = EDUCATION_DATA
        .map((educationItem, index) => {
            const title = getLocalizedEducationField(educationItem, 'title');

            return `
                <button class="education-card ${educationItem.id === activeEducationId ? 'is-active' : ''}" type="button" data-education-id="${educationItem.id}" aria-pressed="${educationItem.id === activeEducationId}" aria-label="${getTranslation(currentLanguage, 'education.selectAria')}: ${title}">
                    <span class="education-card-step">${String(index + 1).padStart(2, '0')}</span>
                    <span class="education-card-icon"><img src="${educationItem.icon}" alt=""></span>
                    <span class="education-card-content">
                        <strong>${title}</strong>
                        <small>${getLocalizedEducationField(educationItem, 'school')}</small>
                        <em>${getLocalizedEducationField(educationItem, 'date')}</em>
                    </span>
                </button>
            `;
        })
        .join('');
}

function updateEducationTimeline() {
    const section = document.querySelector('#Academico');

    if (!section) {
        return;
    }

    if (!EDUCATION_DATA.some((educationItem) => educationItem.id === activeEducationId)) {
        activeEducationId = EDUCATION_DATA[0].id;
    }

    renderEducationTimeline();
    renderEducationFeature(EDUCATION_DATA.find((educationItem) => educationItem.id === activeEducationId) || EDUCATION_DATA[0]);
}

function setupEducation() {
    const section = document.querySelector('#Academico');

    if (!section) {
        return;
    }

    section.addEventListener('click', (event) => {
        const educationButton = event.target.closest('[data-education-id]');

        if (educationButton) {
            activeEducationId = educationButton.dataset.educationId;
            updateEducationTimeline();
        }
    });

    section.addEventListener('pointerover', (event) => {
        if (event.pointerType === 'touch') {
            return;
        }

        const educationButton = event.target.closest('[data-education-id]');

        if (educationButton && educationButton.dataset.educationId !== activeEducationId) {
            activeEducationId = educationButton.dataset.educationId;
            updateEducationTimeline();
        }
    });

    updateEducationTimeline();
}

function getLocalizedExperienceField(experienceItem, field) {
    return experienceItem[field]?.[currentLanguage] || experienceItem[field]?.[DEFAULT_LANGUAGE] || '';
}

function renderExperienceFeature(experienceItem) {
    const feature = document.querySelector('.experience-feature');

    if (!feature || !experienceItem) {
        return;
    }

    const experienceIcon = feature.querySelector('[data-experience-icon]');
    const experienceLink = feature.querySelector('[data-experience-link]');
    const company = getLocalizedExperienceField(experienceItem, 'company');

    experienceIcon.src = experienceItem.icon;
    experienceIcon.alt = '';
    feature.querySelector('[data-experience-category]').textContent = getLocalizedExperienceField(experienceItem, 'category');
    feature.querySelector('[data-experience-role]').textContent = getLocalizedExperienceField(experienceItem, 'role');
    feature.querySelector('[data-experience-company]').textContent = company;
    feature.querySelector('[data-experience-description]').textContent = getLocalizedExperienceField(experienceItem, 'description');
    feature.querySelector('[data-experience-date]').textContent = getLocalizedExperienceField(experienceItem, 'date');
    feature.querySelector('[data-experience-result]').textContent = getLocalizedExperienceField(experienceItem, 'result');
    feature.querySelector('[data-experience-tags]').innerHTML = experienceItem.tags.map((tag) => `<span>${tag}</span>`).join('');

    if (experienceLink) {
        experienceLink.hidden = !experienceItem.url;
        experienceLink.href = experienceItem.url || '#';
        experienceLink.setAttribute('aria-label', `${getTranslation(currentLanguage, 'experience.viewCompany')}: ${company}`);
    }
}

function renderExperienceTimeline() {
    const list = document.querySelector('[data-experience-list]');

    if (!list) {
        return;
    }

    list.innerHTML = EXPERIENCE_DATA
        .map((experienceItem, index) => {
            const role = getLocalizedExperienceField(experienceItem, 'role');

            return `
                <button class="experience-card ${experienceItem.id === activeExperienceId ? 'is-active' : ''}" type="button" data-experience-id="${experienceItem.id}" aria-pressed="${experienceItem.id === activeExperienceId}" aria-label="${getTranslation(currentLanguage, 'experience.selectAria')}: ${role}">
                    <span class="experience-card-step">${String(index + 1).padStart(2, '0')}</span>
                    <span class="experience-card-content">
                        <strong>${getLocalizedExperienceField(experienceItem, 'company')}</strong>
                        <small>${role}</small>
                        <em>${getLocalizedExperienceField(experienceItem, 'date')}</em>
                    </span>
                </button>
            `;
        })
        .join('');
}

function updateExperienceTimeline() {
    const section = document.querySelector('#ExpProfissionais');

    if (!section) {
        return;
    }

    if (!EXPERIENCE_DATA.some((experienceItem) => experienceItem.id === activeExperienceId)) {
        activeExperienceId = EXPERIENCE_DATA[0].id;
    }

    renderExperienceTimeline();
    renderExperienceFeature(EXPERIENCE_DATA.find((experienceItem) => experienceItem.id === activeExperienceId) || EXPERIENCE_DATA[0]);
}

function setupExperience() {
    const section = document.querySelector('#ExpProfissionais');

    if (!section) {
        return;
    }

    section.addEventListener('click', (event) => {
        const experienceButton = event.target.closest('[data-experience-id]');

        if (experienceButton) {
            activeExperienceId = experienceButton.dataset.experienceId;
            updateExperienceTimeline();
        }
    });

    section.addEventListener('pointerover', (event) => {
        if (event.pointerType === 'touch') {
            return;
        }

        const experienceButton = event.target.closest('[data-experience-id]');

        if (experienceButton && experienceButton.dataset.experienceId !== activeExperienceId) {
            activeExperienceId = experienceButton.dataset.experienceId;
            updateExperienceTimeline();
        }
    });

    updateExperienceTimeline();
}

// Language Video Button Functionality
function setupLanguageButton() {
    const videoButtons = document.querySelectorAll('[data-video-language]');

    if (!videoButtons.length) {
        return;
    }

    videoButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const nextVideoLanguage = normalizeLanguage(button.dataset.videoLanguage);

            if (!nextVideoLanguage || nextVideoLanguage === currentVideoLanguage) {
                return;
            }

            syncVideoWithLanguage(nextVideoLanguage);
        });
    });
}

// Initialize all functionalities
function init() {
    setupSiteLanguage();
    setupHamburgerMenu();
    setupLabelLine();
    setupSkills();
    setupProjects();
    setupEducation();
    setupExperience();
    setupLanguageButton();
}

init();
