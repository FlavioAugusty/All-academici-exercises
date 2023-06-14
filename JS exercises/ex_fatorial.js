var input = require("fs").readFileSync(0, "utf8");
var N = parseInt(input);

function fatorial(n){
    if( n == 0 ){
        return 1
    }

    return n * fatorial(n-1);
}

console.log(fatorial(N));