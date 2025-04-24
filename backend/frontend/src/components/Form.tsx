export function Form() {
  return (
      <div className="flex flex-col items-center justify-center h-full overflow-hidden gap-3">

        <input className="text-black bg-gray-200 h-16 w-100 p-7
        border-gray-400 border rounded-lg hover:border-gray-500 
        hover:opacity-40 focus:outline-gray-500
        text-xl" 
        type="text" placeholder="Insira seu nome!"/>

        <input className="text-black bg-gray-200 h-16 w-100 
        border-gray-400 border rounded-lg p-7 hover:border-gray-500 
        hover:opacity-40 focus:outline-gray-500
        text-xl " 
        type="text" placeholder="Insira seu cargo!"/>

        <button className="text-black border-gray-400 text-xl 
        bg-gray-200 border rounded-lg p-3 h-16 w-80
        hover:border-gray-500 hover:opacity-40"
        >submit
        </button>
      </div>
  )
}