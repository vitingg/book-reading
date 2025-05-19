import { BookCard } from "./book-card";
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
  userRole: "EMPLOYEE" | "MANAGER";
};

export function ManagerBooks({ refresh, showId, userRole }: ManagerBookProps) {
  const [books, setBooks] = useState<Book[]>([]);

  async function handleAddToProfile(bookId: number) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = Number(user.id)

    if (!userId) {
      alert("Usuário não identificado.");
      return;
    }
    
    try {
      await api.post("/api/read", {
        userId: userId,
        bookId: bookId
      });
      alert("Livro adicionado ao seu perfil com sucesso!");
    } catch (error) {
      console.log("Erro ao adicionar livro ao perfil:", error);
      alert("Erro ao adicionar livro ao perfil.");
    }
  }

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
          onAddToProfile={
            userRole === "EMPLOYEE" ? () => handleAddToProfile(book.id) : undefined
          }
        />
      ))}
    </div>
  );
}
