// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initGridBackground();
    initButtonInteractions();
    initScrollAnimations();
    initRandomAnimations();
});

// Gerar grid de fundo dinamicamente
function initGridBackground() {
    const gridContainer = document.getElementById('gridContainer');
    const gridItems = 48; // 12 colunas x 4 linhas
    
    for (let i = 0; i < gridItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.style.animationDelay = `${i * 0.1}s`;
        gridContainer.appendChild(gridItem);
    }
}

// Interações do botão
function initButtonInteractions() {
    const button = document.querySelector('.cta-button');
    const buttonWrapper = document.querySelector('.button-wrapper');
    
    if (button && buttonWrapper) {
        // Efeito de hover melhorado
        button.addEventListener('mouseenter', function() {
            // Adicionar efeito de glitch temporário
            this.style.textShadow = '2px 0 #00ff41, -2px 0 #ff0041';
            setTimeout(() => {
                this.style.textShadow = 'none';
            }, 150);
        });
        
        // Efeito de clique
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Animações baseadas em scroll
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar elementos para animação
    const elementsToAnimate = document.querySelectorAll('.heading-line, .button-wrapper, .tech-accents');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Animações aleatórias para elementos tech
function initRandomAnimations() {
    const shapes = document.querySelectorAll('.shape');
    const techBars = document.querySelectorAll('.accent-bar');
    
    // Animação aleatória das formas
    shapes.forEach((shape, index) => {
        setInterval(() => {
            const randomDelay = Math.random() * 2000;
            setTimeout(() => {
                shape.style.opacity = Math.random() * 0.5 + 0.2;
                shape.style.transform += ` scale(${0.8 + Math.random() * 0.4})`;
                
                setTimeout(() => {
                    shape.style.transform = shape.style.transform.replace(/scale\([^)]*\)/, '');
                }, 500);
            }, randomDelay);
        }, 3000 + index * 1000);
    });
    
    // Animação das barras tecnológicas
    techBars.forEach((bar, index) => {
        setInterval(() => {
            const originalHeight = bar.style.height || getComputedStyle(bar).height;
            const randomHeight = Math.random() * 40 + 20;
            
            bar.style.height = `${randomHeight}px`;
            bar.style.opacity = Math.random() * 0.5 + 0.3;
            
            setTimeout(() => {
                bar.style.height = originalHeight;
                bar.style.opacity = '0.3';
            }, 300);
        }, 2000 + index * 400);
    });
}

// Efeito de glitch no texto
function glitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let glitchText = '';
    
    for (let i = 0; i < originalText.length; i++) {
        if (Math.random() > 0.8 && originalText[i] !== ' ') {
            glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
            glitchText += originalText[i];
        }
    }
    
    element.textContent = glitchText;
    
    setTimeout(() => {
        element.textContent = originalText;
    }, 100);
}

// Efeito de digitação para o título
function typewriterEffect() {
    const headingLines = document.querySelectorAll('.heading-line');
    
    headingLines.forEach((line, lineIndex) => {
        const text = line.textContent.trim();
        line.textContent = '';
        line.style.borderRight = '2px solid #00ff41';
        
        setTimeout(() => {
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                line.textContent += text[charIndex];
                charIndex++;
                
                if (charIndex === text.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        line.style.borderRight = 'none';
                    }, 500);
                }
            }, 50);
        }, lineIndex * 1000);
    });
}


// Efeito de hover global para elementos interativos
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: #00ff41;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.5;
            transition: all 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(newCursor);
    }
    
    const currentCursor = document.querySelector('.custom-cursor');
    currentCursor.style.left = e.clientX - 5 + 'px';
    currentCursor.style.top = e.clientY - 5 + 'px';
});