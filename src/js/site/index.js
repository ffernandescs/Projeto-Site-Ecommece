const dbPromoLancaMento = firebase.firestore();

const btnSliderBack = document.querySelector('.iconBack');
const btnSliderForward = document.querySelector('.iconForward');
const imgSlider = document.querySelector('.sliderImg');
const qtImg = document.querySelectorAll('.sliderImg img');
const balls = document.querySelector('.balls');
const btnMenuHamburger = document.querySelector('.menuHamburguer');
const listPromo = document.getElementById('promo');
const listLancamento = document.getElementById('lancamentos');
const containerFooter = document.querySelector('.containerBarFooter');
const btnTop = document.querySelector('.btnTop');

let indexImgSlider = 0;

dbFirestore.collection('produtos').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    loadPromoLancamentos(doc);
  })
})

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
      })
  }
  
});

btnTop.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  console.log('ok')
})



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

const loadPromoLancamentos = doc => {

  if(doc.data().categoria == 'Lançamentos' || doc.data().categoria2 == 'Lançamentos' || doc.data().categoria3 == 'Lançamentos' || doc.data().categoria4 == 'Lançamentos'
  || doc.data().categoria5 == 'Lançamentos' || doc.data().categoria6 == 'Lançamentos') {
    const tagLiPromo = `<li class="${doc.data().categoria} listPromo">
                          <a href="#">
                              <div class="imgProduto">
                                  <img src="${doc.data().img}" alt="">
                              </div>
                              <div class="containerTextProduto">
                                <div class="textProduto">
                                    <div id="cod">
                                      <span>Cod:</span>
                                      <p>${doc.data().cod}</p>
                                    </div>
                                    <span id="nameItem">${doc.data().name}</span>
                                    <p id="description">${doc.data().description}</p>
                                  </div>
                                <div class="preco">
                                  <span id="vAanterior">R$ ${doc.data().vPrazp}</span>
                                  <span id="vAtual">R$ ${doc.data().vAvista}</span>
                                  <span id="vParcela">Até ${doc.data().qtParcela}x de R$ ${doc.data().valorPa}</span>
                                </div>
                              </div>
                              
                              <div id="btnCompre">
                                  Acessar
                              </div>
                          </a>
                      </li>`

    listPromo.insertAdjacentHTML('beforeend', tagLiPromo)
  } 

  if(doc.data().categoria == 'Promoção' || doc.data().categoria2 == 'Promoção' || doc.data().categoria3 == 'Promoção' || doc.data().categoria4 == 'Promoção'
  || doc.data().categoria5 == 'Promoção' || doc.data().categoria6 == 'Promoção') {
    const tagLiPromo = `<li class="${doc.data().categoria} listLanc">
                        <a href="#">
                            <div class="imgProduto">
                                <img src="${doc.data().img}" alt="">
                            </div>
                            <div class="containerTextProduto">
                            <div class="textProduto">
                                <div id="cod">
                                  <span>Cod:</span>
                                  <p>${doc.data().cod}</p>
                                </div>
                                <span id="nameItem">${doc.data().name}</span>
                                <p id="description">${doc.data().description}</p>
                            </div>
                            <div class="preco">
                              <span id="vAanterior">R$ ${doc.data().vPrazp}</span>
                              <span id="vAtual">R$ ${doc.data().vAvista}</span>
                              <span id="vParcela">Até ${doc.data().qtParcela}x de R$ ${doc.data().valorPa}</span>
                            </div>
                          </div>
                          <div id="btnCompre">
                                Acessar
                            </div>
                        </a>
                      </li>`

      listLancamento.insertAdjacentHTML('beforeend', tagLiPromo)
      const btniconBackPromo = document.querySelector('.promo .iconBackPd');
      const btniconForwardPromo = document.querySelector('.promo .iconForwardPd');
      const btniconBackLanc = document.querySelector('.lancamentos .iconBackPd');
      const btniconForwardLanc = document.querySelector('.lancamentos .iconForwardPd');
      const listPdPromo = document.querySelectorAll('#promo .listPromo');
      const listPdLanc = document.querySelectorAll('#lancamentos .listLanc');

      const countPromo = listPdPromo.length
      const countLan = listPdLanc.length

      
      let currentSlidePromo = 0;
      let currentSlideLanc = 0;    
      
      btniconBackPromo.addEventListener('click', function backPromo() {
        const largura = window.innerWidth
        if(largura > 400) {
            currentSlidePromo--;
              if(currentSlidePromo < 0) {
                currentSlidePromo = countPromo -4
              }
              updateSliderPromo();
        } else {
            currentSlidePromo--;
              if(currentSlidePromo < 0) {
                currentSlidePromo = countPromo -1
              }
              updateSliderPromo();
        }
      })

      btniconForwardPromo.addEventListener('click', function forwardPromo() {
        const largura = window.innerWidth
        if(largura > 400) {
            currentSlidePromo++;
              if(currentSlidePromo > countPromo -4) {
                currentSlidePromo = 0
              }
              updateSliderPromo();
        } else {
            currentSlidePromo++;
              if(currentSlidePromo > countPromo -1) {
                currentSlidePromo = 0
              }
              updateSliderPromo();
        }
      })

      function updateSliderPromo() {
        listPromo.style.marginLeft = -currentSlidePromo * listPdPromo[0].offsetWidth + 'px'

      }

      btniconBackLanc.addEventListener('click', () => {
        const largura = window.innerWidth
        if(largura > 400) {
            currentSlideLanc--;
              if(currentSlideLanc < 0) {
                currentSlideLanc = countLan -4
              }
              updateSliderLanc();
        } else {
            currentSlideLanc--;
              if(currentSlideLanc < 0) {
                currentSlideLanc = countLan -1
              }
              updateSliderLanc();
        }
      })

      btniconForwardLanc.addEventListener('click', () => {
        const largura = window.innerWidth
        if(largura > 400) {
            currentSlideLanc++;
              if(currentSlideLanc > countLan -4) {
                currentSlideLanc = 0
              }
              updateSliderLanc();
        } else {
            currentSlideLanc++;
              if(currentSlideLanc > countLan -1) {
                currentSlideLanc = 0
              }
              updateSliderLanc();
        }
      })


      function updateSliderLanc() {
        listLancamento.style.marginLeft = -currentSlideLanc * listPdLanc[0].offsetWidth + 'px'
      }
    
    }
  
}

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
                              <img src="./assets/img/cartao.png" alt="">
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
                              <img src="./assets/img/seloGoogle.png" alt="">
                              <img src="./assets/img/siteProtegido.webp" alt="">
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







