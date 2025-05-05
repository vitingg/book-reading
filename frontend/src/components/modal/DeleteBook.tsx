import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

type DeleteBookProps = {
  onClose: () => void;
  onDelete: () => void;
};

type FormDate = {
  id: number;
  title: string;
  author: string;
  description: string;
};

export function DeleteBook({ onClose }: DeleteBookProps) {
  const [bookData, setBookData] = useState<FormDate | null>(null);
  const { register, handleSubmit, watch } = useForm<FormDate>();

  const id = watch("id");

  useEffect(() => {
    if (id) {
      api
        .get(`/api/${id}`)
        .then((response) => {
          setBookData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setBookData(null);
    }
  }, [id]);

  const onSubmit = async (date: FormDate) => {
    try {
      await api.delete(`/api/${date.id}`);
      alert("Livro deletado com sucesso!");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex 
    items-center justify-center z-50"
    >
      <div
        className="absolute inset-0 
      backdrop-blur-md"
      ></div>

      <div
        className="bg-white dark:bg-gray-800 
      p-8 rounded-2xl shadow-lg w-full max-w-xl
      relative z-10"
      >
        <h2
          className="text-2xl font-bold mb-6 text-center
        text-gray-900 dark:text-gray-100"
        >
          Deletar Livro
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
            >
              <input
                type="number"
                placeholder="Id do livro"
                className="border border-red-500 rounded-md 
                    p-4 focus:border-indigo-500 focus:border"
                {...register("id", { valueAsNumber: true })}
              />

              <div className="flex flex-col gap-4 mt-4">
                <div className="border p-4 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-1">
                    Title
                  </p>
                  <p className="text-lg">{bookData?.title || "—"}</p>
                </div>

                <div className="border p-4 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-1">
                    Autor
                  </p>
                  <p className="text-lg">{bookData?.author || "—"}</p>
                </div>

                <div className="border p-4 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-1">
                    Descrição
                  </p>
                  <p className="text-lg whitespace-pre-line">
                    {bookData?.description || "—"}
                  </p>
                </div>
              </div>

              <button
                className="mt-6 w-full py-2 bg-red-600 
                  hover:bg-red-700 text-white rounded-lg"
                type="submit"
              >
                Deletar
              </button>
            </form>
          </div>
        </div>

        <button
          className="mt-6 w-full py-2 bg-blue-600 
        hover:bg-blue-700 text-white rounded-lg"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
