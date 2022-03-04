// Comentario en la consola del navegador a través de console.log()
console.log("Hola desde Cheatsheet JS");

// Variables y constantes

// Las constantes no pueden ser modificadas
const userName = "Marta";
// Si intentamos modificar la constante nos da un error en la consola
/*userName = "Miguel";*/

console.log(userName);

// Variables que si se pueden modificar "let"
let age = 34;
age = 35;
console.log(age);

// El demonio hecho variable
var demon = "var";
// Esta variable además de poderse modificar, es de carácter global,
//por lo que es muy fácil que acabe sobreescribiéndose
demon = "let";

// Tipos de datos

// Datos simples

// string
// Son cadenas de texto. Siempre se van a representar con comillas simples o dobles
const welcome = "Bienvenido a JS"

// number
// Son números, tanto decimales como enteros
const km = 340;

// boolean
// Son valores que van a ser siempre verdadero o falso. Se representan con las palabras reservadas true o false
const isAlive = true;

// undefined
// Quiere decir que esa variable no está definida. No debe confundirse con null
let academy;
console.log(academy);

// null
// Esta variable si que tiene un valor y su valor es "ninguno"
let address = null;
console.log(address);

// Datos complejos

// objets
// Los objetos se crean igual que cualquier otra variable pero para crearlos utilizaremos las llaves {}
// Dentro de los objetos lo que vamos a tener van a ser: propiedad/valor o key/value
// Para darle valor a la propiedad se utilizan los dos puntos ":"
// Cada propiedad va separada por coma
const user = {
    name: "Marta",
    surname: "deHaro",
    age: 27,
    address: {
        street: "Calle Larios",
        number: 5,
    }
}
// Para acceder a alguna propiedad de nuestro objeto, se hará a través de un punto
console.log(user.address);

// array / listas

// Los array son listas de elementos (string, number, objetos, array)
// Los array están siempre compuestos por el mismo tipo de elementos
// Se representan ocn los corchetes []
const notes = [4, 6, 8, 3, 7, 8];
const student = [
    { name: "Marta", surname: "deHaro" },
    { name: "Miguel", surname: "Millán"},
    { name: "Nacho", surname: "Viano"}
];

// Para acceder a un elemento de esa lista se hace con los corchetes y dentro de ellos la posición a la que queremos referenciar
console.log(student[1].surname);

// Functions


// Comparaciones / Asignaciones

// Asignación
// Para asignarle un valor a una variable se utiliza un solo igual "="
const x = 4

// Doble igual "=="
// Con el doble igual estamos comparando si dos variables tienen el mismo valor
// independientemente de su tipo
const a = 2;
const b = 2;
console.log(a==b); //----> true

// Triple igual "==="
// Compara dos variables incluyendo su tipo. Para que sea true tienen que ser estrictamente iguales
const c = 3;
const d = 3;
console.log(c === d); //------> true

// Diferente de "!="
// Compara si dos variables son distintas independientemente de su tipo
const f = "2"
const  h = 2
console.log(f != h); //----> false

// Estrictamente diferente "!=="
// Compara el valor de dos variables incluyendo su tipo
console.log(f !== h); //-----> true

// Condicionales
// Se utilizan cuando queremos tener un resultado dependiendo de si se cumplen o no las condiciones
const isDemon = demon === "var" && isAlive === false; //----> false
// && significa "y", y lo que comprueba es que las condiciones se cumplan
console.log(isDemon);

const isGod = demon !== "var" || isAlive === true; 
// "||" significa "o", y lo que comprueba es que una de las condiciones se cumple

// Negación

// Se utiliza la exclamación para cambiarle el valor a un elemento booleano
const isDead = !isAlive;

// Para sumar los elementos que hay dentro de un array
sum += miArray[i];