/*

Manipulação de Arrays de Objetos com forEach

8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.

*/

const movies = [
  {title: "Rocky Balboa", director: "John G. Avildsen", year: "1972"},
  {title: "Back to the Future", director: "Robert Zemeckis", year: "1985"},
  {title: "Lord of the Rings", director: "Peter Jackson", year: "2001"},
]

const titleMovies = []
movies.forEach(movie => {
  titleMovies.push(movie.title)
})

console.log(titleMovies)

/*
Explicação:

Neste programa iniciei criando o array dos filmes com seus objetos titulo, diretor e ano do lançamento 
logo abaixo usei forEach para percorer o array e criar um novo que seria o titleMovies contendo apenas os titulos 
dos filmes, usando push adicionei o titulo de cada filme no titleMovie exibindo eles em um console.log

*/