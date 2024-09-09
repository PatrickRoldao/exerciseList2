/*

Combinação de Estruturas

11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.

*/

const order = [
  {customer: "Patrick", product: "smartphone", amount: 1},
  {customer: "Lucas", product: "refrigerator", amount: 3},
  {customer: "Carol", product: "television", amount: 6}
]

let quantCustomer = {}

order.forEach(arrow => {
  if(quantCustomer[arrow.customer]){

    quantCustomer[arrow.customer] += arrow.amount
  } else {
    quantCustomer[arrow.customer] = arrow.amount
  }
})

console.log(quantCustomer)

/*
Explicação:

Neste programa iniciei criando o array dos pedidos que vai guardar os objetos solicitados pelo enunciado, 
como o nome do cliente, produto e sua quantidade, em seguida uma variavel para contar a quantidade por cada cliente, 
um forEach com arrow function acompanhado de um if else que vai verificar se o cliente já existe no objeto ou não 
e no final chamei um console.log para apresentar tudo.

*/