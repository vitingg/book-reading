import React from "react";

interface BookProps {
  title: string
  author: string
  description: string
  releaseDate: string
  onAddToProfile?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

const BookCard: React.FC<BookProps> = ({
  title,
  author,
  description,
  releaseDate,
  onAddToProfile,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full flex flex-col justify-start h-full">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">{title}</h1>
      <p className="text-gray-600 dark:text-gray-300">Author: {author}</p>
      <p className="text-gray-600 dark:text-gray-300">Release Date: {releaseDate}</p>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      {onAddToProfile && (
        <button
        onClick={onAddToProfile}
        className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
        >
          Marcar como lido!
        </button>
      )}
      {onEdit && onDelete &&(
        <div className="mt-2 flex space-x-2">
          <button
          onClick={onEdit}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Editar
          </button>
          <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Deletar
          </button>
        </div>
      )}
      
    </div>
  )
}

export {BookCard}