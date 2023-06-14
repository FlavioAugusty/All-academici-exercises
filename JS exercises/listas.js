// Criando as listas
// A primeira um array de números e a segunda vazia

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "fim"];
let empty = []

// O processo de acesso a um valor dentro da lista foi descrito na aula de string, 
// que é simplesmente colocar o índice a ser lido em colchetes, lembrando que o início sempre é em 0.

let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "end"];
const first = numb[0]; // Lendo o primeiro valor
const second = numb[1]; // Lendo o segundo valor
const third = numb[2]; // Lendo o terceiro valor
const fourth = numb[3]; // Lendo o quarto valor

console.log(first, second, third, fourth);

// Saída: 0 1 2 3


//Também podemos fazer alterações em um elemento específico da lista.

first = numb[0]; // Lendo o primeiro valor

numb[0] = 11 // Trocando o primeiro valor para 10

if(first === numb[0])
  console.log("Os valores são iguais");
else
  console.log("Os valores são diferentes");

// Saída: Os valores são diferentes

// E por último, como já apresentado na aula de Estruturas de repetição, podemos percorrer a lista a partir de um for.

// Percorrendo o array de números
for(let n of numbers)
  console.log(`O valor atual é: ${n}`); // Imprimindo o valor

// MÉTODOS
/**
 * Adicionando um valor ao final da lista
 * 
 * Muitas vezes queremos somente inserir um valor na lista, e para fazer
 * isso de forma prática, existe o método push(), que recebe como parâmetro 
 * um valor a ser inserido ao final da lista.
 * 
 */

// Inserindo 0 ao final da lista
empty.push(0);

// Inserindo 1 ao final da lista
empty.push(1);

// Percorrendo o vetor
for(let c of empty)
  console.log(c);

/* 
Saída:
0
1
*/

