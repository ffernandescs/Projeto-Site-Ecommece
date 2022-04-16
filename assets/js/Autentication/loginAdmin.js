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
