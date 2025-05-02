

type DeleteBookProps = {
  onClose: () => void;
  onDelete: () => void
}

export function DeleteBook({ onClose }: DeleteBookProps) {
  

  return (
    <div className="fixed inset-0 flex 
    items-center justify-center z-50">
      <div className="absolute inset-0 
      backdrop-blur-md"></div>

      <div className="bg-white dark:bg-gray-800 
      p-8 rounded-2xl shadow-lg w-full max-w-md 
      relative z-10">

        <h2 className="text-2xl font-bold mb-6 text-center
        text-gray-900 dark:text-gray-100">
          Deletar Livro
        </h2>

        
      
        <button
        className="mt-6 w-full py-2 bg-blue-600 
        hover:bg-blue-700 text-white rounded-lg"
        onClick={onClose}>
        Fechar
        </button>

      </div>
    </div>
  ) 
}
