/*

Combinação de Estruturas

10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.

*/

const sales = [
  {product: "smartphone", amount: 1, price: 3000},
  {product: "refrigerator", amount: 2, price: 4000},
  {product: "television", amount: 3, price: 5000}
]

let salesTotal = 0

sales.forEach(arrow => {
  const priceTotal = arrow.amount * arrow.price
  salesTotal += priceTotal
})

console.log(`Valor total das vendas foi de: R$${salesTotal}`)

/*
Explicação:

Neste programa iniciei criando o array sales que vai conter os objetos solicitados, em seguida declarei a variavel 
salesTotal iniciando em 0, depois fiz o meu forEach com arrow function para chegar ao resultado total dos valores 
exibido em um console.log.
*/