const btnEditDados = document.getElementById('btnEdit');
const formDadosUser = document.querySelector('.dadosUser');
const btnSalvar = document.getElementById('btnSalvar');
const imgPreview = document.querySelector('.itemForm1 img');


let id;



btnSalvar.addEventListener('click', () => {
    const btnSubmit = document.querySelector('.btnForm .btnSubmit');
    btnSubmit.click();
})


btnEditDados.addEventListener('click', () => {
    const namePageEdit = document.querySelector('.barTop #namePage');
    const disableInputs = document.querySelectorAll('.itemInput input');
    const disableTextareas = document.querySelectorAll('.form textarea');
    const btnLimpar = document.querySelector('.btnForm .btnClear');
    const btnEditar = document.getElementById('btnEdit');
    const btnCancelar = document.getElementById('btnCancel');

    namePageEdit.innerHTML = 'Editar Perfil'
    btnLimpar.style.visibility = 'visible'
    btnCancelar.style.visibility = 'visible'
    btnSalvar.style.visibility = 'visible'
    btnEditar.style.display = 'none'

    imgPreview.addEventListener('click', () => {
        const fileImg = document.getElementById('fileUser')
        fileImg.click();
    })

    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = false;
        disableInputs[i].style.backgroundColor = 'transparent'
    }

    btnCancelar.addEventListener('click', () => {
        namePageEdit.innerHTML = 'Dados do Site'
        btnLimpar.style.visibility = 'hidden'
        btnCancelar.style.visibility = 'hidden'
        btnSalvar.style.visibility = 'hidden'
        btnEditar.style.display = 'block'

        for(let i = 0; i < disableInputs.length; i++){
            disableInputs[i].disabled = true;
            disableInputs[i].style.backgroundColor = '#ececed30'
        }
        for(let i = 0; i < disableTextareas.length; i++){
            disableTextareas[i].disabled = true;
            disableTextareas[i].style.backgroundColor = '#ececed30'
        }
        setTimeout(function(){
            window.location.reload();
        }, 100)
    
    })
})

dbFirestore.collection('perfil').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
       
        id = doc.id

        imgPreview.src = doc.data().imgPerfil
        formDadosUser.nome.value = doc.data().nameUser
        formDadosUser.cargo.value = doc.data().cargo
        formDadosUser.tel.value = doc.data().tel
        formDadosUser.endereco.value = doc.data().endereco
        formDadosUser.email.value = doc.data().email
        formDadosUser.senhaAtual.value = doc.data().senhaAtual
        formDadosUser.newSenha.value = doc.data().newSenha
        formDadosUser.confirmNewSenha.value = doc.data().confirmNewSenha
    })
    
})

formDadosUser.addEventListener('submit', e => {
    e.preventDefault();

    dbFirestore.collection('perfil').doc(id).update({
        imgPerfil: imgPreview.src,
        nameUser: formDadosUser.nome.value,
        cargo: formDadosUser.cargo.value,
        tel: formDadosUser.tel.value,
        endereco: formDadosUser.endereco.value,
        email: formDadosUser.email.value,
        senhaAtual: formDadosUser.senhaAtual.value,
        newSenha: formDadosUser.newSenha.value,
        confirmNewSenha: formDadosUser.confirmNewSenha.value,
  
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

document.getElementById('fileUser').addEventListener('change', (event)=> {
    const fileEdit = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + fileEdit.name);

        storageRef.put(fileEdit).then(function(result) {
            storageRef.getDownloadURL().then(function(result){
                const imgEdit = document.getElementById('fileUser');
                imgEdit.src = result;
                imgPreview.src = result
        });
    })
})

