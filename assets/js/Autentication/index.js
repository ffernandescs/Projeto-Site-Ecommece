
function getUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            let labelUser = document.getElementById('idUserMain');
            let login = document.querySelector('.login h1');
            labelUser.innerHTML = user.email
            login.innerHTML = user.name
        } else {
            
            setTimeout(() => {
                window.location.replace('../../admin.html')
            }, 5000)
        }
    })
}

function logoutUser() {
    firebase.auth().signOut()
    const loading = document.querySelector('.loading');
      loading.style.visibility = 'visible'
    setTimeout(() => {
        window.location.replace('../../admin.html')
    }, 5000)

}

window.onload = function() {
    getUser();
}

