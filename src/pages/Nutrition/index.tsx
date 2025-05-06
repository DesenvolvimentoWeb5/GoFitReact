import { Menu } from "../../components/Menu";
import CalorieCalculator from "../../utils/calorieCalculator";
import MacronutrientCards from "../../utils/cardsMacroNutrients";
import MicronutrientCards from "../../utils/cardsMicroNutrientes";

export function Nutrition() {
    return (
        <div>
            <Menu />
            <section className="min-h-screen bottom-0">
                <div className="flex flex-col gap-16 sm:mt-48 sm:mr-48 sm:ml-48">
                    <h1 className="text-4xl font-bold">O que é nutrição</h1>
                    <h2 className="text-2xl">Nutrição é a ciência que estuda os nutrientes presentes nos alimentos, bem como sua absorção pelo organismo humano e os efeitos que eles têm sobre a saúde e bem-estar tanto física, quanto mental.</h2>
                    <h2 className="text-2xl">Trata-se de uma área que desempenha um papel fundamental na saúde, uma vez que uma dieta equilibrada e adequada contribui diretamente para a prevenção de   doenças e promoção da qualidade de vida, além de desempenhar um papel importante na manutenção do equilíbrio emocional e na melhora da clareza mental.</h2>
                    <h2 className="text-center text-xl rounded-lg p-2 bg-gradient-to-br from-roxo_padrao to-purple-500">Nutrição é a ciência dos alimentos, que contribui diretamente para a saúde fisica e mental.</h2>
                </div>
            </section>
            <section className="mix-h-screen bg-violet-300">
                <div className="flex flex-col gap-16 sm:mr-48 sm:ml-48">
                    <h1 className="text-4xl font-bold mt-24">Macro x Micro</h1>
                    <h2 className="text-2xl">A nutrição é baseada na ingestão de dois tipos principais de nutrientes: macronutrientes e micronutrientes. Ambos são essenciais para o funcionamento do organismo, mas desempenham papéis diferentes e são necessários em quantidades distintas.</h2>
                    <h1 className="text-4xl font-bold">Macronutrientes</h1>
                    <h2 className="text-2xl">Os macronutrientes são aqueles que o corpo precisa em grandes quantidades, pois fornecem energia e participam da construção e manutenção dos tecidos. Eles são:</h2>
                    <div>
                        <MacronutrientCards />
                    </div>
                    <h1 className="text-4xl font-bold mt-10">Micronutrientes</h1>
                    <h2 className="text-2xl">Os micronutrientes são necessários em pequenas quantidades, mas são fundamentais para o metabolismo, fortalecimento do sistema imunológico e diversas funções biológicas. Eles incluem:</h2>
                    <div className="mb-24">
                        <MicronutrientCards />
                    </div>
                </div>
            </section>
            <section className="min-h-screen">
                <div className="flex flex-col gap-16 sm:mr-48 sm:ml-48">
                    <h1 className="text-4xl font-bold mt-24">Caloria</h1>
                    <h2 className="text-2xl">A caloria (kcal) é a unidade de medida que representa a quantidade de energia que um alimento fornece ao organismo quando consumido e metabolizado. Essa energia é essencial para manter funções vitais, como a respiração, circulação sanguínea, funcionamento dos órgãos e realização de atividades físicas. Quando ingerimos alimentos, o corpo transforma os macronutrientes (carboidratos, proteínas e gorduras) em energia, medida em calorias.</h2>
                    <h2 className="text-2xl">A quantidade de calorias que o corpo gasta em repouso para manter funções básicas como respiração, circulação sanguínea e temperatura corporal chama-se Taxa Metabólica Basal (TMB). Calcule a sua TMB.</h2>
                    <h2 className="text-2xl">O Gasto Energético Diário (GET) é a soma da TMB com as calorias gastas em atividades diárias, como exercícios físicos e tarefas cotidianas. Calcule o seu GET.</h2>
                    <h2 className="text-2xl">Se você procura ganhar peso, é necessário consumimir mais calorias do que gastar, pois o excesso é armazenado como gordura.</h2>
                    <h2 className="text-2xl">Se você procura perder peso, é necessário consumimir menos calorias do que gastar, pois o corpo usa as reservas de gordura para obter energia, queimando-as.</h2 >
                    <CalorieCalculator/>
                </div>
            </section>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
            <section>

            </section>
            <footer className="flex justify-center bg-gray-300 p-8 items-center gap-1">
                <p>© 2025 GoFit. All rights reserved.</p>
                <p>Informações</p>
            </footer>
        </div>
    )
}