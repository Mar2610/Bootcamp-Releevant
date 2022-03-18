/*Necesitamos una clase Factura que mantenga los siguientes datos:
- Nombre y apellidos
- NIF/CIF
- Líneas de factura
La clase nos permitirá las siguientes acciones:
- Al crear la factura se pedirá el nombre del cliente y el nif
- Añadir linea de factura especificando concepto, precio en euros y cantidad
- Calcular total de la factura, especificando el porcentaje de impuestos a aplicar
- Imprimir factura: listar cada linea de factura calculando el importe de línea finalmente imprimir el total.
Crearemos una clase derivada de factura que nos convierta los precios a dolares, tanto al calcular como al imprimir
cada línea de la factura. Tratar de usar los conceptos de herencia y la palabra reservada super cuando sea necesario.
La clase derivada facturaDolares debería tener muy poco código.*/

class Factura {
    constructor (name, id, impuesto) {
        this.list = [];
        this.name = name;
        this.id = id;
        this.impuesto = impuesto;
    }
    add (line) {
        this.list.push(line)
    }
    totalMoney () {
        return this.list.reduce ((total,item)=>total+item.price*item.amount*this.impuesto,0);
    }
    totalLinea () {
        this.list.forEach((item) => {
            console.log(`Artículo: ${item.concept}. Precio: ${item.price}. Cantidad: ${item.amount}. IVA: ${this.impuesto}. Total ${item.price*item.amount*this.impuesto}€`);
        });
        console.log(`El total de la factura es: ${this.totalMoney()}`);
    }
}

class Line {
    constructor (concept, price, amount) {
        this.concept = concept;
        this.price = price;
        this.amount = amount;
    }
}

class FacturaDolares extends Factura {
    miConversion() {
        return super.totalMoney() * 1.11;
    }
}

const factura1 = (new Factura("Marta", 879456123, 1.21));
factura1.add(new Line("Zapato", 20, 2));
console.log(factura1);
factura1.totalLinea();

const factura2 = (new Factura("Pepe", 87452, 1.23));
factura2.add(new Line("Camisa", 60, 1));
factura2.add(new Line("Blusa", 30, 2));
console.log(factura2);
factura2.totalLinea();

const factura3 = (new Factura("Pepa", 8645312, 1.24));
factura3.add(new Line("Mono", 40, 1));
factura3.add(new Line("Chaqueta", 50, 2));
console.log(factura3);
factura3.totalLinea();

const factDollar = (new FacturaDolares("Aurelio", 8465132, 1.25));
factDollar.add(new Line("Zapatos", 100, 2));
console.log(factDollar);
console.log(`El total en dólares es ${factDollar.miConversion()}`);