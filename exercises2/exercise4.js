/*

Manipulação de Arrays de Objetos com for of

4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.

*/

const person = [
  {nome: "Frodo", idade: 20, cidade: "Condado"},
  {nome: "Sam", idade:20, cidade: "Condado"},
  {nome: "Aragorn", idade:40, cidade: "Elrond"}
]

for (let people of person){
  console.log(`Nome: ${people.nome}, Idade: ${people.idade}, Cidade: ${people.cidade}`)
}

/*
Explicação:

Neste programa criei um objeto chamado person que contem os objetos solicitados pelo enunciado, nome, idade e cidade em seguida um loop for of para percorrer os objetos que estão dentro do array 
aprensentando eles em um console.log.


*/