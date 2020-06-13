function listar(req, res) {
    //res.send("Lista de productos desde controlador");
    res.render("paginas/producto/index");   
}

function crear(req, res) {
    //res.send("Nuevo producto desde controlador");
    res.render("paginas/producto/crear");   
}

function guardar(req, res) {
    res.send("guardando producto desde controlador");
}

function mostrar(req, res) {
    //res.send("mostrando producto desde controlador");
    res.render("paginas/producto/mostrar");
}

function editar(req, res) {
    //res.send("editar producto desde controlador");
    res.render("paginas/producto/editar");
}

function modificar(req, res) {
    res.send("modificando producto desde controlador");
}

function eliminar(req, res) {
    res.send("eliminado producto desde controlador");
}


module.exports = {
    listar,
    crear,
    guardar,
    mostrar,
    editar,
    modificar,
    eliminar
}

