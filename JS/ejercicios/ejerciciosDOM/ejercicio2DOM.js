document.addEventListener ('DOMContentLoaded', evento => initialize(evento));

function initialize (evento) {
    document.getElementById('enter').addEventListener("click", event => vaciar(event));
    document.getElementById('enviar').addEventListener("click", comprobar);
}

function vaciar(event) {
    document.getElementById(event.target.id).value = "";
}

function comprobar () {
    const clave = "eureka";
    let enter = document.getElementById('enter').value;
    let indice = 0;
    while ((enter !== clave) && (indice < 3)) {
        indice++;
    }
    (enter===clave) ? alert(`Lo conseguiste!`) : alert(`Has agotado los intentos`);
}