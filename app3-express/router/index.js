const productoController = require("./../controllers/productoController")

module.exports.adicionar = (app) => {

    app.get("/producto", productoController.listar);
    app.get("/producto/crear", productoController.crear);
    app.post("/producto", productoController.guardar);       
    app.get("/producto/:id", productoController.mostrar);    
    app.get("/producto/:id/editar", productoController.editar);
    app.put("/producto/:id", productoController.modificar);
    app.delete("/producto/:id", productoController.eliminar);

}

