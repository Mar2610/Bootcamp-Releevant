/*Ejercicio 23
Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si
no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha
cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de
febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch).*/

console.clear();

const prompt = require("prompt-sync")();
const day = Number(prompt("Día: "));
const month = Number(prompt("Mes: "));
const year = Number(prompt("Año: "));

let days = 0;
let currentMonth = "";

switch (month) {
  case 1: {
      days = 31;
      currentMonth = "Enero";
    break;
  }
  case 2: {
      days = 28;
      currentMonth = "Febrero";
    break;
  }
  case 3: {
      days = 31;
      currentMonth = "Marzo";
    break;
  }
  case 4: {
      days = 30;
      currentMonth = "Abril";
    break;
  }
  case 5: {
      days = 31;
      currentMonth = "Mayo";
    break;
  }
  case 6: {
      days = 30;
      currentMonth = "Junio";
    break;
  }
  case 7: {
      days = 31;
      currentMonth = "Julio";
    break;
  }
  case 8: {
      days = 31;
      currentMonth = "Agosto";
    break;
  }
  case 9: {
      days = 30;
      currentMonth = "Septiembre";
    break;
  }
  case 10: {
      days = 31;
      currentMonth = "Octubre";
    break;
  }
  case 11: {
      days = 30;
      currentMonth = "Noviembre";
    break;
  }
  case 12: {
      days = 31;
      currentMonth = "Diciembre";
    break;
  } 
  default: {
      console.log("ERROR")
  }
}

if (day > days || year < 0) {
    console.log("La fecha no es válida")
} else {
  console.log("Día "+ day + " de "+currentMonth+" del año "+year);
}