import { Form } from "../components/form";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function SingIn() {
  const navigate = useNavigate();

  return (
    // Define a imagem de fundo
    <div className="flex h-screen">
      <div
        className="flex-1 flex flex-col justify-center 
        items-center gap-4 min-h-screen bg-gradient-to-r 
        from-blue-600 to-blue-400"
      >
        <h1 className="text-8xl font-bold tracking-wide">Bem-Vindo!</h1>
        <p className="text-4xl font-semibold">
          Entre na sua conta pra continuar!
        </p>
      </div>

      <div
        className="flex-1 flex flex-col justify-center 
        items-center gap-4 "
      >
        <div
          className="flex flex-col items-center justify-center 
        bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h1 className="text-4xl font-medium mb-10">Entrar!</h1>
          <Form
            onSubmit={async ({ name, password }) => {
              try {
                const response = await api.post("/users/login", {
                  name,
                  password,
                });
                const { token, user } = response.data;

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                if (user.role === "MANAGER") {
                  navigate("/manager");
                } else if (user.role === "EMPLOYEE") {
                  navigate("client");
                } else {
                  alert("Usuário não encontrado");
                }
              } catch (error) {
                alert("Erro ao fazer login");
                console.log(error);
              }
            }}
          />

          <h1 className="mt-4 text-xl">
            Ainda não possui uma conta?{" "}
            <a href="/signup" className="text-blue-300">
              Criar
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
