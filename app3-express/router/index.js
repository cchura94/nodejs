
module.exports.adicionar = (app) => {

    app.get("/producto", (req, res) => {
        res.send("Lista de Productos");
    })
    app.get("/producto/crear", (req, res) => {
        res.send("Nuevo Producto");
    })
    
    app.get("/producto/:id", (req, res) => {
        res.send("Mostrar Producto");
    })
    
    app.get("/producto/:id/editar", (req, res) => {
        res.send("Editar Producto");
    })

}

