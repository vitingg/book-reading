import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"


export function Form() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [role, setRole] = useState<"EMPLOYEE" | "MANAGER">()

  const handleSignIn = async () => {

    if (!name || name.trim() === "") {
      alert("Por favor, insira um nome válido")
      return
    }

    try {
      const response = await api.get(`/users/search?name=${name}`)
      let user = response.data

      if (!user) {
        const createRes = await api.post(`/user`, { name, role });
        user = createRes.data;
      }
    
      if (user) {
        if (user.role !== role) {
          alert("Role inválido deste usuário.");
          return
        }
      } else {
        const createRes = await api.post(`/user`, { name, role });
        user = createRes.data
      }
  
      localStorage.setItem("user", JSON.stringify(user))
  
      if (user.role === "EMPLOYEE") {
        navigate("/client")
      } else if (user.role === "MANAGER") {
        navigate("/manager")
      } else {
        alert("Cargo inválido.")
      }
  
    } catch (err) {
      console.error("Erro ao logar:", err)
      alert("Erro ao fazer login.")
    }
  }

  return (

      <div className="flex flex-col items-center justify-center h-full overflow-hidden gap-3">

        <input className="text-black bg-gray-200 h-16 w-100 p-7
        border-gray-400 border rounded-lg hover:border-gray-500 
        hover:opacity-40 focus:outline-gray-500
        text-xl" 
        type="text" placeholder="Insira seu nome!" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        <input className="text-black bg-gray-200 h-16 w-100 
        border-gray-400 border rounded-lg p-7 hover:border-gray-500 
        hover:opacity-40 focus:outline-gray-500
        text-xl " 
        type="text" placeholder="Insira seu cargo!"
        value={role}
        onChange={(e) => setRole(e.target.value as "EMPLOYEE" | "MANAGER")}/>

        <button className="text-black border-gray-400 text-xl 
        bg-gray-200 border rounded-lg p-3 h-16 w-80
        hover:border-gray-500 hover:opacity-40"
        onClick={handleSignIn}
        >submit
        </button>
      </div>
  )
}