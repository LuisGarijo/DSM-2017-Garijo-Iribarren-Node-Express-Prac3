var express = require('express');
var app = express();
var fs = require('fs');


var productos = [
	{id : 'producto1', nombre : 'Pedal', precio : '120', descripcion : 'Pedal de efectos Fuzz con sonido de los 60 y 70 con tencnologia COSM', usos: 'Sonido clásico, con una distosión leve. Usado por grupos como The Jimi Hendrix Experience o The Rolling Stones', stock: '15 unidades', imagen : '/pagina_productos/producto1.1.jpg'},
	{id : 'producto2', nombre : 'Guitarra electrica', precio : '1200', descripcion : 'Guitarra electrica con sonido clasico Fender', usos: 'Para meter bien de ruido y molestar a los vecinos', stock: '5 unidades', imagen : '/pagina_productos/producto2.1.jpg'},
	{id : 'producto3', nombre : 'Amplificador', precio : '700', descripcion : 'Amplificador a valvulas Marshall con un sonido agresivo', usos: 'Si no molestabas a tus vecinos suficiente con la guitarra, puedes comprar este amplificador', stock: '7 unidades',imagen : '/pagina_productos/producto3.1.jpg'},
];


app.set('view engine', 'jade');
app.use(express.static('pagina')); //para utilizar contenido estático residente 
// en la carpeta 'pagina'


app.get('/:producto', function(request, response){
	
	var productoEscogido = request.params.producto;
	
	productos.forEach(function(producto){
		
		console.log(producto.id);
		
		if (producto.id == productoEscogido) {

			response.render('productos',{
				productoElegido: producto.id,
				nombreProducto: producto.nombre,
				precioProducto: producto.precio,
				descripcionProducto: producto.descripcion,
				usosProducto: producto.usos,
				cantidadDisponibleProducto: producto.stock

			});
		}
	});
});

app.listen(8050);