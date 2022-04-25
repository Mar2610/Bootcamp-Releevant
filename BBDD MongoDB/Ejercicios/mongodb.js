
const {MongoClient} = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");

// async function obtenerUsuarios() {
//     await client.connect();
//     await client.db("ecommerce").command({ ping: 1 });

//     console.log("Conectado a MongoDB");

//     const usuarios = client.db("ecommerce").collection("usuarios").find();

//     await usuarios.forEach((u) => console.log(u));
//     await client.close();

//     console.log("Desconectado de la base de datos");
// }

// obtenerUsuarios();

// async function obtenerVentas() {
//     await client.connect();
//     await client.db("ecommerce").command({ ping: 1 });

//     console.log("Conectado a MongoDB");

//     const ventas = client.db("ecommerce").collection("ventas").find().project({_id:0, "producto.nombre": true, "cantidad": true});

//     // await ventas.forEach((u) => console.log(u.producto.nombre, u.cantidad));
//     await ventas.forEach((u) => console.log(u));
//     await client.close();

//     console.log("Desconectado de la base de datos");

// }

// obtenerVentas();

// async function obtenerUsuarioPago() {
//     await client.connect();
//     await client.db("ecommerce").command({ ping: 1 });

//     console.log("Conectado a MongoDB");

//     const ventas = client.db("ecommerce").collection("ventas").find()
//         .project({_id:0, "producto.nombre": true, "cantidad": true});

//     // await ventas.forEach((u) => console.log(u.producto.nombre, u.cantidad));
//     let results = [];
//     await ventas.forEach(function(v){
//         let found = false;

//         for(let r in results) {
//             if(r.nombre === v.nombre) {
//                 r.cantidad += v.cantidad;

//                 found = true;

//                 break;
//             } 
//         }

//         if(!found) {
//             results.push(v);
//         }
//     });

//     console.log(results);

//     await client.close();

//     console.log("Desconectado de la base de datos");
// }

// obtenerUsuarioPago();

async function obtenerRating() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a MongoDB");

    const ventas = client.db("ecommerce").collection("productos").find().project({_id:0, "nombre": true, "rating": true});

    // await ventas.forEach((u) => console.log(u.producto.nombre, u.cantidad));
    await ventas.forEach((u) => console.log(u));
    await client.close();

    console.log("Desconectado de la base de datos");

}

obtenerRating();