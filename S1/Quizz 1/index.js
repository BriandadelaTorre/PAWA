var uno = process.argv[2];
var eliminarcoma = uno.split(",");
var totalsuma = 0;
for(var i = 0; i < eliminarcoma.length; i++){
	totalsuma=totalsuma + parseInt(eliminarcoma[i]);
} 
console.log("Total: " + totalsuma);

