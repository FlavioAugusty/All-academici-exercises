 //Definindo uma função

/**
 *  A declaração de uma função mais clássica se baseia no uso da palavra-chave function, seguida dos seguintes termos:
 * 
 * O nome da função (obedecendo a mesma regra de nome das variáveis)
 * Lista de parâmetros que a função vai ter (variáveis a serem utilizadas), entre parênteses e separadas por vírgulas
 * O código a ser executado entre { }
 * Dessa forma, vamos realizar uma função sum, que recebe dois parâmetros, os valores a serem somados. 
 * E retorna a soma dos dois valores.
 * 
 */

// Criando a função de soma
function sum(a, b) { // Definindo os dois parâmetros
  return a + b; // Retornando a soma dos dois valores
}

let resulto = sum(80, 2);

console.log(result);

// Saída: 82

/**
 *  Entretanto, não existe em Javascript somente essa forma de criação de função. 
 * Essa forma tradicional é chamada de function hoisting. Também é possível declarar 
 * funções utilizando function expression e arrow functions.
 * 
 */

// '''Function expression''' permite você "armazenar" uma função em uma variável.

// Criando a função de soma
let sum = function (a, b) { // Definindo os dois parâmetros
  return a + b; // Retornando a soma dos dois valores
}

let resultt = sum(80, 2);

console.log(result);

// Saída: 82

/**
 * '''Arrow functions''' são a forma mais curta de criação de uma função, tornando o código bem mais fácil de ler. 
 * 
 * Sua construção se baseia na declaração de uma variável, que irá receber a função. A sintaxe da criação de arrow 
 * functions é a seguinte: os parâmetros entre ( ), depois a flecha => (por isso o nome arrow), seguido do bloco de 
 * código. Assim, ficando dessa forma:
 * 
 */

// Criando a função soma a partir de uma arrow function
let sum = (a, b) => {
    return a + b
};

// Quando criamos uma função de apenas uma linha podemos omitir as chaves e o return
let sum = (a, b) => a + b;


/**
 * Usando as funções
 * 
 *  Uma oportunidade muito grande que o Javascript traz é a maneira de passar funções como 
 * parâmetros de funções. Assim, isso possibilita diversas usabilidades, como alguns métodos 
 * especiais das listas, que vamos mostrar ainda nessa aula.
 * 
 * Como exemplo de passagem de função como parâmetro, podemos modificar nossa função de soma, 
 * recebendo um método que define o comportamento dela, que será no caso, receber o total e multiplicar por 2.
 */

// Criando a função soma a partir de uma arrow function
let sum = (a, b, comport) => {
  let soma = a + b; // Realizando a soma
  return comport(soma); // Fazendo o processo da função e retornando o resultado
};

// Criando a função de multiplicar por 2, modificando o resultado
function mult2(x) { 
  return x*2 
}

const result = sum(80, 2, mult2);

console.log(result);
// Impressão: 164

/**
 * Agora que você já sabe o funcionamento de uma função passada por parâmetro, podemos apresentar 
 * alguns métodos de listas, o reduce() e o map().
 * 
 * O map ele passa por todos os itens da sequência e realiza o código proposto dentro dele, 
 * retornando as devidas modificações. Um exemplo de uso é modificar a lista em que todos os 
 * valores maiores que 10 serão substituídos por 10.
 * 
 */

const numberss = [0, 1, 2, 3, 4, 11, 13, 10, 17];

// O map ele recebe uma função como parâmetro, dando o valor atual da lista para ela,
// que executa o método que obrigatoriamente tem que retornar um valor
let newList = numbers.map(number => {
  if(number > 10) return 10 // Se for maior que 10, retorna 10
  return number // Senão, retorna o número
})

console.log(newList);


//REDUCE


// Saída: [0, 1, 2, 3, 4, 10, 10, 10, 10]

const numbers = [0, 1, 2, 3, 4, 11, 13, 10, 17];

// O reduce abaixo é para a soma de todos os elementos do array,
// e ele recebe como parâmetros a função e o valor inicial da variável acumulativa
const sum = numbers.reduce((number, acumulative) => number + acumulative, 0)

console.log(sum);
// Impressão: 61

/**
 * A função reduce é usada para reduzir um array a um único valor. Ela percorre cada elemento do array e 
 * realiza uma operação acumulativa neles, produzindo um único resultado no final.
 * 
 * No exemplo fornecido, temos um array de números: [0, 1, 2, 3, 4, 11, 13, 10, 17]. Queremos calcular 
 * a soma de todos esses números usando reduce.
 * 
 * A função reduce é chamada no array numbers. Ela recebe dois parâmetros: uma função e um valor inicial 
 * para a variável acumulativa.
 * 
 * A função passada para reduce tem dois parâmetros, number e acumulative. Ela representa cada elemento 
 * do array atual e o valor acumulativo até o momento.
 * 
 * A operação definida na função é number + acumulative. Isso significa que estamos adicionando o elemento 
 * atual do array (number) ao valor acumulativo (acumulative). A cada iteração, o resultado da operação é 
 * armazenado como novo valor acumulativo para a próxima iteração.
 * 
 * No exemplo, o valor inicial do acumulador é 0, conforme especificado no segundo argumento da função reduce.
 * 
 * Então, a função reduce percorre todos os elementos do array, aplicando a operação acumulativa. 
 * No final, retorna o valor acumulado como resultado.
 * 
 * No caso específico do exemplo, o resultado impresso é 61. Isso ocorre porque a função reduce soma 
 * todos os números do array: 0 + 1 + 2 + 3 + 4 + 11 + 13 + 10 + 17 = 61.
 * 
 * Em resumo, a função reduce permite percorrer um array e realizar uma operação acumulativa nos seus elementos, reduzindo-os a um único valor no final. No exemplo, usamos reduce para calcular a soma de todos os números do array.
 * 
 */

// FUNÇÕES NO PRÓPRIO OBJETO

/**
 * Podemos adicionar um método a esse objeto fazendo uma das propriedades receber uma função. 
 * A palavra-chave this faz referência ao próprio objeto (como visto no curso de programação orientada a objetos).
 * 
 */


// Criando o objeto com as propriedades já estabelecidas
var user = {
  name: "Antônio", // Propriedade do nome do usuário
  pathPicture: "image-antonio.png", // Caminho o qual guarda a foto de perfil
  bio:
    "I'm a programming enthusiast, without a specific niche, I like everything 😄😄😄", // Bio do perfil
  numberSolvedExercises: 325, // Número de exercícios resolvidos
  shoutName: function () {
    console.log(`Meu nome é ${this.name}`);
  },
};

user.shoutName();