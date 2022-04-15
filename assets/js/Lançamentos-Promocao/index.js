let bd = firebase.firestore();

bd.collection("lancamentos").onSnapshot(function (documentos){
 
  documentos.docChanges().forEach(function (changes){

    if(changes.type === 'added') {
      const doc = changes.doc;
      const lancamentos = doc.data();
      tabelaLancamentos(lancamentos);

      
    }
  })
})

function tabelaLancamentos(lancamentos) {

    let insertLancamentos = document.querySelector('.listProduct');
    let lancamentos2 = [{}]
    
        for(let i = 0; i <lancamentos2.length; i++) {
            let liTag = `<a class="sliderProduct" href="#">
            <li class="itemProduct">
            <div class="btnCompre">Compre</div>
                <div class="imgProduct">
                    <img src="${lancamentos.img}${lancamentos.cod}.jpg" alt="">
                </div>
                <div class="textInfo">
                    <p class="codProduct"><span>Cod.: </span>${lancamentos.cod}</p>
                    <h3 class="titleProduct">${lancamentos.title}</h3>
                    <p class="descricaoProduct">${lancamentos.description}</p>
                    <p class="valorAnterior">R$ ${lancamentos.vA}</p>
                    <h2 class="valorAtual">R$ ${lancamentos.vH}</h2>
                    <p class="parcelas">Até 10X de R$${lancamentos.pa}</p>
                </div>
            </li>
        </a>`
        insertLancamentos.insertAdjacentHTML('beforeend', liTag);
        }
    }

    
    bd.collection("promocao").onSnapshot(function (documentos){
      documentos.docChanges().forEach(function (changes){
    
        if(changes.type === 'added') {
          const doc = changes.doc;
          const promocao = doc.data();
          tabelaLancamentos2(promocao);
        }
      })
    })
    
    function tabelaLancamentos2(promocao) {
        let insertPromo = document.querySelector('.listProduct2');
        let promo = [{}];

            for(let i = 0; i <promo.length; i++) {
                let liTag0 = `<a class="sliderProduct2" href="#">
                <li class="itemProduct">
                <div class="btnCompre">Compre</div>
                    <div class="imgProduct">
                        <img src="${promocao.img}${promocao.cod}.jpg" alt="">
                    </div>
                    <div class="textInfo">
                        <p class="codProduct"><span>Cod.: </span>${promocao.cod}</p>
                        <h3 class="titleProduct">${promocao.title}</h3>
                        <p class="descricaoProduct">${promocao.description}</p>
                        <p class="valorAnterior">R$ ${promocao.vA}</p>
                        <h2 class="valorAtual">R$ ${promocao.vH}</h2>
                        <p class="parcelas">Até 10X de R$${promocao.pa}</p>
                    </div>
                </li>
            </a>`
            insertPromo.insertAdjacentHTML('beforeend', liTag0);
            }
        }
    
    
   


    