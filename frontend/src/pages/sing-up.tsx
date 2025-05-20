import { Form } from "../components/form";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Signup() {
  const navigate = useNavigate();
  return (
    // Define a imagem de fundo

    <div className="flex h-screen">
      <div
        className="flex-1 flex flex-col justify-center 
      items-center gap-4"
      >
        <div
          className="flex flex-col items-center justify-center 
        bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h1 className="text-4xl font-medium mb-10">Cria a sua conta!</h1>
          <Form
            showRoleField
            onSubmit={async ({ name, password, role }) => {
              try {
                await api.post("/users", { name, password, role });
                const loginResponse = await api.post("/users/login", {
                  name,
                  password,
                });
                const { token, user } = loginResponse.data;

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                if (user.role === "MANAGER") {
                  navigate("/dashboard/admin");
                } else if (user.role === "EMPLOYEE") {
                  navigate("/dashboard/client");
                } else {
                  alert("Usuário não encontrado");
                }
              } catch (error) {
                console.log(error);
                alert("Erro ao criar usuário");
              }
            }}
          />
          <h1 className="mt-4 text-xl">
            Já possui uma conta?{" "}
            <a href="/auth/login" className="text-blue-300">
              Entrar
            </a>
          </h1>
        </div>
      </div>

      <div
        className="flex-1 flex flex-col justify-center 
      items-center bg-gradient-to-r from-blue-600 
      to-blue-400 gap-4"
      >
        <h1 className="text-8xl font-bold tracking-wide">Bem-Vindo!</h1>
        <p className="text-4xl font-semibold">Crie uma conta para continuar!</p>
      </div>
    </div>
  );
}
