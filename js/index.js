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
            title: 'Skills'
        },
        projects: {
            amparo: {
                description: 'Esta plataforma web foi desenvolvida para auxiliar a população do Rio Grande do Sul durante as inundações que assolaram o estado, além de oferecer um canal de informações para aqueles que querem ajudar.',
                techs: 'HTML, CSS, NodeJS'
            },
            vel: {
                description: 'Uma plataforma dedicada à melhoria da gestão de empresas de entregas rápidas, ajudando entregadores e restaurantes a controlar melhor seus negócios. Nosso objetivo é oferecer uma estrada mais suave e direções claras para o sucesso!',
                techs: 'React, AWS, JAVA, Springboot, MySQL e Docker.'
            },
            cemiterios: {
                description: 'Landing Page de um site sobre jazigos e crematórios. Ficou em primeiro lugar de pesquisas de cemitérios ou crematórios da zona sul.',
                techs: 'HTML, CSS, Javascript e SEO.'
            },
            cubobank: {
                description: 'Projeto de ajustes e melhorias de um caixa eletrônico com muitas funcionalidades e armazenamento de dados em cache.',
                techs: 'HTML, CSS e Javascript.'
            },
            freedonlents: {
                description: 'Landing page com um design voltado a chamar a atenção do usuário para uma compra, visando responsividade em múltiplas telas e plataformas.',
                techs: 'HTML, CSS e Javascript.'
            },
            darkSouls: {
                name: 'Projeto Dark Souls 3',
                description: 'O site mostra todos os bosses do game e uma breve introdução com algumas de suas características.',
                techs: 'HTML, CSS e Javascript.'
            },
            oldSchool: {
                description: 'Site de notícias com um design voltado a cartoons old school preto e branco, visando responsividade em múltiplas telas e plataformas.',
                techs: 'HTML, CSS e Javascript.'
            }
        },
        education: {
            title: 'Vida Acadêmica',
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
                title: 'Aluno Destaque <br> PROA 2024'
            }
        },
        experience: {
            title: 'Experiências Profissionais',
            rb: {
                date: '12/2024 - Atual',
                role: 'Estágiario de desenvolvimento de software',
                description: 'Atuei na área de desenvolvimento da empresa, trabalhando com queries SQL, agendamento de dados, análise de grandes volumes de informação e geração de relatórios a partir de requisições SQL. Além disso, participei do desenvolvimento de software e aplicações web, utilizando a arquitetura MVC e tecnologias da Microsoft, como .NET e C#. Também contribuí para a implementação de inteligência artificial nos processos da empresa, focando em automação e inovação.'
            },
            vel: {
                date: '02/2024 - 07/2024',
                role: 'Desenvolvedor Full Stack e Scrum Master',
                description: 'Atuei como Scrum Master no Projeto Demoday do Instituto PROA, organizando tarefas, motivando a equipe e utilizando metodologias ágeis como Scrum e Matriz GUT. Gerenciei informações no Trello, conduzi dailys em inglês e promovi dinâmicas para fortalecer o grupo. Além da gestão, desenvolvi o front-end em React, auxiliei na criação de APIs em Java com Spring Boot e no banco de dados MySQL.'
            },
            freelance: {
                date: '01/2022 - Atual',
                role: 'Desenvolvedor Freelancer',
                description: 'Ao longo da minha trajetória, trabalhei diretamente com clientes, desenvolvendo landing pages e páginas web que não apenas impressionam visualmente, mas também entregam resultados. Criei sites 100% responsivos, rápidos e otimizados para SEO, garantindo uma experiência de usuário excepcional e alta conversão de visitantes em clientes.'
            },
            concentrix: {
                date: '01/2023 - 12/2023',
                role: 'Aprendiz TI',
                description: 'Fui responsável pela gestão de VLANs via DHCP, verificação de pontos de rede e organização da infraestrutura de TI. Atuei no gerenciamento de computadores e usuários, manutenção de hardware e software, além da automação de tarefas. Participei de reuniões bilíngues e lidei com tickets, formatação e instalação de sistemas.'
            }
        },
        curiosities: {
            title: 'Curiosidades',
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
            title: 'Skills'
        },
        projects: {
            amparo: {
                description: 'This web platform was developed to assist the population of Rio Grande do Sul during the floods that affected the state, as well as to provide an information channel for those who want to help.',
                techs: 'HTML, CSS, NodeJS'
            },
            vel: {
                description: 'A platform dedicated to improving the management of fast delivery companies, helping couriers and restaurants better control their businesses. Our goal is to offer a smoother road and clear directions to success!',
                techs: 'React, AWS, JAVA, Spring Boot, MySQL, and Docker.'
            },
            cemiterios: {
                description: 'Landing page for a website about burial plots and crematoriums. Ranked first in searches for cemeteries or crematoriums in the southern zone.',
                techs: 'HTML, CSS, Javascript, and SEO.'
            },
            cubobank: {
                description: 'Project focused on adjustments and improvements for an ATM with many functionalities and data caching.',
                techs: 'HTML, CSS, and Javascript.'
            },
            freedonlents: {
                description: 'Landing page with a design aimed at capturing user attention for a purchase, ensuring responsiveness across multiple screens and platforms.',
                techs: 'HTML, CSS, and Javascript.'
            },
            darkSouls: {
                name: 'Dark Souls 3 Project',
                description: 'The website displays all the bosses from the game, providing a brief introduction and some of their characteristics.',
                techs: 'HTML, CSS, and Javascript.'
            },
            oldSchool: {
                description: 'News website with a design inspired by old-school black and white cartoons, ensuring responsiveness across multiple screens and platforms.',
                techs: 'HTML, CSS, and Javascript.'
            }
        },
        education: {
            title: 'Academic Life',
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
                title: 'Outstanding Student <br> PROA 2024'
            }
        },
        experience: {
            title: 'Professional Experiences',
            rb: {
                date: '12/2024 - Present',
                role: 'Software Development Intern',
                description: "I worked in the company's development area, handling SQL queries, data scheduling, analyzing large volumes of information, and generating reports from SQL requests. Additionally, I participated in software and web application development, utilizing the MVC architecture and Microsoft technologies such as .NET and C#. I also contributed to implementing artificial intelligence in the company's processes, focusing on automation and innovation."
            },
            vel: {
                date: '02/2024 - 07/2024',
                role: 'Full Stack Developer and Scrum Master',
                description: 'I worked as a Scrum Master in the Instituto PROA Demoday Project, organizing tasks, motivating the team, and using agile methodologies such as Scrum and the GUT Matrix. I managed information on Trello, conducted daily meetings in English, and promoted activities to strengthen the group. Besides management, I developed the front-end in React, assisted in creating APIs in Java with Spring Boot, and worked with MySQL databases.'
            },
            freelance: {
                date: '01/2022 - Present',
                role: 'Freelance Developer',
                description: 'Throughout my journey, I have worked directly with clients, developing landing pages and web pages that not only impress visually but also deliver results. I created 100% responsive, fast, and SEO-optimized websites, ensuring an exceptional user experience and high conversion rates.'
            },
            concentrix: {
                date: '01/2023 - 12/2023',
                role: 'IT Apprentice',
                description: 'I was responsible for VLAN management via DHCP, network point verification, and IT infrastructure organization. I worked on computer and user management, hardware and software maintenance, as well as task automation. I participated in bilingual meetings and handled tickets, formatting, and system installations.'
            }
        },
        curiosities: {
            title: 'Curiosities',
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

// Typing Effect Functionality
async function setupWritingEffect() {
    const words = ['JAVASCRIPT', 'C#', 'PYTHON', 'JAVA', 'HTML', 'CSS', 'NODEJS', 'REACT', 'BOOTSTRAP', 'ASP .NET', 'FIGMA', 'GIT', 'POSTGRESQL', 'MONGODB', 'SQL SERVER', 'REGEX', 'POSTMAN'];
    const location = document.querySelector('#screenTxt');
    const speed = 100;

    if (!location) {
        return;
    }

    const typeWriter = (word) => {
        return new Promise((resolve) => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < word.length) {
                    location.innerHTML += word.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, speed);
        });
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    while (true) {
        for (const word of words) {
            location.innerHTML = '';
            await typeWriter(word);
            await delay(3000);
        }
    }
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

// Slider Functionality
function setupSlider() {
    let slideIndex = 0;
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.projeto').length;

    if (!slides || !totalSlides) {
        return { moveSlide: () => {} };
    }

    const moveSlide = (n) => {
        slideIndex += n;

        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        }

        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    };

    return { moveSlide };
}

// Initialize all functionalities
function init() {
    setupSiteLanguage();
    setupHamburgerMenu();
    setupLabelLine();
    setupWritingEffect();
    setupLanguageButton();

    const { moveSlide } = setupSlider();
    const previousButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    previousButton?.addEventListener('click', () => moveSlide(-1));
    nextButton?.addEventListener('click', () => moveSlide(1));
}

init();
