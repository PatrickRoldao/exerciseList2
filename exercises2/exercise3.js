/*

3. Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.

*/

const produto = {
  preco: 10,
  quantidade: 10,
  validade: 2024,
  tamanho: 10

}

function filtroPropriedades(objeto, valorMinimo){
  const resultado = {}

  for (let chave in objeto){
    if(objeto[chave] > valorMinimo){
      resultado[chave] = objeto[chave]
    }
  }

  return resultado

}

const produtoFiltrado = filtroPropriedades(produto, 11)

console.log(produtoFiltrado)

/*
Explicação:

Neste programa criei um objeto chamado "produto" com suas propriedades em seguida uma function para filtrar estas
propriedades do objeto baseado em um valor minimo que ira armazenar o novo objeto as propriedades filtradas.Em seguida
fiz um loop de for in para percorrer as propriedades verificando o valor e adicionando a propriedade a um novo objeto 
com um return no final chamando este resultado, apresentando tudo em um console.log

*/