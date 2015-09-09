var total= 0 ;
console.log(process.argv);
for(var i = 2; i < process.argv.length; i++){
	var total = total + parseInt(process.argv[i]);
}
console.log(total); 

