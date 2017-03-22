var express = require('express');
var router = express.Router();

router.route('/producto1')
	.get(function(request,response){
		console.log('Entramos en ruta.js');
		response.render('productos',{
				productoElegido: "producto.id",
				nombreProducto: "producto.nombre",
				precioProducto: "producto.precio",
				descripcionProducto: "producto.descripcion",
				usosProducto: "producto.usos",
				cantidadDisponibleProducto: "producto.stock"

			});
	});
		
router.route('/about')
	.get(function(request,response){
		response.render('servidor',
		{
			titulo: '¡Hola!',
			mensaje: '¡Otro saludo!',
			condicion: false,
			lista: ['Vitoria', 'San Sebastian', 'Logroño'],
			objeto: {dato1: 1290, dato2: 33, dato3: 'Más texto'}
		});
	});
	
module.exports = router;