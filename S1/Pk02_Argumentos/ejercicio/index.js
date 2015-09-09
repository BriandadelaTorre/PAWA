//imprimiento vecctor
//de argumentos argv
console.log(process.argv);
var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
var suma = num1 + num2;
console.log(suma);
//imprimiendo longitud
console.log('tamaño: '+ 
	process.argv.length);