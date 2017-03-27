jQuery(document).ready(function(){

    $('#content div').hide();
    /*$('#precio').attr('id','current');*/
    $('#precio').fadeIn();

    $('.descripcion_panel').hide();
    $('.imagen_panel').hide();
    $('.precio_panel').hide();
    $('.carrito_panel').hide();
    $('#divPestanas').hide();

    var seleccionado;

    var precio1 = $('#Genuino_ZERO').data('precio');
    var precio2 = $('#Arduino_UNO').data('precio');
    var precio3 = $('#Genuino_101').data('precio');

    var unidades1 = 0;
    var unidades2 = 0;
    var unidades3 = 0;
    var total = 0;
 
    $('#tabs a').on('click',function(e){
        e.preventDefault();
        $('#content div').hide();
        $('#tabs li').attr('id','');
        $(this).parent().attr('id','current');
        $('#' + $(this).attr('title')).fadeIn();
    });

    $('.buy').on('click',function(){
        $('#divPestanas').show();

        seleccionado = $(this).parent().parent().attr('id');

        $('.descripcion_panel').find('div').empty();

        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');
        
        if(seleccionado == "Genuino_ZERO"){

            $('.descripcion_panel').find('div').append('Genuino Zero<br>Microcontrolador: ATSAM21G18<br>Tensión de funcionamiento: 3.3 V<br>Pines: 2 (Nativo y programación)<br>Memoria flash: 256 KB<br>SPRAM: 32 KB<br>Velocidad de reloj: 48 MHz');

            $('.imagen_panel').find('.main_image').attr('src','img/genuino01.jpeg');
            $('.imagen_panel').find('.small_1').attr('src','img/genuino01.jpeg');
            $('.imagen_panel').find('.small_2').attr('src','img/genuino02.jpeg');
            $('.imagen_panel').find('.small_3').attr('src','img/genuino03.jpeg');

            $('.precio_por_unidad').empty();
            $('.precio_por_unidad').append('Precio unitario: '+precio1+'€');

            $('.precio_panel').find('input').attr('value',unidades1);
            $('.precio_panel').find('input').val(unidades1);

        } else if(seleccionado == "Arduino_UNO"){

            $('.descripcion_panel').find('div').append('Arduino Uno<br>Microcontrolador: ATmega328P<br>Tensión de funcionamiento: 5 V<br>Pines: 14 (6 proporcionan salida PWM)<br>Memoria flash: 32 KB<br>SPRAM: 2 KB<br>Velocidad de reloj: 16 MHz');


            $('.imagen_panel').find('.main_image').attr('src','img/arduino11.jpeg');
            $('.imagen_panel').find('.small_1').attr('src','img/arduino11.jpeg');
            $('.imagen_panel').find('.small_2').attr('src','img/arduino12.jpeg');
            $('.imagen_panel').find('.small_3').attr('src','img/arduino13.jpeg');

            $('.precio_por_unidad').empty();
            $('.precio_por_unidad').append('Precio unitario: '+precio2+'€');

            $('.precio_panel').find('input').attr('value',unidades2);
            $('.precio_panel').find('input').val(unidades2);

        } else if(seleccionado == "Genuino_101"){

            $('.descripcion_panel').find('div').append('Genuino 101<br>Microcontrolador: Intel Curie<br>Tensión de funcionamiento: 3.3V<br>Pines: 14 I/O (4 proporcionan salida PWM)<br>Memoria flash: 198 KB<br>SPRAM: 24 KB<br>Velocidad de reloj: 32 MHz');


            $('.imagen_panel').find('.main_image').attr('src','img/genuino21.jpeg');
            $('.imagen_panel').find('.small_1').attr('src','img/genuino21.jpeg');
            $('.imagen_panel').find('.small_2').attr('src','img/genuino22.jpeg');
            $('.imagen_panel').find('.small_3').attr('src','img/genuino23.jpeg');

            $('.precio_por_unidad').empty();
            $('.precio_por_unidad').append('Precio unitario: '+precio3+'€');

            $('.precio_panel').find('input').attr('value',unidades3);
            $('.precio_panel').find('input').val(unidades3);

        }

        $('.descripcion_panel').show();
        $('.imagen_panel').hide();
        $('.precio_panel').hide();
        $('.carrito_panel').hide();

    });

    $('#descripcion').on('click',function(){
        $('.descripcion_panel').show();
        $('.imagen_panel').hide();
        $('.precio_panel').hide();
        $('.carrito_panel').hide();
    });

    $('#imagen').on('click',function(){
        $('.descripcion_panel').hide();
        $('.imagen_panel').show();
        $('.precio_panel').hide();
        $('.carrito_panel').hide();
    });

    $('#precio').on('click',function(){
        $('.descripcion_panel').hide();
        $('.imagen_panel').hide();
        $('.precio_panel').show();
        $('.carrito_panel').hide();
    });

    $('.actualizar_carrito').on('click',function(){

        if(seleccionado == "Genuino_ZERO"){

            unidades1 = $('.precio_panel').find('input').val();
            $('.precio_panel').find('input').attr('value',unidades1);
            $('.precio_panel').find('input').val(unidades1);

        } else if(seleccionado == "Arduino_UNO"){

            unidades2 = $('.precio_panel').find('input').val();
            $('.precio_panel').find('input').attr('value',unidades2);
            $('.precio_panel').find('input').val(unidades2);

        } else if(seleccionado == "Genuino_101"){

            unidades3 = $('.precio_panel').find('input').val();
            $('.precio_panel').find('input').attr('value',unidades3);
            $('.precio_panel').find('input').val(unidades3);

        }

        total = (unidades1*precio1)+(unidades2*precio2)+(unidades3*precio3);

        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');

        $('.carrito1').empty();
        $('.carrito1').append(unidades1+' unidad(es)');

        $('.carrito2').empty();
        $('.carrito2').append(unidades2+' unidad(es)');

        $('.carrito3').empty();
        $('.carrito3').append(unidades3+' unidad(es)');

    });

    $('.total_panel').on('click',function(){

        $('.carrito_panel').show();

        $('.carrito1').empty();
        $('.carrito1').append(unidades1+' unidad(es)');

        $('.carrito2').empty();
        $('.carrito2').append(unidades2+' unidad(es)');

        $('.carrito3').empty();
        $('.carrito3').append(unidades3+' unidad(es)');
    });

    $('.back').on('click',function(){
        $('.carrito_panel').hide();
    });

    $('#erase1').on('click',function(){
        unidades1 = 0;

        $('.precio_panel').find('input').attr('value',unidades1);
        $('.precio_panel').find('input').val(unidades1);

        total = (unidades1*precio1)+(unidades2*precio2)+(unidades3*precio3);

        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');

        $('.carrito1').empty();
        $('.carrito1').append(unidades1+' unidad(es)');
    });

    $('#erase2').on('click',function(){
        unidades2 = 0;

        $('.precio_panel').find('input').attr('value',unidades2);
        $('.precio_panel').find('input').val(unidades2);

        total = (unidades1*precio1)+(unidades2*precio2)+(unidades3*precio3);

        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');

        $('.carrito2').empty();
        $('.carrito2').append(unidades2+' unidad(es)');
    });

    $('#erase3').on('click',function(){
        unidades3 = 0;

        $('.precio_panel').find('input').attr('value',unidades3);
        $('.precio_panel').find('input').val(unidades3);

        total = (unidades1*precio1)+(unidades2*precio2)+(unidades3*precio3);

        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');

        $('.carrito3').empty();
        $('.carrito3').append(unidades3+' unidad(es)');
    });

    $('.main1').on('click',function(){
        $('.main_image').fadeOut('slow',function(){
            if(seleccionado == "Genuino_ZERO"){
                $('.imagen_panel').find('.main_image').attr('src','img/genuino01.jpeg');
                $('.main_image').fadeIn('slow');
            } else if (seleccionado == "Arduino_UNO"){
                $('.imagen_panel').find('.main_image').attr('src','img/arduino11.jpeg');
                $('.main_image').fadeIn('slow');
            } else if (seleccionado == "Genuino_101"){
                $('.imagen_panel').find('.main_image').attr('src','img/genuino21.jpeg');
                $('.main_image').fadeIn('slow');
            }
        });
    });

    $('.main2').on('click',function(){
        $('.main_image').fadeOut('slow',function(){
            if(seleccionado == "Genuino_ZERO"){
                $('.imagen_panel').find('.main_image').attr('src','img/genuino02.jpeg');
                $('.main_image').fadeIn('slow');
            } else if (seleccionado == "Arduino_UNO"){
                $('.imagen_panel').find('.main_image').attr('src','img/arduino12.jpeg');
                $('.main_image').fadeIn('slow');
            } else if (seleccionado == "Genuino_101"){
                $('.imagen_panel').find('.main_image').attr('src','img/genuino22.jpeg');
                $('.main_image').fadeIn('slow');
            }
        });
    });

    $('.main3').on('click',function(){
        $('.main_image').fadeOut('slow',function(){
            if(seleccionado == "Genuino_ZERO"){
                $('.imagen_panel').find('.main_image').attr('src','img/genuino03.jpeg');
                $('.main_image').fadeIn('slow');
            } else if (seleccionado == "Arduino_UNO"){
                $('.imagen_panel').find('.main_image').attr('src','img/arduino13.jpeg');
                $('.main_image').fadeIn('slow');
            } else if (seleccionado == "Genuino_101"){
                $('.imagen_panel').find('.main_image').attr('src','img/genuino23.jpeg');
                $('.main_image').fadeIn('slow');
            }
        });
    });
});