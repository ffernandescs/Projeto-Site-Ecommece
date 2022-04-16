const menu = document.querySelector('.containerMenu');
const btnMenuHamburger = document.querySelector('.containerTop')
const pageAddProduct = document.querySelector('.contProduct');
const exitItem = document.querySelector('.fecharTela');
const btnExitCadProduct = document.querySelector('.prdutos i')

const btnAddProduto = document.querySelector('.btnAddProduct');
const btnRemoveProduto = document.querySelector('.btnRemoveProduct');

let db = firebase.firestore();

let dados = ''

let firebaseRef = firebase.database();

let dbase = firebaseRef = firebase.database().ref().child('produtos');



function addProduct() {
    const title = document.getElementById('title').ariaValueMax;
    const cod = document.getElementById('cod').ariaValueMax;
    await db.collection('produtos').add({
        title: title,
        cod: cod,
    })
}




btnExitCadProduct.addEventListener('click', () =>{
    exitItem.classList.remove('acitve')
    pageAddProduct.classList.remove('activeAdd')

})

btnAddProduto.addEventListener('click', () =>{
    pageAddProduct.classList.add('activeAdd');
    exitItem.classList.add('acitve');
})

exitItem.addEventListener('click', () => {
        exitItem.classList.remove('acitve')
        pageAddProduct.classList.remove('activeAdd')
})

btnMenuHamburger.addEventListener('click', () => {

    menu.classList.toggle('active');    
} )









db.collection("produtos").onSnapshot(function (documentos){
    documentos.docChanges().forEach(function (changes){
  
      if(changes.type === 'added') {
        const doc = changes.doc;
        const product = doc.data();
        tabelaLancamentos3(product);      
      }
    })
  })
  
  function tabelaLancamentos3(product) {
      let insertProduto = document.querySelector('.tbContent');
      let produto = [{}]
          for(let i = 0; i <produto.length; i++) {
              let liTag1 = `<tr>
              <td><input type="checkbox"></td>
              <td>${product.cod}</td>
              <td class="tdImg"><img src="../../${product.img}${product.cod}.jpg" alt=""></td>
              <td>${product.title}</td>
              <td>${product.description}</td>
              <td style="text-decoration: line-through;">${product.vA}</td>
              <td>${product.vH}</td>
              <td>${product.pa}</td>
              <td>${product.qt}</td>
              <td class="edit"><i class="fa-solid fa-pen-to-square"></i></td>
          </tr>`
          insertProduto.insertAdjacentHTML('beforeend', liTag1);
          }
      }