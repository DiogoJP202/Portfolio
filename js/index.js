
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
    }
})