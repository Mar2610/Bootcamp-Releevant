console.clear();


const prompt = require("prompt-sync")();
const producto = ["Bocadillo de jamón", "Refresco","Cerveza","Pan"];
const precio = [1.5,1.05,0.75,2];


let suma = 0;
for (let i=0, max=producto.length; i<max;i++){
    let uConsumidas = Number(prompt(`introduce consumo de ${producto[i]}: `));
    suma += (uConsumidas*precio[i]);
}
console.log(`Total de cuenta: ${suma}`);