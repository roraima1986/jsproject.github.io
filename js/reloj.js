

$(document).ready(function(){
	setInterval(function(){
		var reloj = moment().format("hh:mm:ss a");
		$('#reloj').html(reloj);
	}, 1000);
	
});