/*2 funciones constructoras: producto(codigo, descripcion, precio) y catalogo con un array
de producto y 2 funciones: add, delete y search*/

class Producto {
    constructor (codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Catalogo {
    constructor (producto) {
        this.lista = [];
    }
    search (codigo) {
        return this.lista.filter ((item) => item.codigo === codigo); /* El método filter (bucle) busca un valor en el array
                                                                        que cumpla la condición de la función flecha 
                                                                        que se le atribuye (CALLBACK)*/
    }
    add (producto) {
        const busqueda = this.search(producto.codigo);
        if (busqueda.length === 0) {
            this.lista.push (producto);
        }
    }
    delete (codigo) {
        const posicion = this.lista.findIndex ((item) => item.codigo === codigo);
        if (posicion >= 0) {
            this.lista.splice (posicion,1); /* Los parámetros que hay que darle a .splice son la posicion del
                                                array desde donde va a eliminar y cuántos elementos se van a eliminar.
                                                Si no se especifica el número de elementos a eliminar, se eliminarán
                                                todos a partir de la posición.
                                                En caso de querer añadir algún elemento, hay que meterlo también
                                                en los parámetros*/ 
        }
    }
    size () {
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

console.log (cat);