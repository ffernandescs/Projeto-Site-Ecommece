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