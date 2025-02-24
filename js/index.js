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
    let ideograma1 = '样式';
    let ideograma2 = '样式表';
    let ideogramsSize = 232;
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

MenuHamburger();
LabelLine();