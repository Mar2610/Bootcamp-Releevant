/* Crear una clase para implementar carritos de la compra de tal modo que permita mantener 
una colección de productos seleccionados desde un catálogo, guardando para cada elemento 
de la colección el código de producto y la cantidad seleccionada.  
La clase carrito deberá implementar las siguientes funcionalidades:  
• Inicializar el carrito informándole el catálogo. 
• empty: vaciar el carrito. 
• add: añadir un producto al carrito especificado su código y la cantidad.  Si el producto 
ya está en el carrito, añadirá la cantidad especificada a la existente. Validar que el 
código de producto existe en el catálogo. 
• delete: eliminar completamente un producto del carrito especificando su código. 
Validar que el código de producto existe en el carrito. 
• update: actualizar la cantidad de un producto del carrito a un valor dado. Es decir, la 
cantidad especificada sustituirá la existente en el carrito para ese producto. 
• up: aumentar en una unidad la cantidad de un producto en el carrito.
• down: disminuir en una unidad la cantidad de un producto en el carrito. Validar que la 
cantidad no resulte negativa. Si es cero se eliminará el producto del carrito. 
• items: calcular el número de productos diferentes del carrito. 
• total: calcular el total de la compra. 
• list: listar por consola el contenido del carrito, mostrando código, descripción, 
cantidad, precio e importe. Se añadirá una última línea con el total del carrito. 
El catálogo de productos contendrá las propiedades código, descripción y precio. Se creará una 
colección básica de tres o cuatro productos para hacer las pruebas. Se implementará una 
función que devuelva un producto a partir de su código.*/

class Carrito {
    constructor (catalogo) {
        this.carrito = [];
        this.catalogo = catalogo;
    }

    empty () {
        this.carrito.splice(0, this.carrito.length);
    }

    search (producto) {
        const array = this.carrito.filter ((item) => item.producto === producto);
        return (array.length>0) ? array[0] : undefined;
    }

    add (id) {
        const producto = this.catalogo.getById(id);
        if(producto) {
            const item = this.search(producto);
            if(item) {
                item.cantidad++;
            } else {
                this.carrito.push(new Pedido(producto,1));
            }
        }
    }

    delete (codigo) {
        const posicion = this.carrito.findIndex ((item) => item.codigo === codigo);
        if (posicion >= 0) {
            this.carrito.splice (posicion,1);
        }
    }

    total () {
        return this.carrito.reduce ((total,item)=>total+item.precio*item.cantidad,0);
    }

    list () {
        this.carrito.forEach((item) => {
            console.log(`Codigo: ${item.codigo}. Descripcion: ${item.descripcion}. Precio: ${item.precio}. Cantidad: ${item.cantidad}`);
        });
        console.log(`El total de la factura es: ${this.total()}`);
    }
}

class Producto {
    constructor (codigo, descripcion, precio){
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Catalogo {
    constructor () {
        this.lista = [];
    }
    add (producto) {
        this.lista.push(producto);
    }

    getById (id) {
        const array = this.lista.filter ((item) => item.codigo === id);
        return (array.length>0) ? array[0] : undefined;
    }
    static factory () {
        const cat = new Catalogo();
        cat.add(new Producto(1, "Camisa", 10));
        cat.add(new Producto(2, "Pantalon", 20));
        cat.add(new Producto(3, "Abrigo", 40));
        return cat;
    }
}

class Pedido {
    constructor (producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


const carro = new Carrito(Catalogo.factory());

carro.add(2);
carro.add(2);

console.log(carro);
// const pedido1 = new Pedido("Producto", 3);

// console.log(cat);
// console.log(carro);
// console.log(pedido1);