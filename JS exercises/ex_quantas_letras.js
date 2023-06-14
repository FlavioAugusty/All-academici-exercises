var fs = require("fs").readFileSync(0 , "utf8");
var lines = fs.split("\n");
var S = lines.shift();
var C = lines.shift();
var j = 0;
for(let i = 0; i < S.length; i++){
    if(C == S[i]){
        j++;
    }
}

console.log(j);