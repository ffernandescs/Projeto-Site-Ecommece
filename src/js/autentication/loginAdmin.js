const btnLogin = document.querySelector('#btnLogin');
const btnOlho = document.querySelector('.olhoLogin');



btnLogin.addEventListener('click', function() {
    let email = document.querySelector('.inputEmail').value;
    let password = document.querySelector('.inputSenha').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      setTimeout(() => {
        window.location.replace('../../pages/admin/index.html')

      }, 3000)
      const loading = document.querySelector('.loading');
      loading.style.visibility = 'visible'
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Usuario nao Conectado')
      const textErro = document.getElementById('textErro')
      textErro.style.visibility = 'visible'


    });
    
});

btnOlho.addEventListener('click', () => {
  const inputSenha = document.querySelector('.inputSenha');
    if(inputSenha.type == 'password') {
      inputSenha.type = 'text'
    } else {
      inputSenha.type = 'password'
    }
})

