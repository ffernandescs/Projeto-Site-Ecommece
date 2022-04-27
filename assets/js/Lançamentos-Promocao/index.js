const dbPromoLancaMento = firebase.firestore();


dbPromoLancaMento.collection('produtos').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    loadPromoLancamentos(doc);
      console.log(doc.data().categoria)
  })
})

const listPromo = document.getElementById('promo');

const loadPromoLancamentos = doc => {

  if(doc.data().categoria == 'Lançamentos') {
    const tagLiPromo = `<li class="${doc.data().categoria}">
                        <a href="#">
                            <div class="imgProduto">
                                <img src="${doc.data().img}" alt="">
                            </div>
                            <div class="textProduto">
                                <div id="cod">
                                  <span>Cod: ${doc.data().cod}</span>
                                </div>
                                <span>${doc.data().name}</span>
                                <span>${doc.data().description}</span>
                            </div>
                            <div class="preco">
                                <span id="vAanterior">R$ ${doc.data().vPrazp}</span>
                                <span id="vAtual">R$ ${doc.data().vAvista}</span>
                                <span id="vParcela">Até ${doc.data().qtParcela}x de R$ ${doc.data().valorPa}</span>
                            </div>
                            <div id="btnCompre">
                                Acessar
                            </div>
                        </a>
                      </li>`

  listPromo.insertAdjacentHTML('beforeend', tagLiPromo)
  } 


  
}