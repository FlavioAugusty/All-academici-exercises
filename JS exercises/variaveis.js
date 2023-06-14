/*
var

Declara uma variável que pode ser ou não inicializada com um valor. 
Caso não tenha um valor inicial, será atribuído undefined.
*/

var a = 8;
var b;

console.log(a, b);

// O resultado será: 8 undefined

/*

let

Declara uma variável pertencente ao local de escopo do bloco, que pode ser ou não inicializada 
com um valor. Difere do var por ser somente utilizada no escopo a qual foi declarada, já o var é escopo global.
*/
if(true) {
  let x = 5;
  var y = 5;
  
  console.log(x, y);
  // Impressão: 5 5
}

console.log(x, y);
// ReferenceError: x is not defined

/*

const

Declara uma constante, ou seja, apenas leitura, portanto tem que ser inicializada com um valor. Suas 
regras de escopo seguem a mesma do let.
*/
const x = "Olá Neps Academy";

console.log(x);
// Impressão: Olá Neps Academy;

x = "Neps";
// TypeError: Assignment to constant variable.

/*
Identificadores
Identificadores são uma sequência de caracteres no código, que identifica uma variável, função ou propriedade.

Nas variáveis, você deve começar com uma letra, underline (_), ou cifrão ($). Os 
próximos caracteres podem ser número de 0-9. Cabe-se destacar que o JavaScript é case-sensitive, ou seja, 
caracteres de letras maiúsculas e minúsculas se diferenciam.
*/

var $value = 8; // Correto
// var 5value = 10; // Incorreto, não pode começar com números

const Tempo_em_Graus = 38; // Correto
const tempo_em_graus = 38; // Correto, case-sensitive
const temp_11_11_2020 = 32; // Correto
'const tempo_em_graus = 38; // Incorreto, já foi declarada'

let VåLuE = 10; // Correto, pode-se utilizar caracteres Unidecode
let valüe = 5; // Correto, pode-se utilizar caracteres Unidecode