var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');


var productos = [
{id:'producto1', nombre:'GENUINO CERO', precio:'120', MICRO:" ATSAMD21G18", TF:"3.3V", UART:"2 (Nativo y Programación)", FLASH:"256 KB", RAM:"32 KB", V:"48 MHz"},
{id:'producto2', nombre:'ARDUINO UNO', precio:'80', MICRO:"ATmega328P", TF:"5V", UART:"14 (6 proporcionan salida PWM)", FLASH:"32 KB", RAM:"2 KB", V:"16 MHz"},
{id:'producto3', nombre:'GENUINO 101', precio:'95', MICRO:"Intel Curie", TF:"3.3V", UART:"14 I/O (4 proporcionan salida PWM)", FLASH:"196 kB", RAM:"24 kB", V:"32 MHz"}
];


app.set('view engine', 'jade');
app.use(express.static('pagina')); //para utilizar contenido estático residente 
// en la carpeta 'pagina'

//var ruta = require('./routes/ruta');

//app.set('view engine','pug');

//app.get('/', ruta);
//app.get('/about', ruta);

//http://localhost:8050/producto1
app.get('/:producto', function(request, response){
	
	var productoEscogido = request.params.producto;
	
	productos.forEach(function(producto){
		
		//console.log(producto.id);
		
		if (producto.id == productoEscogido) {
			console.log(producto.id);

			response.render('productos',{
				productoElegido: producto.id,
				nombreProducto: producto.nombre,
				precioProducto: producto.precio,
				Microcontrolador: producto.MICRO,
				TensionFuncionamiento: producto.TF,
				PuertosUART: producto.UART,
				MemoriaFlash: producto.FLASH,
				MemoriaRAM: producto.RAM,
				Clock: producto.V


			});
		}
	});
});


// WEB SERVICE que devuelve un JSON con la información del producto solicitado
// Ejemplo: http://localhost:8050/peticionWebService?producto=producto1
app.get('/peticionWebService',function(request,response){

	productos.forEach(function(productoElegido){
		
		console.log('Petición al web Service'+productoElegido.id);
		
		if(productoElegido.id == request.query.producto){

			response.json(productoElegido);
		}
	});	
});



// FORMULARIO para el envío de datos mediante el método POST
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/formulario.html', function (req, res) {
	
    var nombre = req.body.firstname;
    var apellidos = req.body.lastname;
    var email = req.body.email;
    var telefono = req.body.phone;
    var mensaje = req.body.message;
	
    res.render('infoFormulario',{
				nombre: nombre,
				apellidos: apellidos,
				email: email,
				phone: telefono,
				mensaje: mensaje,
				titulo: 'Datos de formulario'

			});
 
});



app.listen(8050);