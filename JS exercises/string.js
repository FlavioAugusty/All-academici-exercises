// SINTAXE E FUNCIONALIDADES

// As duas variáveis vão ter o mesmo valor
let string1 = "Olá Neps Academy"
let string2 = 'Olá Neps Academy'
/*
     Caso queira acessar um certo caractere da string, basta utilizar a 
    mesma sintaxe de acesso a um item de um array, ou seja, basta utilizar 
    colchetes com o índice a ser acessado (levando em consideração que o 
    primeiro valor está localizado no índice 0).
*/
// Acessando o quinto valor da variável
let caractere = string1[4]
console.log(caractere)
// Saída: N
/*
    Podemos utilizar os operadores lógicos de forma idêntica as das variáveis 
    do tipo inteiro. Ou seja, comparar se duas palavras/expressões são iguais, 
    maior ou menor.
*/
// As duas variáveis vão ter o mesmo valor
let string3 = "Olá Neps Academy"
let string4 = 'Olá Neps Academy'

// Verificando se as duas variáveis são iguais
if(string3 == string4) console.log("Tem o mesmo valor")

// Alterando o valor
string4 = "Olá"

// Verificando qual variável possui um maior valor
if(string3 > string4) console.log("A variável 'string3' possui um valor maior")
else console.log("A variável 'string4' possui um valor maior")

/* 
Saída:
Tem o mesmo valor
A variável 'string3' possui um valor maior
*/
/*
    Como o comportamento da string se parece com o de um array, por guardar uma sequência 
    de valores, podemos também iterar os valores utilizando um laço de repetição.
*/
let string_ = "Olá" // Inicializando variável

// Percorrendo os caracteres da string
for(let c of string_)
  console.log(`Caracter: ${c}`) // Imprimindo o valor

/* 
Saída:
Caracter: O
Caracter: l
Caracter: á
*/

// MÉTODOS 
/*
    Descobrindo tamanho de uma string

    Para isso, utiliza-se a propriedade length acessada por um . após a variável.
*/

var strings = "Olá Mundo!" // Declarando a variável
var size = strings.length // Acessando seu tamanho (não é utilizado '()')
console.log(size) // Imprimindo o tamanho
// Saída: 10

/*
    Maiúsculas e minúsculas

    Os métodos toLowerCase() e toUpperCase() transformam toda a variável em letras minúsculas e maiúsculas, 
    respectivamente.
*/
var stringss = "Olá Mundo!" // Declarando a variável

var lower = stringss.toLowerCase() // Transformando todas em minúsculas
var upper = stringss.toUpperCase() // Transformando todas em maiúsuclas

console.log(lower)
console.log(upper) 

/* 
Saída:
olá mundo!
OLÁ MUNDO!
*/

/*
    Atualizando partes da string

    Muitas vezes queremos somente substituir algumas expressões ou caracteres, 
    e para isso percorremos toda a string verificando as partes iguais e substituindo. 
    No JavaScript, existe o método replace(), que recebe dois parâmetros, o primeiro é a 
    expressão a ser substituída; e o segundo é o novo conteúdo.
*/
var string = "Olá Mundo!" // Declarando a variável

var newString = string.replace("Olá", "Oi") // Substituindo o 'Olá' por 'Oi'

console.log(newString)

// Saída: Oi Mundo!

/**
 * Encontrando o índice de uma substring na string
 * 
 * Para isso, existe o método indexOf(), que recebe como parâmetro uma substring a ser 
 * encontrada na variável. Se existe, retorna o índice que está localizado, se não, retorna -1.
 */

var string = "Olá Mundo!" // Declarando a variável

var indice1 = string.indexOf("Olá") // Procurando o índice da substring 'Olá'
var indice2 = string.indexOf("Oi") // Procurando o índice da substring 'Oi'

console.log(indice1)
console.log(indice2)

/* 
Saída:
0
-1
*/
/** 
 * Descobrindo tamanho da lista
 * 
 * Da mesma forma que na estrutura string, a propriedade length 
 * também está presente nas listas com a mesma funcionalidade, retornar o tamanho do Array.
 * 
*/

// Descobrindo tamanho da lista
const size = numbers.length;

console.log(size);
// Saída: 12

//Remover um item do final da lista

/**
 * Como existe o método que adiciona um item ao final da lista, existe o que remove, o pop().
 * 
*/

// Descobrindo tamanho da lista antes remoção
let size = numbers.length;
console.log(size);

numbers.pop(); // Removendo o último dado da lista

// Descobrindo tamanho da lista pós remoção
size = numbers.length;
console.log(size);

/* 
Saída:
12
11
*/

/**
 * Procurar o índice de um valor na lista
 * 
 * Para isso, utilizamos a função indexOf(), idêntica a string, que recebe como 
 * parâmetro qual o valor que está sendo procurado. Se ele existe, retorna o índice 
 * o qual está localizado, senão, retorna -1.
 */

let indice7 = numbers.indexOf(7); // Procurando o valor 7
let indice20 = numbers.indexOf(20); // Procurando o valor 20

console.log(indice7, indice20);

// Saída: 7 -1