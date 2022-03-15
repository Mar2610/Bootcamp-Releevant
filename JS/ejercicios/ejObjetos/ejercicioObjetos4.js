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

/*2 funciones constructoras: producto(codigo, descripcion, precio) y catalogo con un array
de producto y 2 funciones: add, delete y search*/

function Producto (codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

function Catalogo (producto) {
    this.lista = [];
    this.search = function (codigo) {
        return this.lista.filter ((item) => item.codigo === codigo); /* El método filter (bucle) busca un valor en el array
                                                                        que cumpla la condición de la función flecha 
                                                                        que se le atribuye (CALLBACK)*/
    }
    this.add = function (producto) {
        const busqueda = this.search(producto.codigo);
        if (busqueda.length === 0) {
            this.lista.push (producto);
        }
    }
    this.delete = function (codigo) {
        const posicion = this.lista.findIndex ((item) => item.codigo === codigo);
        if (posicion >= 0) {
            this.lista.splice (posicion,1);
        }
    }
    this.size = function () {
        return this.lista.length;
    }
}

const cat = new Catalogo (); // Se crea el objeto: un array donde se van a meter los productos
cat.add (new Producto(2,'tomate',5.0)); // Función add dentro de la clase catalogo: crea un producto y lo añade al array
console.assert (cat.size() === 1,"No añade codigo 2");
cat.add (new Producto(2,'tomate',5.0));
console.assert (cat.size() === 1,"Añade producto 2 repetido");
cat.add (new Producto(1,'haba',6.0));
console.assert (cat.size() === 2,"Añade prodcto 1");
cat.add (new Producto(3,'lechuga',7.0));
console.assert (cat.size() === 3,"Añade producto 3");
cat.delete(1);
console.assert (cat.size() === 2,"No borra el producto 1");
const array = cat.search (2);
console.assert (array.length === 1, "Falla el search");


console.log(cat);