const quantImg = document.querySelectorAll('.sliderItem img').length;
const carrosel = document.querySelector('.slider');
const prevImg = document.querySelector('.prev');
const nextImg = document.querySelector('.next');

let indexImg = 0;

prevImg.addEventListener('click', ()=> {
    indexImg--;
    if(indexImg < quantImg){
        indexImg = quantImg - 1;
    }

    carrosel.style.marginLeft = 
})