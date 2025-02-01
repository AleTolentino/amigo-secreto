// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        mostrarAmigos();
        document.getElementById("amigo").value = "";
    } else {
        alert("Coloca un nombre válido");
    }
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let li = document.createElement("li");
        li.textContent = `Le tocó a ${amigos[indiceAleatorio]}`;
        resultado.appendChild(li);
        amigos = []; // Reiniciar el array de amigos
        mostrarAmigos(); // Actualizar la lista de amigos
        document.getElementById("amigo").value = ""; // Limpiar el input
    } else {
        alert("Necesitas agregar al menos 1 amigo para poder sortear.");
    }
}
