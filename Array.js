/*

Array

Estrutura de Dados

Dentro do array pode guardar tudo separado por vírgula.

*/

/* Exemplo - 1

const users = [ {
    nome: "Edmar",
    idade: 38,
    nomeDoConjuge: null,
    id: null
}, 

{
    nome: "Carla",
    idade: 18,
    nomeDoConjuge: null,
    id: null
}

]

console.log(users)

*/

/* No array começa a contar pela posição 0 - 1 etc. */
const numbers = [20, 30, 497]

console.log(numbers[2])

const users = [
    { name: 'Edmar', age: 38 },
    { name: 'Carla', age: 18 },
]

/* Para alterar algo no array segue o exemplo abaixo */

users[1].name = 'Aline'

console.log(users)

console.log(users[0].age)
