import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"


export function Form() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [role, setRole] = useState<"EMPLOYEE" | "MANAGER">("EMPLOYEE")

  const handleSignIn = async () => {
    try {
      const response = await api.get(`users/search?name=${name}`)
      console.log(response.data);
      let user = response.data

      if (!user) {
        const createRes = await api.post(`/user`, {name, role})
        user = createRes.data
      }

      localStorage.setItem("user", JSON.stringify(user))

      if(user.role === "EMPLOYEE"){
        navigate("/employee")
      } else {
      navigate("/manager")
      }

    } catch (error) {
      console.log(error);
      alert("Usuário não encontrado")
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