const topoPage = document.querySelector('.containerTop'),
    menuHaburger = document.querySelector('.menuHamburger'),
    menuNav = document.querySelector('.containerMenu'),
    btnTop = document.querySelector('.btnTop'),
    slider = document.querySelectorAll('.carrosel img').length,
    carroselSlider = document.querySelector('.slider'),
    carroselImg = document.querySelector('.carrosel'),
    prevImg = document.querySelector('.prev'),
    nexstImg = document.querySelector('.next'),
    prevListProduct = document.querySelector('.list'),
    carroselProduct = document.querySelector('.listProduct'),
    sliderProduct = document.querySelectorAll('.listProduct a').length,
    btnPrevProduct = document.querySelector('#prevProduct'),
    btnNextProduct = document.querySelector('#nextProduct');

let indexImg = 0,
    indexProduct = 0,
    indexLancamentos = 0;

window.addEventListener('load', carregarListe);
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
        menuNav.classList.remove('containerMenuActive')
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


function carregarListe() {

let insertLancamentos = document.querySelector('.listProduct'),
    insertLPromocao = document.querySelector('.listProduct2');

    for(let i = 0; i <lancamentos.length; i++) {
        let liTag = `<a href="#">
        <li class="itemProduct">
        <div class="btnCompre">Compre</div>
            <div class="imgProduct">
                <img src="${lancamentos[i].img}" alt="">
            </div>
            <div class="textInfo">
                <p class="codProduct"><span>Cod.: </span>${lancamentos[i].cod}</p>
                <h3 class="titleProduct">${lancamentos[i].title}</h3>
                <p class="descricaoProduct">${lancamentos[i].description}</p>
                <p class="valorAnterior">R$ ${lancamentos[i].valorAnt}</p>
                <h2 class="valorAtual">R$ ${lancamentos[i].valorAtual}</h2>
                <p class="parcelas">Até 10X de R$${lancamentos[i].parcela}</p>
            </div>
        </li>
    </a>`
    insertLancamentos.insertAdjacentHTML('beforeend', liTag);
    }

    for(let i = 0; i <promocao.length; i++) {
        let liTag = `<a href="#">
        <li class="itemProduct">
        <div class="btnCompre">Compre</div>
            <div class="imgProduct">
                <img src="${promocao[i].img}${promocao[i].cod}.jpg" alt="">
            </div>
            <div class="textInfo">
            <p class="codProduct"><span>Cod.: </span>${promocao[i].cod}</p>
                <h3 class="titleProduct">${promocao[i].title}</h3>
                <p class="descricaoProduct">${promocao[i].description}</p>
                <p class="valorAnterior">R$ ${promocao[i].valorAnt}</p>
                <h2 class="valorAtual">R$ ${promocao[i].valorAtual}</h2>
                <p class="parcelas">Até 10X de R$ ${promocao[i].parcela}</p>
            </div>
        </li>
    </a>`
    insertLPromocao.insertAdjacentHTML('beforeend', liTag);
    }
}