const topoPage = document.querySelector('.containerTop'),
    menuHaburger = document.querySelector('.menuHamburger'),
    menuNav = document.querySelector('.containerMenu'),
    btnTop = document.querySelector('.btnTop'),
    slider = document.querySelectorAll('.carrosel img').length,
    carroselSlider = document.querySelector('.slider'),
    carroselImg = document.querySelector('.carrosel'),
    prevImg = document.querySelector('.prev'),
    nexstImg = document.querySelector('.next'),

    carroselProduct = document.querySelector('.listProduct'),
    carroselProduct2 = document.querySelector('.listProduct2');


let indexImg = 0;
let indexPromo = 0;

let indexLancamentos = 0;

menuHaburger.addEventListener('click', ()=> {   
    menuNav.classList.toggle('containerMenuActive')
    if(menuNav.classList.contains('containerMenuActive')) {
        menuNav.style.visibility = 'visible'
    } else {
        menuNav.style.visibility = 'hidden'

    }
})

window.addEventListener('scroll', () =>{
    if(topoPage.classList.toggle('topPageActive', window.scrollY > 0)){
        menuHaburger.classList.add('menuHamburgerActive')
        btnTop.style.visibility = 'visible'


    } else {
        menuHaburger.classList.remove('menuHamburgerActive')
        btnTop.style.visibility = 'hidden'
    }    
})





