/**Ejercicio 3
 * Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales
 * (recuerda usar la estructura condicional if).
    Ahora con 3 números diferentes.
 */

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));
let number2 = Number(prompt("Introduce el segundo número: "));
let number3 = Number(prompt("Introduce el tercer número: "))

/*
if(number1 > number2 || number1 === number2){
    console.log("El número 1 es mayor o igual que el número 2")
} else if (number1 > number3 || number1 === number3) {
    console.log ("El número 1 es mayor o igual que el número 3")
} else if (number2 > number3 || number2 === number3) {
    console.log("El número 2 es mayor o igual que el número 3")
}*/



/*
if(number1 > number2){
    console.log("El número 1 es mayor que el número 2")
} else if (number1 > number3) {
    console.log ("El número 1 es mayor que el número 3")
} else if (number2 > number3) {
    console.log("El número 2 es mayor que el número 3")
} else if (number2 > number1) {
    console.log ("El número 2 es mayor que el número 1")
} else if (number3 > number1) {
    console.log ("El número 3 es mayor que el número 1")
} else {
    console.log ("Todos los números son iguales")
}*/



/*Ejercicio completo
    console.clear();
    const prompt = require("prompt-sync")();
    let number1 = Number(prompt("Introduce un numero: "));
    let number2 = Number(prompt("Introduce el segundo numero: "));
    let number3 = Number(prompt("Introduce el tercer numero: "));
    /* if (number1 > number2) {
      console.log(`El numero ${number1} es mayor que ${number2}`);
    } else if (number1 < number2) {
      console.log(`El numero ${number1} es menor que ${number2}`);
    } else {
      console.log("Los numeros son iguales");
    } 
    //Segunda parte
    if (number1 < number2) {
      if (number2 < number3) {
        console.log(`El numero ${number3} es el mayor`);
      } else if (number2 > number3) {
        console.log(`El numero ${number2} es el mayor`);
      } else {
        console.log(`Los numeros ${number2} y ${number3} son iguales`);
      }
    } else if (number1 > number2) {
      if (number1 < number3) {
        console.log(`El numero ${number3} es el mayor`);
      } else if (number1 > number3) {
        console.log(`El numero ${number1} es el mayor`);
      } else {
        console.log(`Los numeros ${number1} y ${number3} son iguales`);
      }
    } else {
      if (number3 > number1) {
        console.log(`El numero ${number3} es mayor que el ${number1}`);
      } else {
        console.log("Todos los numeros son iguales");
      }
    }
    */



//Ejercicio completo Abel
let bigNumber=0;
let iguales=false;
// Aquí comparamos los dos primeros números, guardamos el mayor, y si son iguales lo guardamos en la variable 'iguales'
if (number1 > number2){
    bigNumber = number1;
} else if (number1 < number2){
    bigNumber = number2;
} else {
    bigNumber = number1;
    iguales = true;
}
// Y aquí comparamos el mayor con el tercer número 
if (bigNumber > number3){
    console.log("El número " + bigNumber + " es el mayor");
} else if (bigNumber < number3){
    console.log("El número " + number3 + " es el mayor");
} else if ((bigNumber===number3)&&(iguales===true)){
    console.log("Todos los números son iguales");
} else {
    console.log("El número " + bigNumber + " es el mayor y es igual al último número introducido");
}
