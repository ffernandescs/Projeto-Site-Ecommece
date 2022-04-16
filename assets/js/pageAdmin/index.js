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

const checkbox = document.getElementById('checkbox');
const clickTrCheckbox = document.getElementById('clickTr');




const dbProduct = firebase.firestore();

let listaProduct = []

icoImgAdd.addEventListener('click', ()=>{
    let fileImg = document.getElementById('file');

    fileImg.click();
})

window.onload = function () {
    loadProdutos()
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

clickTrCheckbox.addEventListener('click', () => {
    if(checkbox.checked = false){
        checkbox.checked = true
    }
})




function renderProduct() {
    let itemList = document.querySelector('.tbContent');
    for (let produto of listaProduct ) {
        let tagTd = `<tr>
        <td><input type="checkbox"></td>
        <td>${produto.cod}</td>
        <td class="tdImg"><img src="${produto.img}" alt=""></td>
        <td>${produto.title}</td>
        <td>${produto.description}</td>
        <td>${produto.qtParcela}</td>
        <td>R$ ${produto.vDescont}</td>
        <td style="text-decoration: line-through;">R$ ${produto.vA}</td>
        <td id="">R$ ${produto.vH}</td>
        <td>R$ ${produto.valorPa}</td>
        <td>${produto.qtEstoque}</td>
        <td class="edit"><i class="fa-solid fa-pen-to-square"></i></td>
    </tr>`
    itemList.insertAdjacentHTML('beforeend', tagTd);
    }
}

async function loadProdutos() {
    listaProduct = []
    const logProduct = await dbProduct.collection('produtos').get()
    for(doc of logProduct.docs) {
        listaProduct.push ({
            cod: doc.data().cod,
            img: doc.data().img,
            title: doc.data().title,
            description: doc.data().description,
            vDescont: doc.data().vDescont,
            qtParcela: doc.data().qtParcela,
            vA: doc.data().vA,
            vH: doc.data().vH,
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
    const vA = document.getElementById('vA').value;
    const vH = document.getElementById('descont').value;
    const valorPa = document.getElementById('descont').value;
    const qtEstoque = document.getElementById('qtEstoque').value;
   


    await dbProduct.collection('produtos').add({
        cod: cod,
        img: img,
        title: title,
        description: description,
        vDescont: vDescont,
        vA: vA,
        vH: vH,
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

