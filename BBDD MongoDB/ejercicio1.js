let productos = [];

let producto1 = {
    CodigoCliente: 23,
    Nombre: 'Pantalón',
    Talla: '38',
    Categoria: 'Textil'
}

productos.push[producto1];

let categorias = [];

let categoria1 = {
    Categoria: 'Textil',
}

categorias.push[categoria1];

let ventas = []

let ventas1 = {
    Precio: 20,
    Cantidad: 2,
    Producto: 'Pantalón'
}

ventas.push(ventas1);

let usuarios = [];

let usuarios1 = {
    CodigoCliente: 23,
}

usuarios.push(usuarios1);

let carrito = [];

let carrito1 = {
    Producto: 'Pantalón',
    CodigoCliente: 23,
    Cantidad: 2
}

carrito.push(carrito1);

let ecommerce = [];

ecommerce.push(producto1, categoria1, usuarios1, carrito1);

console.log(carrito1.Producto, carrito1.CodigoCliente);