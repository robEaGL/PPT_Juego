// En esta parte es para la desición del usuario.
var usuario = prompt("piedra, papel o tijera?");

// En esta parte vamos a calcular la desición del equipo con un valor aleatorio.

var compu = function() {
	var numero = Math.floor((Math.random()*3)+1);
	var respuesta;
	if (numero == 1) {
		respuesta = "piedra";
	}else if (numero == 2) {
		respuesta = "papel";
	}else {
		respuesta = "tijera";
	}
}










var compu = "papel";

if(usuario === compu){
	console.log("es empate =/");
}else
	if(usuario === "tijera"){
	console.log("Ganas! =D");
}else
	if(usuario === "piedra"){
	console.log("pierdes!");
}
Math.ceil(5,5)
Math.floor(5,5)
Math.round(5,5)
Math.random()

