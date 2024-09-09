/*

Manipulação de Arrays de Objetos com for of

6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.

*/

const employee = [
  {name: "Augostinho", position: "Taxista", pay: 5000},
  {name: "Toninho", position: "Lavador", pay: 1500},
  {name: "Pedro", position: "Vendedor", pay: 8000}
]

const miniPay = 2500

for(const x of employee){
  
  if(x.pay > miniPay){
    
    console.log(`Nome: ${x.name}, Cargo: ${x.position}, Salário: ${x.pay}`)
  }
}

/*
Explicação:

Neste programa eu iniciei criando o array dos funcionarios contendo os objetos solicitados, cargo, nome e salário
em seguida fiz uma const para definir qual seria o salário minimo e abaixo um loop for of para percorrer o array
e exibir apenas os funcionarios que tem um salário maior que o minimo definido tudo apresentado em um console.log

*/