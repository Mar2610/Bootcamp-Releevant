
/* Crear un catálogo de productos, donde de cada producto contenga código, descripción y precio.
Se permitirá añadir nuevos productos, eliminar productos por su código y buscar productos por código
o descripción. La búsqueda por código será exacta y la búsqueda por descripción podrá especificar una
parte de la descripción. La búsqueda podrá devolver varios productos. También se creará una función que nos
liste el catálogo por consola.*/

function Producto (codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

function Catalogo (producto) {
    this.lista = [];
    this.search = function(codigo) {
        return this.lista.filter((prod) => prod.codigo === codigo);
    };
    this.add = function (producto) {
        const busqueda = this.search(producto.codigo);
        if(busqueda.length === 0) {
            this.lista.push(producto);
        }
    };
    this.delete = function (codigo) {
        const posicion = this.lista.findIndex((item) => item.codigo === codigo);
        if(posicion => 0) {
            this.lista.splice(posicion,1);
        }
    };
}

const cat = (new Catalogo());

cat.add(new Producto(1, "Camisa", 10));
cat.add(new Producto(1, "Camisa", 10));
cat.add(new Producto(2, "Camisa", 10));
cat.add(new Producto(3, "Camisa", 10));

cat.delete(3);

console.log(cat);