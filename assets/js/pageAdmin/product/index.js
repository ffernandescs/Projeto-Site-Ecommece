const dbProduct = firebase.firestore(); 

const btnAddProduct = document.getElementById('btnAddProduct');
const addProduct = document.querySelector('.addProduct');
const editProduct = document.querySelector('.editProduct');
const clickFora = document.querySelector('.telaEscura');
const tableListProduc = document.querySelector('.tbList');
const formAddProduct = document.querySelector('.formAddProduct');
const formEditProduct = document.querySelector('.formEditProduct');
const select = document.getElementById('qtParcela');
const delItem = document.querySelector('.tbList');
const closeAddProduct = document.querySelector('.close');
const closeEditProduct = document.querySelector('.closeEdit');
const clickImgUser = document.querySelector('.imgUser');
const clickImgAdd = document.querySelector('.imgAdd img');
const clickImgEdit = document.querySelector('.imgAddEdit img');
const menuDropdown = document.querySelector('.barraTop .textUser nav ul li ul');
const btnDropdown = document.querySelector('.barraTop .textUser nav ul li a');

const telaEscura = document.querySelector('.telaEscura');
const disableInputs = document.querySelectorAll('.labels label input');
const disableTextareas = document.querySelectorAll('.labels label textarea');
const disableSelect = document.querySelectorAll('.labels label select');
const inputCategoria = document.querySelector('#categoriasForm');
const inputCategoria2 = document.querySelector('#categoriasForm2');
const inputCategoria3 = document.querySelector('#categoriasForm3');

 
let id;
let imgUser;
let tagTr;

 
btnDropdown.addEventListener('click', () => {
    menuDropdown.classList.toggle('active');
    if(menuDropdown.classList.contains('active')){
        telaEscura.classList.add('active');
    } else {
        telaEscura.classList.remove('active');
        menuDropdown.classList.remove('active')
    }
})

clickFora.addEventListener('click', () => {
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
    telaEscura.classList.remove('active')
    addProduct.classList.remove('active') 
    editProduct.classList.remove('active')

    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = false;
    }
        inputCategoria.disabled = true
        inputCategoria2.disabled = true
        inputCategoria3.disabled = true

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false;
    }

    for(let i = 0; i < disableSelect.length; i++){
        disableSelect[i].disabled = false;
        }

})

btnAddProduct.addEventListener('click', () => {
    telaEscura.classList.add('active')
    addProduct.classList.add('active')
})

closeAddProduct.addEventListener('click', () => {
    telaEscura.classList.remove('active')
    addProduct.classList.remove('active') 
})

closeEditProduct.addEventListener('click', () => {
    telaEscura.classList.remove('active')
    editProduct.classList.remove('active')

    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = false;
    }
        inputCategoria.disabled = true
        inputCategoria2.disabled = true
        inputCategoria3.disabled = true

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false;
    }

    for(let i = 0; i < disableSelect.length; i++){
        disableSelect[i].disabled = false;
        }
    
})

dbProduct.collection('produtos').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingList(doc);
        loadFormEdit(doc);
    })
})



const loadingList = doc => {
    const tr = `<tr class="tagTr" data-listTr="${doc.id}" data-remove="${doc.id}">
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




const buscarProduto = document.getElementById('searchList');
const totalItens = document.getElementById('totalItens')
const listLiPd = document.querySelectorAll(`.tagTr`);
    totalItens.innerHTML = listLiPd.length



    buscarProduto.addEventListener('input', () => {
        const buscar = buscarProduto.value.toLowerCase();
        listLiPd.forEach(e => {
            const itens = e.innerHTML.toLowerCase().includes(buscar);
            e.style.display = itens ? 'table-row' : 'none'
        })
    })

const btnEdit = document.querySelector(`[data-remove="${doc.id}"] .btnEdit`)

    btnEdit.addEventListener('click', () => {
        const imgPreview = document.querySelector('.imgAddEdit img');
        const telaEscura = document.querySelector('.telaEscura');
        const editTitle = document.getElementById('titleForm');
        const btnPageSalva = document.querySelector('.buttonSalvar');
        const btnPageLimpar = document.querySelector('.limpar');
        const disableInputs = document.querySelectorAll('.labels label input');
        const disableTextareas = document.querySelectorAll('.labels label textarea');
        const disableSelect = document.querySelectorAll('.labels label select');
        const btnEditeProdutos = document.querySelector('.editarProdutos');
        const disableFile = document.getElementById('fileEdit');
        disableFile.disabled = true

        btnPageSalva.classList.add('active')
        btnPageLimpar.classList.add('active')
        btnEditeProdutos.style.display = 'block'


        for(let i = 0; i < disableInputs.length; i++){
            disableInputs[i].disabled = true;
        }
        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = true;
        }

        for(let i = 0; i < disableSelect.length; i++){
            disableSelect[i].disabled = true;
        }

        editTitle.innerHTML = 'Produtos'
        
        editProduct.classList.add('active')
        telaEscura.classList.add('active')

        btnEditeProdutos.addEventListener('click', () => {
            const inputCategoria = document.querySelector('#categoriasForm');
            const inputCategoria2 = document.querySelector('#categoriasForm2');
            const inputCategoria3 = document.querySelector('#categoriasForm3');

            editTitle.innerHTML = 'Editar Produtos'
            disableFile.disabled = false


            btnPageSalva.classList.remove('active')
            btnPageLimpar.classList.remove('active')
            btnEditeProdutos.style.display = 'none'

        for(let i = 0; i < disableInputs.length; i++){
            disableInputs[i].disabled = false;
        }
            inputCategoria.disabled = true
            inputCategoria2.disabled = true
            inputCategoria3.disabled = true

        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = false;
        }

        for(let i = 0; i < disableSelect.length; i++){
            disableSelect[i].disabled = false;
            }
        })

        id = doc.id

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
        formEditProduct.categoriasForm.value = doc.data().categoria
        formEditProduct.categoriasForm2.value = doc.data().categoria2
        formEditProduct.categoriasForm3.value = doc.data().categoria3
        formEditProduct.categoriasEdit.value = doc.data().categoria
        formEditProduct.categoriasEdit2.value = doc.data().categoria2
        formEditProduct.categoriasEdit3.value = doc.data().categoria3
        imgPreview.src = doc.data().img;
    })
}

dbProduct.collection('categorias').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const categoriasOptions = document.getElementById('categorias');
        const tagOptionsCategoria = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions.insertAdjacentHTML('beforeend', tagOptionsCategoria);

        const categoriasOptions2 = document.getElementById('categorias2');
        const tagOptionsCategoria2 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions2.insertAdjacentHTML('beforeend', tagOptionsCategoria2);

        const categoriasOptions3 = document.getElementById('categorias3');
        const tagOptionsCategoria3 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions3.insertAdjacentHTML('beforeend', tagOptionsCategoria3);
        
        const categoriaEditsOptions = document.getElementById('categoriasEdit');
        const tagOptionsEditCategoria = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriaEditsOptions.insertAdjacentHTML('beforeend', tagOptionsEditCategoria);

        const categoriaEditsOptions2 = document.getElementById('categoriasEdit2');
        const tagOptionsEditCategoria2 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriaEditsOptions2.insertAdjacentHTML('beforeend', tagOptionsEditCategoria2);

        const categoriaEditsOptions3 = document.getElementById('categoriasEdit3');
        const tagOptionsEditCategoria4 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriaEditsOptions3.insertAdjacentHTML('beforeend', tagOptionsEditCategoria4);       
    })
})

const loadFormEdit = doc => {
    formEditProduct.categoriasForm.value = doc.data().categoria

}

formAddProduct.addEventListener('submit', e => {
    e.preventDefault();
    const selectCategorias = document.getElementById('categorias');
    const selectCategorias2 = document.getElementById('categorias2');
    const selectCategorias3 = document.getElementById('categorias3');


    const cod = document.getElementById('codInput').value;
    const img = document.getElementById('file').src;
    const name = document.getElementById('nameInput').value;
    const description = document.getElementById('descriptionText').value;
    const qtParcela = select.options[select.selectedIndex].value;
    const categorias = selectCategorias.options[selectCategorias.selectedIndex].value;
    const categorias2 = selectCategorias2.options[selectCategorias2.selectedIndex].value;
    const categorias3 = selectCategorias3.options[selectCategorias3.selectedIndex].value;
    const vDescont = document.getElementById('vDInput').value;
    const vPrazp = document.getElementById('vPInput').value;
    const vAvista = document.getElementById('vAInput').value;
    const valorPa = document.getElementById('vParcelInput').value;
    const qtEstoque = document.getElementById('qtEstoque').value;  

    dbProduct.collection('produtos').doc(`${cod}`).set({
        
        createdAt: new Date(),
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
        categoria: categorias,
        categoria2: categorias2,
        categoria3: categorias3
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
        categoria: formEditProduct.categoriasEdit.value,
        categoria2: formEditProduct.categoriasEdit2.value,
        categoria3: formEditProduct.categoriasEdit3.value,
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
