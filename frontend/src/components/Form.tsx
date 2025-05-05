import { useState } from "react";

type FormProps = {
  showRoleField?: boolean;
  onSubmit: (data: { name: string; password: string; role?: string }) => void;
};

export function Form({ showRoleField = false, onSubmit }: FormProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit({ name, password, role });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center 
      h-full gap-3"
    >
      <input
        className="w-80 h-12 px-4 text-lg text-black bg-gray-100 
        border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        focus:border-transparent transition-all"
        type="text"
        placeholder="Insira seu nome!"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-80 h-12 px-4 text-lg text-black bg-gray-100 
        border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        focus:border-transparent transition-all"
        type="password"
        placeholder="Insira sua senha!"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {showRoleField && (
        <input
          className="w-80 h-12 px-4 text-lg text-black bg-gray-100 
          border border-gray-300 rounded-md  
          focus:outline-none focus:ring-2 focus:ring-blue-400 
          transition-all "
          type="text"
          placeholder="Insira seu cargo!"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      )}

      <button
        className="w-80 h-12 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-all"
        type="submit"
      >
        Entrar!
      </button>
    </form>
  );
}
