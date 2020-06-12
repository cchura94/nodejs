//Funcion en Javascript
function saludo() {
    console.log("Hola Mundo 1");
}

//Funcion Anonima
const saludo2 = function(){
    console.log("Hola Mundo 2");
}

//Funcion Flecha
const saludo3 = () => {
    console.log("Hola Mundo 3");
}

saludo();
saludo2();
saludo3();


function suma(n1, n2) {
    console.log("La suma es: "+ (n1 + n2));
}

const suma2 = function(n1, n2){
    console.log("La suma2 es: "+ (n1 + n2));
}

const suma3 = (n1, n2) => {
    console.log("La suma3 es: "+ (n1 + n2));
}

suma(2, 2);
suma2(3, 3);
suma3(4, 4);

//req: requerimiento (solicitud, peticion)
//res: respuesta
function servidor1(requerimiento, respuesta) {
    console.log("Servidor 1");
}

const servidor2 = function (requerimiento, respuesta) {
    console.log("Servidor 2");
}

const servidor3 = (requerimiento, respuesta) => {
    console.log("Servidor 3");
}

servidor1();
servidor2();
servidor3();
