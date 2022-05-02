
function getUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            
        } else {

                
                window.location.replace('../../pages/login/login.html')
        
        }
    })
}


function logoutUser() {
    const loading = document.querySelector('.loading');
    const modalRemove = document.querySelector('.subMenuUser');
    loading.style.visibility = 'visible';
    modalRemove.classList.remove('active');

    setTimeout(function(){
        firebase.auth().signOut()
    }, 3000)
     
}



window.onload = function() {
    getUser();
}

