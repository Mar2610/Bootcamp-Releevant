
/* Mantener un array donde tengamos una lista de especies de animales y el número de patas que tiene cada uno.
Crear una función que calcule un número aleatorio entre 1 y 100 para cada tipo de animal, de tal modo que devuelva
finalmente el número de patas que hay en la granja*/

function Animal (animal, patas) {
    this.animal = animal;
    this.patas = patas;
    this.unidades = Math.floor(Math.random()*100)+1;
}
function Granja (animal) {
    this.lista = [];
    this.add = function (animal) {
        this.lista.push(animal)
    }
    this.list = function () {
        this.lista.forEach((item) => {
            console.log(`El animal es ${item.animal} y hay ${item.unidades}. Las patas son ${item.unidades*item.patas}`)
        });
    }
    this.calculoPatas = function () {
        let suma = 0;
        for(let i = 0; i<this.lista.length; i++) {
            suma += this.lista[i].unidades * this.lista[i].patas;
        }
        return suma;
    }
}

const granja = new Granja();
granja.add(new Animal("perro", 4));
granja.add(new Animal("pato", 2));
granja.add(new Animal("araña", 6));
granja.add(new Animal("vaca", 4));
granja.add(new Animal("cerdo", 4));
granja.add(new Animal("gallina", 2));
granja.add(new Animal("caballo", 4));

console.log(granja);

granja.list();

console.log(`El total de patas en la granja es ${granja.calculoPatas()}`);