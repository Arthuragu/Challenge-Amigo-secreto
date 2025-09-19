let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();

    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
    atualizarBotao();
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}


function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}