function retornaFuncionSaludo(){
	var mensaje = "Hola a todos";
	var functionSaludo = function(){
		console.log(mensaje);
	}
	return functionSaludo;
}
var saludando = retornaFuncionSaludo();
console.log(saludando());
console.log('\n \n')
saludando();