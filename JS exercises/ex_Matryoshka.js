var input = require("fs").readFileSync(0, "utf8");  // recebendo os valores.
var lines = input.split("\n"); // pegando os valores e passando para um string para q possa ser trabalhado.
var aux = lines[1].split(" ")   // aqui foi pego a segunda linha da string e subdividido em substrings q cada 
                                // elemento esata sendo separado por um espaço, ficando cado um e um espaço de 
                                // memória diferente.

var n = parseInt(lines[0]); // pegando o valor da primeira linha da string e transformando em um numero inteiro

var v1 = aux.map(x => parseInt(x)); // pegando o os valores da string auxiliar e os transformando em numeros
var v2 = aux.map(x => parseInt(x)); // inteiros.
var ans = Array();  // construindo uma array vazia q nos auxiliará a armazenar a resposta.

v1.sort(function(a, b){ // ordenando o vetor 1 para ser comparado como ideal e saber qual é a posição
    return a-b;         // a ser dada como resposta
});

var i = 0;
for(i=0; i<n; i++){
    if(v1[i] != v2[i]){ // comparando as váriaveis
        ans.push(v1[i]);
    }
}

var out = ans.length.toString() + "\n"; //armazenando nesta primeira linha da string o tamanho dela
for(i=0; i<ans.length; i++){
    out += ans[i].toString() + " "; // na segunda linha da string armazenamos as posições que são a resposta para 
}                                   // serem mudadas

console.log(out);
