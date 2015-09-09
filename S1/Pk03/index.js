// Crando dos funciones  xpressionss
var Saludar = function(name){
	console.log("Hola %s", name);
};

var Despide = function(name){
	console.log("Adios %s", name);
};

 // Creando una declaracion de función 
function mensaje(name, handler){
	name = name.toUpperCase();
	handler(name);
};

// Invoca la funcion mensaje 
mensaje("itgam", Saludar);