// js/carrossel.js

// Project data
const projects = [
    {
        name: "Projeto Amparo Ao RS",
        technologies: ["HTML", "CSS", "NODEJS", "GEMINI API"],
        description: "Esta plataforma web foi desenvolvida para auxiliar a população do Rio Grande do Sul durante as inundações que assolaram o estado, além de oferecer um canal de informações para aqueles que querem ajudar.",
        image: "./assets/images/Projetos/AmparoRS_ProjetoFoto.png",
        url: "https://diogojp202.github.io/ProjetoAmparoAoRS/"
    },
    {
        name: "VEL",
        technologies: ["React", "AWS", "JAVA", "SPRINGBOOT", "MySQL", "Docker"],
        description: "Uma plataforma dedicada à melhoria da gestão de empresas de entregas rápidas, ajudando entregadores e restaurantes a controlar melhor seus negócios. Nosso objetivo é oferecer uma estrada mais suave e direções claras para o sucesso!",
        image: "./assets/images/Projetos/VEL_ProjetoFoto.png",
        url: "https://vel-desktop.vercel.app/"
    },
    {
        name: "Reporte Semanal",
        technologies: ["C#", "ASP.NET", "API GEMINI", "Docker", "Javascript"],
        description: "Um programa que automatiza a geração de páginas HTML no formato desejado, eliminando tarefas repetitivas e acelerando o processo de criação. Desenvolvido para otimizar tempo e aumentar a eficiência na produção de páginas.",
        image: "./assets/images/Projetos/Reporte_ProjetoFoto.png",
        url: "https://reporte-semanal.onrender.com/"
    },
    {
        name: "Gerenciamento De Usuarios",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        description: "Projecto Gerenciamento de usuário estilizado e voltado para torras de café.",
        image: "./assets/images/Projetos/Coffee4Code_ProjetoFoto.png",
        url: "https://coffee4c0de.github.io/GerenciamentoDeUsuarios/"
    },
    {
        name: "Cemiterios e Crematorios Zona Sul",
        technologies: ["HTML", "CSS", "Javascript", "SEO"],
        description: "Landing Page de um site sobre jazigos e crematórios. Ficou em primeiro lugar de pesquisas de cemitérios ou crematórios da zona sul.",
        image: "./assets/images/Projetos/Jazigo_ProjetoFoto.png",
        url: "tps://cemiterioszonasulsp.com.br/"
    },
    {
        name: "CuboBank",
        technologies: ["HTML", "CSS", "Javascript"],
        description: "Projeto de ajustes e melhorias de um caixa eletrônico com muitas funcionalidades e armazenamento de dados em cache.",
        image: "./assets/images/Projetos/CubeBank_ProjetoFoto.png",
        url: "https://diogojp202.github.io/CuboBank/"
    },
    {
        name: "FreedonLents",
        technologies: ["HTML", "CSS", "Javascript"],
        description: "Landing page com um design voltado a chamar a atenção do usuário para uma compra, visando responsividade em multiplas telas e plataformas.",
        image: "./assets/images/Projetos/FreedonLents_ProjetoFoto.png",
        url: "https://diogojp202.github.io/FreedonLents/"
    },
    {
        name: "Projeto Dark Souls 3",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        description: "O site mostra todos os Bosses do game e mostra uma breve introdução e algumas de suas características.",
        image: "./assets/images/Projetos/DarkSOULS_ProjetoFoto.png",
        url: "https://projeto-dark-souls-3.vercel.app/"
    },
    {
        name: "Old School Comics",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        description: "Sites de notícias com um design voltado a cartoons old school prento e branco, visando responsividade em multiplas telas e plataformas.",
        image: "./assets/images/Projetos/OldComics_ProjetoFoto.png",
        url: "https://diogojp202.github.io/MultiversoNews/"
    }
];

// Carousel state
let currentIndex = 0;
let itemsPerView = 1;
let isTransitioning = false;

// DOM elements
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize carousel
function init() {
    calculateItemsPerView();
    generateProjectCards();
    updateCarousel();
    attachEventListeners();

    // Handle window resize
    window.addEventListener('resize', () => {
        calculateItemsPerView();
        // Adiciona uma transição suave para evitar saltos bruscos no redimensionamento
        carouselTrack.style.transition = 'none'; 
        updateCarousel();
        // Força o navegador a aplicar o estilo antes de reativar a transição
        carouselTrack.offsetHeight; 
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
    });
}

// Calculate how many items to show based on screen size
function calculateItemsPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
        itemsPerView = 3;
    } else if (screenWidth >= 768) {
        itemsPerView = 2;
    } else {
        itemsPerView = 1;
    }
}

// Generate project card HTML
function createProjectCard(project) {
    return `
    <div class="project-card">
      <div class="card-frame">
        <div class="card-image-container">
          <img src="${project.image}" alt="${project.name}" class="card-image" />
          <div class="image-overlay"></div>
          <div class="card-hexagon eva-hexagon"></div>
        </div>
        
        <div class="card-content">
          <div class="card-header">
            <h3 class="eva-title matrix-glow glitch-effect card-title" data-text="${project.name}">
              ${project.name}
            </h3>
            
            <div class="tech-badges">
              ${project.technologies.map(tech => `
                <span class="tech-badge eva-accent">${tech}</span>
              `).join('')}
            </div>
          </div>
          
          <div class="card-divider"></div>
          
          <p class="eva-body card-description">
            ${project.description}
          </p>
          
          <div class="card-footer">
            <div class="eva-accent card-status">
              <span class="matrix-glow">></span> STATUS: ACTIVE
            </div>
            
            <button class="project-button eva-accent" onclick="openProject('${project.url}')">
              <span>ACESSAR PROJETO</span>
              <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Generate all project cards
function generateProjectCards() {
    carouselTrack.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

// **MODIFICADO**: Update carousel position
function updateCarousel() {
    const card = carouselTrack.querySelector('.project-card');
    if (!card) return; // Se não houver cards, não faz nada

    // Mede a largura real de um card, incluindo margens, para um cálculo preciso
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const cardMargin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
    const totalCardSpace = cardWidth + cardMargin;

    // Calcula o deslocamento em pixels para evitar o problema do "deslizamento extra"
    const translateX = -currentIndex * totalCardSpace;
    carouselTrack.style.transform = `translateX(${translateX}px)`;
    
    // A lógica para desabilitar os botões foi removida para permitir o loop infinito
}


// **MODIFICADO**: Navigation functions
function goToPrev() {
    const maxIndex = Math.max(0, projects.length - itemsPerView);
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex--;

    // Se o índice for menor que 0 (clicou para voltar no primeiro item),
    // ele vai para o último item possível.
    if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    updateCarousel();

    setTimeout(() => {
        isTransitioning = false;
    }, 500); // Duração da animação
}

function goToNext() {
    const maxIndex = Math.max(0, projects.length - itemsPerView);
    if (isTransitioning) return;

    isTransitioning = true;
    currentIndex++;

    // Se o índice passar do último item possível,
    // ele volta para o início (índice 0).
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    updateCarousel();

    setTimeout(() => {
        isTransitioning = false;
    }, 500); // Duração da animação
}

// Open project URL
function openProject(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

// Attach event listeners
function attachEventListeners() {
    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrev();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carouselTrack.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                goToNext(); // Swipe left - go to next
            } else {
                goToPrev(); // Swipe right - go to previous
            }
        }
    });

    // Prevent default touch behavior on the carousel
    carouselTrack.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);