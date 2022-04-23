const btnSliderBack = document.querySelector('.iconBack');
const btnSliderForward = document.querySelector('.iconForward');
const imgSlider = document.querySelector('.sliderImg');
const qtImg = document.querySelectorAll('.sliderImg img');
const balls = document.querySelector('.balls');
const btnMenuHamburger = document.querySelector('.menuHamburguer');

let indexImgSlider = 0;


window.addEventListener('load', () => {
    for(let i = 0; i <qtImg.length; i++){
        const itemBall = document.createElement('span');
        itemBall.id = i
        balls.appendChild(itemBall) 
    }
    const ballImgAtual = document.getElementById('0');
    ballImgAtual.classList.add('ballsActive')

    const positionBaslls = document.querySelectorAll('.balls span')
    for(let i = 0; i < positionBaslls.length; i++) {
        positionBaslls[i].addEventListener('click', () => {
            indexImgSlider = positionBaslls[i]
            slider();
            console.log('clicou')
        })
    }
    
});

btnSliderBack.addEventListener('click', () => {
    indexImgSlider--
    slider();
});

btnSliderForward.addEventListener('click', () => {
    indexImgSlider++
    slider();
});

function slider() {
    if(indexImgSlider >= qtImg.length){
        indexImgSlider = 0
    } else if(indexImgSlider < 0) {
        indexImgSlider = qtImg.length -1
    }
    imgSlider.style.marginLeft = -1200 * indexImgSlider + 'px'
    

}

setInterval(() => {
    indexImgSlider++
    slider();
}, 3000)

slider();

btnMenuHamburger.addEventListener('click', () => {
    const menuResponsivo = document.querySelector('.menu');
    menuResponsivo.classList.toggle('active')
    if(menuResponsivo.classList.contains('active')) {
        btnMenuHamburger.classList.add('active');
    } else {
        btnMenuHamburger.classList.remove('active');
    }
});


const dbProduct = firebase.firestore();



dbProduct.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingUser(doc);
    })
})

const formInfoUser = document.getElementById('formInfo');

let id;


const loadingUser = doc => {
    const telefone = document.getElementById('telPhone')
    const local = document.getElementById('local')

    const spanTel = `<span id="phone">${doc.data().tel}</span>`

    telefone.insertAdjacentHTML('beforeend', spanTel);

    const spanLocal = `<span id="phone">${doc.data().local}</span>`

    local.insertAdjacentHTML('beforeend', spanLocal);
    
    const btnSalvarInfo = document.getElementById('btnSalvarInfo')

    id = doc.id

    window.addEventListener('load', () => {

        formInfoUser.telForm.value = doc.data().tel
        formInfoUser.localForm.value = doc.data().local
    })

}
