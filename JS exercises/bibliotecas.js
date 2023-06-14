const chalk = require("chalk").default; // Importando o método 'default' do módulo 'chalk'
const moment = require("moment"); // Importando a lib 'moment'


// Criando uma string formatada com a data e horário atual
var date = moment().format("DD/MM/YYY, h:mm:ss a");

console.log(date); // Imprimindo a data formatada

// Saída: 23/12/202020, 4:04:15 pm

/**
 * Também podemos subtrair ou adicionar dias as datas, manipulando-as para uma respectiva funcionalidade, 
 * por exemplo, verificar se irá passar do limite determinado. Para isso, existe as funções add() e subtract(), 
 * que recebem dois parâmetros: o primeiro é a quantidade que será subtraída ou adicionada; e segundo em qual 
 * tempo irá ser, dias, horas minutos, etc.
 */

// Adicionando 1 dia ao dia atual e formatando em forma de calendário
var dateAdd = moment().add(1, 'days').calendar();      

// Subtraindo 20 horas a hora atual e formatando em forma de calendário
var dateSub = moment().subtract(20, 'hours').calendar();      

console.log(dateAdd); // Imprimindo a data formatada
console.log(dateSub); // Imprimindo a data formatada

/*
Saída:
Tomorrow at 9:37 AM 
Yesterday at 1:37 PM
*/

/**
 * Chalk
 * 
 * Essa biblioteca é uma das mais legais, servindo para escrever em forma de giz no terminal, podendo escolher 
 * cores e formas. E também é muito simples e prática de ser utilizada.
 * Para escolher a cor que será escrito, basta referenciar no chalk a cor que você quer, escrevendo como 
 * parâmetro da função a escrita.
 * 
 */


// Criando a variável de impressão a partir de template literals
const print = `chalk.blue(′Hello′)World{chalk.blue('Hello')} World chalk.blue(´Hello´)World{chalk.red('!')}`;

console.log(print);



/**
 * Também podemos definir temas para certas ações, como uma função que imprime erros ou avisos com um 
 * determinado estilo. Para isso, atribuímos a uma variável a forma de ser escrita, que ela irá virar 
 * uma função possível a ser utilizada. Para mais detalhes, leia a documentação.
 */


// Criando a função de imprimir erros, com a escrita vermelha em negrito
const error = chalk.bold.red;

// Criando a função de imprimir alertas, com a cor laranja
// Foi utilizado a função 'keyword', que recebe o nome de uma cor e retorna a forma de ser escrita
const warning = chalk.keyword('orange');
 
console.log(error('Error!')); // Imprimindo um erro
console.log(warning('Warning!')); // Imprimindo um alerta

