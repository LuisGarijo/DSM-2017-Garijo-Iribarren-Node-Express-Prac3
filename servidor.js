var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'jade');
app.use(express.static('pagina')); //para utilizar contenido estático residente 
// en la carpeta 'pagina'

app.listen(8080);