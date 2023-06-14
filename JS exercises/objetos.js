var user = {} // Criando objeto de usuário

// Todo usuário tem o que? Um nome, uma foto de perfil,
// uma bio, número de exercícios resolvidos, etc...

user.name = "Antônio" // Criando uma propriedade 'name' e atribuindo o valor a ela
user.pathPicture = "image-antonio.png" // Propriedade que guarda o caminho da foto de perfil
user.bio = "I'm a programming enthusiast, without a specific niche, I like everything 😄😄😄" // Propriedade da bio do perfil
user.numberSolvedExercises = 325 // Número de exercícios resolvidos

console.log(user)
/* 
Saída:
  {
    name: 'Antônio',
    pathPicture: 'image-antonio.png',
    bio: "I'm a programming enthusiast, without a specific niche, I like everything 😄😄😄
    numberSolvedExercises: 325
  }
*/

// OU

/**
 * // Criando o objeto com as propriedades já estabelecidas
 * 
 * var user = {
 *  name: "Antônio", // Propriedade do nome do usuário
 *  pathPicture: "image-antonio.png", // Caminho o qual guarda a foto de perfil
 *  bio: "I'm a programming enthusiast, without a specific niche, I like everything 😄😄😄", // Bio do perfil
 *  numberSolvedExercises: 325 // Número de exercícios resolvidos
 *  }
 * 
 */

/**
 *  Leitura dinâmica das propriedades
 * 
 *  Em muitas aplicações, nós queremos inicializar o objeto com diversas opções, 
 * e acessar uma por um meio dinâmico e não definido, seja isso por um parâmetro de 
 * função ou com outra funcionalidade. Para isso, podemos utilizar os colchetes [ ] 
 * após o nome da variável com a propriedade a ser lida, com uma verificação se ela 
 * existe ou não.
 * 
 */

// Criando a variável com a propriedade a ser lida
var property = "name";

// Verificando se a propriedade existe
if(user[property] !== undefined) {
  console.log("Exist!");
  // Código da aplicação
}

/**
 *  Com isso, podemos iterar as propriedades do objeto em um for, a partir da mesma 
 * sintaxe de iteração de uma lista ou string, mas trocando o of por in, que irá em 
 * cada execução trazer a propriedade.
 */

// Percorrendo todas as propriedades do objeto 'user'
for(let property in user)
  console.log(user[property]); // Imprimindo os atributos das propriedades

/*
Saída:
  Antônio
  image-antonio.png
  I'm a programming enthusiast, without a specific niche, I like everything 😄😄😄
  325
*/