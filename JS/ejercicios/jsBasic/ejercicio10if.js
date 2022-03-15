console.clear();
const prompt = require("prompt-sync")();

let salary = Number(prompt("Introduce salario: "));
let category = Number(prompt("Introduce categoría: "));
let increment;

if (category === 1) {
    increment = salary *= 1.15;
} else if (category === 2) {
    increment = salary *= 1.10;
} else if (category === 3) {
    increment = salary *= 1.06;
} else if (category === 4) {
    increment = salary *= 1.03;
}
 console.log(`El incremento es ${increment}`);

