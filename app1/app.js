const http = require("http")

http.createServer((request, response)=>{
    
    const { url, method, headers } = request
    if(method == "GET"){
        response.end("Methodo GET")
    }
    
    if(method == "POST"){
        //response.setHeader('Content-Type', 'text/plain');
        response.statusCode = 200
        response.write('<html>');
        response.write('<body>');
        response.write('<h1>Bienvenido!</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }
    

}).listen(3000, ()=>{
    console.log("Node esta corriendo en http://127.0.0.1:3000")
});

