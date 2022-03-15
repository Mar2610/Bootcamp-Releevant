/* -Crea una clase que llamaremos Bus. Sus atributos serán:
-capacidad: número máximo de pasajeros
-pasajeros: número de pasajeros (inicialmente 0)
-conductor: objeto conductor.
-Sus métodos
-subir(pasajeros): aumenta el numero de pasajeros
-bajar(pasajaeros): disminuye el número de pasajeros
-conductor: asigna un objeto conductor.
-El ojeto conductor es de una clase (Conductor) cuyos atributos son:
-nombre: nombre del conductor
-licencia: un número que identifica al condcutor.
-Al crear el objeto se asigna también el conductor
-No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.*/

// Clase dedicada a las propiedades del bus
function bus (capacidad, conductor) { // No tiene parámetro "pasajeros" porque se inicializa en 0
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;
    this.conductor.asignarBus(this); // Al conductor actual (this.conductor) le asignamos (asignarBus) el bus actual (this)
    this.subir = function (pasajeros) { 
        console.log(`El autobús tiene ${this.pasajeros} y van a subir ${pasajeros} pasajeros más`);
        if (this.pasajeros+pasajeros<=this.capacidad)
            this.pasajeros += pasajeros; // A los pasajeros que ya hay, se le suman los que se le da 
        console.log(`El autobús tiene ${this.pasajeros}`);
    }
    this.bajar = function (pasajeros) {
        if (this.pasajeros-pasajeros >=0) { // Para que al bajar no haya pasajeros negativos
            this.pasajeros -= pasajeros; // A los pasajeros que ya hay, se le restan los que bajan
        }
    }
    // Método para cambiar de conductor
    this.cambiarConductor = function (conductor) {
        this.conductor.asignarBus (null); // El conductor actual(this.conductor) se queda sin bus (null)
        this.conductor = conductor; // Se actualiza el conductor al que se pasa como propiedad
        this.conductor.asignarBus(this); // Al nuevo conductor(this.conductor) se le asigna el bus actual (this)

    }
}

// Clase dedicada a las propiedades del conductor
function conductor (nombre, licencia) {
    this.nombre = nombre;
    this.num = licencia;
    this.bus = null;
    this.asignarBus = function(bus) {
        this.bus = bus;
    }
}

let pepe = new conductor ("pepe","ii"); // Objeto que creo a partir de las propiedades de la clase conductor
let bus1 = new bus (10,pepe); // Objeto que creo a partir de las propiedades de la clase bus
bus1.subir (8); // Se implementa el método "subir" al objeto creado anteriormente "bus1"
bus1.bajar(3); // Se implementa el método "bajar" al objeto creado anteriormente "bus1"
let juan = new conductor("juan","oo"); // Objeto que creo a partir de las propiedades de la clase conductor
bus1.cambiarConductor(juan); // Se implementa el método "cambiarConductor" al objeto creado anteriormente "juan"

let bus2 = new bus(40, pepe); // Objeto que creo a partir de las propiedades de la clase bus
bus2.subir (20); // Se implementa el método "subir" al objeto creado anteriormente "bus1"
bus2.bajar (10); // Se implementa el método "bajar" al objeto creado anteriormente "bus1"

console.log(bus1);
console.log(bus2);
console.log(pepe, juan);