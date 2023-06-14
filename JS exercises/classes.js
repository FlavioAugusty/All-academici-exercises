//Sintaxe

/**
 * Para criar uma classe, é utilizado a palavra-chave class, logo em seguida com o seu nome 
 * (seguindo a mesma regra de nomenclatura das variáveis) e as { } indicando seu escopo.
 * 
 * Sempre é adicionado um método constructor(), que é chamado quando a classe é instanciada. 
 * É nele que colocamos os parâmetros que queremos passar para a classe.
 * 
 * Para salvar esses elementos recebidos no contexto global da classe, utilizamos o this, 
 * que dentro do escopo da classe tem como a função de ser um objeto dela, guardando parâmetros e métodos.
 * 
 */

// Criando a classe de Livros
class Book {
  // Todo livro tem um nome, autor e ano de lançamento, portanto recebemos esses argumentos
  constructor(name, author, year) {
    // Salvando as variáveis para serem utilizadas em todo o contexto da classe
    this.name = name; 
    this.author = author;
    this.year = year;
  }
}

/**
 * Para construir um método dentro do escopo da classe, basta escreve-lo como uma função, 
 * entretanto sem a palavra-chave function.
 * 
 */

// Criando a classe de Livros
class Book {
  // Todo livro tem um nome, autor e ano de lançamento, portanto recebemos esses argumentos
  constructor(name, author, year) {
    // Salvando as variáveis para serem utilizadas em todo o contexto da classe
    this.name = name; 
    this.author = author;
    this.year = year;
  }

  age() {
    var date = new Date(); // Capturando a data atual
    // Subtraindo o ano atual com o ano do livro da classe e retornando o resultado
    return date.getFullYear() - this.year; 
  }
}

// Inicializando uma classe

/**
 * Nessa parte deve-se prestar muita atenção na diferença de chamada de uma função e de uma classe. 
 * A classe é utilizado a palavra-chave new antes da chamada dela, com o seu nome e os parâmetros 
 * do constructor() sendo passados.
 */

// Inicializando a classe de Book com os devidos parâmetros sendo passados

var bookOne = new Book("O universo numa casca de noz", "Stephen Hawking", 2001);

console.log(bookOne);
/* 
Percebe-se que a impressão é dos elementos salvo dentro do 'this' da classe.
  Book {
    name: 'O universo numa casca de noz',
    author: 'Stephen Hawking',
    year: 2001
  }
*/

/**
 * Para chamar um método da classe instanciada ou ler os dados nela existentes, 
 * basta colocar um . após seu nome, indicando que vamos referenciar os elementos 
 * existentes, assim acessando os dados públicos da classe.
 */

// Inicializando a classe de Book com os devidos parâmetros sendo passados
let bookOne = new Book("O universo numa casca de noz", "Stephen Hawking", 2001);

console.log(bookOne.age());
// Saída: 19

let description = `O livro bookOne.namefoiescritopor{bookOne.name} foi escrito por bookOne.namefoiescritopor{bookOne.author} e lançado em ${bookOne.year}.`;

console.log(description) // Imprimindo a descrição feita do livro.
// Saída: O livro O universo numa casca de noz foi escrito por Stephen Hawking e lançado em 2001.