const itemList = document.querySelector('.tbContent');
const itemListRespom = document.querySelector('.tabelaProductResponse');
const menu = document.querySelector('.containerMenu');
const btnMenuHamburger = document.querySelector('.containerTop')
const pageAddProduct = document.querySelector('.contProduct');
const exitItem = document.querySelector('.fecharTela');
const btnExitCadProduct = document.querySelector('.prdutos i')

const btnAddProduto = document.querySelector('.btnAddProduct');
const btnRemoveProduto = document.querySelector('.btnRemoveProduct');

const imgSelect = document.getElementById('file');
const icoImgAdd = document.querySelector('.formProduct span')

const select = document.getElementById('qtParcela');
 
const totalProduct = document.querySelector('.checkboxList span');
const btnCheckAll = document.getElementById('btnCheckAll');
const delItem = document.querySelector('.tbContent', '.tabelaProductResponse');
const delItemResponse = document.querySelector('.tabelaProductResponse');


const dbProduct = firebase.firestore();



let listaProduct = []
let estadoCheckbox = false


setInterval(()=>{
    checktd = document.querySelectorAll('tr').length;
    checktd = checktd -1
    totalProduct.innerHTML = 'Total' + ' ' + checktd + ' ' + 'Produtos'
}, 1000)

window.onload = function () {
    loadProdutos()

a = parseFloat('539,19')
b = parseFloat('525.10')

c = a + b

console.log(c.toFixed(2))
}

btnCheckAll.addEventListener('click', () => {
    let ckeckboxs = document.querySelectorAll('.ckeckbox[type=checkbox]');
    for (let i = 0; i <ckeckboxs.length; i++) {
        ckeckboxs[i].checked = !estadoCheckbox;
    }
    estadoCheckbox = !estadoCheckbox

})

icoImgAdd.addEventListener('click', ()=>{
    let fileImg = document.getElementById('file');

    fileImg.click();
})

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

delItem.addEventListener('click', e => {
    const removeBtn = e.target.dataset.remove;
    if(removeBtn){
        dbProduct.collection('produtos').doc(removeBtn).delete()
        
        .then(() => {
            const delTr = document.querySelector(`[data-remove="${removeBtn}"]`);
            delTr.remove();
    
            alert('produto Removido')
        })
        .catch(() => {
            console.log('error.message')
        })
    }
})

delItemResponse.addEventListener('click', e => {
    const removeBtn = e.target.dataset.remove;
    if(removeBtn){
        dbProduct.collection('produtos').doc(removeBtn).delete()
        
        .then(() => {
            const delTr = document.querySelector(`[data-remove="${removeBtn}"]`);
            delTr.remove();
    
            alert('produto Removido')
        })
        .catch(() => {
            console.log('error.message')
        })
    }
})

function renderProduct() {
   
    dbProduct.collection('produtos').get()
    .then(snapshot => {
       const produtosTr = snapshot.docs.reduce((acc, doc) => {

           const {cod, img, title, description, qtParcela, vDescont, vAvista, vPrazp, valorPa, qtEstoque} = doc.data()
            acc += `<tr id="tagTr" data-remove="${doc.id}">
            <td id="check"><input class="ckeckbox" type="checkbox"></td>
            <td id="cod">${cod}</td>
            <td id="imgIco" class="tdImg"><img src="${img}" alt=""></td>
            <td id="title">${title}</td>
            <td id="description">${description}</td>
            <td class="trDescont">R$ ${vDescont}</td>
            <td class="trVPrazo">R$ ${vPrazp}</td>
            <td class="trVAvista">R$ ${vAvista}</td>
            <td class="trQtParcel">${qtParcela}</td>
            <td class="valorPa">R$ ${valorPa}</td>
            <td class="trQtEstoque">${qtEstoque}</td>
            <td id="edit" class="edit"><i  class="fa-solid fa-pen-to-square"></i></td>
            <td id="apagar" class="delItem"><i data-remove="${doc.id}" class="fa-solid fa-trash-can"></i></i></td>
        </tr>`
        return acc     
        }, '')
        itemList.innerHTML += produtosTr  


        
    })
    dbProduct.collection('produtos').get()
    .then(snapshot => {
       const produtosTrRespon = snapshot.docs.reduce((acc, doc) => {

           const {cod, img, title, vAvista, vPrazp} = doc.data()
            acc += `<tr id="tagTr" data-remove="${doc.id}">
            <td id="check"><input class="ckeckbox" type="checkbox"></td>
            <td id="cod">${cod}</td>
            <td id="imgIco" class="tdImg"><img src="${img}" alt=""></td>
            <td id="title">${title}</td>
            <td class="trVPrazo">R$ ${vPrazp}</td>
            <td class="trVAvista">R$ ${vAvista}</td>
            <td id="edit" class="edit"><i  class="fa-solid fa-pen-to-square"></i></td>
            <td id="apagar" class="delItem"><i data-remove="${doc.id}" class="fa-solid fa-trash-can"></i></td>
        </tr>`
        return acc     
        }, '')
        itemListRespom.innerHTML += produtosTrRespon  


        
    })



    
}





function filtroTeclas(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
  }


function calcularValoresAdd() {
    let valorPrazo = parseInt(document.getElementById('vPrazp').value);
    let quatParcel = parseInt(document.getElementById('qtParcela').value);
    let valorParcel = document.getElementById('pa')
    let total = (valorPrazo / quatParcel);
 
    valorParcel.value = (total.toFixed(2))
    
}

function formatarMoeda() {
    var elemento = document.getElementById('vPrazp');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}
function formatarMoeda2() {
    var elemento = document.getElementById('vAvista');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}
function formatarMoeda3() {
    var elemento = document.getElementById('pa');
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}


async function loadProdutos() {
    listaProduct = []
    const logProduct = await dbProduct.collection('produtos').get()
    for(doc of logProduct.docs) {
        listaProduct.push ({
            id: doc.id,
            cod: doc.data().cod,
            img: doc.data().img,
            title: doc.data().title,
            description: doc.data().description,
            vDescont: doc.data().vDescont,
            vPrazp: doc.data().vPrazp,
            vAvista: doc.data().vAvista,
            qtParcela: doc.data().qtParcela,
            valorPa: doc.data().valorPa,
            qtEstoque: doc.data().qtEstoque,
        })
    }
    renderProduct()
}

async function addProduct() {
    const cod = document.getElementById('cod').value;
    const img = document.getElementById('file').src;
    const title = document.getElementById('name').value;
    const description = document.getElementById('desc').value;
    const qtParcela = select.options[select.selectedIndex].value;
    const vDescont = document.getElementById('descont').value;
    const vPrazp = document.getElementById('vPrazp').value;
    const vAvista = document.getElementById('vAvista').value;
    const valorPa = document.getElementById('pa').value;
    const qtEstoque = document.getElementById('qtEstoque').value;  

    await dbProduct.collection('produtos').add({
        cod: cod,
        img: img,
        title: title,
        description: description,
        vDescont: vDescont,
        vPrazp: vPrazp,
        vAvista: vAvista,
        qtParcela: qtParcela,
        valorPa: valorPa,
        qtEstoque: qtEstoque,

    })
    loadProdutos();
    location.reload();

}




let loadImgFile = function(event){
    let reader = new FileReader();
    reader.onload = function() {
        let imageAdd = document.querySelector('#newAddImg')
        imageAdd.style.visibility = 'visible'
        imageAdd.style.backgroundImage = 'url('+reader.result+')'    
    }
    reader.readAsDataURL(event.target.files[0]);
}



document.getElementById('file').addEventListener('change', (event)=> {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + file.name);

    storageRef.put(file).then(function(result) {
        storageRef.getDownloadURL().then(function(result){
            const imgAdd = document.getElementById('file');
            console.log(result)
            imgAdd.src = result;
    });

    
    })
})

