const express = require("express");
const path = require("path");
const app = express();
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb://localhost:27017");

app.get("/test", function(request, response) {
    response.send("Hola, aqui estoy");
});

app.get("/usuarios", function(request, response) {
    let usuarios = [{
        nombre: "Israel",
        apellidos: "Menis",
        email: "menis@menis.com"
    }, {
        nombre: "Otro",
        apellidos: "usuario",
        email: "otrousuario@gmail.com"
    }];

    response.send(usuarios);
});

app.get("/usuariosYTipoPago", async function(request, response) {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, 
            "usuario.nombre": true, "usuario.tipoPago": true});
    let results = [];

    await ventas.forEach((v) => results.push(v));

    await client.close();

    response.send(results);
});

app.get("/productosYGanancia", async function(request, response) {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, 
            "producto.nombre": true, "producto.tipo": true, "cantidad": true, "precio": true});
    let results = new Map();

    await ventas.forEach(function(v) {
        if (results.has(v.producto.nombre)) {
            results.set(v.producto.nombre, results.get(v.producto.nombre) + (v.cantidad * v.precio)); 
        } else {
            results.set(v.producto.nombre, v.cantidad * v.precio);
        }
    });

    await client.close();

    response.send(Array.from(results));
});

app.get("/usarioMasDinero", async function(request, response) {
    await client.connect();
    await client.db("test").command({ping: 1});

    const ventas = client.db("test").collection("ventas").find().project({_id: 0, 
            "usuario.correo": true, "cantidad": true, "precio": true});
    let results = new Map();

    await ventas.forEach(function(v) {
        if (results.has(v.usuario.correo)) {
            let c = results.get(v.usuario.correo);

            c.gasto += v.cantidad * v.precio;

            results.set(v.usuario.correo, c); 
        } else {
            results.set(v.usuario.correo, {usuario: v.usuario.correo, gasto: v.cantidad * v.precio});
        }
    });

    await client.close();

    console.log(a);
    response.send(Array.from(results.values()).map(function(e) {
        e.gasto += "€";

        return e;
    }));
})

app.listen(8080);