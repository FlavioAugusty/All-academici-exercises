// Filter

/**
 * O método filter() é bem simples. Ele cria um novo array com todos os elementos que 
 * passaram na condição da função fornecida. Portanto, toda a função que ele receber 
 * tem que retornar um valor booleano. A função de parâmetro recebe três elementos:
 * 
 * o valor atual.
 * seu índice.
 * o array o qual faz parte.
 * 
 * Dessa forma, percebe-se a grande utilidade desse método, podendo ser usado em diversos casos. 
 * Vamos ver com o exemplo da aula sobre funções, no método map(). O objetivo era, todo valor 
 * que é maior que 10, mude-o para 10. Agora vamos mudar um pouco a lógica, dizendo: todo valor 
 * que é maior que 10, tire-o da lista.
 * 
 */

// Criando uma lista de números
let numbers = [111, 22, 3, 10, 78, 34, 18, 8, 3];

// Filtrando a lista tirando todos os valores maiores que 10
// A função recebe os três valores, entretanto, podemos pegar somente o primeiro (valor atual), 
// por ser o único a ser utilizado
let filteredNumbers = numbers.filter(value => value <= 10);

console.log(filteredNumbers); // Imprimindo o array filtrado

// Impressão: [ 3, 10, 8, 3 ]