/*

Combinação de Estruturas

14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.

*/

const empresa = {
  departamentos: [
      {
          nome: 'Vendas',  
          funcionarios: ['Carol', 'Roger']  
      },
      {
          nome: 'TI',
          funcionarios: ['Patrick', 'Everton']
      }
  ]
};

for (let i = 0; i < empresa.departamentos.length; i++) {
  let departamento = empresa.departamentos[i];  

  for (let j = 0; j < departamento.funcionarios.length; j++) {
      let funcionario = departamento.funcionarios[j];  
      console.log(`${funcionario} trabalha no departamento de ${departamento.nome}`);
  }
}

/*
Explicação:

Neste programa iniciei criando o objeto empresa com duas propriedades que são os departamentos que são uma lista 
de array, em seguida fiz o meu primeiro loop for para percorrer cada departamento da lista departamentos o segundo 
loop for para percorrer a lista de funcionarios, definindo que a variavel funcionário vai guardar o nome do funcionário
apresentando em um console.log o nome do funcionario e qual o seu departamento.

*/