import { BookCard } from './BookCard';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

type Book = {
  id: number
  title: string
  author: string
  description: string
  releaseDate: string
}

type ManagerBookProps = {
  refresh: boolean
}


export function ManagerBooks({refresh}: ManagerBookProps) {
  const [books, setBooks] = useState<Book[]>([])


  const handleEdit = (bookId: number) => {
    console.log('Edit book', bookId);
  }

  const handleDelete = (bookId: number) => {
    console.log('Delete book', bookId);
  }

  async function fetchBooks() {
    try {
      const response = await api.get("/books")
      setBooks(response.data)
    } catch (error) {
      console.log('Erros ao buscar os livros:', error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [refresh])

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