// Ejercicio
// Construir un algoritmo que dado la categoría y sueldo de un trabajador calcule el aumento de
// sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del trabajador y
// su nuevo sueldo.

console.clear();
const prompt = require("prompt-sync")();
const sueldo = Number(prompt("Sueldo: "));
const categoria = Number(prompt("Categoría entre 1-4: "));
if (!isNaN(sueldo) && !isNaN(categoria)) {
  let incremento = 1;
  switch (categoria) {
    case 1: {
      incremento = 1.15;
      break;
    }
    case 2: {
      incremento = 1.1;
      break;
    }
    case 3: {
      incremento = 1.06;
      break;
    }
    case 4: {
      incremento = 1.03;
      break;
    }
    default: {
      console.log("Categoría errónea");
    }
  }
  if (incremento > 0) {
    console.log("El sueldo nuevo es:   ", sueldo * incremento);
  }
} else {
  console.log("Error de entrada");
}