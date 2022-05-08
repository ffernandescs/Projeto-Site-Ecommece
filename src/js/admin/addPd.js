const imgPreview = document.querySelector('.imgForm img');
const formAddProduto = document.querySelector('.addProduto'); 

const btnSubmit = document.querySelector('.barTop button');

const cod =  document.getElementById('cod')
const img =  document.getElementById('fileEdit')
const nameText =  document.getElementById('name')
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

const inputMoedas = document.querySelectorAll('.moeda');


window.addEventListener('load', () => {
    for(let i = 0; i < inputMoedas.length; i++) {
        if(inputMoedas[i]) {
            inputMoedas[i].addEventListener('keyup', (event) => {
                const onlyDigits = event.target.value
                  .split("")
                  .filter(s => /\d/.test(s))
                  .join("")
                  .padStart(3, "0")
                const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
                event.target.value = maskCurrency(digitsFloat)
            })
        }
    }
})

function soma() {
    const vPrazo = parseFloat(document.getElementById("vPrazo").value.replace(/[R$\.]/g, "").replace(",", "."));
    const vAvista = parseInt(document.getElementById("vAvista").value.replace(/[R$\.]/g, "").replace(",", "."));
    
    const valorDescont = vPrazo - vAvista;
    const desconto = valorDescont * 100; 800
    const percentual = desconto / vPrazo;

    if(percentual >= 1) {
        vDesconto.value = Math.floor(percentual) + '%'
    } else {
        vDesconto.value = percentual.toFixed(2) + '%'
    }
    const quantParcel = vPrazo / qtParcela.value
 
    vParcela.value = quantParcel.toLocaleString('pt-Br',{style: 'currency', currency: 'BRL'})
}

  function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    }).format(valor)
  }

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
    const codd = document.getElementById('cod').value;
    const form = document.querySelectorAll('.form');


    checkFormulario()

    

    if(cod.value.length == 0 || img.src.length == 0 || nameText.value.length == 0 || artigo.value.length == 0 ||  
        description.value.length == 0 || vPrazo.value.length == 0 ||  vDesconto.value.length == 0 ||
        vParcela.value.length == 0 || vAvista.value.length == 0 || vFrete.value.length == 0 || 
        qtEstoque.value.length == 0 || qtParcela.value.length == 0 || marca.value.length == 0 || 
        categoria1.value.length == 0 ) {



    } else {
        
        dbFirestore.collection('produtos').doc().set({
            
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
        }).then(() => {
            alert('saslvo com sucesso')
        })
        formAddProduto.reset()
        imageProduto.src = '../../../assets/img/addImg.png'
    }
})




function checkFormulario() {
    const codValue =  document.getElementById('cod').value
    const imgSrc =  document.getElementById('fileEdit').src
    const nameTextValue =  document.getElementById('name').value
    const artigoValue =  document.getElementById('artigo').value
    const descriptionValue =  document.getElementById('description').value
    const vPrazoValue =  document.getElementById('vPrazo').value
    const vAvistaValue =  document.getElementById('vAvista').value
    const qtEstoqueValue =  document.getElementById('qtEstoque').value
    const marcaValue =  document.getElementById('marca').value
    const categoria1Value =  document.getElementById('categoria1').value

    if(codValue === '') {
        setErrorFor(cod)
    } else {
        setSucessFor(cod)
    }
    if(imgSrc === '') {
        setErrorFor(img)
    } else {
        setSucessFor(img)
    }
    if(nameTextValue === '') {
        setErrorFor(nameText)
    } else {
        setSucessFor(nameText)
    }
    if(artigoValue === '') {
        setErrorFor(artigo)
    } else {
        setSucessFor(artigo)
    }
    if(descriptionValue === '') {
        setErrorFor(description)
    } else {
        setSucessFor(description)
    }
    if(vPrazoValue === '' || vPrazoValue == 'R$ 0,00') {
        setErrorFor(vPrazo)
    } else {
        setSucessFor(vPrazo)
    }
    if(vAvistaValue === '' || vAvistaValue == 'R$ 0,00') {
        setErrorFor(vAvista)
    } else {
        setSucessFor(vAvista)
    }
    if(qtEstoqueValue === '') {
        setErrorFor(qtEstoque)
    } else {
        setSucessFor(qtEstoque)
    }
    if(marcaValue === '') {
        setErrorFor(marca)
    } else {
        setSucessFor(marca)
    }
    if(categoria1Value === '') {
        setErrorFor(categoria1)
    } else {
        setSucessFor(categoria1)
    }
}

function setSucessFor(input, message) {
    const itemInput = input
    const formError = itemInput.closest('.form')

    formError.classList.remove('error')
}

function setErrorFor(input, message) {
    const itemInput = input
    
    const formError = itemInput.closest('.form')

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



