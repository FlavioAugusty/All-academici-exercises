var input = require("fs").readFileSync(0 , "utf8");
var lines = input.split("\n");

// variáveis da entrada
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

// imprimo o valor de A - B
console.log(A - B);
