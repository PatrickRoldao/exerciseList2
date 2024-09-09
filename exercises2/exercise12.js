/*

Combinação de Estruturas

12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

*/

let stock = [
  {product: "shoe", amount: 40, minimum: 50},
  {product: "shirt", amount: 60, minimum: 10},
  {product: "bag", amount: 20, minimum: 30}
]

stock.forEach(item => {
  if(item.amount < item.minimum){
    item.amount *= 2
  }
})

console.log(stock)

/*
Explicação:

Este programa iniciei criando o array stock que vai conter os meus objetos em seguida usei o forEach com uma arrow 
function para duplicar a quantidade dos produtos abaixo do minimo permitido em estoque exibindo o resultando em um 
console.log

*/