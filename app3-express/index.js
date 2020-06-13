var express = require('express')
var morgan = require('morgan')
const router = require('./router/index.js')

var app = express()

app.set('view engine', 'ejs');

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.render("paginas/index")
})

router.adicionar(app)

/*app.get('/admin', function (req, res) {
    res.send('Hola Mundo 2!')
})
app.get('/admin/producto', function (req, res) {
    //Consulta a la base datos
    //manda los datos a la vista
    res.send('Hola Mundo 2!')
})
app.get('/admin/producto/nuevo', function (req, res) {
    res.send('Hola Mundo 2!')
})

app.get('/admin/producto/:id', function (req, res) {
    res.send('Hola Mundo 2!')
})

app.get('/admin/producto/:id/edit', function (req, res) {
    res.send('Hola Mundo 2!')
})*/

app.listen(3000, () => {
    console.log("Servidor corriendo")
})