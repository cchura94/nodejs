	
const fs = require('fs');
 
fs.writeFile('./texto.txt', "Primera Linea", (err) => {
    if(err){
        console.log(err)
    }
    console.log('Archivo creado');    
});

console.log("última linea de condigo");
