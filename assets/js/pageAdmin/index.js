const btnDropdown = document.querySelector('.barraTop .textUser nav ul li a');
const clickFora = document.querySelector('.telaEscura');
const menuDropdown = document.querySelector('.barraTop .textUser nav ul li ul');


btnDropdown.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');

    menuDropdown.classList.toggle('active');
    if(menuDropdown.classList.contains('active')){
        telaEscura.classList.add('active');
    } else {
        telaEscura.classList.remove('active');
        menuDropdown.classList.remove('active')

    }
})

clickFora.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    telaEscura.classList.remove('active')
    menuDropdown.classList.remove('active')

})
