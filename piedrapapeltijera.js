// En esta parte es para la desición del usuario.

var User = prompt("¿piedra, papel o tijera?; para piedra introduce 1, para papel introduce 2 y para tijera introduce 3");

// Generamos con que va a jugar la computadora.

var PC = Math.floor(Math.random() * 3) + 1;

// Etapa de validación.

if (User == PC){
	console.log("Empate")
}

else if (PC == 1 && User == 2){
	console.log("Ganaste! :D")
}
else if (PC == 1 && User == 3){
	console.log("Perdiste! :'(")
}
else if (PC == 2 && User == 1){
	console.log("Perdiste! :'(")
}
else if (PC == 2 && User == 3){
	console.log("Ganaste! :D")
}
else if (PC == 3 && User == 1){
	console.log("Ganaste! :D")
}
else if (PC == 3 && User == 2){
	console.log("Perdiste! :'(")
}

// Se vuelve a reiniciar el juego.

var again = prompt("Quieres jugar nuevamente? si o no")

while (again="si") {
	console.log()
}
