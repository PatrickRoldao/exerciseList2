/*

Manipulação de Arrays de Objetos com forEach

9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.

*/

const customer = [
  {name: "Lucas", age: 23, city: "Porto Alegre"},
  {name: "Patrick", age: 31, city: "Santa Maria"},
  {name: "Carol", age: 23, city: "Brasilia"}
]

let counter = 0

customer.forEach(arrow => {
  if(arrow.age > 30){
    counter++
  }})

  console.log(`Número de clientes com mais de 30 anos: ${counter}`)

/*
Explicação:

Neste programa iniciei criando o Array clientes aonde vão ser guardado os objetos solicitados, como nome, idade 
e cidade, em seguida criei um let contador, começando em 0 que vai ser incrementado logo quando o meu forEach percorrer
esse array e identificar os clientes que tem mais de 30 anos, por ultimo apresentei em um console.log chamando a 
variavel contador.

*/