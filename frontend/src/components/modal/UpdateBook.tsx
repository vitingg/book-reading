import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

type UpdateBookProps = {
  onClose: () => void;
  onUpdate: () => void;
};

type FormDate = {
  id: number;
  title: string;
  author: string;
  description: string;
};

export function UpdateBook({ onClose }: UpdateBookProps) {
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
      await api.put(`/api/${date.id}`, {
        title: date.title,
        author: date.author,
        description: date.description,
      });
      alert("Livro atualizado com sucesso!");
      onClose();
    } catch (error) {
      alert("Erro ao atualizar o livro.");
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
      p-8 rounded-2xl shadow-lg w-full max-w-2xl
      relative z-10"
      >
        <h2
          className="text-2xl font-bold mb-6 text-center
        text-gray-900 dark:text-gray-100"
        >
          Atualizar livros
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

              <input
                type="text"
                defaultValue={bookData?.title || ""}
                {...register("title")}
                className="border p-2 rounded-md w-full"
              />

              <input
                type="text"
                defaultValue={bookData?.author || ""}
                {...register("author")}
                className="border p-2 rounded-md w-full"
              />

              <textarea
                defaultValue={bookData?.description || ""}
                {...register("description")}
                className="border p-2 rounded-md w-full h-32"
              />

              <button
                className="mt-6 w-full py-2 bg-green-600 
              hover:bg-green-700 text-white rounded-lg"
                type="submit"
              >
                Atualizar
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
