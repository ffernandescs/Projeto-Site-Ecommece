const btnEditDados = document.getElementById('btnEdit');
const formDadosSite = document.querySelector('.dadosSite');
const btnSalvar = document.getElementById('btnSalvar');

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

    namePageEdit.innerHTML = 'Editar Dados do Site'
    btnLimpar.style.visibility = 'visible'
    btnCancelar.style.visibility = 'visible'
    btnSalvar.style.visibility = 'visible'
    btnEditar.style.display = 'none'


    for(let i = 0; i < disableInputs.length; i++){
        disableInputs[i].disabled = false;
        disableInputs[i].style.backgroundColor = 'transparent'
    }
    for(let i = 0; i < disableTextareas.length; i++){
        disableTextareas[i].disabled = false;
        disableTextareas[i].style.backgroundColor = 'transparent'
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

dbFirestore.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
       
        id = doc.id

        formDadosSite.sobre.value = doc.data().sobre
        formDadosSite.politica.value = doc.data().politica
        formDadosSite.envio.value = doc.data().envio
        formDadosSite.termos.value = doc.data().termos
        formDadosSite.instagram.value = doc.data().redeInstagram
        formDadosSite.facebook.value = doc.data().redeFacebook
        formDadosSite.whatsapp.value = doc.data().tel
        formDadosSite.endereco.value = doc.data().local
        formDadosSite.horario1.value = doc.data().hrA
        formDadosSite.nameHorario1.value = doc.data().nameHrA
        formDadosSite.horario2.value = doc.data().hrB
        formDadosSite.nameHorario2.value = doc.data().nameHrB
    })
    
})

formDadosSite.addEventListener('submit', e => {
    e.preventDefault();

    dbFirestore.collection('dadosUsuario').doc(id).update({
        sobre: formDadosSite.sobre.value,
        politica: formDadosSite.politica.value,
        envio: formDadosSite.envio.value,
        termos: formDadosSite.termos.value,
        redeInstagram: formDadosSite.instagram.value,
        redeFacebook: formDadosSite.facebook.value,
        tel: formDadosSite.whatsapp.value,
        local: formDadosSite.endereco.value,
        hrA: formDadosSite.horario1.value,
        nameHrA: formDadosSite.nameHorario1.value,
        hrB: formDadosSite.horario2.value,
        nameHrB: formDadosSite.nameHorario2.value,
    })

    setTimeout(function(){
        window.location.reload();
    }, 1000)
})