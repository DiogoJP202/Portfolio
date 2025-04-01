// Hamburger Menu Functionality
function setupHamburgerMenu() {
    const menuH = document.querySelector('#menuH');
    const greenLine = document.querySelector('#GreenLine');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    let isMenuOpen = false;

    menuH.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuH.classList.toggle('menuHX', isMenuOpen);
        greenLine.classList.toggle('GreenBlock', isMenuOpen);
        header.style.display = isMenuOpen ? 'none' : 'block';
        nav.style.display = isMenuOpen ? 'flex' : 'none';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 820) {
            menuH.classList.remove('menuHX');
            greenLine.classList.remove('GreenBlock');
            isMenuOpen = false;
            header.style.display = 'block';
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
}

// Label Line Functionality
function setupLabelLine() {
    const ideograma1 = '全栈';
    const ideograma2 = '电脑';
    const ideogramsSize = 230;
    const line = document.querySelector('#inside');

    const createIdeograms = () => {
        line.innerHTML = ''; // Clear existing ideograms
        const count = Math.floor((window.innerWidth / ideogramsSize) * 4);

        for (let i = 1; i < count; i++) {
            const element = document.createElement('span');
            element.innerHTML = i % 2 !== 0 ? ideograma1 : ideograma2;
            element.classList.add(i % 2 !== 0 ? 'Ideograma1' : 'Ideograma2');
            line.appendChild(element);
        }
    };

    createIdeograms();
    window.addEventListener('resize', createIdeograms);
}

// Typing Effect Functionality
async function setupWritingEffect() {
    const words = ['JAVASCRIPT', 'C#', 'PYTHON', 'JAVA', 'HTML', 'CSS', 'NODEJS', 'REACT', 'BOOTSTRAP', 'ASP .NET', 'FIGMA', 'GIT', 'POSTGRESQL', 'MONGODB', 'SQL SERVER', 'REGEX', 'POSTMAN'];
    const location = document.querySelector('#screenTxt');
    const speed = 100; // Typing speed in milliseconds

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
    const languageButton = document.querySelector('#languageVideoButton');
    const iframeVideo = document.querySelector('#Video iframe');

    languageButton.addEventListener('click', () => {
        iframeVideo.src = languageButton.checked
            ? 'https://www.youtube.com/embed/YXwcNZW_7K8?si=LOBsdr6Fp05HxM7v'
            : 'https://www.youtube.com/embed/DI8dNYUsfCQ?si=p5v7XkPKHoRvouSC';
    });
}

// Slider Functionality
function setupSlider() {
    let slideIndex = 0;
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.projeto').length;

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
    setupHamburgerMenu();
    setupLabelLine();
    setupWritingEffect();
    setupLanguageButton();
    const { moveSlide } = setupSlider();

    // Example usage for slider controls
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
}

init();