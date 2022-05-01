const tableListProduc = document.querySelector('.tbList');
const delItem = document.querySelector('.tbList'); 
const formEdit = document.querySelector('.editProduto'); 


const formEditProduct = document.querySelector('.editProduto');
const imgPreview = document.querySelector('.imgForm img');

let id;

const btnSubmit = document.querySelector('.contBtnEdit #btnSalvar');

btnSubmit.addEventListener('click', () => {
    const btnFormSubmit = document.querySelector('.btnForm .btnSubmit');
    btnFormSubmit.click();
})


dbFirestore.collection('produtos').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingList(doc);
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

    const btnEdit = document.querySelector(`[data-remove="${doc.id}"] .btnEdit`)

    btnEdit.addEventListener('click', () => {
        const modalEdit = document.querySelector('.contEditProduto');
        const btnPageLimpar = document.querySelector('.btnClear');
        const btnPageEditar = document.getElementById('btnEdit');
        const btnPageSalvar = document.getElementById('btnSalvar');
        const disableInputs = document.querySelectorAll('.itemInput input');
        const disableTextareas = document.querySelectorAll('.form textarea');
        const disableSelect = document.querySelectorAll('.form select');
        const disableFile = document.getElementById('fileEdit');
        const namePageEdit = document.querySelector('.barTopEdit #namePage');

        namePageEdit.innerHTML = 'Produtos'
        modalEdit.classList.add('active')
        disableFile.disabled = true


        for(let i = 0; i < disableInputs.length; i++){
            disableInputs[i].disabled = true;
            if(disableInputs[i].disabled = true) {
                disableInputs[i].style.backgroundColor = '#ececed30'
            }
        }
        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = true;
            if(disableTextareas[i].disabled = true) {
                disableTextareas[i].style.backgroundColor = '#ececed30'
            }

        }

        for(let i = 0; i < disableSelect.length; i++){
            disableSelect[i].disabled = true;
            if(disableSelect[i].disabled = true) {
                disableSelect[i].style.backgroundColor = '#ececed30'
            }
        }

        id = doc.id

        formEditProduct.cod.value = doc.data().cod
        formEditProduct.nome.value = doc.data().name
        formEditProduct.artigo.value = doc.data().artigo
        formEditProduct.description.value = doc.data().description
        formEditProduct.vPrazo.value = doc.data().vPrazp
        formEditProduct.vDesconto.value = doc.data().vDescont
        formEditProduct.vAvista.value = doc.data().vAvista
        formEditProduct.vParcela.value = doc.data().valorPa
        formEditProduct.vFrete.value = doc.data().vFrete
        formEditProduct.qtEstoque.value = doc.data().qtEstoque
        formEditProduct.qtParcela.value = doc.data().qtParcela
        formEditProduct.marca.value = doc.data().marcas
        formEditProduct.categoria1.value = doc.data().categoria
        formEditProduct.categoria2.value = doc.data().categoria2
        formEditProduct.categoria3.value = doc.data().categoria3
        imgPreview.src = doc.data().img

        const btnCancel = document.getElementById('btnCancel');
        btnCancel.addEventListener('click', () => {
            modalEdit.classList.remove('active')
            btnPageEditar.style.display = 'block'

        })





        const btnEdit = document.getElementById('btnEdit');
        btnEdit.addEventListener('click', () => {

            namePageEdit.innerHTML = 'Editar Produtos'


            btnPageEditar.style.display = 'none'
            btnPageSalvar.classList.add('active')    
            btnPageLimpar.style.visibility = 'visible'
            
            disableFile.disabled = false

            for(let i = 0; i < disableInputs.length; i++){
                disableInputs[i].disabled = false;
                disableInputs[i].style.backgroundColor = 'transparent'

            }
            for(let i = 0; i < disableTextareas.length; i++){
                disableTextareas[i].disabled = false;
                disableTextareas[i].style.backgroundColor = 'transparent'

            }
    
            for(let i = 0; i < disableSelect.length; i++){
                disableSelect[i].disabled = false;
                disableSelect[i].style.backgroundColor = 'transparent'
            }
            
            imgPreview.addEventListener('click', () => {
                const imgFile = document.getElementById('fileEdit');
                imgFile.click();
                
            })

         

        })

    })
}

dbFirestore.collection('categorias').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const categoriasOptions1 = document.getElementById('categoria1');
        const tagOptionsCategoria1 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions1.insertAdjacentHTML('beforeend', tagOptionsCategoria1);

        const categoriasOptions2 = document.getElementById('categoria2');
        const tagOptionsCategoria2 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions2.insertAdjacentHTML('beforeend', tagOptionsCategoria2);

        const categoriasOptions3 = document.getElementById('categoria3');
        const tagOptionsCategoria3 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions3.insertAdjacentHTML('beforeend', tagOptionsCategoria3);

        const categoriasOptions4 = document.getElementById('categoria4');
        const tagOptionsCategoria4 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions4.insertAdjacentHTML('beforeend', tagOptionsCategoria4);

        const categoriasOptions5 = document.getElementById('categoria5');
        const tagOptionsCategoria5 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions5.insertAdjacentHTML('beforeend', tagOptionsCategoria5);

        const categoriasOptions6 = document.getElementById('categoria6');
        const tagOptionsCategoria6 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions6.insertAdjacentHTML('beforeend', tagOptionsCategoria6);      
    })
})

dbFirestore.collection('marcas').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const marcasOptions = document.getElementById('marca');
        const tagOptionsMarcas = `
        <option value="${doc.data().nameMarca}">${doc.data().nameMarca}</option>`

        marcasOptions.insertAdjacentHTML('beforeend', tagOptionsMarcas); 
    })
})

delItem.addEventListener('click', e => {
    const removeBtn = e.target.dataset.remove;

    if(removeBtn){
        dbFirestore.collection('produtos').doc(removeBtn).delete()
        .then(() => {
            const delTr = document.querySelector(`[data-remove="${removeBtn}"]`);
            delTr.remove();
    
        })
        .catch(() => {
            console.log('error.message')
        })
    }
})


formEdit.addEventListener('submit', e => {
    e.preventDefault();
    const imageProduto = document.querySelector('.imgForm img');
  
    dbFirestore.collection('produtos').doc(id).update({
        cod: formEditProduct.cod.value,
        img: imageProduto.src,
        name: formEditProduct.nome.value,
        artigo: formEditProduct.artigo.value,
        description: formEditProduct.description.value,
        vDescont: formEditProduct.vDesconto.value,
        vPrazp: formEditProduct.vPrazo.value,
        vAvista: formEditProduct.vAvista.value,
        valorPa: formEditProduct.vParcela.value,
        vFrete: formEditProduct.vFrete.value,
        qtEstoque: formEditProduct.qtEstoque.value,
        qtParcela: formEditProduct.qtParcela.value,
        marcas: formEditProduct.marca.value,
        categoria: formEditProduct.categoria1.value,
        categoria2: formEditProduct.categoria2.value,
        categoria3: formEditProduct.categoria3.value,
        categoria4: formEditProduct.categoria4.value,
        categoria5: formEditProduct.categoria5.value,
        categoria6: formEditProduct.categoria6.value,
    })
    
    setTimeout(function(){
        window.location.reload();
    }, 1000)

})

let loadImgFileEdit = function(event){
    let reader = new FileReader();
    reader.onload = function() {
        let imageAddEdit = document.querySelector('#itemImgEdit')
        imageAddEdit.style.visibility = 'visible'
        imageAddEdit.style.backgroundImage = 'url('+reader.result+')'   
    }
    reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('fileEdit').addEventListener('change', (event)=> {
    const fileEdit = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + fileEdit.name);

        storageRef.put(fileEdit).then(function(result) {
            storageRef.getDownloadURL().then(function(result){
                const imgEdit = document.getElementById('fileEdit');
                imgEdit.src = result;
                imgPreview.src = result
        });
    })
})
