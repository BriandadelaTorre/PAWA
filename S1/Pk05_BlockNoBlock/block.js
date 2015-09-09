// Modelo bloqueante 
// de una lectura de archivos

// Loading
// file stream module
var fs = require('fs');

//reading the file
var content =
		fs.readFileSync("\hola.html",'utf-8');
// imprimiendo 
console.log(content);
// mensaje final 
console.log('This program has  finished it´s  execution...');