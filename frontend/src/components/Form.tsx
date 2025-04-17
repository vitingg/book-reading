export function Form() {
    return (
        <div className="flex items-center justify-center h-screen bg-neutral-950">
  <form className="bg-red-300 p-6 border border-none rounded-lg w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
    <input
      type="text"
      placeholder="Username"
      className="w-full mb-3 p-2 border border-gray-300 rounded"
    />
    <input
      type="text"
      placeholder="Put your role here"
      className="w-full mb-4 p-2 border border-gray-300 rounded"
    />
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition">
      Sign In
    </button>
  </form>
</div>
    )
}