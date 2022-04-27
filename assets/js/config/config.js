const dbInfo = firebase.firestore();
const dbCategorias = firebase.firestore();

const disableTextareas = document.querySelectorAll('.textareas textarea');
const btnEditarDadosForm = document.querySelector('#formInfo .btnFormularios .btnEditar');
const btnEditarPerfilForm = document.querySelector('#formUser .btnFormularios .btnEditar');
const formCategoria = document.getElementById('formCategorias');
const formEditeCategoria = document.getElementById('formEditeCategorias');
const btnAddCategoriaForm = document.querySelector('.pageCategoria .filtroTable .btnAddRemove button ');
const disableInputsInfo = document.querySelectorAll('#formInfo .inputs input');
const disableInputsUser = document.querySelectorAll('#formUser .inputs input');
const delItemCategoria = document.getElementById('listCategoria');


const clickFora = document.querySelector('.telaEscura');
const telaEscura = document.querySelector('.telaEscura');



const menuDados = document.getElementById('menuDados');
const menuPerfil = document.getElementById('perfil');
const menuCategoria = document.getElementById('categoria');
const pageConfig = document.querySelector('.pageConfig');
const pageConfigCategoria = document.querySelector('.pageCategoria');
const formInfo = document.getElementById('formInfo');
const formUser = document.getElementById('formUser');

let id;



btnEditarDadosForm.addEventListener('click', editarDadosSite);
btnEditarPerfilForm.addEventListener('click', editarPerfilSite);

window.addEventListener('load', () => {
    for(let i = 0; i < disableInputsInfo.length; i++){
        disableInputsInfo[i].disabled = true;
    }
    for(let i = 0; i < disableInputsUser.length; i++){
        disableInputsUser[i].disabled = true;
    }

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = true;
    }
})

dbInfo.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingUser(doc);

    })
})

dbCategorias.collection('categorias').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {

        loadingCategoria(doc);

    })
})

menuDados.addEventListener('click', () => {

    formUser.classList.remove('active');
    menuPerfil.classList.remove('active');

    pageConfigCategoria.classList.remove('active')
    menuCategoria.classList.remove('active');

    formInfo.classList.add('active');
    menuDados.classList.add('active');

})

menuPerfil.addEventListener('click', () => {
    
    formInfo.classList.remove('active');
    menuDados.classList.remove('active');

    pageConfigCategoria.classList.remove('active')
    menuCategoria.classList.remove('active');


    formUser.classList.add('active');
    menuPerfil.classList.add('active');


})

menuCategoria.addEventListener('click', () => {

    formInfo.classList.remove('active');
    menuDados.classList.remove('active');

    formUser.classList.remove('active');
    menuPerfil.classList.remove('active');
    
    pageConfigCategoria.classList.add('active')
    menuCategoria.classList.add('active');

})

btnAddCategoriaForm.addEventListener('click', () => {
    const closeAddCategoria = document.querySelector('#formCategorias .close');
    telaEscura.classList.add('active');

    formCategoria.classList.add('active');
    closeAddCategoria.addEventListener('click', () => {
        formCategoria.classList.remove('active');
        telaEscura.classList.remove('active');
    })
})

clickFora.addEventListener('click', () => {
    telaEscura.classList.remove('active');
    formEditeCategoria.classList.remove('active');
    formCategoria.classList.remove('active');


})

delItemCategoria.addEventListener('click', e => {
    const removeBtn = e.target.dataset.remove;

    if(removeBtn){
        dbCategorias.collection('categorias').doc(removeBtn).delete()
        
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

function editarDadosSite() {
    const btnSalvarForm = document.querySelector('#formInfo .btnFormularios .btnSalvarInfo');
    const btnCancelInfo = document.querySelector('#formInfo .btnFormularios .btnCancelInfo');

    btnCancelInfo.style.display = 'block'

    btnEditarDadosForm.style.display = 'none'
    btnSalvarForm.style.display = 'block'
    for(let i = 0; i < disableInputsInfo.length; i++){
        disableInputsInfo[i].disabled = false
    }

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false
    }

    btnCancelInfo.addEventListener('click', () => {
        for(let i = 0; i < disableInputsInfo.length; i++){
            disableInputsInfo[i].disabled = true
        }
    
        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = true
        }

        btnEditarDadosForm.style.display = 'block'
        btnSalvarForm.style.display = 'none'
        btnCancelInfo.style.display = 'none'
    })
}

function editarPerfilSite() {
    const btnSalvarForm = document.querySelector('#formUser .btnFormularios .btnSalvarInfo');
    const btnCancelInfo = document.querySelector('#formUser .btnFormularios .btnCancelInfo');

    const imgPerfil = document.querySelector('#labelImgPerfil span');

    btnCancelInfo.style.display = 'block'
    btnEditarPerfilForm.style.display = 'none'
    btnSalvarForm.style.display = 'block'
    for(let i = 0; i < disableInputsUser.length; i++){
        disableInputsUser[i].disabled = false
    }

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false
    }

    imgPerfil.addEventListener('click', () => {
        const inputFileImg = document.getElementById('imgForm');
        inputFileImg.click();

    })

    btnCancelInfo.addEventListener('click', () => {
        for(let i = 0; i < disableInputsUser.length; i++){
            disableInputsUser[i].disabled = true
        }
    
        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = true
        }

        btnEditarPerfilForm.style.display = 'block'
        btnSalvarForm.style.display = 'none'
        btnCancelInfo.style.display = 'none'
    
    })
}

const loadingUser = doc => {
    const spanImg = document.querySelector('#labelImgPerfil .imgUser img');
    spanImg.src = doc.data().imgPerfil
    formUser.nameForm.value = doc.data().nameUser

    id = doc.id
    formInfo.sobreNosForm.value = doc.data().sobre
    formInfo.politicaForm.value = doc.data().politica
    formInfo.envioForm.value = doc.data().envio
    formInfo.termosForm.value = doc.data().termos
    formInfo.telForm.value = doc.data().tel
    formInfo.localForm.value = doc.data().local
    formInfo.hrAForm.value = doc.data().hrA
    formInfo.hrBForm.value = doc.data().hrB
    formInfo.instagramForm.value = doc.data().redeInstagram
    formInfo.facebookForm.value = doc.data().redeFacebook


}


const loadingCategoria = doc => {
    const tabelaCategoria = document.getElementById('listCategoria');

        const trCategoria = `<tr data-remove="${doc.id}">
                                <td>01</td>
                                <td>${doc.data().nameCategoria}</td>
                                <td id="tdAcoes">
                                    <span class="material-icons btnEdit btnEditCategoria" title="Editar">open_in_new</span>
                                    <span data-remove="${doc.id}" class="material-icons" title="Apagar">delete</span>
                                </td>                            
                            </tr>`
                            
        tabelaCategoria.insertAdjacentHTML('beforeend', trCategoria)

        const btnEditCategoria = document.querySelector(`[data-remove="${doc.id}"] .btnEditCategoria`)
        const closeAddCategoria = document.querySelector('#closeEditeCategoria');

        btnEditCategoria.addEventListener('click', () => {
            const telaEscura = document.querySelector('.telaEscura');
            telaEscura.classList.add('active')
            formEditeCategoria.classList.add('active')
            formEditeCategoria.categoriaForm.value = doc.data().nameCategoria

            closeAddCategoria.addEventListener('click', () => {
                formEditeCategoria.classList.remove('active')
                telaEscura.classList.remove('active')

            })
        })
}

formInfo.addEventListener('submit', e => {
    e.preventDefault();

    dbInfo.collection('dadosUsuario').doc(id).update({
        sobre: formInfo.sobreNosForm.value,
        politica: formInfo.politicaForm.value,
        envio: formInfo.envioForm.value,
        termos: formInfo.termosForm.value,
        tel: formInfo.telForm.value,
        local: formInfo.localForm.value,
        hrA: formInfo.hrAForm.value,
        hrB: formInfo.hrBForm.value,
        redeInstagram: formInfo.instagramForm.value,
        redeFacebook: formInfo.facebookForm.value,
    })

    alert('Salvo com Sucesso')
    setTimeout(function(){
        window.location.reload();
    }, 1000)
})

formUser.addEventListener('submit', e => {
    e.preventDefault()
    const imgPerfil = document.getElementById('imgForm');

    dbInfo.collection('dadosUsuario').doc(id).update({
        imgPerfil: imgPerfil.src,
        nameUser: formUser.nameForm.value,
    })
    alert('Salvo com Sucesso')
    setTimeout(function(){
        window.location.reload();
    }, 1000)
})

formCategoria.addEventListener('submit', e => {
    e.preventDefault();
    const categoriaForm = document.getElementById('categoriaForm').value

    dbInfo.collection('categorias').add({
        nameCategoria: categoriaForm
    })

    alert('Adicionado com sucesso')
    setTimeout(function(){
        window.location.reload();
    }, 1000)
})

let loadImgFileEdit = function(event){
    let reader = new FileReader();
    reader.onload = function() {
        let imageAddEdit = document.querySelector('#imgSrc')
        imageAddEdit.style.visibility = 'visible'
        imageAddEdit.style.zIndex = '900'
        imageAddEdit.style.backgroundImage = 'url('+reader.result+')'    
    }
    reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('imgForm').addEventListener('change', (event)=> {
    const fileUser = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + fileUser.name);

        storageRef.put(fileUser).then(function(result) {
            storageRef.getDownloadURL().then(function(result){
                const imgAdd = document.getElementById('imgForm');
                imgAdd.src = result;
        });    
    })
})







