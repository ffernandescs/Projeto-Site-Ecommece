const tableListMarcas = document.querySelector('.listMarcas');
const delItem = document.querySelector('.listMarcas'); 

const formEditMarcas = document.querySelector('.editMarcas');
const nameMarcas =  document.getElementById('name')

let id; 

const btnSubmit = document.querySelector('.contBtnEdit #btnSalvar');

btnSubmit.addEventListener('click', () => {
    const btnFormSubmit = document.querySelector('.btnForm .btnSubmit');
    btnFormSubmit.click();
})


dbFirestore.collection('marcas').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingList(doc);
    })
})

const loadingList = doc => {
    const tr = `<tr class="tagTr" data-listTr="${doc.id}" data-remove="${doc.id}">
                    <td id="tdCategorias">${doc.data().nameMarca}</td>
                    <td id="tdAcoes">
                        <span class="material-icons btnEdit" title="Editar">open_in_new</span>
                        <span data-remove="${doc.id}" class="material-icons" title="Apagar">delete</span>
                    </td>                            
                </tr>`

    tableListMarcas.insertAdjacentHTML('beforeend', tr);

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
        const modalEdit = document.querySelector('.contEditMarcas');
        const btnPageLimpar = document.querySelector('.btnClear');
        const btnPageEditar = document.getElementById('btnEdit');
        const btnPageSalvar = document.getElementById('btnSalvar');
        const disableInput = document.querySelectorAll('.form input');
        const namePageEdit = document.querySelector('.barTopEdit #namePage');

        namePageEdit.innerHTML = 'Marcas'
        modalEdit.classList.add('active')

        for(let i = 0; i < disableInput.length; i++){
            disableInput[i].disabled = true;
            if(disableInput[i].disabled = true) {
                disableInput[i].style.backgroundColor = '#ececed30'
            }
        }

        id = doc.id
        
        formEditMarcas.name.value = doc.data().nameMarca

        const btnCancel = document.getElementById('btnCancel');
        btnCancel.addEventListener('click', () => {
            modalEdit.classList.remove('active')
            btnPageEditar.style.display = 'block'

        })

        const btnEdit = document.getElementById('btnEdit');
        btnEdit.addEventListener('click', () => {

            namePageEdit.innerHTML = 'Editar Marcas'

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
        dbFirestore.collection('marcas').doc(removeBtn).delete()
        .then(() => {
            const delTr = document.querySelector(`[data-remove="${removeBtn}"]`);
            delTr.remove();
        })
        .catch(() => {
            console.log('error.message')
        })
    }
    console.log('asdsa')
})

formEditMarcas.addEventListener('submit', e => {
    e.preventDefault();
    checkFormulario()

    if(nameMarcas.value.length == 0) {

    } else {
        dbFirestore.collection('marcas').doc(id).update({
            nameMarca: formEditMarcas.name.value,
        })
        
        setTimeout(function(){
            window.location.reload();
        }, 1000)
    }

})

function checkFormulario() {
    const nameMarcasValeu =  document.getElementById('name').value

    if(nameMarcasValeu === '') {
        setErrorFor(nameMarcas)
    } else {
        setSucessFor(nameMarcas)
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
