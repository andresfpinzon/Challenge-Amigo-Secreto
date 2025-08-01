// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    if (amigo !== "") {
        amigos.push(amigo);
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
        mostrarAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarAmigos() {
    
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
        resultado.textContent = "El amigo sorteado es: " + amigoSorteado;
    } else {
        resultado.textContent = "No hay amigos para sortear.";
    }
}