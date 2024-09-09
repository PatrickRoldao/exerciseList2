/*

2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

*/

const book = {
  titulo: "Narnia",
  autor: "C. S. Lewis",
  anoPublicacao: 1950,
  genero: "Ficção e Fantasia"
}

let editora = false

for (let zero in book){
  if(zero === "Editora WMF"){
    editora = true

  }
}

if(!editora){
  book.editora = "Editora WMF"

}

console.log(book)

/*
Explicação:

Neste programa criei o objeto livro guardando suas propriedades titulo, autor, anoPublicacao e genero fiz a
variável editora sendo declarando ela como falsa e um loop de for in para verificar se dentro dos meus objetos 
era encontrada a propriedade "editora" e se não tiver que é o caso no meu segundo if será acrescentado 
e por fim imprimido em um console.log.

*/