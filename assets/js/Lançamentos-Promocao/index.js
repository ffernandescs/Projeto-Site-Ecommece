const dbPromoLancaMento = firebase.firestore();


dbPromoLancaMento.collection('produtos').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    loadPromoLancamentos(doc);
      console.log(doc.data().categoria)
  })
})

const listPromo = document.getElementById('promo');
const listLancamento = document.getElementById('lancamentos');

const loadPromoLancamentos = doc => {

  if(doc.data().categoria == 'Lançamentos' || doc.data().categoria2 == 'Lançamentos' || doc.data().categoria3 == 'Lançamentos') {
    const tagLiPromo = `<li class="${doc.data().categoria}">
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

  if(doc.data().categoria == 'Promoção' || doc.data().categoria2 == 'Promoção' || doc.data().categoria3 == 'Promoção') {
    const tagLiPromo = `<li class="${doc.data().categoria}">
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
    }
    
  


  
}