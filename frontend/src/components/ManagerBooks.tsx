import {BookCard} from './BookCard';

export function ManagerBooks() {
  const books = [
    {id: 1, title: "Livro 1", author: "Antoine", description: "O pequeno e ainda era principe", releaseDate: "1943"},
    {id: 2, title: "Livro 2", author: "Antoina", description: "Teste", releaseDate: "1945"},
    {id: 1, title: "Livro 3", author: "Antoine", description: "Teste", releaseDate: "1943"},
    {id: 2, title: "Livro 4", author: "Antoina", description: "Teste", releaseDate: "1945"},
    {id: 1, title: "Livro 5", author: "Antoine", description: "Teste", releaseDate: "1943"},
    {id: 2, title: "Livro 6", author: "Antoina", description: "Teste", releaseDate: "1945"},
    {id: 1, title: "Livro 7", author: "Antoine", description: "Teste", releaseDate: "1943"},
    {id: 2, title: "Livro 8", author: "Antoina", description: "Teste", releaseDate: "1945"},

    
  ]

  const handleEdit = (bookId: number) => {
    console.log('Edit book', bookId);
  };

  const handleDelete = (bookId: number) => {
    console.log('Delete book', bookId);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          releaseDate={book.releaseDate}
          onEdit={() => handleEdit(book.id)}
          onDelete={() => handleDelete(book.id)}
        />
      ))}
    </div>
  )
}