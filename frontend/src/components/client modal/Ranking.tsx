import { useEffect, useState } from "react";
import newLogo from "../../assets/Captura_de_tela_2025-05-12_152638-removebg-preview.png";
import { api } from "../../services/api";
import { X } from "lucide-react";

type UserRanking = {
  name: string;
  booksRead: number;
};

type onRankingProps = {
  onClose: () => void;
  onOpenProfile: () => void;
};

export function Ranking({ onClose, onOpenProfile }: onRankingProps) {
  const [rankingData, setRankingData] = useState<UserRanking[]>([]);
  const maxBooks = Math.max(...rankingData.map((u) => u.booksRead), 1);

  useEffect(() => {
    onOpenProfile();

    const fetchRanking = async () => {
      try {
        const response = await api.get(
          "http://localhost:3000/api/read/ranking"
        );
        setRankingData(response.data);
      } catch (err) {
        console.error("Erro ao buscar ranking:", err);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="z-20 flex items-center justify-center h-screen w-full flex-col">
        <div className="bg-gray-200 dark:bg-gray-800 w-1/2 h-3/4 rounded-xl shadow-lg">
          <div className="flex justify-around items-center">
            {/* Botão pra fechar o modal */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-red-500 hover:text-red-700 transition"
              aria-label="Fechar perfil"
            >
              <X size={30} />
            </button>

            <h1 className="font-semibold text-4xl text-black dark:text-white mt-4 text-center">
              Ranking atual!
            </h1>
            <img src={newLogo} className="mt-4 w-20 h-20" alt="" />
          </div>

          <div className="mt-6 ml-8 mr-8 mb-6 space-y-1">
            {/* Calculo da barra */}
            {rankingData.slice(0, 5).map((user, index) => {
              const progress = (user.booksRead / maxBooks) * 100;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between text-left"
                >
                  <div className="w-full">
                    <div className="flex items-center gap-2 text-md font-medium">
                      <span className="ml-4 text-2xl mt-4 text-black dark:text-white">
                        {index + 1}º
                      </span>
                      <span className="text-black text-2xl mt-4 dark:text-white">
                        {user.name}
                      </span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-700 rounded-full mt-1">
                      <div
                        className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="m-2 text-xl text-md font-bold text-gray-700 dark:text-cyan-300">
                      Total de livros lidos: {user.booksRead}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
