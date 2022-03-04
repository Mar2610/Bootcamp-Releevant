/* Ejercicio 37
Una calculadora de la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI
completo con la letra. Para calcular la letra, cogeremos el resto del DNI entre 23, que será un
número entre 0 y 22. Utilizar el resultado para buscar en un array de caracteres la posición que
corresponda a la letra. Esta es la tabla de caracteres:
Posicion Letra
0 T
1 R
2 W
3 A
4 G
5 M
6 Y
7 F
8 P
9 D
10 X
11 B
12 N
13 J
14 Z
15 S
16 Q
17 V
18 H
19 L
20 C
21 K
22 E*/

console.clear();

const prompt = require("prompt-sync")();

const letterArray = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "x", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

let numberDni = Number(prompt("Introduce DNI: "));

let letter = numberDni % 23;

console.log(numberDni+letterArray[letter]);
