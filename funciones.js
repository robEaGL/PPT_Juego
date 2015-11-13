// Funcion en variable:

var mi_funcion = function(param_1, param_2){
	console.log("El parametro 1 es: " + param_1);
	console.log("El parametro 2 es: " + param_2);
}

// Funciones - Saludos

function saludar(a_quien){
	var aleatorio = Math.floor(Math.random() * 30)+ 1;
	console.log("Hola " + a_quien);
	console.log("¿Cómo estas?");
	console.log("Tu número aleatorio es: " + aleatorio);
}

// Funciones - Suma

function suma(num_1, num_2){
	suma = num_1 + num_2;
	return suma;
}

// Funciones - Cuadrado de numeros:

function cuadrado(numero){
	var resultado = numero * numero;
	console.log("El cuadrado es: " + resultado);
	return resultado;
}

// Funciones - Resta:

function resta(numero_1, numero_2){
	return numero_1 - numero_2;
}
// Funciones - Suma de longitudes de dos cadenas:

function suma_de_longitudes(nombre_1, nombre_2){
	var suma = nombre_1.length + nombre_2.length;
	return suma;
}

// For - Piramide con sharp #

var num = "";

	for(i=1; i<=20; i++)
	{
	num = num + "#";
	console.log(num);
	}

// For - solo imprime un hola

for(i=0; i<=20; i++){
	console.log("hola");
}

// For - piramide con njmeros de uno en uno

function piramide(cuantos){
	var num = "";
	for (i=1; i <= cuantos; i++){
		num = num + i + ",";
		console.log(num);
	};
}