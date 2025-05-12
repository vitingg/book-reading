import { useEffect } from "react";
import newLogo from "../../assets/Captura_de_tela_2025-05-12_152638-removebg-preview.png";

const mockData = [
  { name: "Julian", booksRead: 12, maxBooks: 12 },
  { name: "Adrian", booksRead: 10, maxBooks: 12 },
  { name: "Peralta", booksRead: 8, maxBooks: 12 },
  { name: "Raymond", booksRead: 6, maxBooks: 12 },
  { name: "Charles", booksRead: 5, maxBooks: 12 },
];

type onRankingProps = {
  onClose: () => void;
  onOpenProfile: () => void;
};

export function Ranking({ onClose, onOpenProfile }: onRankingProps) {
  useEffect(() => {
    onOpenProfile();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 backdrop-blur-md"></div>
      <div className="z-20 flex items-center justify-center h-screen w-full flex-col">
        <div className="border bg-gray-200 dark:bg-gray-800 w-1/2 h-3/4 rounded-xl shadow-lg">
          <div className="flex justify-around items-center">
            <h1 className="font-semibold text-4xl text-black dark:text-white mt-4 text-center">
              Ranking atual!
            </h1>
            <img src={newLogo} className="mt-4 w-20 h-20" alt="" />
          </div>

          <div className="mt-6 ml-16 mr-16 mb-6 space-y-1">
            {mockData.map((user, index) => {
              const progress = (user.booksRead / user.maxBooks) * 100;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between text-left"
                >
                  <div className="w-full">
                    <div className="flex items-center gap-2 text-md font-medium">
                      <span className="ml-4 text-black dark:text-white">
                        {index + 1}º
                      </span>
                      <span className="text-black dark:text-white">
                        {user.name}
                      </span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-700 rounded-full mt-1">
                      <div
                        className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="m-2 text-md font-bold text-gray-700 dark:text-cyan-300">
                      Total de livros lidos: {user.booksRead}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="text-2xl mt-2 text-red-500 font-medium border p-3 rounded-xl bg-gray-200 dark:bg-gray-800 cursor-pointer hover:opacity-40"
          onClick={() => onClose()}
        >
          Clique aqui para fechar!
        </button>
      </div>
    </div>
  );
}
