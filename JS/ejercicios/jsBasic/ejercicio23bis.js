const prompt = require("prompt-sync")();
let nombreMes = ["Enero","Febrero","Marzo","Abril","Mayo",
                 "Junio","Julio","Agosto","Septiembre","Octubre",
                 "Noviembre","Diciembre"];
let day;
let month;
let year;
let continuar = true;
do {
    day = Number(prompt("Introduce el dia: "));
    month = Number(prompt("Introduce el mes: "));
    year = Number(prompt("Introduce el año: "));
    continuar = !fechaValida(day,month,year);
    if (continuar) {
        console.log("fecha errónea");
    }
} while(continuar);
console.log (`La fecha es ${day} de ${nombreMes[month]} de ${year}`);
function fechaValida (dia,mes,anio) {
    let dias = [31,28,31,30,31,30,31,31,30,31,30,31];
    let diasMes;
    if (anio < 0 || anio >= 3000) {
        return false;
    }
    if (mes < 1 || mes > 12) {
        return false;
    }
    if (mes === 2 && ((anio % 4 === 0) && ((anio % 100 !== 0) || (anio % 400 === 0)))) {
        diasMes = 29;
    } else {
        diasMes = dias[mes-1];
    }
    if (dia < 1 || dia > diasMes) {
        return false;
    }
    return true;
}