import logo from "../../assets/logo.png";
import { LogIn } from "lucide-react";
import { UserRoundPlus } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 mr-20 ml-20 mt-4 rounded-2xl bg-gray-800 text-white">
      <nav className="flex flex-row justify-between ml-12 mr-12">
        <img src={logo} alt="" className="w-30 h-20 cursor-pointer" />
        <ul className="flex flex-row text-xl items-center gap-4">
          <li className="">
            <div className="flex flex-row items-center justify-center gap-2 cursor-pointer border border-none p-3 rounded-xl text-black bg-white">
              <UserRoundPlus />
            <a href="/auth/singup" className="font-medium">Criar conta</a>
            </div>
          </li>

          <li className="">
            <div className="flex flex-row items-center justify-center gap-2 cursor-pointer border border-none p-3 rounded-xl bg-blue-600 text-white">
              <LogIn />
            <a href="/auth/login" className="font-medium">Entrar</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
