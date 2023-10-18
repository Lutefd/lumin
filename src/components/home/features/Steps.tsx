import Link from "next/link";

interface ISteps {
  title: string;
  description: string;
}

const Steps: ISteps[] = [
  {
    title: "Faça o upload do seu arquivo",
    description:
      "Nós processaremos seu arquivo e dexairemos ele pronto para uma conversa",
  },
  {
    title: "Comece a fazer perguntas",
    description: "É simples assim. Teste Lumin hoje, leva menos de um minuto",
  },
];

export default function FeaturesSteps() {
  return (
    <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
          <span className="text-primary text-sm font-medium">Passo 1</span>
          <span className="text-xl font-semibold">Crie sua conta</span>
          <span className="mt-2 text-zinc-700">
            Comece com um plano gratuito ou escolha nosso{" "}
            <Link
              href="/pricing"
              className="text-purple-700 underline underline-offset-2"
            >
              plano profissional.
            </Link>
          </span>
        </div>
      </li>
      {Steps.map((step, index) => {
        return (
          <li className="md:flex-1" key={index}>
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-primary text-sm font-medium">
                Passo {index + 2}
              </span>
              <span className="text-xl font-semibold">{step.title}</span>
              <span className="mt-2 text-zinc-700">{step.description}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
