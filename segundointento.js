//Juego piedra papel o tijeras.

var decisionUsuario = prompt("¿piedra, papel o tijera?");

var option = getRandomInt(0,2);

	function getRandomInt (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

var respuesta;
	if (function == 1) {
		respuesta = "piedra";
	} else if (function == 2) {
		respuesta = "papel";
	} else if (function == 3) {
		respuesta = "tijera";
	}
	return respuesta;
};

var decisionPC = aleatorio();
	console.log ("Usuario:" + decisionUsuario + ", Ordenador: " + decisionOrdenador);

//Tercera parte del juego. Se decide quién es el ganador

var logicaJuego = function(decisionUsuario, decisionOrdenador) {
	if (decisionUsuario == decisionPC) {
	return console.log("Empate, los dos eligieron " +decisionUsuario);
	} else {
		if (decisionUsuario == "piedra" && decisionPC == "papel") {
			console.log(""+ decisionUsuario +" vs " + decisionPC + ", gana la PC");
		} 
		if (decisionUsuario == "piedra" && decisionPC == "tijera") {
			console.log(""+ decisionUsuario +" vs " + decisionPC + ", gana el usuario");
		} 
		if (decisionUsuario == "papel" && decisionPC == "tijera") { 
			console.log(""+ decisionUsuario +" vs " + decisionPC + ", gana la PC");
		 }
		 if (decisionUsuario == "papel" && decisionPC == "piedra"){
			console.log(""+ decisionUsuario +" vs " + decisionPC + ", gana el usuario");
		}
			 if (decisionUsuario == "tijera" && decisionPC == "piedra") {
			console.log(""+ decisionUsuario +" vs " + decisionPC + ", gana el ordenador.");
		}
		 if (decisionUsuario == "tijera" && decisionPC == "papel") {
			console.log(""+ decisionUsuario +" vs " + decisionPC + ", gana el usuario");
		}
	};