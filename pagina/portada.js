jQuery(document).ready(function(){

	$("#content div").hide();
    $("#recio").attr("id","current");
    $("#precio").fadeIn();
 
    $('#tabs a').click(function(e){
        e.preventDefault();
        $("#content div").hide();
        $("#tabs li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('title')).fadeIn();
        
    });

    

});