/* 
Um detalhe a ser destacado é um acréscimo do JavaScript em relação ao C, que é a existência dos 
operadores === e !==. Ambos operadores funcionam de forma semelhante aos == e != porém, além de 
verificar se os valores são iguais (ou diferentes) eles também verificam se ambos valores são do 
mesmo tipo, já que podemos ter valores iguais, mas não do mesmo tipo. Confira abaixo.
*/

if(1 == "1") // true

if(1 === "1") // false

if(1 != "1") // false

if(1 !== "1") // true
/*
Também temos o if reduzido, igual ao C, onde se tivermos somente uma linha dentro do escopo 
do if ou else, pode-se retirar as chaves.
*/
// Caso soma for maior que 20, imprima o dobro dela, se não, imprima a soma
soma = 1;
if(soma > 20) console.log(2*soma);
else console.log(soma);
/*
Além do mais, existe o if ternário, o qual é um if reduzido. Ele é utilizado quando realizamos somente 
uma funcionalidade a partir da condição do if, tornando ele escrito somente em uma linha.

Sua sintaxe é a seguinte: (x > y) ? console.log(x) : console.log(y);, isto é, uma condição entre 
parêntese, logo após um ? significando qual será o código a ser executado se a condição for 
verdadeira, e o :, o código executado quando for falso, dessa forma, reduzindo o if em uma linha.
*/
// Caso soma for maior que 20, imprima o dobro dela, se não, imprima a soma
(soma > 20) ? console.log(2*soma) : console.log(soma);