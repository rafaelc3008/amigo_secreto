// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    document.getElementById("sortear").removeAttribute("disabled" ); // Habilitar botón de sortear
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    nombreAmigo = nombreAmigo.toLowerCase()
    if((!nombreAmigo) || (nombreAmigo.trim() === "")) {
        alert("Debe ingresar un nombre");
        inputAmigo.focus();
        return;
    }
    if(amigos.includes(nombreAmigo)) {
        alert("El amigo ya fue ingresado");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }

    
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    actualizarAmigos();
}

function actualizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo(){
    if(amigos.length < 2) {
        alert("Debe ingresar al menos dos amigos");
        return;
    }

    let amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `El amigo elegido es: <strong>${amigoElegido}</strong>`;
    document.getElementById("sortear").setAttribute("disabled", "true" ); // desabilita el boton de sorteo
    
    limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    document.getElementById("reiniciar").removeAttribute("disabled"); // Habilitar botón de reinicio
    

}

function limpiarAmigos() {
    amigos = [];
    actualizarAmigos();
    document.getElementById("resultado").innerHTML = "";
}

function reiniciarSorteo() {
    limpiarAmigos();
    document.getElementById("reiniciar").setAttribute("disabled", "true"); // Deshabilitar botón solo si no hay amigos
}
