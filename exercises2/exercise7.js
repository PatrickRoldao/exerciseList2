/*

Manipulação de Arrays de Objetos com forEach

7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.

*/

const products = [
  {name: "Food", price: 100, discount: 0},
  {name: "Xbox One", price: 3000, discount: 0},
  {name: "Geladeira", price: 3500, discount: 0}
]

products.forEach(product => {
  product.discount = product.price * 0.30

  const newPrice = product.price - product.discount

  console.log(`Produto: ${product.name}, Preço Original: R$${product.price}, Preço com desconto: R$${newPrice.toFixed(2)}`)

})

/*
Explicação:

Neste programa eu iniciei criando o array dos produtos com suas propriedades nome, preço e desconto, abaixo criei a lógica de forEach que vai percorrer os meus objetos e para cada produto ele vai calcular - 30% de desconto, este novo preço sera apresentado pela variavel newPrice em um console.log

*/