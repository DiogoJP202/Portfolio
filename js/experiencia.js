// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Add parallax effect to background grid
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const backgroundGrid = document.querySelector('.background-grid');
        if (backgroundGrid) {
            backgroundGrid.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Enhanced hover effects for experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const neonCorner = card.querySelector('.neon-corner');
            if (neonCorner) {
                neonCorner.style.boxShadow = '0 0 20px var(--neon-green)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const neonCorner = card.querySelector('.neon-corner');
            if (neonCorner) {
                neonCorner.style.boxShadow = '0 0 10px var(--neon-green)';
            }
        });
    });

    // Dynamic timeline line height adjustment
    function adjustTimelineHeight() {
        const timeline = document.querySelector('.timeline');
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timeline && timelineItems.length > 0) {
            const firstItem = timelineItems[0];
            const lastItem = timelineItems[timelineItems.length - 1];
            const startPos = firstItem.offsetTop + (firstItem.offsetHeight / 2);
            const endPos = lastItem.offsetTop + (lastItem.offsetHeight / 2);

            const timelineLine = document.querySelector('.timeline-line');
            if (timelineLine) {
                timelineLine.style.top = startPos + 'px';
                timelineLine.style.height = (endPos - startPos) + 'px';
            }
        }
    }

    // Adjust timeline on load and resize
    adjustTimelineHeight();
    window.addEventListener('resize', adjustTimelineHeight);

    // Add subtle typing effect to title
    const title = document.querySelector('.title');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        let index = 0;

        const typeWriter = () => {
            if (index < originalText.length) {
                title.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 500);
    }
});