// Technology data with SVG icons
const technologies = {
    'Linguagens': [
        { name: 'C#', category: 'Backend', icon: 'code' },
        { name: 'Java', category: 'Backend', icon: 'code' },
        { name: 'Python', category: 'Backend', icon: 'code' },
        { name: 'C++', category: 'Sistema', icon: 'code' },
    ],
    'Frontend': [
        { name: 'React', category: 'Framework', icon: 'globe' },
    ],
    'Backend': [
        { name: 'ASP.NET', category: 'Framework', icon: 'server' },
        { name: 'Node.js', category: 'Runtime', icon: 'server' },
        { name: 'Spring Boot', category: 'Framework', icon: 'layers' },
    ],
    'Bancos de Dados': [
        { name: 'SQL Server', category: 'Relacional', icon: 'database' },
        { name: 'MySQL', category: 'Relacional', icon: 'database' },
        { name: 'PostgreSQL', category: 'Relacional', icon: 'database' },
        { name: 'MongoDB', category: 'NoSQL', icon: 'database' },
    ],
    'DevOps & Cloud': [
        { name: 'Docker', category: 'Container', icon: 'container' },
        { name: 'Kubernetes', category: 'Orquestração', icon: 'layers' },
        { name: 'AWS', category: 'Cloud', icon: 'cloud' },
        { name: 'Postman', category: 'Testes', icon: 'test-tube' },
    ],
};

// SVG Icons
const icons = {
    code: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="16,18 22,12 16,6"></polyline>
        <polyline points="8,6 2,12 8,18"></polyline>
    </svg>`,
    
    database: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>`,
    
    server: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1"></rect>
        <rect x="2" y="9" width="20" height="4" rx="1"></rect>
        <rect x="2" y="15" width="20" height="4" rx="1"></rect>
        <line x1="6" y1="5" x2="6" y2="5"></line>
        <line x1="6" y1="11" x2="6" y2="11"></line>
        <line x1="6" y1="17" x2="6" y2="17"></line>
    </svg>`,
    
    globe: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>`,
    
    layers: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12,2 2,7 12,12 22,7 12,2"></polygon>
        <polyline points="2,17 12,22 22,17"></polyline>
        <polyline points="2,12 12,17 22,12"></polyline>
    </svg>`,
    
    container: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 3 2 3 2 15 22 15 22 3z"></path>
        <path d="M2 3h20v4H2z"></path>
        <circle cx="4" cy="5" r="1"></circle>
        <circle cx="6" cy="5" r="1"></circle>
        <circle cx="8" cy="5" r="1"></circle>
        <path d="M5 9h14v6H5z"></path>
    </svg>`,
    
    cloud: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>`,
    
    'test-tube': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"></path>
        <path d="M8.5 2h7"></path>
        <path d="M14.5 16h-5"></path>
    </svg>`
};

// Create tech card element
function createTechCard(tech) {
    const card = document.createElement('div');
    card.className = 'tech-card';
    
    card.innerHTML = `
        <div class="tech-card-bg-element"></div>
        <div class="tech-card-corner"></div>
        <div class="tech-icon">
            ${icons[tech.icon]}
        </div>
        <div class="tech-card-content">
            <h4 class="tech-name">${tech.name}</h4>
            <p class="tech-category">${tech.category}</p>
        </div>
        <div class="tech-card-accents"></div>
        <div class="tech-card-accent-line"></div>
        <div class="tech-card-scan"></div>
    `;
    
    return card;
}

// Create category section
function createCategorySection(categoryName, techs, index) {
    const section = document.createElement('div');
    section.className = 'category-section';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    
    const badge = document.createElement('div');
    badge.className = 'category-badge';
    badge.textContent = (index + 1).toString().padStart(2, '0');
    
    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = categoryName;
    
    const divider = document.createElement('div');
    divider.className = 'category-divider';
    
    const endElement = document.createElement('div');
    endElement.className = 'category-end';
    endElement.innerHTML = `
        <div class="category-end-diamond"></div>
        <div class="category-end-chevron"></div>
    `;
    
    header.appendChild(badge);
    header.appendChild(title);
    header.appendChild(divider);
    header.appendChild(endElement);
    
    const gridContainer = document.createElement('div');
    gridContainer.className = 'tech-grid-container';
    
    techs.forEach(tech => {
        const card = createTechCard(tech);
        gridContainer.appendChild(card);
    });
    
    section.appendChild(header);
    section.appendChild(gridContainer);
    
    return section;
}

// Initialize the application
function init() {
    const categoriesContainer = document.getElementById('techCategories');
    
    Object.entries(technologies).forEach(([categoryName, techs], index) => {
        const categorySection = createCategorySection(categoryName, techs, index);
        categoriesContainer.appendChild(categorySection);
    });
    
    // Animate cards on scroll
    observeCards();
    
    // Add initial animations
    setTimeout(() => {
        animateCardsSequentially();
    }, 500);
}

// Intersection Observer for scroll animations
function observeCards() {
    const cards = document.querySelectorAll('.tech-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Sequential card animation
function animateCardsSequentially() {
    const cards = document.querySelectorAll('.tech-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s ease-out forwards`;
            card.classList.add('visible');
        }, index * 50);
    });
}

// Add hover effects and interactions
function addInteractions() {
    const cards = document.querySelectorAll('.tech-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translate(-2px, -2px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0) scale(1)';
        });
        
        // Add click animation
        card.addEventListener('click', () => {
            card.style.animation = 'glitch 0.4s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 400);
        });
    });
}

// Glitch effect for title
function addGlitchEffect() {
    const title = document.querySelector('.main-title');
    
    title.addEventListener('click', () => {
        title.style.animation = 'glitch 0.4s ease-in-out';
        setTimeout(() => {
            title.style.animation = '';
        }, 400);
    });
}

// Parallax effect for background elements
function addParallaxEffect() {
    const bgElements = document.querySelectorAll('.bg-element');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        bgElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrollY * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${45 + (scrollY * 0.1)}deg)`;
        });
    });
}

// Enhanced loading animation
function enhanceLoadingAnimation() {
    const bars = document.querySelectorAll('.loading-bar');
    
    setInterval(() => {
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transform = 'scaleY(1.2)';
                setTimeout(() => {
                    bar.style.transform = 'scaleY(1)';
                }, 150);
            }, index * 100);
        });
    }, 2000);
}

// Performance optimization for animations
function optimizeAnimations() {
    // Reduce motion if user prefers
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    addInteractions();
    addGlitchEffect();
    addParallaxEffect();
    enhanceLoadingAnimation();
    optimizeAnimations();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate animations if needed
    const cards = document.querySelectorAll('.tech-card');
    cards.forEach(card => {
        card.style.transition = 'none';
        setTimeout(() => {
            card.style.transition = '';
        }, 100);
    });
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { init, technologies, icons };
}