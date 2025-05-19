import { useEffect, useState } from "react";
import noPhoto from "../../assets/noPhoto.png";
import { api } from "../../services/api";
import { X } from "lucide-react";

type OpenProfileProps = {
  onClose: () => void;
  onOpenProfile: () => void;
};

type Book = {
  id: number;
  title: string;
  author: string;
  releaseDate: string;
};

type ReadBookEntry = {
  id: number;
  userId: number;
  bookId: number;
  createdAt: string;
};

export function UserProfile({ onClose, onOpenProfile }: OpenProfileProps) {
  const [readBooks, setReadBooks] = useState<Book[]>([]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user.name;
  const userId = Number(user.id);

  useEffect(() => {
    onOpenProfile();
    fetchReadBooks();
  }, []);

  async function fetchReadBooks() {
    try {
      const response = await api.get(`/api/read/user/${userId}`);
      const allBooksResponse = await api.get(`/api`);

      const readBooksData = response.data
        .map((entry: ReadBookEntry) => {
          const book = allBooksResponse.data.find(
            (b: Book) => b.id === entry.bookId
          );
          return book ? { ...book, createdAt: entry.createdAt } : null;
        })
        .filter((book: Book | null): book is Book => book !== null);

      setReadBooks(readBooksData);
    } catch (error) {
      console.error("Erro ao buscar livros lidos.", error);
      alert("Erro ao buscar livros lidos.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Botão pra fechar o modal */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-red-500 hover:text-red-700 transition"
        aria-label="Fechar perfil"
      >
        <X size={30} />
      </button>
      {/* Modal */}
      <div className="relative bg-white text-black dark:bg-gray-900 dark:text-white rounded-3xl p-8 min-w-3/4 max-w-7xl h-[70vh] flex gap-8 shadow-xl">
        {/* Peril */}
        <div className="flex flex-col items-center gap-4 w-1/3 border-r border-gray-700 pr-4">
          <img
            src={noPhoto}
            alt="Foto do usuário"
            className="w-32 h-32 rounded-full border-2 border-gray-700"
          />
          <div className="text-center">
            <p className="text-2xl font-semibold">{userName}</p>
            <p className="mt-4 text-xl font-semibold">
              Livros lidos: {readBooks.length}
            </p>
          </div>
        </div>

        {/* Livros do usuário */}
        <div className="w-2/3 overflow-y-auto max-h-[60vh] scroll-invisible">
          {readBooks.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {readBooks.map((book) => (
                <div
                  key={book.id}
                  className="border border-gray-700 rounded-xl p-4 dark:bg-gray-800 hover:bg-gray-700 transition"
                >
                  <p className="text-lg font-medium">{book.title}</p>
                  <p className="text-sm opacity-80">{book.author}</p>
                  <p className="text-xs opacity-60 mt-2">
                    Lançado em:{" "}
                    {new Date(book.releaseDate).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm opacity-60">
              Nenhum livro lido ainda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
