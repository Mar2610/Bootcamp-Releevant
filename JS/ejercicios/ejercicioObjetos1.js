/* -Crear un script que defina un objeto llamado Producto_alimenticio.
-Este objeto debe presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
-Posteriormente, cree tres instancias de este objeto y guárdelas en un array.
Posteriormente, utilice el método imprimeDatos para mostrar por pantalla los valores de los tres objetos instanciados*/

// Construir una clase con una función (Constructor)
function producto (codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imprimeDatos = function () {
        console.log (this.codigo, this.nombre, this.precio);
    }
}

// Introducir objetos a una clase
let producto1 = new producto(2020, "Tomate", 1.50); // Los valores que están entre los paréntesis son los que le vamos a asignar a los valores de la clase
let producto2 = new producto(2568, "Patata", 2.30);
let producto3 = new producto(1489, "Aguacate", 4.50);

// Crear un array con los valores de cada objeto 
let miarray = [producto1, producto2, producto3];

// Recorrer el array e imprimir los valores de cada producto 
for (let item of miarray) { // La variable item se refiere a cada elemento del array
    item.imprimeDatos();
}