document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

let count;

function initialize (evento) {
    document.getElementById('enter').addEventListener("click", event => vaciar(event));
    document.getElementById('enviar').addEventListener("click", comprobar);
    count = 3;
}

function vaciar(event) {
    document.getElementById(event.target.id).value = "";
}

function comprobar () {
    const clave = "eureka";
    let enter = document.getElementById('enter').value;

    if(enter===clave){
        alert('Lo conseguiste!')
    } else if ( count === 0) {
        alert('Has agotado los intentos ')
    } else {
        count--;
        alert(`Fallaste. Te quedan ${count} intentos.`)
    }
    // (enter===clave) ? alert(`Lo conseguiste!`) : alert(`Has agotado los intentos`);
}