// Sort

/**
 * O método sort() ordena os elementos do próprio array e retorna o array ordenado. 
 * Seu funcionamento pode ser modificado a partir de uma função recebida como parâmetro, 
 * que determinará a condição do processo, isso é importante, pelo fato da ordenação 
 * padrão ser de acordo com a pontuação do código unicode. Ou seja, para ordenar de 
 * forma crescente, precisamos criar uma função da condição desejada. Por enquanto 
 * vamos somente usar ela como exemplo, e no próximo parágrafo explicamos seu funcionamento.
 * 
 */

// Criando o array de números
let numbers = [26, 12, 2003, 4, 5, 19, 234, 1765, 2873];

// Ordenando-os em ordem crescente
numbers.sort((a, b) => a - b);

console.log(numbers); // Imprimindo o resultado

// Saída: [4, 5, 12, 19, 26, 234, 1765, 2003, 2873]

/**
 * Como podemos ver, utilizamos uma arrow function que recebe dois parâmetros, 
 * que são os elementos que vão ser comparados. E o seu retorno é a diferença 
 * entre os termos. Mas por que é assim?
 * 
 * É dessa forma porque o array será ordenado de acordo com o sinal do retorno, ou seja, 
 * irá mudar a posição dos elementos da lista de tal forma se o retorno for negativo, 0 ou positivo.
 * 
 * Se o retorno for menor que 0, muda-se o a para um índice anterior a b.
 * Se retornar 0, a e b não mudam em relação um ao outro.
 * Se o retorno é maior que 0, coloca b um índice anterior a a.
 * Caso o retorno for diferente de inteiro, ou seja, um resultado inconsistente, a ordenação é indefinida.
 * 
 * Assim, conseguimos ver o funcionamento do método de ordenação, possibilitando realizar 
 * mudanças na função para ordenar de acordo com as necessidades. Vamos ver mais alguns exemplos.
 */

// Criando o array de números
 numbers = [26, 12, 2003, 4, 5, 19, 234, 1765, 2873];

// Criando array de nomes
let names = ["Antônio", "Liélia", "John", "Pedro", "Amanda", "Anthony", "Thiago", "Lara"];

// Criando array de objetos carros
let cars = [
  {
    brand: 'BMW',
    year: 2017,
  },
  {
    brand: 'Ferrari',
    year: 2019,
  },
  {
    brand: 'Volkswagen',
    year: 2015,
  }
];

// Ordenando os números em ordem decrescente
numbers.sort((a, b) => b - a);
console.log(numbers); // Imprimindo o resultado
// Impressão: [2873, 2003, 1765, 234, 26, 19, 12, 5, 4]

// Ordenando os nomes em ordem crescente
names.sort((a, b) => {
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
});
console.log(names); // Imprimindo o resultado
// Impressão: ['Amanda', 'Anthony', 'Antônio', 'John', 'Lara', 'Liélia', 'Pedro', 'Thiago']

// Ordenando os nomes em ordem decrescente
names.sort((a, b) => {
  if(a > b) return -1;
  if(a < b) return 1;
  return 0;
});
console.log(names); // Imprimindo o resultado
// Impressão: ['Thiago', 'Pedro', 'Liélia', 'Lara', 'John', 'Antônio', 'Anthony', 'Amanda']

// Ordenando os carros em ordem decrescente em relação ao ano
cars.sort((a, b) => b.year - a.year);
console.log(cars); // Imprimindo o resultado
/* 
[
  { brand: 'Ferrari', year: 2019 },
  { brand: 'BMW', year: 2017 },
  { brand: 'Volkswagen', year: 2015 }
]
*/
