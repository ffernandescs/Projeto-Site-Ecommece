const dbInfo = firebase.firestore();

const disableInputs = document.querySelectorAll('.inputs input');
const disableTextareas = document.querySelectorAll('.textareas textarea');
const btnEditarDadosForm = document.querySelector('#formInfo .btnFormularios .btnEditar');
const btnEditarPerfilForm = document.querySelector('#formUser .btnFormularios .btnEditar');
const menuDados = document.getElementById('menuDados');
const menuPerfil = document.getElementById('perfil');
const pageConfig = document.querySelector('.pageConfig');
const formInfo = document.getElementById('formInfo');
const formUser = document.getElementById('formUser');



menuDados.addEventListener('click', () => {
    formInfo.classList.add('active')
    menuDados.classList.add('active');

    formUser.classList.remove('active')
    menuPerfil.classList.remove('active');


})

menuPerfil.addEventListener('click', () => {
    formInfo.classList.remove('active')
    menuDados.classList.remove('active');

    formUser.classList.add('active')
    menuPerfil.classList.add('active');


})

btnEditarDadosForm.addEventListener('click', editarDadosSite);
btnEditarPerfilForm.addEventListener('click', editarPerfilSite);

function editarDadosSite() {
    const btnSalvarForm = document.querySelector('#formInfo .btnFormularios .btnSalvarInfo');
    const btnCancelInfo = document.querySelector('#formInfo .btnFormularios .btnCancelInfo');
    btnCancelInfo.style.display = 'block'


    btnEditarDadosForm.style.display = 'none'
    btnSalvarForm.style.display = 'block'
    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = false
    }

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false
    }

   

    btnCancelInfo.addEventListener('click', () => {
        for(let i = 0; i < disableInputs.length; i++){
            disableInputs[i].disabled = true
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
    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = false
    }

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false
    }

    imgPerfil.addEventListener('click', () => {
        const inputFileImg = document.getElementById('imgForm');
        inputFileImg.click();
        console.log('coco')

    })

    btnCancelInfo.addEventListener('click', () => {
        for(let i = 0; i < disableInputs.length; i++){
            disableInputs[i].disabled = true
        }
    
        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = true
        }

        btnEditarPerfilForm.style.display = 'block'
        btnSalvarForm.style.display = 'none'
        btnCancelInfo.style.display = 'none'

    
    })
    console.log('clic')
}


window.addEventListener('load', () => {
    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = true
    }

    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = true
    }
})

let id;

dbInfo.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingUser(doc);

    })
})



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

    alert('salvo com Sucesso')
})

formUser.addEventListener('submit', e => {
    e.preventDefault()
    const imgPerfil = document.getElementById('imgForm');
    
    console.log(imgPerfil.src)

    dbInfo.collection('dadosUsuario').doc(id).update({
        imgPerfil: imgPerfil.src,
    })

})



let loadImgFileEdit = function(event){
    let reader = new FileReader();
    reader.onload = function() {
        let imageAddEdit = document.querySelector('#labelImgPerfil span')
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
            console.log(result)
            imgAdd.src = result;
    });

    
    })
})







