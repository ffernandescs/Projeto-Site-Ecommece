const dbProduct = firebase.firestore();

const btnAddProduct = document.getElementById('btnAddProduct');
const addProduct = document.querySelector('.addProduct');
const editProduct = document.querySelector('.editProduct');
const clickFora = document.querySelector('.telaEscura');
const tableListProduc = document.querySelector('.tbList');
const formAddProduct = document.querySelector('.formAddProduct');
const formEditProduct = document.querySelector('.formEditProduct');
const select = document.getElementById('qtParcela');
const selectCategorias = document.getElementById('categorias');
const delItem = document.querySelector('.tbList');
const closeAddProduct = document.querySelector('.close');
const closeEditProduct = document.querySelector('.closeEdit');

const clickImgUser = document.querySelector('.imgUser');
const clickImgAdd = document.querySelector('.imgAdd img');
const clickImgEdit = document.querySelector('.imgAddEdit img');
const menuDropdown = document.querySelector('.barraTop .textUser nav ul li ul');
const btnDropdown = document.querySelector('.barraTop .textUser nav ul li a');




let id;
var categorias;
let imgUser;
let tagTr;

 
btnDropdown.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');

    menuDropdown.classList.toggle('active');
    if(menuDropdown.classList.contains('active')){
        telaEscura.classList.add('active');
    } else {
        telaEscura.classList.remove('active');
        menuDropdown.classList.remove('active')
    }
})

clickFora.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    telaEscura.classList.remove('active')
    menuDropdown.classList.remove('active')

})

clickImgAdd.addEventListener('click', () => {
    const imgAdd = document.getElementById('file');
    imgAdd.click();
})

clickImgEdit.addEventListener('click', () => {
    const imgAddEdit = document.getElementById('fileEdit');
    imgAddEdit.click();
})


clickFora.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    const addProduct = document.querySelector('.addProduct');
    telaEscura.classList.remove('active')
    addProduct.classList.remove('active') 
    editProduct.classList.remove('active') 

})

btnAddProduct.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    const addProduct = document.querySelector('.addProduct');
    telaEscura.classList.add('active')
    addProduct.classList.add('active')
})

closeAddProduct.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    const addProduct = document.querySelector('.addProduct');
    telaEscura.classList.remove('active')
    addProduct.classList.remove('active') 
})

closeEditProduct.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    telaEscura.classList.remove('active')
    editProduct.classList.remove('active') 
})

dbProduct.collection('produtos').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingList(doc);
    })
})

const loadingList = doc => {
    const tr = `<tr class="tagTr" data-remove="${doc.id}">
    <td id="tdCod">${doc.data().cod}</td>
    <td id="tdImg"><img src="${doc.data().img}" alt=""></td>
    <td id="tdName">${doc.data().name}</td>
    <td id="tdVP">R$ ${doc.data().vPrazp}</td>
    <td id="tdDesconto">${doc.data().vDescont}%</td>
    <td id="tdVA">R$ ${doc.data().vAvista}</td>
    <td id="tdQtParcela">${doc.data().qtParcela}x</td>
    <td id="tdVParcela">R$ ${doc.data().valorPa}</td>
    <td id="tdEstoque">${doc.data().qtEstoque} Und.</td>
    <td id="tdAcoes">
        <span class="material-icons btnEdit" title="Editar">open_in_new</span>
        <span data-remove="${doc.id}" class="material-icons" title="Apagar">delete</span>
    </td>                            
</tr>`


tableListProduc.insertAdjacentHTML('beforeend', tr);

const testeTr = document.querySelectorAll('.tagTr').length
const totalItens = document.getElementById('totalItens')


totalItens.innerHTML = testeTr

const btnEdit = document.querySelector(`[data-remove="${doc.id}"] .btnEdit`)
btnEdit.addEventListener('click', () => {
    const telaEscura = document.querySelector('.telaEscura');
    const imgPreview = document.querySelector('.imgAddEdit img');

    id = doc.id

    editProduct.classList.add('active')
    telaEscura.classList.add('active')

    formEditProduct.cod.value = doc.data().cod
    formEditProduct.name.value = doc.data().name
    formEditProduct.img.src = doc.data().img
    formEditProduct.description.value = doc.data().description
    formEditProduct.valorPrazo.value = doc.data().vPrazp
    formEditProduct.valorDesconto.value = doc.data().vDescont
    formEditProduct.valorAvista.value = doc.data().vAvista
    formEditProduct.qtParcela.value = doc.data().qtParcela
    formEditProduct.valorParcela.value = doc.data().valorPa
    formEditProduct.qtEstoque.value = doc.data().qtEstoque
    formEditProduct.categorias.value = doc.data().categorias
    imgPreview.src = doc.data().img;


})


}

dbProduct.collection('categorias').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const categoriasOptions = document.getElementById('categorias');
        const tagOptionsCategoria = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions.insertAdjacentHTML('beforeend', tagOptionsCategoria)
        
    })

})



formAddProduct.addEventListener('submit', e => {
    e.preventDefault();
    const cod = document.getElementById('codInput').value;
    const img = document.getElementById('file').src;
    const name = document.getElementById('nameInput').value;
    const description = document.getElementById('descriptionText').value;
    const qtParcela = select.options[select.selectedIndex].value;
    const Categorias = selectCategorias.options[select.selectedIndex].value;
    const vDescont = document.getElementById('vDInput').value;
    const vPrazp = document.getElementById('vPInput').value;
    const vAvista = document.getElementById('vAInput').value;
    const valorPa = document.getElementById('vParcelInput').value;
    const qtEstoque = document.getElementById('qtEstoque').value;  
    

    

    dbProduct.collection('produtos').add({
        cod: cod,
        img: img,
        name: name,
        description: description,
        vDescont: vDescont,
        vPrazp: vPrazp,
        vAvista: vAvista,
        valorPa: valorPa,
        qtEstoque: qtEstoque,
        qtParcela: qtParcela,
        categorias: Categorias
    })

    setTimeout(function(){
        window.location.reload();
    }, 1000)

})


formEditProduct.addEventListener('submit', e => {
    e.preventDefault();

    dbProduct.collection('produtos').doc(id).update({
        cod: formEditProduct.cod.value,
        img: formEditProduct.img.src,
        name: formEditProduct.name.value,
        description: formEditProduct.description.value,
        vDescont: formEditProduct.vDInput.value,
        vPrazp: formEditProduct.valorPrazo.value,
        vAvista: formEditProduct.valorAvista.value,
        valorPa: formEditProduct.valorParcela.value,
        qtEstoque: formEditProduct.qtEstoque.value,
        qtParcela: formEditProduct.qtParcela.value,
        categorias: formEditProduct.categorias.value,
    })
    
    setTimeout(function(){
        window.location.reload();
    }, 1000)

})

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


let loadImgFile = function(event){
    let reader = new FileReader();
    reader.onload = function() {
        let imageAdd = document.querySelector('#imgInsert')
        imageAdd.style.visibility = 'visible'
        imageAdd.style.zIndex = '5'
        imageAdd.style.backgroundImage = 'url('+reader.result+')'    
    }
    reader.readAsDataURL(event.target.files[0]);
}

let loadImgFileEdit = function(event){
    let reader = new FileReader();
    reader.onload = function() {
        let imageAddEdit = document.querySelector('#imgInsertEdit')
        imageAddEdit.style.visibility = 'visible'
        imageAddEdit.style.zIndex = '5'
        imageAddEdit.style.backgroundImage = 'url('+reader.result+')'    
    }
    reader.readAsDataURL(event.target.files[0]);
}



document.getElementById('file').addEventListener('change', (event)=> {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + file.name);

    storageRef.put(file).then(function(result) {
        storageRef.getDownloadURL().then(function(result){
            const imgAdd = document.getElementById('file');
            imgAdd.src = result;
    });

    
    })
})

document.getElementById('fileEdit').addEventListener('change', (event)=> {
    const fileEdit = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + fileEdit.name);

    storageRef.put(fileEdit).then(function(result) {
        storageRef.getDownloadURL().then(function(result){
            const imgEdit = document.getElementById('fileEdit');
            imgEdit.src = result;
    });

    
    })
})

