const formAddMarcas = document.querySelector('.addCategorias'); 
const btnSubmit = document.querySelector('.barTop button');
const nameAddCategorias =  document.getElementById('name')

btnSubmit.addEventListener('click', () => {
    const btnFormSubmit = document.querySelector('.btnForm .btnSubmit');
    btnFormSubmit.click();
})
 
formAddMarcas.addEventListener('submit', e => {
    e.preventDefault();
    checkFormulario()
    if(nameAddCategorias.value.length == 0) {

    } else {
        dbFirestore.collection('categorias').doc().set({
            createdAt: new Date(),
            nameCategoria: formAddMarcas.name.value,

        }).then(() => {
            alert('saslvo com sucesso')
        })
        formAddMarcas.reset()
    }
})

function checkFormulario() {
    const nameAddCategoriasValue =  document.getElementById('name').value

    if(nameAddCategoriasValue === '') {
        setErrorFor(nameAddCategorias)
    } else {
        setSucessFor(nameAddCategorias)
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
