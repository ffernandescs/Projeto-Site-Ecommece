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
    formInfo.telForm.value = doc.data().tel
    formInfo.localForm.value = doc.data().local

}

formInfo.addEventListener('submit', e => {
    e.preventDefault();

    dbInfo.collection('dadosUsuario').doc(id).update({
        tel: formInfo.telForm.value,
        local: formInfo.localForm.value,
    })
})







