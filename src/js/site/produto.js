const dbPromoLancaMento = firebase.firestore();

const btnSliderBack = document.querySelector('.iconBack');
const btnSliderForward = document.querySelector('.iconForward');
const imgSlider = document.querySelector('.sliderImg');
const qtImg = document.querySelectorAll('.sliderImg img');
const balls = document.querySelector('.balls');
const btnMenuHamburger = document.querySelector('.menuHamburguer .conLines');
const listPromo = document.getElementById('promo');
const listLancamento = document.getElementById('lancamentos');
const containerFooter = document.querySelector('.containerBarFooter');
const btnTop = document.querySelector('.btnTop');
const listDescription = document.querySelector('.listMenu');

const url = window.location.search;
const urlParametro = new URLSearchParams(url)

const imgDb = urlParametro.get('image')
const tokenIMg = urlParametro.get('token')
const nameItem = urlParametro.get('nameItem')
const codItem = urlParametro.get('cod')
const vAanterior = urlParametro.get('vAanterior')
const vAtual = urlParametro.get('vAtual')
const vParcela = urlParametro.get('vParcela')
const textDesconto = urlParametro.get('textDesconto')
const qtParcela = urlParametro.get('qtParcela')
const description = urlParametro.get('description')
const marcas = urlParametro.get('marcas')
const categoria = urlParametro.get('categoria')
const categoria2 = urlParametro.get('categoria2')
const categoria3 = urlParametro.get('categoria3')
const categoria4 = urlParametro.get('categoria4')
const categoria5 = urlParametro.get('categoria5')
const categoria6 = urlParametro.get('categoria6')
const artigo = urlParametro.get('artigo')


let indexImgSlider = 0;
let texto = imgDb
let subTexto = texto.replace('Isabel/', 'Isabel%2F')
let subTexto2 = subTexto.replace('v=', 'v%3D')

const imagem = document.querySelector('.imgPrevie img');
const imagemIco = document.querySelector('.tagImg img');
const marcaPage = document.querySelector('.marcaPage');
const categoriaPage = document.querySelector('.categoriaA');
const categoria2Page = document.querySelector('.categoriaB');
const categoria3Page = document.querySelector('.categoriaC');
const categoria4Page = document.querySelector('.categoriaD');
const categoria5Page = document.querySelector('.categoriaE');
const categoria6Page = document.querySelector('.categoriaF');
const titleDescriptionProduto = document.querySelector('.titleArtigo');
const descriptionProduto = document.querySelector('.descriptionText p');


const itemCompre = document.querySelector('.itemCompre')

window.addEventListener('load', () => {

    titleDescriptionProduto.innerHTML = artigo
        descriptionProduto.innerHTML = description
        marcaPage.innerHTML = marcas + ' ' + '>'
        categoriaPage.innerHTML = categoria + ' ' + '>'

        if(categoria2 === '') {
            categoria2Page.style.display = 'none'
        } else {
            categoria2Page.innerHTML = categoria2 + ' ' + '>'
        }

        if(categoria3 === '') {
            categoria3Page.style.display = 'none'
        } else {
            categoria3Page.innerHTML = categoria3 + ' ' + '>'
        }

        if(categoria4 === '') {
            categoria4Page.style.display = 'none'
        } else {
            categoria4Page.innerHTML = categoria4 + ' ' + '>'
        }

        if(categoria5 === '') {
            categoria5Page.style.display = 'none'
        } else {
            categoria5Page.innerHTML = categoria5 + ' ' + '>'
        }

        if(categoria6 === '') {
            categoria6Page.style.display = 'none'
        } else {
            categoria6Page.innerHTML = categoria6 + ' ' + '>'
        }

    const tagDivCompre = `<div class="textItem">
                            <span class="name">${nameItem}</span>
                        </div>
                        <div class="textItem">
                            <div class="nameCod">
                                <span class="cod">Cod: ${codItem}</span>
                                <span class="marca">Natura</span>
                            </div>
                            <div class="precoAnterior">
                                <span>De: </span>
                                <span class="anterior">${vAanterior}</span> 
                                <span class="descont">(${textDesconto} de desconto)</span> 
                            </div>
                            <div class="precoAtual">
                                <span>Por:</span>
                                <span class="atual">${vAtual}</span> 
                            </div>
                            <div class="parcela">
                                <span>Até</span>
                                <span class="qtParcela">${qtParcela}x</span>
                                <span>de</span>
                                <span class=valorParcela>${vParcela}</span>
                            </div>
                            <a href="#">
                                <button>
                                    <span class="material-icons">lock</span>
                                    <span>Comprar</span>
                                </button>
                            </a>
                        </div>`

            itemCompre.insertAdjacentHTML('beforeend', tagDivCompre)
    
    const imgProduto = document.querySelector('.boxOne');

        const tagDivImg =   `<div class="imgPrevie">
                                <img src="${subTexto2}" alt="">
                                <span class="percentual">-${textDesconto}</span>
                            </div>
                            <div class="imgIco">
                                <span>Passe o mouse para ampliar</span>
                                <div class="tagImg">
                                    <img src="${subTexto2}" alt="">
                                </div>
                            </div>`
            
                imgProduto.insertAdjacentHTML('beforeend', tagDivImg)

})

listDescription.addEventListener('click', () => {
    const lista = document.querySelector('.menuDescription');

    lista.classList.toggle('active')
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
  
  
  btnTop.addEventListener('click', () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  
    console.log('ok')
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
  
  dbFirestore.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      loadingFooter(doc);
    })
  })
  
  
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
                                <img src="../../../assets/img/cartao.png" alt="">
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
                                <img src="../../../assets/img/seloGoogle.png" alt="">
                                <img src="../../../assets/img/siteProtegido.webp" alt="">
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
  
  
  
  
  
  
  
  