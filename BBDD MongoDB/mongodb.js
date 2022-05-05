const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");

async function obtenerUsuarios() {
    await client.connect();
    await client.db("test").command({ping: 1});

    console.log("Contectado a MongoDB!");

    const usuarios = client.db("test").collection("usuarios").find();

    await usuarios.forEach((u) => console.log(u));
    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function obtenerUsuariosYPago() {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, "usuario.nombre": true, "usuario.tipoPago": true});

    await ventas.forEach((v) => console.log(`Usuario ${v.usuario.nombre} ha realizado una compra con el metodo de pago ${v.usuario.tipoPago}`));

    await client.close();
}

function obtenerUsuariosYPagoConPromesa() {
    client.connect().then(function() {
        
        client.db("test").collection("ventas").find()
        .project({_id: 0, "usuario.nombre": true, "usuario.tipoPago": true})
        .forEach((v) => console.log(`Usuario ${v.usuario.nombre} ha realizado una compra con el metodo de pago ${v.usuario.tipoPago}`))
        .then(function() {

            client.close();
        }).catch(function() {
            console.log("Error con la funcion forEach");
        });
    }).catch(function() {
        console.log("No se ha podido conectar a MongoDB");
    });
}

async function obtenerProductosYCantidadVendida() {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, "producto.nombre": true, "cantidad": true});
    
    let results =  [];
    await ventas.forEach(function(v) {
        let found = false;
        
        for (let i = 0; i < results.length; i++) {
            if (results[i].producto.nombre === v.producto.nombre) {
                results[i].cantidad += v.cantidad;

                found = true;

                break;
            }
        }

        if (!found) {
            results.push(v);
        }
    });

    console.log(results);

    await client.close();   
}

async function obtenerProductosYCantidadVendidaConMap() {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, "producto.nombre": true, "cantidad": true});
    
    let results =  new Map();
    await ventas.forEach(function(v) {
        if (results.has(v.producto.nombre)) {
            results.set(v.producto.nombre, results.get(v.producto.nombre) + v.cantidad); 
        } else {
            results.set(v.producto.nombre, v.cantidad);
        }
    });

    console.log(results);

    await client.close();   
}

async function obtenerProductosMasVendidosYUsuarios() {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, "producto.nombre": true, 
            "cantidad": true, "usuario": true});
    
    let results =  new Map();
    await ventas.forEach(function(v) {
        if (results.has(v.producto.nombre)) {
            let c = results.get(v.producto.nombre);
            
            c.cantidad += v.cantidad;
            c.usuarios.push(v.usuario.correo);

            results.set(v.producto.nombre, c); 
        } else {
            let u = v.usuario ? [v.usuario.correo] : [];
            
            results.set(v.producto.nombre, { nombre: v.producto. nombre, cantidad: v.cantidad, usuarios: u });
        }
    });

    console.log(Array.from(results.values()).sort((a, b) => b.cantidad - a.cantidad ));

    await client.close();  
}


//obtenerUsuarios();

//obtenerUsuariosYPago();

//obtenerUsuariosYPagoConPromesa();

//obtenerProductosYCantidadVendida();

obtenerProductosMasVendidosYUsuarios();

