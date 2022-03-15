/* Ejercicio 44
Partir del ejercicio 2 y añadir la siguiente funcionalidad:
El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
pantalla:
“Seleccione el número de una de las siguientes opciones:
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Salir del programa*/

const operacion = [function (x,y) {return x+y}, (x,y) => {return x-y;}, (x,y) => x*y, (x,y) => x/y];
const numero1 = 10;
const numero2 = 5;

console.log(operacion[0] (numero1,numero2));
console.log(operacion[1] (numero1,numero2));
console.log(operacion[2] (numero1,numero2));
console.log(operacion[3] (numero1,numero2));
