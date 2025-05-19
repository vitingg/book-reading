import leituraEstimula from "../../assets/cerebro.jpeg";
import meninoEstudando from "../../assets/menino-estudando.jpg";
import foco from "../../assets/foco.png";
import pensamento from "../../assets/pensamento.jpeg";
import estresse from "../../assets/estresse.jpg";

type BenefitProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

function BenefitItem({ title, description, image, alt }: BenefitProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mt-12 max-w-5xl w-full px-4">
      <img src={image} alt={alt} className="w-full md:w-64 rounded-xl shadow" />
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export function Advantages() {
  return (
    <section className="flex flex-col items-center mt-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Conheça as principais vantagens da leitura!
      </h2>

      <BenefitItem
        title="1 - Estimula o cérebro"
        description="A leitura mantém o cérebro ativo e engajado, ajudando na preservação da memória e no desenvolvimento cognitivo."
        image={leituraEstimula}
        alt="Imagem representando estímulo cerebral"
      />
      <BenefitItem
        title="2 - Amplia o vocabulário"
        description="Quanto mais você lê, mais palavras novas aprende, o que melhora a comunicação e a escrita."
        image={meninoEstudando}
        alt="Imagem ilustrativa do vocabulário"
      />
      <BenefitItem
        title="3 - Melhora a concentração e o foco"
        description="Ler exige atenção contínua, o que treina o cérebro para se concentrar melhor em outras tarefas do dia a dia."
        image={foco}
        alt="Imagem representando foco e concentração"
      />
      <BenefitItem
        title="4 - Desenvolve o pensamento crítico"
        description="A leitura de textos complexos estimula a reflexão e ajuda na construção de opiniões e decisões bem fundamentadas."
        image={pensamento}
        alt="Imagem de pensamento crítico"
      />
      <BenefitItem
        title="5 - Reduz o estresse"
        description="Entrar em um bom livro pode ser uma excelente forma de escapar do estresse cotidiano, relaxando a mente."
        image={estresse}
        alt="Imagem de relaxamento e leitura"
      />
    </section>
  );
}
