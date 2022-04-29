const arrowSubMenu = document.querySelectorAll('.arrow');
const menuHamburger = document.querySelector('.menuHaburger');
const menuHamburgerResponse = document.getElementById('menuResponse');
const menuHrozintal = document.querySelector('.menuHrozintal');
const campoUser = document.querySelector('.textIcoUser');
const subMenuUser = document.querySelector('.subMenuUser');

window.addEventListener('load', () => {
    for(let i = 0; i < arrowSubMenu.length; i++) {
        arrowSubMenu[i].addEventListener('click', (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle('showMenu');
        })
    }
})
function menuResponse() {
    menuHrozintal.classList.toggle('showResponse')
    if(menuHrozintal.classList.contains('showResponse')) {
        menuHamburgerResponse.classList.add('rotate')
    } else {
        menuHamburgerResponse.classList.remove('rotate')
    }
}



menuHamburger.addEventListener('click', () => {
    menuHrozintal.classList.toggle('close')
})

campoUser.addEventListener('click', () => {
    subMenuUser.classList.toggle('active')
})


