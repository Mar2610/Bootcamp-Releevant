console.clear()
const prompt = require("prompt-sync")();

let salary = Number(prompt("Introduce el sueldo: "));
const category = Number(prompt("Introduce la categoría (1-4): "));

const incremento = [1.15,1.10,1.06,1.03];

let indice = 0; // La variable "indice" también se le llama i, j o k 
while (indice < category){
    indice = indice + 1;
}
if (indice === category) {
    console.log("Nuevo sueldo", salary*incremento[indice-1]);
}   