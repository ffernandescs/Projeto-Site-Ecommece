const dbUser = firebase.firestore();




const btnResponseMenu = document.querySelector('.btnResponseMenu');
const btnMenuHamburger = document.querySelector('.menuHamburger');
const menu = document.querySelector('.menuContainer');



const removeItensMenu = function(){
    const imgUser = document.querySelector('.login');
    const textAdm = document.querySelector('.administrator');
    imgUser.style.display = 'none'
    textAdm.style.display = 'none'

}

const addItensMenu = function(){
    const imgUser = document.querySelector('.login');
    const textAdm = document.querySelector('.administrator');
    imgUser.style.display = 'flex'
    textAdm.style.display = 'flex'
}

btnMenuHamburger.addEventListener('click', () => {
    const lineMenuHambuger = document.querySelectorAll('.line');
    console.log('clicou')
    menu.classList.toggle('show');
    if(menu.classList.contains('show')){
        btnMenuHamburger.classList.add('show')
        for(let i = 0; i < lineMenuHambuger.length; i++){
            lineMenuHambuger[i].style.backgroundColor = '#fff'
        }
    } else {
        for(let i = 0; i <= lineMenuHambuger.length -1; i++) {
            lineMenuHambuger[i].style.backgroundColor = '#000'
            btnMenuHamburger.classList.remove('show')
        }
    }
})


btnResponseMenu.addEventListener('click', () => {
    const containerPrinciapal = document.querySelector('.contPrincipal');
    const textMenu = document.querySelectorAll('.textMenu');
    menu.classList.toggle('active')
    if(menu.classList.contains('active')){
        containerPrinciapal.style.width = 'calc(100% - 80px)'
        for(let i = 0; i < textMenu.length; i++) {
            textMenu[i].classList.add('active')
        }
        removeItensMenu();
    } else {
        containerPrinciapal.style.width = 'calc(100% - 300px)'
        addItensMenu();
        for(let i = 0; i <= textMenu.length -1; i++) {
            textMenu[i].classList.remove('active')
        }
        
        
    }
})

dbUser.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingPerfil(doc);

    })
})

const loadingPerfil = doc => {
    const spanImg = document.querySelector('.imgUser');
    const nameUser = document.querySelector('.login h1');
    
    const tagImg = `<img src="${doc.data().imgPerfil}" alt="">`

    spanImg.insertAdjacentHTML('beforeend', tagImg);


    nameUser.innerHTML = doc.data().nameUser

}
