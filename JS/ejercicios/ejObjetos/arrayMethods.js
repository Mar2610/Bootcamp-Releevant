
const miArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Filter
const miArray2 = miArray.filter((item) => item > 5);

console.log(miArray2);

// Push

miArray.push(16,17,18);

console.log(miArray);

// FindIndex

const posicion = miArray.findIndex((item) => item === 10);

console.log(posicion);

// Pop (para eliminar el último elemento del array)

miArray.pop();

console.log(miArray);

// Splice

miArray.splice(posicion, 0, "Marley"); // Añadir elemento

miArray.splice(posicion,1); // Eliminar elemento

console.log (miArray);

// Unshift (añadir elemento al principio del array)

miArray.unshift("Marley");

console.log(miArray);

// Shift (eliminar elemento al principio del array)

miArray.shift();

console.log(miArray);

// Map 

const miArray3 = miArray.map((item) => item * 3);

console.log(miArray3);

// ForEach (recorre todos los elementos del array y te dice el valor y su posición)

miArray.forEach((element,i) => {
    console.log(`El elemento es ${element} y la posición es ${i}`)
});