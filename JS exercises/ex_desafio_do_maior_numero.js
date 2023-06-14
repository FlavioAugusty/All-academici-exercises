var fs = require("fs").readFileSync(0 , "utf8");
var linhas = fs.split(" ");

var maior_numero = 0;

for(let i of linhas){
    i = parseInt(i);

    if(i != 0){
        if( i > maior_numero){
            maior_numero = i;
        }
    }
    else{
        break;
    }
}

console.log(maior_numero);