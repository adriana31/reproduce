//JavaScript
$(document).ready(function(e){
	$('#principal'). height($('#page').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('Caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Cerdo','audio/cerdo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Gallo','audio/gallo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Pato','audio/pato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Vaca','audio/vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Pollo','audio/pollito.mp3',function(){},function(e){alert('Error '+e);});
		
		
		//REPRODUCIR LAS NOTAS
		
		$('.nota').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready