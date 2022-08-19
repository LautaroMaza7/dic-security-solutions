$(document).ready(function(){
	//var altoVentana = $('#muestro').css('position').replace("relative","absolute");//usa este para que desaparezca despues de pasar el alto del div
	var altoVentana = 450;
	var posicionVentana = document.getElementById("muestro").offsetTop;
	$(window).scroll(function(event){
		var posicionScroll = $(this).scrollTop();
	   	if (posicionScroll > (parseInt(posicionVentana)+parseInt(altoVentana))){
	    	$("#muestro").css("display","none");
	   	} else {
	    	$("#muestro").css("display","");
	   	}
		
	});

});