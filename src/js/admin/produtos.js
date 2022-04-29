const tableListProduc = document.querySelector('.tbList');


dbFirestore.collection('produtos').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        loadingList(doc);
    })
})



const loadingList = doc => {
    const tr = `<tr class="tagTr" data-listTr="${doc.id}" data-remove="${doc.id}">
                    <td id="tdCod">${doc.data().cod}</td>
                    <td id="tdImg"><img src="${doc.data().img}" alt=""></td>
                    <td id="tdName">${doc.data().name}</td>
                    <td id="tdVP">R$ ${doc.data().vPrazp}</td>
                    <td id="tdDesconto">${doc.data().vDescont}%</td>
                    <td id="tdVA">R$ ${doc.data().vAvista}</td>
                    <td id="tdQtParcela">${doc.data().qtParcela}x</td>
                    <td id="tdVParcela">R$ ${doc.data().valorPa}</td>
                    <td id="tdEstoque">${doc.data().qtEstoque} Und.</td>
                    <td id="tdAcoes">
                        <span class="material-icons btnEdit" title="Editar">open_in_new</span>
                        <span data-remove="${doc.id}" class="material-icons" title="Apagar">delete</span>
                    </td>                            
                </tr>`


    tableListProduc.insertAdjacentHTML('beforeend', tr);

    const btnEdit = document.querySelector(`[data-remove="${doc.id}"] .btnEdit`)

    btnEdit.addEventListener('click', () => {
        

        id = doc.id

        formEditProduct.cod.value = doc.data().cod
        formEditProduct.name.value = doc.data().name
        formEditProduct.img.src = doc.data().img
        formEditProduct.description.value = doc.data().description
        formEditProduct.valorPrazo.value = doc.data().vPrazp
        formEditProduct.valorDesconto.value = doc.data().vDescont
        formEditProduct.valorAvista.value = doc.data().vAvista
        formEditProduct.qtParcela.value = doc.data().qtParcela
        formEditProduct.valorParcela.value = doc.data().valorPa
        formEditProduct.qtEstoque.value = doc.data().qtEstoque
        formEditProduct.categoriasForm.value = doc.data().categoria
        formEditProduct.categoriasForm2.value = doc.data().categoria2
        formEditProduct.categoriasForm3.value = doc.data().categoria3
        formEditProduct.categoriasEdit.value = doc.data().categoria
        formEditProduct.categoriasEdit2.value = doc.data().categoria2
        formEditProduct.categoriasEdit3.value = doc.data().categoria3
        imgPreview.src = doc.data().img;
    })
}

