//Função para carregar locais cadastrados
function loadLocals(){
    fetch('http://localhost:3000/locais')
    .then(response => response.json())
    .then(locais => {
        const listaLocais = document.getElementById('listaLocais')
        listaLocais.innerHTML = ''

        locais.forEach(local => {
            const item = document.createElement('li')
            item.classList.add('list-group-item')
            item.innerHTML = `
                <h5>${local.titulo}</h5>
                <p>${local.descricao}</p>
                <img src="${local.foto}" alt="${local.titulo}" class="img-fluid" style="max-height: 200px; border-radius: 10px;">
                <br>
                <button class="btn btn-warning mt-2" onclick="editarLocal('${local.id}')">Editar</button>
                <button class="btn btn-danger mt-2" onclick="deletarLocal('${local.id}')">Excluir</button>
            `;
            listaLocais.appendChild(item);
        });
    })
    .catch(error => console.error('Erro ao carregar locais:', error));
}

//Função para adicionar novo local
document.getElementById('formAdicionar').addEventListener('submit', (event) => {
    event.preventDefault()

    //Objeto com os valores vindos do form
    const newLocal = {
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        foto: document.getElementById('foto').value
    }
    console.log(newLocal)
    //Recebendo dados da rota
    fetch('http://localhost:3000/locais', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(newLocal)
    })
    //Transformando os dados em json
    .then(data => data.json())
    //Recarregando e inserindo o dado do local na página
    .then(() => {
        loadLocals()
        document.getElementById('formAdicionar').reset()
    })
    .catch((error) => (`Erro ao adicionar novo local, erro:`, error))
})

//Função para editar o local
function editarLocal(id){
    //Inicialização dos prompts para a edição
    const titulo = prompt('Digite o novo título do local:')
    const descricao = prompt('Digite a nova descrição do local:')
    const foto = prompt('Insira o novo link para a foto:')
    
    //Objeto com os dados atualizados
    const dataAtt = {
        titulo: titulo,
        descricao: descricao,
        foto: foto
    }

    //Atualizando dados de acordo com o id do local
    fetch(`http://localhost:3000/locais/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(dataAtt)
    })
    .then(data => data.json())
    .then(() => {
        loadLocals()
    })
    .catch((error) => {
        console.log(`Erro ao atualizar local, Erro: `, error)
    })
}

//Função para deletar o local
function deletarLocal(id){
    //Confirmação por prompt
    if(confirm('Tem certeza que deseja deletar o local?')){
        fetch(`http://localhost:3000/locais/${id}`, {
            method: 'DELETE'
        })
        //Recarrega a página caso confirme
        .then(() => {
            loadLocals()
        })
        .catch((error) => {
            console.log(`Erro ao tentar deletar loca, Erro:`, error)
        })
    }
}

//Chamando a função de atualização de locais
loadLocals()

