
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarListaAmigos();
}




// Função para atualizar a lista
function atualizarListaAmigos() {
   let lista = document.getElementById("listaAmigos");
   let html = "";

   for (let i = 0; i < amigos.length; i++) {
       html += `<li>${amigos[i]}</li>`;
   }

   lista.innerHTML = html;
}

function sortearAmigo() {
   if (amigos.length === 0) {
       alert("Adicione amigos antes de sortear!");
       return;
   }

   let indiceSorteado = Math.floor(Math.random() * amigos.length);
   let elementoResultado = document.getElementById("resultado");
   
   elementoResultado.innerHTML = `
       <li> O amigo secreto sorteado é: <strong>${amigos[indiceSorteado]}</strong></li>
       <button onclick="reiniciarSorteio()">Novo Sorteio</button>
   `;
}

function reiniciarSorteio() {
   amigos = [];
   document.getElementById("listaAmigos").innerHTML = "";
   document.getElementById("resultado").innerHTML = "";
}