import { useState } from "react";
import johndoe from "../../assets/johndoe.jpeg";

type OpenProfileProps = {
  onClose: () => void;
  onOpenProfile: () => void;
};

export function UserProfile({ onClose, onOpenProfile }: OpenProfileProps) {
  onOpenProfile();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user.name;
  const userRole = user.role;
  const role =
    userRole.charAt(0).toUpperCase() + userRole.slice(1).toLowerCase();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 backdrop-blur-md"></div>

      <div className="z-20 flex items-center flex-col justify-center text-gray-800 dark:text-white gap-2">
        <div className="border border-gray-500 flex min-h-10/12 max-h-screen overflow-y-auto dark:bg-gray-800 rounded-3xl">
          <div className="w-2/5 flex flex-col items-center justify-center">
            <div className="border border-gray-500 flex flex-col items-center justify-center dark:bg-gray-800 rounded-2xl">
              <img
                src={johndoe}
                alt=""
                className="w-30 h-30 rounded-full mt-12 ml-8 mr-8 flex items-center justify-center border border-black  "
              />

              <div className="flex flex-col justify-center ml-4 mr-4">
                <h2 className="mt-10 text-2xl">Seu usuário: {userName}</h2>
                <h2 className="mt-2 text-2xl mb-8">User Role: {role}</h2>
              </div>
            </div>
          </div>

          <div className="w-px bg-black dark:bg-gray-500 h-5/5 my-auto"></div>

          <div className="w-3/5 flex items-center justify-center">
            <div className="w-[30rem] h-80 m-12 border border-gray-500 rounded-4xl overflow-y-auto scroll-invisible">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>

                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>

                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>

                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>

                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>

                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>

                <div className="flex flex-col m-1 border border-gray-500 rounded-3xl">
                  <div className="m-2">
                    <p className="mb-2">Titulo do livro</p>
                    <p className="mb-2">Author do livro</p>
                    <p>Livro dia: 00/00/0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="" onClick={() => onClose()}>
          Clique aqui para fechar!
        </button>
      </div>
    </div>
  );
}
