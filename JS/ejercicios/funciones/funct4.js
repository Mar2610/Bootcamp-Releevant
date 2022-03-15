
/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla
el resultado devuelto por la función.*/

function parOimpar (number) {
    if (number % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

console.log(parOimpar(7));