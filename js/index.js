function MenuHamburger(){
    MenuHState = false;
    MenuH = document.querySelector('#menuH');
    MenuH.addEventListener('click', e => {
        let element = e.target;
        if (MenuHState){
            MenuH.classList.remove('menuHX');
            document.querySelector('#GreenLine').classList.remove('GreenBlock');
            MenuHState = false;
            document.querySelector('header').style.display = 'block';
            document.querySelector('nav').style.display = 'none';
        }
        else{
            MenuH.classList.add('menuHX'); 
            document.querySelector('#GreenLine').classList.add('GreenBlock');
            MenuHState = true;
            document.querySelector('header').style.display = 'none';
            document.querySelector('nav').style.display = 'flex';
        }
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 820){
            MenuH.classList.remove('menuHX');
            document.querySelector('#GreenLine').classList.remove('GreenBlock');
            MenuHState = false;
            document.querySelector('header').style.display = 'block';
            document.querySelector('nav').style.display = 'flex';
        } else 
            document.querySelector('nav').style.display = 'none';
    })
}

function LabelLine(){
    let ideograma1 = '全栈';
    let ideograma2 = '电脑';
    let ideogramsSize = 230;
    let line = document.querySelector('#inside');

    for(let i = 1; i < (Number.parseInt((window.innerWidth / ideogramsSize) * 4)); i++){
        let element = document.createElement('span');

        if(i % 2 != 0){
            element.innerHTML = `${ideograma1}`;
            element.classList.add('Ideograma1');
        } else {
            element.innerHTML = `${ideograma2}`;
            element.classList.add('Ideograma2');
        }

        line.appendChild(element);
    }

    window.addEventListener('resize', () => LabelLine());
}

async function WritingEffect() {
    const words = ['JAVASCRIPT', 'C#', 'PYTHON', 'JAVA', 'HTML', 'CSS', 'NODEJS', 'REACT', 'NODEJS', 'BOOTSTRAP', 'ASP .NET', 'FIGMA', 'GIT', 'POSTGRESQL', 'MONGODB', 'SQL SERVER', 'REGEX', 'POSTMAN'];
    const location = document.querySelector('#screenTxt');
    const speed = 100; // Typing speed in milliseconds

    while (true) {
        for (const word of words) {
            location.innerHTML = ''; // Clear the content
            await typeWriter(word, location, speed); // Type the word
            await delay(3000); // Wait 3 seconds before moving to the next word
        }
    }
}

// Helper function to type out a word letter by letter
function typeWriter(word, location, speed) {
    return new Promise((resolve) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < word.length) {
                location.innerHTML += word.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                resolve(); // Resolve the promise when done
            }
        }, speed);
    });
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
let languageButton = document.querySelector('#languageVideoButton');
languageButton.addEventListener('click', e => {
    console.log('okay');
    let iframeVideo = document.querySelector('#Video iframe');
    if (languageButton.checked)
        iframeVideo.src = 'https://www.youtube.com/embed/Hj91rm8miLk?si=iNvD2fo-2zACUyvt';
    else
        iframeVideo.src = 'https://www.youtube.com/embed/qytG1HXkmC0?si=qJGnvN8X5DDw54OV';
});

MenuHamburger();
LabelLine();
WritingEffect();