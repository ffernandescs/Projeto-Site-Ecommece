


const listProduto = document.getElementById('listProdutos');
const btnLoadingList = document.getElementById('btnCarregar');

let ultimoDoc = null;
let primerDoc = null;
var totalTag;

const url = window.location.search
const urlParametro = new URLSearchParams(url)

const variavel = urlParametro.get('var')

const cat = 'categoria'


dbFirestore.collection('produtos').limit(20).get().then(querySnapshot => {
	cargarDocumentos(querySnapshot.docs);
    totalTag = querySnapshot.size

});



const cargarDocumentos = (doc) => {
    
	if(doc.length > 0){
		ultimoDoc = doc[doc.length - 1];
		primerDoc = doc[0];

		

		doc.forEach(doc => {
            const ulrTest = '../../../../src/pages/site/produto.html'


    const tamanho = document.querySelectorAll('.listaProduto')
    for(let i = 0; i <tamanho.length; i++){
        const textDesconto = tamanho[i].querySelector('#textDesconto').getAttribute('data-textDesconto')
        const image = tamanho[i].querySelector('.imgProduto img').getAttribute('data-image')
        const cod = tamanho[i].querySelector('#cod p').getAttribute('data-cod')
        const nameItem = tamanho[i].querySelector('#nameItem').getAttribute('data-nameItem')
        const description = tamanho[i].querySelector('#description').getAttribute('data-description')
        const vAanterior = tamanho[i].querySelector('#vAanterior').getAttribute('data-vAanterior')
        const vAtual = tamanho[i].querySelector('#vAtual').getAttribute('data-vAtual')
        const vParcela = tamanho[i].querySelector('#vParcela').getAttribute('data-vParcela')
        const qtParcela = tamanho[i].querySelector('.qtParcela').getAttribute('data-qtParcela')
        tamanho[i].querySelector('#compre').href = ulrTest + '?image='+image+'&textDesconto='+textDesconto+'&qtParcela='+qtParcela+
        '&cod='+cod+'&nameItem='+nameItem+'&description='+description+'&vAanterior='+vAanterior+'&vAtual='+vAtual+'&vParcela='+vParcela;
       
      }
            if(doc.data().categoria == variavel || doc.data().categoria2 == variavel || doc.data().categoria3 == variavel || doc.data().categoria4 == variavel
            || doc.data().categoria5 == variavel || doc.data().categoria6 == variavel) {

                const tagLi = `
                                <li class="${doc.data().categoria} listPromo listaProduto">
                                    <span id="textDesconto" data-textDesconto="${doc.data().vDescont}">-${doc.data().vDescont}</span>
                                    <a href="#">
                                        <div class="imgProduto">
                                            <img data-image="${doc.data().img}" src="${doc.data().img}" alt="">
                                        </div>
                                        <div class="containerTextProduto">
                                        <div class="textProduto">
                                            <div id="cod">
                                                <span>Cod:</span>
                                                <p data-cod="${doc.data().cod}">${doc.data().cod}</p>
                                            </div>
                                            <span class="name" id="nameItem" data-nameItem="${doc.data().name}">${doc.data().name}</span>
                                            <p id="description" data-description="${doc.data().description}">${doc.data().description}</p>
                                            </div>
                                        <div class="preco">
                                            <span id="vAanterior" data-vAanterior="${doc.data().vPrazp}">${doc.data().vPrazp}</span>
                                            <span class="atual" id="vAtual" data-vAtual="${doc.data().vAvista}">${doc.data().vAvista}</span>
                                            <div class="parcela">
                                            <span>Até</span>
                                            <span class="qtParcela" data-qtParcela="${doc.data().qtParcela}">${doc.data().qtParcela}x</span>
                                            <span>de</span>
                                            <span class=valorParcela  id="vParcela" data-vParcela="${doc.data().valorPa}">${doc.data().valorPa}</span>
                                            </div>
                                        </div>
                                        </div>
                                        <a id="compre" href="#">
                                        <div id="btnCompre">
                                            Comprar
                                        </div>
                                        </a>
                                    </a>
                            </li>`

                            listProduto.insertAdjacentHTML('beforeend', tagLi)
                
            }

           
            
            const listaProduto = document.querySelectorAll('.listaProduto');
            const textTotal = document.querySelector('.totalText');
            
            textTotal.innerHTML = listaProduto.length
            totalTag = listaProduto.length

            

        });
        
	}
}




btnLoadingList.addEventListener('click', () => {
    btnLoadingList.textContent = 'Loading'


    setTimeout(function(){
        dbFirestore
		.collection('produtos')
		.limit(20)
		.startAfter(ultimoDoc)
		.get().then(querySnapshot => {
			cargarDocumentos(querySnapshot.docs);
            
		}
        
        
	);
    btnLoadingList.innerHTML = 'Carregar Mais'
    }, 1500)
});



