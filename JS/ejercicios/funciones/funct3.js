
/*Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.*/

function type (number) {
    if(isNaN(number)) { // isNaN es una función
        return "Error";
    }
}

console.log(type("Lechuga"));