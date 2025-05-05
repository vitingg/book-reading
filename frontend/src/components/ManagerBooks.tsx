import { BookCard } from "./BookCard";
import { useEffect, useState } from "react";
import { api } from "../services/api";

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  releaseDate: string;
  coverImageUrl?: string;
};

type ManagerBookProps = {
  refresh: boolean;
  showId: boolean
};

export function ManagerBooks({ refresh, showId }: ManagerBookProps) {
  const [books, setBooks] = useState<Book[]>([]);

  async function fetchBooks() {
    try {
      const response = await api.get("/api");
      setBooks(response.data);
    } catch (error) {
      console.log("Erros ao buscar os livros:", error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, [refresh]);

  return (
    <div className="flex flex-wrap gap-4">
      {books.map((book) => (
        <BookCard
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          releaseDate={new Date(book.releaseDate).toLocaleDateString("pt-BR")}
          coverImageUrl={book.coverImageUrl}
          showId={showId}
        />
      ))}
    </div>
  );
}
