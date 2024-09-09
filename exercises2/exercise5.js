/*

Manipulação de Arrays de Objetos com for of

5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.

*/

const alunos = [
  {nome: "Frodo", nota1: 10, nota2: 9},
  {nome: "Sam", nota1: 10, nota2: 9},
  {nome: "Aragorn", nota1: 10, nota2: 9}
]

for(let aluno of alunos){
  const media = (aluno.nota1 + aluno.nota2) / 2

  console.log(`Nome: ${aluno.nome} - Média: ${media}`)
}

/*
Explicação:

Neste programa criei o objeto alunos com seus respectivos nomes e notas, em seguida o loop for of
com uma const media embaixo somando as duas notas e as dividindo por 2 e para imprimir tudo na tela um console.log 
apresentando o nome do aluno e a sua média.

*/