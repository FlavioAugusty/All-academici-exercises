/**
 * WHILE
 */


let indice = 0; // Criando variável de índice

// Enquanto o índice for menor ou igual a 10, continua a execução
// dentro do while
while(indice <= 10) {
    console.log(`Estou no índice ${indice}`);
    indice++; // Aumentando o valor de índice
}

indice = 0; // Criando variável de índice

// Neste caso, como o valor de índice não muda, entrará em um loop infinito, porque a condição nunca será falsa
while(indice <= 10) {
    console.log(`Estou no índice ${indice}`);
}

/**
 * For (com contador)
 */

// Criando o laço de repetição inicializado em 0, irá ser finalizado quando o valor
// for maior que 10, e a cada repetição, acrescenta 1 na variável indice
for(let indice = 0; indice <= 10; indice++) {
    console.log(`Estou no índice ${indice}`);
}

/**
 * FOR(LISTA)
 * 
 * A sintaxe também é semelhante ao C, mudando somente na tipagem da variável. 
 * Portanto, é definido uma variável que vai receber os atributos da lista, e 
 * para estabelecer que será percorrida, é usado a palavra-chave of. Dessa forma, 
 * a sintaxe fica: for(let i of lista) {}.
 * 
 * No exemplo abaixo, é percorrido a lista numeros e impresso cada valor. 
 * Não se preocupe com a sintaxe da lista, iremos ver posteriormente no curso.
 * 
 */


// Estabelecendo a lista de números
let numeros = [1, 5, 19, 17, 9, 4];

// Percorrendo a lista e imprimindo cada valor seu
for(let i of numeros) {
    console.log(i);
}

/**
 * BREAK e CONTINUE
 * 
 * As palavras-chaves break e continue também estão presente no JavaScript. Caso você não se lembre, 
 * vamos dar uma breve explicação sobre cada uma.
 * 
 * break: interrompe o ciclo o qual está localizado seu escopo
 * continue: não executa o restante do código do ciclo e passa para a próxima iteração
 * 
 * Dessa forma, com o while por exemplo, poderíamos utilizar o break colocando a condição dentro do 
 * código de execução.
 */


// O laço de repetição em seu padrão é definido como infinito, entretanto a condição está presente no código de execução,
// e quando for verdadeira, o laço é interrompido
while(true) {
    if(indice > 10) break;
    console.log(`Estou no índice ${indice}`);
    indice++; // Aumentando o valor de índice
}