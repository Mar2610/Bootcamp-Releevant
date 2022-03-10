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

function bus (capacidad, conductor) { // No tiene parámetro "pasajeros" porque se inicializa en 0
    this.capacidad = capacidad;
    this.pasajeros = 0;
    this.conductor = conductor;
    this.conductor.asignarBus(this); // Le asignamos este bus al conductor actual a través de la función asignarBus
    this.subir = function (pasajeros) { 
        console.log(`El autobús tiene ${this.pasajeros} y van a subir ${pasajeros} más`);
        if (this.pasajeros+pasajeros<=this.capacidad)
            this.pasajeros += pasajeros; // A los pasajeros que ya hay, se le suman los que se le da 
        console.log(`El autobús tiene ${this.pasajeros}`);
    }
    this.bajar = function (pasajeros) {
        if (this.pasajeros-pasajeros >=0) { // Para que al bajar no haya pasajeros negativos
            this.pasajeros -= pasajeros; // A los pasajeros que ya hay, se le restan los que bajan
        }
    }
    this.cambiarConductor = function (conductor) {
        this.conductor.asignarBus (null); // El conductor actual se queda sin bus
        this.conductor = conductor; // Se actualiza el conductor al que se pasa como objeto
        this.conductor.asignarBus(this); // Al nuevo conductor se le asigna el bus actual

    }
}

function conductor (nombre, licencia) {
    this.nombre = nombre;
    this.num = licencia;
    this.bus = null;
    this.asignarBus = function(bus) {
        this.bus = bus;
    }
}

let pepe = new conductor ("pepe","ii");
let bus1 = new bus (10,pepe);
bus1.subir (8);
bus1.bajar(3);
let juan = new conductor("juan","oo");
bus1.cambiarConductor(juan);

let bus2 = new bus(40, pepe);
bus2.subir (20);
bus2.bajar (10);

console.log(bus1);
console.log(bus2);
console.log(pepe, juan);