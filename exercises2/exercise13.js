/*

Combinação de Estruturas

13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.

*/

let shopping = {
  products: [
    {product: "banana", amount: 5, uniPrice: 3},
    {product: "strawberry", amount: 10, uniPrice: 5},
    {product: "watermelon", amount: 7, uniPrice: 7},
  ]
}

let total = 0

shopping.products.forEach(item => {
  total += item.amount * item.uniPrice
})

console.log(`Valor total do carrinho de compras é de: R$${total}`)

/*
Explicação:

Neste programa iniciei criando o array do carrinho de compras que tem a propriedade products, depois declaro a variavel
que vai armazenar o valor total em seguida de um forEach que vai percorrer o array e multiplicar a quantidade pelo 
uniPrice e adicionar esse valor ao total e este será o resultado do valor dos itens adicionados no carrinho apresentados
em um console.log

*/