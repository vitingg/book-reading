import livros from "../../assets/imagem dos livros.png";

export function BookSection() {
  return (
    <section className="mt-20 px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">Conheça meu site de livros!</h1>
        <p className="text-xl">
          Site totalmente focado no meu aprendizado e aplicação de meus estudos!
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={livros}
          alt="Pilha de livros"
          className="rounded-2xl w-full max-w-5xl h-auto shadow-md"
        />
      </div>
    </section>
  );
}
