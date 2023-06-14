var fs = require("fs").readFileSync(0 , "utf8");
var lines = fs.split("\n");
var tam = parseInt(lines.shift()); // I take the first line of input and made it an integer
var num = lines.shift().split(" ").map(Number); // I did the same of the last line, but I used the function map(number)
                                                // because the function parseInt wouldn't work using the the response of
                                                // split(" ") that's some substrings
var aux = 0;

for(var i = 1; i < (tam-1); i++){
    if((num[i-1] == 1) && (num[i] == 0) && (num[i+1] == 0)) aux++;
}

console.log(aux);