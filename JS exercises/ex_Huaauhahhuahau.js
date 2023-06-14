var input = require("fs").readFileSync(0, "utf8");
var risada = input.split('');
var vog = "" // variável para adicionar as vogais a serem analisadas
var invog = "" // variável para adcionar as vogais de trás para frente para serem comaparadas

for(let C of risada){
    if(C == "a" || C == "e" || C == "i" || C == "o" || C == "u"){
        vog += C;
        invog = vog.slice().split('').reverse().join('');
        /**
         *  vog.slice(): O método slice() é usado para criar uma cópia da string vog. 
         * Sem nenhum argumento, slice() cria uma cópia completa da string.
         * 
         *  .split(''): O método split('') é usado para dividir a string em um array de caracteres individuais. 
         * O argumento vazio '' indica que queremos dividir a string em cada caractere separadamente.
         * 
         *  .reverse(): O método reverse() é usado para inverter a ordem dos elementos do array. ]
         * Nesse caso, inverte a ordem dos caracteres na string.
         * 
         * .join(''): O método join('') é usado para unir os elementos do array em uma única string. 
         * O argumento vazio '' indica que queremos unir os elementos sem nenhum caractere separador.
         * 
         */
    }
}

if( vog === invog){
    console.log("S");
}else{
    console.log("N");
}