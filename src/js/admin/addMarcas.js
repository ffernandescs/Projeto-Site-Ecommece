const formAddMarcas = document.querySelector('.addMarcas'); 
const btnSubmit = document.querySelector('.barTop button');
const nameAddMarcas =  document.getElementById('name')

btnSubmit.addEventListener('click', () => {
    const btnFormSubmit = document.querySelector('.btnForm .btnSubmit');
    btnFormSubmit.click();
})

formAddMarcas.addEventListener('submit', e => {
    e.preventDefault();
    checkFormulario()
    if(nameAddMarcas.value.length == 0) {

    } else {
        dbFirestore.collection('marcas').doc().set({
            createdAt: new Date(),
            nameMarca: formAddMarcas.name.value,

        }).then(() => {
            alert('saslvo com sucesso')
        })
        formAddMarcas.reset()
    }
})

function checkFormulario() {
    const nameAddMarcasValue =  document.getElementById('name').value

    if(nameAddMarcasValue === '') {
        setErrorFor(nameAddMarcas)
    } else {
        setSucessFor(nameAddMarcas)
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
