
function getUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            let labelUser = document.getElementById('idUserMain');
            let login = document.querySelector('.login h1');
            labelUser.innerHTML = user.email
            login.innerHTML = user.email
        } else {

                
                window.location.replace('../../admin.html')
        
        }
    })
}

function logoutUser() {
    firebase.auth().signOut()
    
    const loading = document.querySelector('.loading');
      loading.style.visibility = 'visible'
}

window.onload = function() {
    getUser();
}

