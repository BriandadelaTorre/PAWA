var fs = require('fs');
var manejador = function(err, data){
if (err){
	console.log('Error al leer el archivo...');
	return;
	}	
	console.log(data);
};
fs.readFile('\hola.html','utf-8',manejador);

//finaliza mensaje
console.log("> El programa ha finalizado...");



// fs.readFile('\hola.html','utf-8',function(err, data){
// if (err){
// 	console.log('Error al leer el archivo...');
// 	return;
// 	}	
// 	console.log(data);
// };);
// 
// finaliza mensaje
// console.log("> El programa ha finalizado...");