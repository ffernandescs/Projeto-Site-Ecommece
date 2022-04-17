let btnLogin = document.querySelector('.btnLoginAdmin');


btnLogin.addEventListener('click', function() {
    let email = document.querySelector('.inputEmail').value;
    let password = document.querySelector('.inputSenha').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ..
      console.log('Usuario Conectado')
      window.location.replace('../../page/admin/index.html')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Usuario nao Conectado')

    });
    
});


delItem.addEventListener('click', e => {
  const removeBtn = e.target.dataset.remove;
  if(confirm('Deseja realizar esta operaçõa?') == true){
      dbProduct.collection('produtos').doc(removeBtn).delete()
      .then(() => {
          const delTr = document.querySelector(`[data-remove="${removeBtn}"]`);
          delTr.remove();

          alert('Operação realizada com sucesso')
      })
      .catch(() => {
          console.log('error.message')
      })

      console.log(removeBtn)       
   } else {
      alert('Cancelada pelo usuario')
   }
})
