console.log("Olá Neps Academy!")
// Impressão: Olá Neps Academy!

console.log(["Olá", "Neps", "Academy!"])
// Impressão: [ 'Olá', 'Neps', 'Academy!' ]

console.log(true, false)
// Impressão: true false

console.log({
  first: "Olá",
  second: "Neps",
  third: "Academy!"
})
// Impressão: { first: 'Olá', second: 'Neps', third: 'Academy!' }

for(var i = 0; i < 10; i++) console.log("Olá Neps Academy!")
/*
Impressão:
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
Olá Neps Academy!
*/ 

console.log("Olá " + "Neps " + "Academy!")
// Impressão: Olá Neps Academy!

/*
Entretanto, essa forma não é a mais usual e prática que existe, pois com muitas variáveis e 
textos a serem impressos, seu entendimento se torna confuso. A partir disso, existem as 
formatted strings, que são uma forma de imprimir variáveis dentro de uma string. Para isso, 
no lugar das aspas, é colocado o símbolo do acento grave ``, e quando quiser colocar uma variável 
no meio, coloca-se ${nome_variavel}.
*/
const name = "Neps Academy";
const greeting = "Olá";

console.log(`Teste de formatted strings: greeting{greeting} greeting{name}!`);
// Impressão: Teste de formatted strings: Olá Neps Academy!

/**
 * Quantidade de casas decimais
Em vários exercícios no Neps será pedido para você imprimir números reais com uma determinada 
quantidade de casas de precisão.

Em tais situações nós podemos usar o método toFixed. Veja a seguir:
 */

let x = 2 / 3;

console.log(x); // Irá imprimir um número 0.6666666666666666
console.log(x.toFixed(2)); //Irá imprimir uma string 0.67