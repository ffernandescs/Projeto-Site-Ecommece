const dbPromoLancaMento = firebase.firestore();


dbPromoLancaMento.collection('produtos').get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
    loadPromoLancamentos(doc);
  })
})

const listPromo = document.getElementById('promo');
const listLancamento = document.getElementById('lancamentos');

const loadPromoLancamentos = doc => {

  if(doc.data().categoria == 'Lançamentos' || doc.data().categoria2 == 'Lançamentos' || doc.data().categoria3 == 'Lançamentos') {
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

  if(doc.data().categoria == 'Promoção' || doc.data().categoria2 == 'Promoção' || doc.data().categoria3 == 'Promoção') {
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



      btniconBackPromo.addEventListener('click', () => {
        currentSlidePromo--;
        if(currentSlidePromo < 0) {
          currentSlidePromo = countPromo -4
        }
        updateSliderPromo();
      })

      btniconForwardPromo.addEventListener('click', () => {
        currentSlidePromo++;
        if(currentSlidePromo > countPromo -4) {
          currentSlidePromo = 0
        }
        updateSliderPromo();
      })


      function updateSliderPromo() {
        listPromo.style.marginLeft = -currentSlidePromo * listPdPromo[0].offsetWidth + 'px'
      }


      

      btniconBackLanc.addEventListener('click', () => {
        currentSlideLanc--;
        if(currentSlideLanc < 0) {
          currentSlideLanc = countLan -4
        }
        updateSliderLanc();
      })

      btniconForwardLanc.addEventListener('click', () => {
        currentSlideLanc++;
        if(currentSlideLanc > countLan -4) {
          currentSlideLanc = 0
        }
        updateSliderLanc();
      })


      function updateSliderLanc() {
        listLancamento.style.marginLeft = -currentSlideLanc * listPdLanc[0].offsetWidth + 'px'
      }
    
    }
    
   

    

  
}
