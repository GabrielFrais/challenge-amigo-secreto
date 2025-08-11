//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo')
    let nome = nomeInput.value;
    if (nome == ''){
        alert("Por favor informe um nome");
    }else{
        listaAmigos.push(nome);
        nomeInput.value = '';
    }
}