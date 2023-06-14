/*var fs = require("fs").readFileSync(0, "utf8");
 var numero = fs.split("\n")[0];
    /**
     * Nesse código, usei split("\n")[0] para dividir a string fs em um array separado 
     * por quebras de linha e, em seguida, pegar o primeiro elemento (índice zero) do 
     * array resultante como o número a ser verificado.
     * 
    for(let i = 1; i <= numero; i++){
        if((numero%i) == 0){
            process.stdout.write(i + " " );
        }
    }
    console.log(); // para quebrar a linha de respostas e dar um espaço para uma possível próxima sequencia
*/

var fs = require("fs");
let leitura = fs.readFileSync(0, "utf8");
let linhas = leitura.split();

var X = linhas[0]
var divisores = []
for (let i=0; i<=X; i++) {
	if(X%i == 0){
		divisores.push(i)
	}
}
console.log(divisores.join(" "))