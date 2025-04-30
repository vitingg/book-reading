import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";


type FormDate = {
  bookCape: FileList
  title: string
  author: string
  description: string
} 

type CreateBookProps = {
  onClose: () => void;
  onBookCreated: () => void
}


export function CreateBook({ onClose, onBookCreated}: CreateBookProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const { register, handleSubmit, watch, reset } = useForm<FormDate>()
  const selectedImage = watch("bookCape")

  useEffect(() => {
  if (selectedImage && selectedImage.length > 0){
    const file = selectedImage[0]
    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)

    return () => URL.revokeObjectURL(previewUrl)
  }    
  }, [selectedImage])



  const onSubmit = async (date: FormDate) => {
    try {
      let imageUrl = ""
      
      if(date.bookCape && date.bookCape.length > 0) {
        const imageFile = date.bookCape[0]
        const formData = new FormData()

        formData.append("image", imageFile)

        const uploadResponse = await api.post("/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        imageUrl = uploadResponse.data.imageUrl
      }

      await api.post("/api", {
        title: date.title,
        author: date.author,
        description: date.description,
        coverImageUrl: imageUrl
      })

      onBookCreated()
      reset()
      onClose()

    } catch (error) {
      console.log("este erro esta vindo da função onSubmit: ", error)
      alert("Erro ao criar livro!")
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
            <div>
              <label 
                htmlFor="bookCape" 
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
              id="bookCape"
              type="file" 
              accept="image/*"
              {...register("bookCape", {required: false})}
              
              className="border border-red-500 rounded-md 
              p-4 focus:border-indigo-500 sr-only"
              />
            </div>

            <div className="flex flex-col gap-4">
              <form className="flex flex-col gap-4" 
              onSubmit={handleSubmit(onSubmit, 
              (error) => console.log(error))}>
                
                <input 
                  placeholder="Nome do livro"
                  className="border border-red-500 rounded-md 
                  p-4 w-80 focus:border-indigo-500 focus:border"
                  {...register("title")}
                  />

                  <input 
                  placeholder="Autor do livro"
                  className="border border-red-500 rounded-md 
                  p-4 focus:border-indigo-500 focus:border"
                  {...register("author")}
                  />


                  <input 
                  placeholder="Descrição do livro"
                  className="border border-red-500 rounded-md 
                  p-4 focus:border-indigo-500 focus:border"
                  {...register("description")}
                  />

                  <button
                  className="mt-6 w-full py-2 bg-blue-600 
                hover:bg-blue-700 text-white rounded-lg"
                  type="submit">
                  Salvar
                  </button>

                </form>
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
