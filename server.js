const http = require("http")

const host = "127.0.0.1";
const puerto = "3000";

const server = http.createServer(function(req, res) {
    
    console.log("Hola Mundo desde Node.js");
    res.end("<h1>Hola Mundo</h1>");
});

server.listen(puerto, host, () => {
    console.log(`El servidor esta corriendo en: ${host}:${puerto}`);
});
