const express = require("express");
const app = express();
const fs = require('fs')

app.listen(3001, () => {
    console.log("El servidor está inicializado en el puerto 3001");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/crear", (req, res) => {
    // Crea 2 variables con el nombre y contenido recibidos por Query Strings
    const { archivo, contenido } = req.query;
    // fecha actual
    const fechaActual = new Date();
    // padStart agrega un 0 al inicio si la cadena no es de tamaño 2
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth()+1).toString().padStart(2, '0');
    const anio = fechaActual.getFullYear();
    const formato = `${dia}/${mes}/${anio}`
    // Le agregamos la fecha al contenido, con un salto de línea: 
    const contconfecha = `${formato}\n${contenido}`;
    // Utiliza File System para crear un archivo con el nombre y contenido recibidos
    fs.writeFile(archivo, contconfecha, (err) => {

        if(err){
            res.send(`Error al crear el archivo`);
        }
        else{
            res.send('Archivo creado con éxito!');
        }
    
    });
});

app.get("/leer", (req, res) => {
    const { archivo } = req.query;
    fs.readFile(archivo, 'utf8', (err, data) => {
        if(err){
            res.send(`Error al leer el archivo`);
        }
        else{
            // Se utiliza <pre> para conservar formato, por ejemplo el salto de línea.
            res.send(`<pre>${data}</pre>`);            
        }
        
    });
});

app.get("/renombrar", (req, res) => {
    const { nombre, nuevoNombre } = req.query
    fs.rename(nombre, nuevoNombre, (err, data) => {
        if(err){
            res.send(`Error al renombrar el archivo`);
        }
        else{
            res.send(`Archivo ${nombre} renombrado por ${nuevoNombre}`);
        }
    })
});

app.get("/eliminar", (req, res) => {
    const { archivo } = req.query;
    fs.unlink(archivo, (err, data) => {
        if(err){
            res.send(`Error al eliminar el archivo`);
        }
        else{
            res.send(`Archivo ${archivo} eliminado con éxito`);
        }
    
    });
});


// Ruta genérica 
app.get("*", (req, res) => {
    res.send("<center><h1>Esta página no existe... </h1></center>");
});