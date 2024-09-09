/*

1. Acessando Propriedades de Objetos
○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.

*/

let carro = {
  marca: "Chevrolet",
  modelo: "Onix",
  ano: "2019",
  cor: "Branco"

}

for(let propriedade in carro){

  console.log(propriedade + ": " + carro[propriedade])
}

/*
Explicação:

Neste programa criei o objeto "carro" e suas propriedades solicitadas no enunciado em seguida usando um loop for in
para iterar sobre as minhas propriedades aonde a variavel "propriedade" vai receber uma propriedade do objeto "carro"
e por ultimo chamo um console.log com a propriedade e o carro[propriedade] que vai acessar o seu valor atual.

*/