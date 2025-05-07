type BookProps = {
  id: number;
  title: string;
  author: string;
  description: string;
  releaseDate: string;
  coverImageUrl?: string;
  onAddToProfile?: () => void;
  showId: boolean
};

export function BookCard({
  id,
  title,
  author,
  description,
  releaseDate,
  coverImageUrl,
  onAddToProfile,
  showId
}: BookProps) {
  return (
    <div
      className="bg-white dark:bg-gray-900 
    shadow-lg rounded-lg p-5 w-full flex flex-row 
    justify-between items-center h-full"
    >
      <div className="w-250">
        <h3
          className="text-3xl font-semibold text-gray-900 
        dark:text-white p-2 pb-4"
        >
          {title}
        </h3>

        {showId && (
          <div className="ml-2 mb-1">id: {id}</div>
        )}
        

        <p className="text-gray-600 dark:text-gray-300 p-1">
          <span className="font-medium"> Author: </span> {author}
        </p>

        <p className="text-gray-600 dark:text-gray-300 p-1">
          <span className="font-medium"> Description: </span> {description}
        </p>

        <p className="text-gray-600 dark:text-gray-300 p-1 pb-4">
          <span className="font-medium"> Release Date: </span>
          {releaseDate}
        </p>

        {onAddToProfile && (
          <button
            onClick={onAddToProfile}
            className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Marcar como lido!
          </button>
        )}
      </div>

      <div>
        <img
          src={coverImageUrl}
          alt={title}
          className="w-50 h-60 object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
