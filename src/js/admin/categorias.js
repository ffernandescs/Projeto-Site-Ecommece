const tableListProduc = document.querySelector('.tbList');
const delItem = document.querySelector('.tbList'); 
const formEdit = document.querySelector('.editCategoria'); 

const formEditCategoria = document.querySelector('.editCategoria');
const nameCategoria =  document.getElementById('name')

let id; 

const btnSubmit = document.querySelector('.contBtnEdit #btnSalvar');

btnSubmit.addEventListener('click', () => {
    const btnFormSubmit = document.querySelector('.btnForm .btnSubmit');
    btnFormSubmit.click();
})


dbFirestore.collection('categorias').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingList(doc);
    })
})

const loadingList = doc => {
    const tr = `<tr class="tagTr" data-listTr="${doc.id}" data-remove="${doc.id}">
                    <td id="tdCategorias">${doc.data().nameCategoria}</td>
                    <td id="tdAcoes">
                        <span class="material-icons btnEdit" title="Editar">open_in_new</span>
                        <span data-remove="${doc.id}" class="material-icons" title="Apagar">delete</span>
                    </td>                            
                </tr>`

    tableListProduc.insertAdjacentHTML('beforeend', tr);

    const buscarProduto = document.getElementById('searchList');
    const listLiPd = document.querySelectorAll(`.tagTr`);
    const totalItens = document.getElementById('totalItens')

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
        const modalEdit = document.querySelector('.contEditCategorias');
        const btnPageLimpar = document.querySelector('.btnClear');
        const btnPageEditar = document.getElementById('btnEdit');
        const btnPageSalvar = document.getElementById('btnSalvar');
        const disableInput = document.querySelectorAll('.form input');
        const namePageEdit = document.querySelector('.barTopEdit #namePage');

        namePageEdit.innerHTML = 'Categorias'
        modalEdit.classList.add('active')

        for(let i = 0; i < disableInput.length; i++){
            disableInput[i].disabled = true;
            if(disableInput[i].disabled = true) {
                disableInput[i].style.backgroundColor = '#ececed30'
            }
        }

        id = doc.id
        
        formEditCategoria.name.value = doc.data().nameCategoria

        const btnCancel = document.getElementById('btnCancel');
        btnCancel.addEventListener('click', () => {
            modalEdit.classList.remove('active')
            btnPageEditar.style.display = 'block'

        })

        const btnEdit = document.getElementById('btnEdit');
        btnEdit.addEventListener('click', () => {

            namePageEdit.innerHTML = 'Editar Categorias'

            btnPageEditar.style.display = 'none'
            btnPageSalvar.classList.add('active')    
            btnPageLimpar.style.visibility = 'visible'
    
            for(let i = 0; i < disableInput.length; i++){
                disableInput[i].disabled = false;
                disableInput[i].style.backgroundColor = 'transparent'
            }

        })

    })
}

delItem.addEventListener('click', e => {
    const removeBtn = e.target.dataset.remove;

    if(removeBtn){
        dbFirestore.collection('categorias').doc(removeBtn).delete()
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
    checkFormulario()

    if(nameCategoria.value.length == 0) {

    } else {
        dbFirestore.collection('categorias').doc(id).update({
            nameCategoria: formEditCategoria.name.value,
        })
        
        setTimeout(function(){
            window.location.reload();
        }, 1000)
    }

})

function checkFormulario() {
    const nameValue =  document.getElementById('name').value

    if(nameValue === '') {
        setErrorFor(nameCategoria)
    } else {
        setSucessFor(nameCategoria)
    }

}

function setSucessFor(input, message) {
    const itemInput = input
    const formError = itemInput.closest('.form')

    formError.classList.remove('error')
}

function setErrorFor(input, message) {
    const itemInput = input
    
    const formError = itemInput.closest('.form')

    formError.classList.add('error')
}
