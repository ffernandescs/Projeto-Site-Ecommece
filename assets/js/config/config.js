const dbInfo = firebase.firestore();

let id;

dbInfo.collection('dadosUsuario').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingUser(doc);
    })
})

const formInfo = document.getElementById('formInfo');

const loadingUser = doc => {
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
})







