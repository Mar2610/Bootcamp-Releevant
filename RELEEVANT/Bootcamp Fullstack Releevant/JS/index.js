let userName = "Mar"; //Se ha definido el valor variable para userName

//Llamar al servidor para pedirle el dato definido como userName. 
//typeof: para que te diga qué tipo de dato estás pidiendo
console.log(typeof userName);

let age = 56;

console.log(age);

//Se modifica la edad porque el valor designado es variable
age = 47;

//Scope: radio de acción de una variable. Cuando se mete dentro de un bloque solo actúa dentro del bloque

{
    const age = 57;
    console.log(age);
}

//Constante Booleana (true o false)
const isAlive = true;
console.log(!isAlive); //Si le pones la exclamación delante, te va a mostrar lo contrario a lo que debe ser


// && significa y. || significa o. 
let academy = 12 % 2 == 0 || "Academia" == "Releevant"
console.log(academy);

/*
== > Significa que el contenido de la variable es igual independientemente del tipo
=== > Es estrictamente igual
!== > Es estrictamente diferente
!= > Su contenido es diferente sin tener en cuenta el tipo
*/

//Se pueden definir variables y después relacionarlas con console.log
let a = "4";
let b = 3;

console.log(a !== b); //Con == es true, pero con === es false porque el tipo es distinto


 




