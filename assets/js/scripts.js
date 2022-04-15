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


    function carroselPrev2() {
        indexPromo--;
        if(indexPromo < 0) {
            indexPromo = document.querySelectorAll('.sliderProduct2').length -4;
        }
        loadingList2();
    }

    function carroselNext2() {
        indexPromo++;
        if(indexPromo > document.querySelectorAll('.sliderProduct2').length -4){
            indexPromo = 0
        }
        loadingList2();
    }


function loadingList2() {
    carroselProduct2.style.transform = `translateX(${-indexPromo * 300}px)`;
}



    function carroselPrev() {
        indexLancamentos--;
        if(indexLancamentos < 0){
            indexLancamentos = document.querySelectorAll('.sliderProduct').length -4;
        }
        loadingList();
    }
   
    function carroselNext() {
        indexLancamentos++;
        if(indexLancamentos > document.querySelectorAll('.sliderProduct').length -4){
            indexLancamentos = 0
        }
        loadingList();
    }

    function loadingList() {
        carroselProduct.style.transform = `translateX(${-indexLancamentos * 300}px)`;
    }
    





    
nexstImg.addEventListener('click', nextStart);

menuHaburger.addEventListener('click', ()=> {   
    menuNav.classList.toggle('containerMenuActive')
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

btnTop.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })

})

prevImg.addEventListener('click', ()=> {
    indexImg--;
    if(indexImg < 0){
        indexImg = slider - 1;
    }
    updateMargin();
})

function nextStart() {
    indexImg++;
    if(indexImg > (slider - 1)){
        indexImg = 0;
    }
    updateMargin();
}

function updateMargin() {
    let newMargin = indexImg * carroselImg.clientWidth;
    carroselSlider.style.marginLeft = `-${newMargin}px`
}

setInterval(updateMargin, 5000)




