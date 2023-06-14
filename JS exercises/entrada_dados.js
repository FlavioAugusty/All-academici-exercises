
/**
 * 
    Entendo a função require
    Uma parte importante que deve ser entendida, é a palavra-chave que vem junto com o 
    Node.js require. Ele é responsável por carregar módulos com outros códigos JavaScript 
    para realizar certas funcionalidades. Podemos comparara-lo com o #include do C.

    Ele é uma função, que recebe o nome do módulo que deve ser importado.
 */
const module = require("nome_do_modulo");

/**
 * Por convenção, sempre usamos const quando importamos um módulo, já que não queremos 
 * mudar essa "variável" por engano no decorrer do programa.
    Módulo "fs"
    O módulo fs vem padrão com o Node.js e é responsável pela leitura de arquivos em seu computador. 
    Seja em .txt, .csv, entre outros tipos.

    Assim, com a sintaxe apresentada no tópico anterior, importamos o módulo:
 */


// Importando o módulo
const fs = require("fs");

// Para a leitura de dados, vamos utilizar a função fs.readFileSync(), que serve para ler um 
//conteúdo do arquivo e retorná-lo no formato string.

// Normalmente essa função é utilizada para ler um arquivo da forma:

// Importando o módulo
const fs = require("fs");

// Lendo o conteúdo da linha de comando

let Lendo = fs.readFileSync("entrada.txt", "utf8");
console.log(Lendo)
/**
 * Onde a função iria ler todo o conteúdo do arquivo "entrada.txt" 
 *  (amazenado na mesma pasta do nosso código Javascript). Supondo que o arquivo 
 *  "entrada.txt" tenha o seguinte conteúdo:

    2
    1 4
    Nosso programa iria imprimir as duas linhas no terminal, primeiro a linha "2" depois a linha "1 4".

    Porém quando resolvendo exercícios no Neps nós não vamos ler a entrada de um arquivo, precisamos 
    ler os valores da própria linha de comando. Dessa forma precisamos usar fs.readFileSync(0, "utf8"). 
    Esse comando permitirá nosso código ler o arquivo passado pelo pipe (método utilizado pelos Juizes 
    Online para enviar dados para o programa).

    Logo nosso código ficaria assim:
 * 
 */


// Importando o módulo
const fs = require("fs");

// Lendo o conteúdo da linha de comando
let leitura = fs.readFileSync(0, "utf8");
console.log(leitura)