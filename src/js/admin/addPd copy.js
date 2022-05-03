const imgPreview = document.querySelector('.imgForm img');
const formAddProduto = document.querySelector('.addProduto'); 

const btnSubmit = document.querySelector('.barTop button');

const cod =  document.getElementById('cod')
const img =  document.getElementById('imgAdd')
const name =  document.getElementById('name')
const artigo =  document.getElementById('artigo')
const description =  document.getElementById('description')
const vPrazo =  document.getElementById('vPrazo')
const vDesconto =  document.getElementById('vDesconto')
const vParcela =  document.getElementById('vParcela')
const vAvista =  document.getElementById('vAvista')
const vFrete =  document.getElementById('vFrete')
const qtEstoque =  document.getElementById('qtEstoque')
const qtParcela =  document.getElementById('qtParcela')
const marca =  document.getElementById('marca')
const categoria1 =  document.getElementById('categoria1')
const categoria2 =  document.getElementById('categoria2')
const categoria3 =  document.getElementById('categoria3')
const categoria4 =  document.getElementById('categoria4')
const categoria5 =  document.getElementById('categoria5')
const categoria6 =  document.getElementById('categoria6')

btnSubmit.addEventListener('click', () => {
    const btnFormSubmit = document.querySelector('.btnForm .btnSubmit');
    btnFormSubmit.click();
})



dbFirestore.collection('categorias').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const categoriasOptions1 = document.getElementById('categoria1');
        const tagOptionsCategoria1 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions1.insertAdjacentHTML('beforeend', tagOptionsCategoria1);

        const categoriasOptions2 = document.getElementById('categoria2');
        const tagOptionsCategoria2 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions2.insertAdjacentHTML('beforeend', tagOptionsCategoria2);

        const categoriasOptions3 = document.getElementById('categoria3');
        const tagOptionsCategoria3 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions3.insertAdjacentHTML('beforeend', tagOptionsCategoria3);

        const categoriasOptions4 = document.getElementById('categoria4');
        const tagOptionsCategoria4 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions4.insertAdjacentHTML('beforeend', tagOptionsCategoria4);

        const categoriasOptions5 = document.getElementById('categoria5');
        const tagOptionsCategoria5 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions5.insertAdjacentHTML('beforeend', tagOptionsCategoria5);

        const categoriasOptions6 = document.getElementById('categoria6');
        const tagOptionsCategoria6 = `
        <option value="${doc.data().nameCategoria}">${doc.data().nameCategoria}</option>`

        categoriasOptions6.insertAdjacentHTML('beforeend', tagOptionsCategoria6);          
    })
})

formAddProduto.addEventListener('submit', e => {
    e.preventDefault();
    const imageProduto = document.querySelector('.imgForm img');
    const cod = document.getElementById('cod').value;

    checkFormulario();

  
    dbFirestore.collection('produtos').doc(cod).set({
        createdAt: new Date(),
        cod: formAddProduto.cod.value,
        img: imageProduto.src,
        name: formAddProduto.nome.value,
        artigo: formAddProduto.artigo.value,
        description: formAddProduto.description.value,
        vDescont: formAddProduto.vDesconto.value,
        vPrazp: formAddProduto.vPrazo.value,
        vAvista: formAddProduto.vAvista.value,
        valorPa: formAddProduto.vParcela.value,
        vFrete: formAddProduto.vFrete.value,
        qtEstoque: formAddProduto.qtEstoque.value,
        qtParcela: formAddProduto.qtParcela.value,
        marcas: formAddProduto.marca.value,
        categoria: formAddProduto.categoria1.value,
        categoria2: formAddProduto.categoria2.value,
        categoria3: formAddProduto.categoria3.value,
        categoria4: formAddProduto.categoria4.value,
        categoria5: formAddProduto.categoria5.value,
        categoria6: formAddProduto.categoria6.value,
    })


    
    
    setTimeout(function(){
        window.location.reload();
    }, 1000)

})


function checkFormulario() {
    const codValue =  document.getElementById('cod').value
    const imgSrc =  document.getElementById('imgAdd').src
    const nameValue =  document.getElementById('name').value
    const artigoValue =  document.getElementById('artigo').value
    const descriptionValue =  document.getElementById('description').value
    const vPrazoValue =  document.getElementById('vPrazo').value
    const vDescontoValue =  document.getElementById('vDesconto').value
    const vParcelaValue =  document.getElementById('vParcela').value
    const vAvistaValue =  document.getElementById('vAvista').value
    const vFreteValue =  document.getElementById('vFrete').value
    const qtEstoqueValue =  document.getElementById('qtEstoque').value
    const qtParcelaValue =  document.getElementById('qtParcela').value
    const marcaValue =  document.getElementById('marca').value
    const categoria1Value =  document.getElementById('categoria1').value
    const categoria2Value =  document.getElementById('categoria2').value
    const categoria3Value =  document.getElementById('categoria3').value
    const categoria4Value =  document.getElementById('categoria4').value
    const categoria5Value =  document.getElementById('categoria5').value
    const categoria6Value =  document.getElementById('categoria6').value

    if(codValue === '') {
        setErrorFor(cod, 'o errei')
    }

    if(artigoValue === '') {
        setErrorFor(artigo, 'o errei')
    }

}

function setErrorFor(input, message) {
    const inputDiv = document.querySelector('.itemInput')
    const formError = inputDiv.parentElement;
    const small = formError.querySelector('small')

    small.innerText = message
    formError.classList.add('error')
}


dbFirestore.collection('marcas').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const marcasOptions = document.getElementById('marca');
        const tagOptionsMarcas = `
        <option value="${doc.data().nameMarca}">${doc.data().nameMarca}</option>`

        marcasOptions.insertAdjacentHTML('beforeend', tagOptionsMarcas); 
    })
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

document.getElementById('fileEdit').addEventListener('change', (event)=> {
    const fileEdit = event.target.files[0];
    const storageRef = firebase.storage().ref('siteEcommece-Isabel/' + fileEdit.name);

        storageRef.put(fileEdit).then(function(result) {
            storageRef.getDownloadURL().then(function(result){
                const imgEdit = document.getElementById('fileEdit');
                imgEdit.src = result;
                imgPreview.src = result
        });
    })
})

imgPreview.addEventListener('click', () => {
    const imgFile = document.getElementById('fileEdit');
    imgFile.click();
    
})



