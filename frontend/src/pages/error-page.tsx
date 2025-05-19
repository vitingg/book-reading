import bg from "../assets/bg.jpg";
import notFound from "../assets/notfounded.png";

export function NotFound() {
  return (
    <>
      <img
        src={bg}
        alt="background"
        className="absolute w-full h-full object-cover z-0"
      />

      <div className="flex flex-col items-center justify-center w-full min-h-screen relative ">
        <h1 className="text-6xl font-bold text-gray-700">Page Not Found</h1>
        <img src={notFound} alt="" />
        <a href="/" className="text-4xl text-indigo-400 font-semibold">Voltar para home!</a>
      </div>
    </>
  );
}
