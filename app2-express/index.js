const express = require('express')
var app = express();

var path = require('path');

app.get("/", (req, res) =>{
    res.send("<h1>Mi Pagina Principal</h1>");
});

app.get("/producto", (req, res) => {
    var productos = [
        {
            nombre: "Tv",
            precio: 4500,
            cantidad: 6
        },
        {
            nombre: "Laptop",
            precio: 7000,
            cantidad: 8
        }
    ]
    res.json(productos);
});

app.get("/doc", (req, res)=>{
    res.redirect("https://expressjs.com/");
});

app.get("/contacto", (req, res) =>{
    //console.log(path.join(__dirname+"/paginas/contacto.html"))
    res.sendFile(path.join(__dirname+"/paginas/contacto.html"));
});

app.listen(3000, () => {
    console.log("Servidor esta corriendo");
})

//express-generator
