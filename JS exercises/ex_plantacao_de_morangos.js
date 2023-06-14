var input = require("fs").readFileSync(0 , "utf8");
var lines = input.split("\n");
/*
// variáveis de entrada
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());

// Veriacando qual área é maior e imprimindo a que for maior
((A*B) > (C*D)) ? console.log(A*B) : console.log(C*D);
*/

// lados do primeiro retângulo
var l1 = parseInt(lines.shift());
var l2 = parseInt(lines.shift());

// lados do segundo retângulo
var l3 = parseInt(lines.shift());
var l4 = parseInt(lines.shift());

// a função Math.max() imprime a maior das duas áreas
console.log(Math.max(l1 * l2, l3 * l4));

/**
 * Adicionando e removendo no início da lista
 * 
 * Para adicionar e remover itens no início do Array, é utilizado os métodos unshift() e 
 * shift(), respectivamente.
 */

// Adicionando o valor '1' ao início da lista
numbers.unshift(1);

let size = numbers.length;
console.log(size);

numbers.shift(); // Removendo o primeiro valor da lista

size = numbers.length;
console.log(size)

/* 
Saída:
13
12
*/
