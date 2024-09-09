/*

Combinação de Estruturas

15. Filtrando e Somando Valores
○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.

*/

const transaction = [
  {type: "Entrada", value: 50},
  {type: "Saida", value: 500},
  {type: "Entrada", value: 10},
  {type: "Saida", value: 200},
]

let balance = 0

transaction.forEach(arrow => {
  if (arrow.type === "Entrada"){
   
    balance += arrow.value

  } else if (arrow.type === "Saida"){
    
    balance -= arrow.value
  }
})

console.log("O saldo final é: R$", balance)

/*

Explicação:

Neste programa, primeiramente iniciei definindo o meu array de transações com tipo e valor, em seguida um forEach para 
calcular o saldo final, somando os valores das transações


*/