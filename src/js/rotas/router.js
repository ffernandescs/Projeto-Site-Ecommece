const ulrCategoria = '../../../../src/pages/site/categorias.html'
const btnMenu = document.querySelector('.itemX a')



const itemMenu = document.querySelectorAll('.itemX')

window.addEventListener('load', () => {
    for(let i = 0; i <itemMenu.length; i++){
        const item = itemMenu[i].querySelector('a .itemMenu')
        if(item.innerHTML == item.innerHTML){
          const itemHref = itemMenu[i].querySelector('a')
          itemHref.href = ulrCategoria + '?var='+item.innerHTML
        } else {
      
        }
      }
      
})


