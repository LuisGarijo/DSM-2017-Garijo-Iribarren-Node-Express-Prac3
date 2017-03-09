jQuery(document).ready(function(){

	$('#ARM').on('click',function(){
		var prueba= $('<p> EEEOoooooooooooooo </p>');
		$('.jumbotron').append(prueba);

	});



	 $("#content div").hide();
        $("#tabs li:Precio").attr("id","current");
        $("#content div:Precio").fadeIn();
 
    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#content div").hide();
        $("#tabs li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('title')).fadeIn();
    });

    
});