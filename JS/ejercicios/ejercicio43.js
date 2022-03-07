/* Ejercicio 43
Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la
estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla”.*/

let hour = 0;
let minute = 0;
let second = 0;

setInterval (() => { // Función flecha
    console.clear();
    if (second===59) {
        second = 0;
        if (minute===59) {
            minute = 0;
            if (hour === 23) {
                hour = 0;
            } else {
                hour++;
            }
        } else {
            minute++;
        }
    } else {
        second++;
    }
    console.log(`${hour}:${minute}:${second}`);
},1000);