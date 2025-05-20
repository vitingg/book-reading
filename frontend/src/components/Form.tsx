import { useState } from "react";
import { loginSchema } from "../schemas/login-schema";
import { signupSchema } from "../schemas/singup-schema";
import { z } from "zod";

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

    try {
      const parsedData = showRoleField
        ? signupSchema.parse({ name, password, role })
        : loginSchema.parse({ name, password });

      onSubmit(parsedData);
    } catch (error) {
      if (error instanceof z.ZodError) console.log(error.errors);
      alert("Erro no formulário");
    }
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
        <select
          className="w-80 h-12 px-4 text-lg text-black bg-gray-100 
        border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-blue-400 
        focus:border-transparent transition-all"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" disabled hidden>
            Selecione seu cargo
          </option>
          <option value="MANAGER">Manager</option>
          <option value="EMPLOYEE">Employee</option>
        </select>
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
