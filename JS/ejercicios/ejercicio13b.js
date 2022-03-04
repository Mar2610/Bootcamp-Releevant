console.clear();

const prompt = require("prompt-sync")();

let base = Number(prompt("Base: "));
let height = Number(prompt("Altura: "))

let superficie = base * height;
let perimeter = 2 * (base * height);

console.log(`La superficie es ${superficie} y el perímetro es ${perimeter}`);