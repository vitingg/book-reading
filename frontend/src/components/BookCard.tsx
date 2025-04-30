

type BookProps = {
  title: string
  author: string
  description: string
  releaseDate: string
  coverImageUrl?: string
  onAddToProfile?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export function BookCard({title, author, description, 
  releaseDate, coverImageUrl, onAddToProfile, 
  onDelete, onEdit}: BookProps) 
  {
  return (
    <div className="bg-white dark:bg-gray-900 
    shadow-lg rounded-lg p-5 w-full flex flex-row 
    justify-between items-center h-full">


      <div>
        <h3 className="text-3xl font-semibold text-gray-900 
        dark:text-white p-2 pb-4 font-rodrigo"
        >{title}</h3>

        <p className="text-gray-600 dark:text-gray-300 p-1">
          <span className="font-medium"
        > Author: </span> {author}</p>

        <p className="text-gray-600 dark:text-gray-300 p-1">
          <span className="font-medium"
        > Description: </span> {description}</p>

        <p className="text-gray-600 dark:text-gray-300 p-1 pb-4">
          <span className="font-medium"
        > Release Date: </span>{releaseDate}</p>

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

      <div>
        <img src={coverImageUrl} alt={title} 
        className="w-40 h-40 object-cover rounded-lg" />
      </div>
    </div>
  )
}

