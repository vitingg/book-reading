import { useEffect, useState } from "react";
import johndoe from "../../assets/johndoe.jpeg";
import { api } from "../../services/api";

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
  const userRole = user.role;
  const role =
    userRole.charAt(0).toUpperCase() + userRole.slice(1).toLowerCase();

  useEffect(() => {
    onOpenProfile();
    fetchReadBooks();
  }, []);

  async function fetchReadBooks() {
    try {
      const response = await api.get(`/api/read/user/${userId}`);
      const allBooksResponse = await api.get(`/api`); // Busca todos os livros disponíveis
  
      // Associa os livros lidos com os detalhes completos
      const readBooksData = response.data.map((entry: ReadBookEntry) => {
        const book = allBooksResponse.data.find((b: Book) => b.id === entry.bookId);
        return book ? { ...book, createdAt: entry.createdAt } : null;
      }).filter((book : Book) => book !== null);
  
      setReadBooks(readBooksData);
    } catch (error) {
      alert("Erro ao buscar livros lidos.");
      console.log(error);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 backdrop-blur-md"></div>

      <div className="z-20 flex items-center flex-col justify-center text-gray-800 dark:text-white gap-2">
        <div className="border border-gray-500 flex min-h-11/12 max-h-11/12 overflow-y-auto dark:bg-gray-800 rounded-3xl">
          <div className="w-3/5 flex flex-col items-center justify-center">
            <div className="border border-gray-500 flex flex-col items-center justify-center dark:bg-gray-800 rounded-2xl">
              <img
                src={johndoe}
                alt=""
                className="w-28 h-28 rounded-full m-8 flex items-center justify-center border border-black  "
              />

              <div className="flex flex-col justify-center ml-4 mr-4">
                <h2 className="text-3xl">Usuário: {userName}</h2>
                <h2 className="mt-2 text-4xl mb-8">Cargo: {role}</h2>
              </div>
            </div>
          </div>

          <div className="w-px bg-black dark:bg-gray-500 h-5/5 my-auto"></div>

          <div className="w-3/5 flex items-center justify-center">
            <div className="w-[40rem] h-90 m-12 border border-gray-500 rounded-4xl overflow-y-auto scroll-invisible">
              <div className="grid grid-cols-2 gap-4 p-4">
                {readBooks.map((book) => (
                  <div
                    key={book.id}
                    className="flex flex-col m-1 border border-gray-500 rounded-3xl"
                  >
                    <div className="m-4">
                      <p className="mb-2 text-xl">{book.title}</p>
                      <p className="mb-2 text-md">{book.author}</p>
                      <p className="">
                        Data de lançamento no site:{" "}
                        {new Date(book.releaseDate).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                ))}

                {readBooks.length === 0 && (
                  <p className="col-span-2 text-center text-lg opacity-60">
                    Nenhum livro lido ainda!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-2xl text-red-500 font-medium border p-3 rounded-xl bg-gray-800 cursor-pointer hover:opacity-40"
          onClick={() => onClose()}
        >
          Clique aqui para fechar!
        </button>
      </div>
    </div>
  );
}
