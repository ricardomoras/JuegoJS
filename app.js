let numeroSecreto =  0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemnto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto('p', `Acertaste el numero en ${intentos} ${(intentos===1 ? 'vez':'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            // El usuario no acerto
            if( numeroDeUsuario > numeroSecreto){
                asignarTextoElemnto('p', 'el numero secreto es menor');
            } else{
                asignarTextoElemnto('p', ' el numero secreto es mayor');
            }
            intentos++;
           limpiarCaja();
        }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    // si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemnto('p','Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesInciales() {
    asignarTextoElemnto('h1', 'Juego del numero secreto');
    asignarTextoElemnto('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesInciales();
    // Deshabilitar el boton nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesInciales();