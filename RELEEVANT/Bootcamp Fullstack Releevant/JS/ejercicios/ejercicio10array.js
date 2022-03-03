console.clear()
const prompt = require("prompt-sync")();

let salary = Number(prompt("Introduce el sueldo: "));
const category = Number(prompt("Introduce la categoría (1-4): "));

const incremento = [1.15,1.10,1.06,1.03];

if(category >=1 && category <=4) {
    console.log("El nuevo sueldo es" ,salary*incremento[category-1]) // Esta fórmula sirve para entrar a los datos seleccionados de un array
}
