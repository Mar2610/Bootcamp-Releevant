
function factura (cliente, elementos) {
    this.cliente = cliente;
    this.elementos = elementos;
    this.baseImponible = 0;
    this.iva = 0.21;
    this.total = 0;
    this.formaDePago = "Contado";
}

function cliente (nombre, direccion, telefono, nif) {
    this.nombre = nombre,
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}

function elementos (descripcion, cantidad, precio) {
    this.descripcion = descripcion;
    this.cantidad = cantidad, 
    this.precio = precio;
}

let elemento1 = new elementos("Libreta", 3, 4.5);

console.log(elemento1);