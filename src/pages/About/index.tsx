import { CheckIcon } from "@heroicons/react/24/solid";
import { Menu } from "../../components/Menu";

export function About() {
    return (
        <div>
            <Menu />
            <section className="min-h-screen md:mt-24">
                <div className="flex flex-col justify-center items-center gap-8 mt-6 m-10">
                    <h1 className="text-roxo_padrao text-4xl font-bold">Quem Somos</h1>
                    <h2 className="text-lg text-gray-600">Bem-vindo à nossa plataforma dedicada a transformar sua jornada de saúde e bem-estar! Somos uma equipe apaixonada por promover hábitos saudáveis através da nutrição equilibrada, exercícios eficazes e conscientização sobre o cuidado com o corpo.</h2>
                    <h2 className="text-lg text-gray-600">Nosso objetivo é fornecer informações acessíveis, baseadas em ciência, para ajudá-lo a atingir seus objetivos de saúde de maneira prática e eficiente. Seja você iniciante ou experiente, aqui temos recursos para todos.</h2>
                </div>
                <div className="flex text-roxo_padrao text-3xl font-bold gap-4 mt-6 ml-10"><h1 className="text-4xl">|</h1><h1 className="text-roxo_padrao mt-2">Missão</h1>
                </div>
                <h2 className="text-lg text-gray-600 ml-10 m-6">Nosso propósito é educar e motivar as pessoas a adotarem um estilo de vida saudável, através de práticas alimentares balanceadas e atividades físicas que promovam a qualidade de vida.</h2>
                <div className="flex text-roxo_padrao text-3xl font-bold gap-4 mt-6 ml-10"><h1 className="text-4xl">|</h1><h1 className="text-roxo_padrao mt-2">Visão</h1>
                </div>
                <h2 className="flex text-lg text-gray-600 ml-10 mt-6">Ser a principal plataforma de referência em saúde e bem-estar, incentivando mudanças de hábitos para uma vida mais saudável e plena.</h2>
                <div className="flex text-roxo_padrao text-3xl font-bold gap-4 mt-6 ml-10"><h1 className="text-4xl">|</h1><h1 className="text-roxo_padrao mt-2">Valores</h1>
                </div>
                <h2 className="flex text-lg text-gray-600 ml-10 mt-6 gap-2"><CheckIcon className="w-6 h-6"/><strong>Educação</strong>: Oferecer conhecimento acessível sobre nutrição e fitness.
                </h2>
                <h2 className="flex text-lg text-gray-600 ml-10 mt-6 gap-2"><CheckIcon className="w-6 h-6"/><strong>Qualidade</strong>: Trabalhamos com informações científicas e práticas testadas.
                </h2>
                <h2 className="flex text-lg text-gray-600 ml-10 mt-6 gap-2"><CheckIcon className="w-6 h-6"/><strong>Inovação</strong>: Buscamos sempre as melhores soluções tecnológicas para nossos usuários.
                </h2>
                <h2 className="flex text-lg text-gray-600 ml-10 mt-6 gap-2 mb-10"><CheckIcon className="w-6 h-6"/><strong>Empatia</strong>: Sabemos que cada jornada é única, e estamos aqui para apoiar cada passo.
                </h2>
            </section>
        </div>
    )
}