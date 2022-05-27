const modulos = new Map();

modulos.set("Modulo1", "Javascript");
modulos.set("Modulo2", "Base de Datos");
modulos.set("Modulo3", "MongoDB");
modulos.set("Modulo4", "NodeJS");
modulos.set("Modulo5", "React");
modulos.set("Modulo6", "Javascript Avanzado");

console.log(modulos);
console.log(modulos.keys());
console.log(modulos.values());
console.log(modulos.get("Modulo2"));

console.log(modulos.size);

const exist = modulos.has("Javascript Avanzado");

if(exist) {
    modulos.delete("Modulo6");
}

console.log(modulos);