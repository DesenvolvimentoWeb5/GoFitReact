import { Menu } from "../../components/Menu"
import emagrecimento from "../../assets/images/lose.jpg"
import ganho from "../../assets/images/gain.jpg"
import definicao from "../../assets/images/define.jpg"
import strap from "../../assets/images/strap.jpg"
import whey from "../../assets/images/whey.jpg"
import hipercalorico from "../../assets/images/hipercalorico.jpg"
import pretreino from "../../assets/images/pretreino.jpg"
import creatina from "../../assets/images/creatina.jpg"
import coqueteleira from "../../assets/images/coqueteleira.jpg"
import { ArrowDownTrayIcon, CheckIcon } from '@heroicons/react/24/solid'

export function Gym() {

    type TrainingType = 'emagrecimento' | 'massa' | 'definicao';

    interface TrainingProgram {
        title: string;
        content: string;
    }

    const TRAINING_PROGRAMS: Record<TrainingType, TrainingProgram> = {
        emagrecimento: {
            title: 'Treino para Emagrecimento - 5x por Semana 💪',
            content: `Segunda-feira:
- HIIT (30 min)
- Supino reto 3x12
- Agachamento livre 3x15
- Abdominais 3x20

Terça-feira:
- Corrida (40 min)
- Levantamento terra 3x12
- Rosca direta 3x12

Quarta-feira:
- Circuito funcional
- Prancha 3x40s
- Polichinelos 3x30

Quinta-feira:
- Bicicleta ergométrica (30 min)
- Supino inclinado 3x12
- Agachamento sumô 3x15
- Abdominais infra 3x20

Sexta-feira:
- HIIT (30 min)
- Desenvolvimento militar 3x12
- Cadeira extensora 3x15
- Prancha lateral 3x40s
`
        },
        massa: {
            title: 'Treino para Ganho de Massa - 5x por Semana 💪',
            content: `Segunda-feira:
- Supino reto 4x10
- Desenvolvimento com halteres 4x10
- Agachamento livre 4x10
- Rosca direta 4x12
- Abdominal infra 3x15

Terça-feira:
- Levantamento terra 4x8
- Barra fixa 4x8
- Remada curvada 4x10
- Tríceps francês 4x12
- Prancha 3x40s

Quarta-feira:
- Supino inclinado 4x10
- Desenvolvimento militar 4x10
- Cadeira extensora 4x12
- Rosca martelo 4x12
- Elevação de pernas 3x15

Quinta-feira:
- Stiff 4x8
- Remada unilateral 4x10
- Paralelas 4x12
- Abdução de quadril 3x15
- Prancha lateral 3x30s

Sexta-feira:
- Supino reto 4x10
- Agachamento búlgaro 4x10
- Pulley frente 4x12
- Rosca concentrada 4x12
- Abdominal supra 3x15
`
        },
        definicao: {
            title: 'Treino para Definição - 5x por Semana 💪',
            content: `Segunda-feira:
- HIIT (20 min)
- Supino reto 3x12
- Agachamento livre 3x12
- Elevação lateral 3x15
- Abdominais 3x20

Terça-feira:
- Corrida (30 min)
- Barra fixa 3x10
- Remada curvada 3x12
- Tríceps corda 3x12
- Prancha 3x40s

Quarta-feira:
- Circuito funcional
- Afundo com halteres 3x12
- Supino inclinado 3x12
- Elevação de panturrilha 3x15
- Abdominal infra 3x20

Quinta-feira:
- HIIT (20 min)
- Levantamento terra 3x10
- Desenvolvimento com halteres 3x12
- Cadeira extensora 3x12
- Prancha lateral 3x30s

Sexta-feira:
- Corrida (30 min)
- Remada baixa 3x12
- Paralelas 3x12
- Abdução de quadril 3x15
- Abdominal supra 3x20`
        }
    };

    const downloadTrainingProgram = (tipo: TrainingType): void => {
        const program = TRAINING_PROGRAMS[tipo];
        if (!program) {
            console.error('Tipo de treino inválido');
            return;
        }

        const fullContent = `${program.title}\n\n${program.content}`;
        const blob = new Blob([fullContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Treino_${tipo}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Menu />
            <section className="min-h-screen md:mt-24">
                <div className="flex flex-col justify-center items-center text-center gap-8 mt-6">
                    <h1 className="text-roxo_padrao text-4xl font-bold">Treinos de Academia</h1>
                    <h2 className="text-lg text-gray-600">Escolha o treino ideal para o seu objetivo e faça o download para seguir o plano na academia.</h2>
                    <div className="flex flex-col md:flex-row gap-12 mt-6 justify-center items-center">
                        <div className="flex flex-col justify-center items-center shadow-2xl p-8 transform transition duration-300 hover:scale-105">
                            <img src={emagrecimento} alt="Comida" className="rounded-l-full shadow-lg w-72 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg">
                                Emagrecimento
                            </h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">
                                Descubra tudo que você precisa saber sobre nutrição
                            </h2>
                            <button className="bg-roxo_padrao hover:bg-violet-700 flex gap-2 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-full" onClick={() => downloadTrainingProgram('emagrecimento')}><ArrowDownTrayIcon className="w-6 h-6" /> Download do treino</button>
                        </div >
                        <div className="flex flex-col justify-center items-center shadow-2xl p-8 transform transition duration-300 hover:scale-105">
                            <img src={ganho} alt="Pesos de academia" className="rounded-full shadow-lg w-72 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg">Ganho de massa</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Explore tudo o que você precisa saber sobre o universo da academia.</h2>
                            <button className="bg-roxo_padrao hover:bg-violet-700 flex gap-2 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-full" onClick={() => downloadTrainingProgram('massa')}><ArrowDownTrayIcon className="w-6 h-6" /> Download do treino</button>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-2xl p-8 transform transition duration-300 hover:scale-105">
                            <img src={definicao} alt="Calculadora" className="rounded-r-full shadow-lg w-72 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg">Definição</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Saiba tudo sobre calculadoras de IMC, gordura corporal e muito mais!</h2>
                            <button className="bg-roxo_padrao hover:bg-violet-700 flex gap-2 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-full" onClick={() => downloadTrainingProgram('definicao')}><ArrowDownTrayIcon className="w-6 h-6" /> Download do treino</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-screen bg-gray-100 mt-10 pb-8">
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <h1 className="text-purple-900 text-3xl font-bold mt-10">Produtos que recomendamos</h1>
                    <h2 className="text-gray-600">Melhore sua performance com os melhores suplementos e acessórios!</h2>
                </div>
                <div className="flex justify-center items-center">
                    <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        <div className="flex flex-col justify-center items-center shadow-2xl rounded-xl p-4 mx-32 md:mx-4 lg:mx-4 bg-gray-50 transform transition duration-300 hover:-translate-y-2">
                            <img src={strap} alt="Comida" className=" w-48 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg text-purple-900">
                                Strap para Treino
                            </h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">
                                Descubra tudo que você precisa saber sobre nutrição
                            </h2>
                            <button className="bg-purple-700 hover:bg-violet-800 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-xl">Ver Produto</button>
                        </div >
                        <div className="flex flex-col justify-center items-center shadow-2xl rounded-xl p-4 mx-32 md:mx-4 lg:mx-4 bg-gray-50 transform transition duration-300 hover:-translate-y-2">
                            <img src={whey} alt="Pesos de academia" className="round  w-48 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg text-purple-900">Whey Protein</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Explore tudo o que você precisa saber sobre o universo da academia.</h2>
                            <button className="bg-purple-700 hover:bg-violet-800 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-xl">Ver Produto</button>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-2xl rounded-xl p-4 mx-32 md:mx-4 lg:mx-4 bg-gray-50 transform transition duration-300 hover:-translate-y-2">
                            <img src={hipercalorico} alt="Calculadora" className="rounded  w-48 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg text-purple-900">Hipercalórico</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Saiba tudo sobre calculadoras de IMC, gordura corporal e muito mais!</h2>
                            <button className="bg-purple-700 hover:bg-violet-800 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-xl">Ver Produto</button>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-2xl rounded-xl p-4 mx-32 md:mx-4 lg:mx-4 bg-gray-50 transform transition duration-300 hover:-translate-y-2">
                            <img src={pretreino} alt="Calculadora" className="rounded  w-48 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg text-purple-900">Pré-Treino</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Saiba tudo sobre calculadoras de IMC, gordura corporal e muito mais!</h2>
                            <button className="bg-purple-700 hover:bg-violet-800 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-xl">Ver Produto</button>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-2xl rounded-xl p-4 mx-32 md:mx-4 lg:mx-4 bg-gray-50 transform transition duration-300 hover:-translate-y-2">
                            <img src={creatina} alt="Calculadora" className="rounded  w-48 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg text-purple-900">Creatina</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Saiba tudo sobre calculadoras de IMC, gordura corporal e muito mais!</h2>
                            <button className="bg-purple-700 hover:bg-violet-800 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-xl">Ver Produto</button>
                        </div>
                        <div className="flex flex-col justify-center items-center shadow-2xl rounded-xl p-4 mx-32 md:mx-4 lg:mx-4 bg-gray-50 transform transition duration-300 hover:-translate-y-2">
                            <img src={coqueteleira} alt="Calculadora" className="rounded  w-48 h-48 object-cover" />
                            <h1 className="font-bold mt-4 text-lg text-purple-900">Coqueteleira</h1>
                            <h2 className="text-center text-gray-600 max-w-[300px] mt-4">Saiba tudo sobre calculadoras de IMC, gordura corporal e muito mais!</h2>
                            <button className="bg-purple-700 hover:bg-violet-800 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-xl">Ver Produto</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="m-8">
                <div className="flex flex-col md:flex-row justify-evenly gap-4">
                    <div className="shadow-xl p-8 rounded-xl transform transition duration-300 hover:-translate-y-2">
                        <div className="flex items-center text-roxo_padrao text-3xl font-bold gap-4"><h1 className="text-4xl">|</h1><h1 className="text-roxo_padrao mt-2">Dicas</h1>
                        </div>
                        <div className="flex flex-col gap-4 mt-5 text-gray-600">
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Hidrate-se sempre
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Mantenha uma alimentação balanceada</h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Descanse bem
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Faça alongamentos
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Respeite seus limites e evolua gradualmente
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Faça o treino com foco na execução correta
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Inclua exercícios para todos os grupos musculares
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Use roupas e calçados adequados para treinar
                            </h2>
                            <h2 className="flex gap-2"><CheckIcon className="w-6 h-6 text-roxo_padrao" />Mantenha a constância, os resultados vêm com o tempo
                            </h2>
                        </div>
                    </div>
                    <div className="shadow-xl p-8 rounded-xl transform transition duration-300 hover:-translate-y-2">
                        <div className="flex items-center text-roxo_padrao text-3xl font-bold gap-4"><h1 className="text-4xl">|</h1><h1 className="text-roxo_padrao mt-2">Playlist para treinar</h1>
                        </div>
                        <div className="mt-4 rounded-lg overflow-hidden">
                            <iframe
                                src={`https://open.spotify.com/embed/playlist/7DD7riEgqIZVWzlsd3aNn0?si=9dcdd902f6b44e9d`}
                                width='500px'
                                height='500px'
                                allow="encrypted-media"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section >

            <footer className="flex justify-center bg-gray-300 p-8 items-center gap-1">
                <p>© 2025 GoFit. All rights reserved.</p>
                <p>Informações</p>
            </footer>
        </div >
    )
}