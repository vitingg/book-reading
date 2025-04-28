import { useState } from "react";


type CreateBookProps = {
  onClose: () => void;
}

export function CreateBook({ onClose }: CreateBookProps) {
  const [preview, setPreview] = useState<string | null>(null)

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (

    <div className="fixed inset-0 flex 
    items-center justify-center z-50">
      <div className="absolute inset-0 
      backdrop-blur-md"></div>

      <div className="bg-white dark:bg-gray-800 
      p-8 rounded-2xl shadow-lg w-full max-w-2xl
      relative z-10">

        <h2 className="text-2xl font-bold mb-6 text-center
        text-gray-900 dark:text-gray-100">
          Adicionar Livro
        </h2>

        <div className="flex justify-around gap-4">

          
            <div className="">
              <label 
                htmlFor="book-cover" 
                className="flex flex-col items-center 
                justify-center border-2 border-dashed
              border-gray-400 rounded-md p-6 w-50 
                h-72 cursor-pointer overflow-hidden">
                {preview ? (
                <img src={preview} alt="capa do livro"
                className="object-contain h-full"/>) : (
                <span className="text-gray-300">Envie a capa do livro!</span>
                )}
              </label>

              <input 
              id="book-cover"
              type="file" 
              accept="image/"
              onChange={handleImageChange}
              placeholder="imagem do livro"
              className="border border-red-500 rounded-md 
              p-4 focus:border-indigo-500 sr-only"/>
            </div>

            <div className="flex flex-col gap-4">
              <input 
                placeholder="Nome do livro"
                className="border border-red-500 rounded-md 
                p-4 w-80 focus:border-indigo-500 focus:border"/>

                <input 
                placeholder="Autor do livro"
                className="border border-red-500 rounded-md 
                p-4 focus:border-indigo-500 focus:border"/>

                <input 
                placeholder="Descrição do livro"
                className="border border-red-500 rounded-md 
                p-4 focus:border-indigo-500 focus:border"/>

                <button
                className="mt-6 w-full py-2 bg-blue-600 
              hover:bg-blue-700 text-white rounded-lg"
                onClick={onClose}>
                Salvar
                </button>
            </div>  

        </div>

        
      
        <button
        className="mt-6 w-full py-2 bg-red-500 
        hover:bg-red-400 text-white rounded-lg"
        onClick={onClose}>
        Fechar
        </button>

      </div>
    </div>
  ) 
}
