import { useState } from "react";
import { api } from "../../services/api";
import { AxiosError } from "axios";

type CreateBookProps = {
  onClose: () => void;
  onBookCreated: () => void
}


export function CreateBook({ onClose, onBookCreated}: CreateBookProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [releaseDate, setReleaseDate] = useState("")
  const [image, setImage] = useState<File | null>(null)


  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      };
      reader.readAsDataURL(file)
      setImage(file)
    }
  }

  async function handleSave() {
    try {
      const formData = new FormData()

      formData.append("title", title)
      formData.append("author", author)
      formData.append("description", description)
      formData.append("releaseDate", releaseDate)

      if(image) {
        formData.append("coverImage", image)
      }

      await api.post("/api", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      onBookCreated()
      onClose()
      
    } catch (error) {
      if (error instanceof AxiosError){
        console.error("Erro na requisição:", error.response?.data);
        console.error("Status do erro:", error.response?.status);
        console.error("Detalhes:", error.response?.headers);
      } else {
        console.error("Erro desconhecido:", error);
      }
      
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
                p-4 w-80 focus:border-indigo-500 focus:border"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                placeholder="Autor do livro"
                className="border border-red-500 rounded-md 
                p-4 focus:border-indigo-500 focus:border"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />


                <input 
                placeholder="Descrição do livro"
                className="border border-red-500 rounded-md 
                p-4 focus:border-indigo-500 focus:border"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />

              <input 
                type="date"
                placeholder="Data de lançamento"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                className="border border-red-500 rounded-md 
                p-4 w-80 focus:border-indigo-500 focus:border"
                />

                <button
                className="mt-6 w-full py-2 bg-blue-600 
              hover:bg-blue-700 text-white rounded-lg"
                onClick={handleSave}>
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
