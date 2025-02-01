//variables let:
let nombres= [];
// MI PAGINA TIENE QUE SALTAR UN MENSAJE CUANDO AGREGAN EN LA PAGINA UN DATO VACIÓ.


//FUNCIONES:

//CREAR PUENTE ENTRE HTML Y JS. 
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//Agregar nombre almacenarlos, mostrar la lista y limpiar el campo después de agregar. 
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if(nombre) {
        nombres.push(nombre);
        mostrarNombres();
        input.value = "";
    } else{
        alert("Por favor, ingrese un nombre.");
    }
}
function mostrarNombres(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`
        lista.appendChild(li);
    });
}

//función para sortear los amigos. Generar un indice aleatorio. Obtener el amigo sorteado. Mostrar el resultado de la pagina. Eliminar el nombre sorteado de la lista para que no se repita. Verificar si queda nombres para sortear.

function sortearAmigo(){
    if(nombres.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const amigoSorteado = nombres[indiceAleatorio];
        asignarTextoElemento("#resultado",`El amigo sorteado es: ${amigoSorteado}`);

        nombres.splice(indiceAleatorio, 1);
        mostrarNombres();

        if(nombres.length === -1){
            alert("Todos los amigos fueron sorteados!");
        }
}
//Funcion limpiar campo de lista y poder iniciar con un nuevo sorteo

function reiniciarPagina() {
    nombres = [];
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";
    const amigoSorteado = document.getElementById('resultado');
    resultado.innerHTML = '';

}