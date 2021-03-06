const containerFooter = document.querySelector('.containerBarFooter');
const btnTop = document.querySelector('.btnTop');
const btnCart = document.querySelector('.shoppingCart');
const btnMenuHamburger = document.querySelector('.menuHamburguer .conLines');



dbFirestore.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      loadingFooter(doc);
    })
  })


  window.addEventListener('scroll', () => {
    if(scrollY > 500) {
      btnTop.classList.add('active')
    } else {
      btnTop.classList.remove('active')
    }
    const containerTop = document.querySelector('.containerTop');
  
    if(scrollY > 1) {
      containerTop.classList.add('active')
    } else {
      containerTop.classList.remove('active');
    }
    if (scrollY > 2) {
      containerTop.classList.add('show')
    } else {
      containerTop.classList.remove('show')
    }
  
  })


btnCart.addEventListener('click', () => {
    const tagBody = document.querySelector('body');
    tagBody.classList.toggle('active')
})

btnTop.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
})

btnMenuHamburger.addEventListener('click', () => {
    const menuResponsivo = document.querySelector('.menu');
    menuResponsivo.classList.toggle('active')
    if(menuResponsivo.classList.contains('active')) {
        btnMenuHamburger.classList.add('active');
    } else {
        btnMenuHamburger.classList.remove('active');
    }
});

const loadingFooter = doc => {
    const tagFooter = `<div class="barFooter">
                        <div class="links">
                            <h1>Siga-nós</h1>
                            <div class="redeSocial">
                                <a id="instagram" href="http://${doc.data().redeInstagram}" target="blank_"><i class="fa-brands fa-instagram"></i></a>
                                <a id="facebook" href="http://${doc.data().redeFacebook}" target="blank_"><i class="fa-brands fa-facebook"></i></a>
                            </div>
                            <h1>Aceitamos Cartões</h1>
                            <div class="imgCartao">
                                <img src="https://firebasestorage.googleapis.com/v0/b/ecommece-382ee.appspot.com/o/siteEcommece-Isabel%2FimgFooter%2Fcartao.png?alt=media&token=9dc83477-662f-4c64-ae50-49571767d4e2" alt="">
                            </div>
                        </div>
                        <div class="links">
                            <h1>Links rápidos</h1>
                            <div class="textLinks">
                                <div class="listText1">
                                    <p>Saiba mais sobre nós</p>
                                    <div id="loadSobre" class="popup">
                                        <p>${doc.data().sobre}</p>
                                        <i class="material-icons-outlined">close</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="links">
                            <h1>Politicas</h1>
                            <div class="textLinks">
                                <div class="listText4">
                                    <p>Politica de Privacidade</p>
                                    <div id="loadPolitica" class="popup">
                                        <p>${doc.data().politica}</p>
                                        <i class="material-icons-outlined iconBack">close</i>
                                    </div>
                                </div>
                                <div class="listText5">
                                    <p>Detalhes de envio</p>
                                    <div id="loadEnvio" class="popup">
                                        <p>${doc.data().envio}</p>
                                        <i class="material-icons-outlined iconBack">close</i>
                                    </div>
                                </div>
                                <div class="listText6">
                                    <p>Termos e Condições</p>
                                    <div id="loadTermos" class="popup">
                                        <p>${doc.data().termos}</p>
                                        <i class="material-icons-outlined iconBack">close</i>
                                    </div>
                                </div>
                            </div>
                            
                            <h1>Selos</h1>
                            <div class="seloImg">
                                <img src="https://firebasestorage.googleapis.com/v0/b/ecommece-382ee.appspot.com/o/siteEcommece-Isabel%2FimgFooter%2FseloGoogle.png?alt=media&token=644d93d2-bdd9-4a4d-8942-50fc53a22e19" alt="">
                                <img src="https://firebasestorage.googleapis.com/v0/b/ecommece-382ee.appspot.com/o/siteEcommece-Isabel%2FimgFooter%2FsiteProtegido.webp?alt=media&token=bc3b1813-9e72-4fea-ab07-b55f519c559b" alt="">
                            </div>
                        </div>
                        <div class="links">
                            <h1>Atendimentos</h1>
                            <div class="location">
                                <a id="telPhone" target="blank_" href="https://api.whatsapp.com/send?phone=55${doc.data().tel}&text=Ola">
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <span id="phone">${doc.data().tel}</span>
                                </a>
                                <a id="local" target="blank_" href="${doc.data().gps}">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span id="local">${doc.data().local}</span>
                                </a>
                                <span></span>
                            </div>
                            <h1>Horarios</h1>
                            <div class="textLinks">
                                <div id="hrA">
                                    <i class="fa-solid fa-clock"></i>
                                    <h2>${doc.data().nameHrA}</h2>
                                    <span id="hrA">${doc.data().hrA}</span>
                                </div>
                                <span id="hrB">
                                    <i class="fa-solid fa-clock"></i>
                                    <h2>${doc.data().nameHrB}</h2>
                                    <span id="hrB">${doc.data().hrB}</span>
                                </span>
                                <span></span>
                            </div>
                        </div>
                      </div>`
  
      containerFooter.insertAdjacentHTML('beforeend', tagFooter)
  
      const tagLogo = document.querySelector('.logo');
      
      const imgLogo = document.createElement('img')
      tagLogo.appendChild(imgLogo)
      imgLogo.src = `${doc.data().imgLogo}`
  
      const clickPopup = document.querySelector('.listText1 p');
      const clickPopup4 = document.querySelector('.listText4 p');
      const clickPopup5 = document.querySelector('.listText5 p');
      const clickPopup6 = document.querySelector('.listText6 p');
  
  
      clickPopup.addEventListener('click', () => {
        const itemPopup = document.querySelector('.listText1 .popup');
        const btnClosePopup = document.querySelector('.listText1 .popup i');
    
        itemPopup.classList.add('active')
    
        btnClosePopup.addEventListener('click', () => {
            itemPopup.classList.remove('active')
        
        })
    })
    
    clickPopup4.addEventListener('click', () => {
        const itemPopup = document.querySelector('.listText4 .popup');
        const btnClosePopup = document.querySelector('.listText4 .popup i');
    
        itemPopup.classList.add('active')
    
        btnClosePopup.addEventListener('click', () => {
            itemPopup.classList.remove('active')
        
        })
    })
    clickPopup5.addEventListener('click', () => {
        const itemPopup = document.querySelector('.listText5 .popup');
        const btnClosePopup = document.querySelector('.listText5 .popup i');
    
        itemPopup.classList.add('active')
    
        btnClosePopup.addEventListener('click', () => {
            itemPopup.classList.remove('active')
        
        })
    })
    clickPopup6.addEventListener('click', () => {
        const itemPopup = document.querySelector('.listText6 .popup');
        const btnClosePopup = document.querySelector('.listText6 .popup i');
    
        itemPopup.classList.add('active')
    
        btnClosePopup.addEventListener('click', () => {
            itemPopup.classList.remove('active')
        
        })
    })
  
  }


  dbFirestore.collection('produtos').orderBy('order').limit().get().then(doc => {
    const listCart = document.querySelector('.listCart');
    document.querySelector('.listCart').innerHTML = localStorage.name
    
    const btnCart = document.getElementById('btnCompre')
    

    btnCart.addEventListener('click', () => {
        localStorage.name += `<tr class="tagTr" data-listTr="${doc.id}" data-remove="${doc.id}">
                                            <td id=""><img src="${subTexto2}" alt=""></td>
                                            <td id="">${nameItem}</td>
                                            <td id="">${vAtual}</td>
                                            <td id="">2</td>
                                            <td id="">
                                                <span data-remove="${doc.id}" class="material-icons" title="Apagar">delete</span>
                                            </td>                            
                                        </tr>`

        listCart.innerHTML += localStorage.name
       
    })

});





