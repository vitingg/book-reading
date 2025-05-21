import { Navbar } from "../components/landing page/nav-bar";
import { BookSection } from "../components/landing page/book-section";
import { Advantages } from "../components/landing page/advantages";
import { Footer } from "../components/landing page/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const navigate = useNavigate();
  try {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    useEffect(() => {
      if (token && user) {
        if (JSON.parse(user).role === "MANAGER") {
          navigate("/dashboard/admin");
        } else if (JSON.parse(user).role === "EMPLOYEE") {
          navigate("/dashboard/client");
          return;
        }
      }
    }, []);
  } catch (error) {
    console.error("Erro ao ler user do localStorage", error);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <div>
      <Navbar />
      <BookSection />
      <Advantages />
      <Footer />
    </div>
  );
}
