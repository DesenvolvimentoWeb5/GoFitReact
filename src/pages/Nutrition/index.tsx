import { Menu } from "../../components/Menu";
import CalorieCalculator from "../../utils/calorieCalculator";
import MacronutrientCards from "../../utils/cardsMacroNutrients";
import MicronutrientCards from "../../utils/cardsMicroNutrientes";
import Dieta from "../../assets/images/dieta.png"
import DietAccordion from "../../utils/dietAccordion";
import Quiz from "../../utils/quiz";

export function Nutrition() {
    return (
        <div className="scroll-smooth">
            <Menu />
            <section className="min-h-screen">
                <div className="flex flex-col gap-16 mt-48 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
                    <h1 className="text-4xl font-bold">O que é nutrição</h1>
                    <h2 className="text-2xl">Nutrição é a ciência que estuda os nutrientes presentes nos alimentos, bem como sua absorção pelo organismo humano e os efeitos que eles têm sobre a saúde e bem-estar tanto física, quanto mental.</h2>
                    <h2 className="text-2xl">Trata-se de uma área que desempenha um papel fundamental na saúde, uma vez que uma dieta equilibrada e adequada contribui diretamente para a prevenção de   doenças e promoção da qualidade de vida, além de desempenhar um papel importante na manutenção do equilíbrio emocional e na melhora da clareza mental.</h2>
                    <h2 className="text-center text-xl rounded-lg p-2 bg-gradient-to-br from-roxo_padrao to-purple-500">Nutrição é a ciência dos alimentos, que contribui diretamente para a saúde fisica e mental.</h2>
                </div>
            </section>
            <section id="macro-micro" className="min-h-screen bg-violet-300">
                <div className="flex flex-col gap-16 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
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
            <section id="caloria" className="min-h-screen">
                <div className="flex flex-col gap-16 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
                    <h1 className="text-4xl font-bold mt-24">Caloria</h1>
                    <h2 className="text-2xl">A caloria (kcal) é a unidade de medida que representa a quantidade de energia que um alimento fornece ao organismo quando consumido e metabolizado. Essa energia é essencial para manter funções vitais, como a respiração, circulação sanguínea, funcionamento dos órgãos e realização de atividades físicas. Quando ingerimos alimentos, o corpo transforma os macronutrientes (carboidratos, proteínas e gorduras) em energia, medida em calorias.</h2>
                    <h2 className="text-2xl">A quantidade de calorias que o corpo gasta em repouso para manter funções básicas como respiração, circulação sanguínea e temperatura corporal chama-se Taxa Metabólica Basal (TMB). Calcule a sua TMB.</h2>
                    <h2 className="text-2xl">O Gasto Energético Diário (GET) é a soma da TMB com as calorias gastas em atividades diárias, como exercícios físicos e tarefas cotidianas. Calcule o seu GET.</h2>
                    <h2 className="text-2xl">Se você procura ganhar peso, é necessário consumimir mais calorias do que gastar, pois o excesso é armazenado como gordura.</h2>
                    <h2 className="text-2xl">Se você procura perder peso, é necessário consumimir menos calorias do que gastar, pois o corpo usa as reservas de gordura para obter energia, queimando-as.</h2 >
                    <CalorieCalculator />
                </div>
            </section>
            <section id="info-nutricional" className="min-h-screen bg-violet-300">
                <div className="flex flex-col gap-16 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
                    <h1 className="text-4xl font-bold mt-24">Como ler informações nutricionais</h1>
                    <h2 className="text-2xl">Nos rótulos dos alimentos contêm informações essenciais para entender o que você está consumindo. Saber interpretá-los pode te ajudar a fazer escolhas mais saudáveis e evitar ingredientes prejudiciais à saúde.</h2>
                    <h2 className="text-2xl">Ao lado está o exemplo do rótulo nutricional do Doritos.</h2>
                    <h2 className="text-2xl"><a href="https://www.fatsecret.com.br/calorias-nutrição/" className="text-roxo_padrao underline">Clique aqui</a> para explorar diversas tabelas nutricionais.</h2>
                    <h1 className="text-4xl font-bold">Porção</h1>
                    <h2 className="text-2xl">No rótulo do Doritos, está escrito que a porção recomendada é de 25g, mas a embalagem contém duas porções. Isso quer dizer que o valor nutricional informado na tabela se refere a 25,5g (meia embalagem). Se você comer o pacote inteiro, estará consumindo o dobro dos valores nutricionais descritos na tabela.</h2>
                    <h2 className="text-2xl">Na tabela há duas quantidades informadas: 100g e 25g.</h2>
                    <h2 className="text-2xl">100g representa a quantidade de nutrientes por 100 gramas do produto. Isso é feito para padronizar a comparação entre diferentes alimentos. Como cada produto pode ter porções diferentes, muitas tabelas mostram os valores para 100g, permitindo que você compare diretamente alimentos diferentes, independentemente do tamanho da porção.</h2>
                    <h2 className="text-2xl">25g representa a quantidade dde nutrientes por 25 gramas do protudo, ou seja, a cada porção.</h2>
                    <h1 className="text-4xl font-bold">%VD</h1>
                    <h2 className="text-2xl">A porcentagem do valor diário (%VD) mostra a quantidade do nutriente em questão presente em uma porção do produto em comparação com a quantidade que uma pessoa média deveria consumir em um dia</h2>
                    <h2 className="text-2xl">Porém, você deve ter em mente que esse valor se altera conforme as necessidades individuais de cada um.</h2>
                    <h2 className="text-2xl">No caso do Doritos, 11% de gordura total significa que 1 porção desse alimento já representa 11% do consumo recomendado por dia.</h2>
                    <div className="bg-white border border-purple-700 items-center mb-10">
                        <div className="flex flex-col justify-center gap-8 m-10">
                            <h1 className="text-4xl font-bold">Atenção</h1>
                            <h2 className="text-2xl">O excesso de sódio - presente no sal de cozinha e em alimentos industrializados, como embutidos, salgadinhos e congelados - pode causar hipertensão e retenção de líquidos.</h2>
                            <h2 className="text-2xl">A quantidade recomendada é de menos de 2.000 mg de sódio por dia (~5g de sal). Evite produtos que tenham mais de 400mg de sódio por porção.</h2>
                            <h2 className="text-2xl">Gordura trans: Presente em margarinas, biscoitos recheados e salgadinhos. Aumenta o colesterol ruim e deve ser evitada ao máximo.</h2>
                            <h2 className="text-2xl">Gordura saturada: Encontrada em carnes gordurosas, laticínios integrais e frituras. O consumo excessivo pode levar a doenças cardiovasculares.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="dieta">
                <div className="flex flex-col md:flex-row justify-center items-center mr-20">
                    <div className="flex flex-col gap-16 sm:mr-12 sm:ml-12 md:mr-24 md:ml-24">
                        <h1 className="text-4xl font-bold mt-24">Dieta</h1>
                        <h2 className="text-2xl">A dieta é um termo usado para descrever o padrão de alimentação de um indivíduo ou de um grupo de pessoas. Refere-se aos tipos de alimentos e bebidas que uma pessoa consome regularmente para manter uma boa saúde, alcançar metas de perda de peso, ganhar massa muscular ou para tratar alguma condição de saúde específica. Alguns tipos de dieta são:</h2>
                        <h2 className="text-center text-xl rounded-lg p-2 bg-gradient-to-br from-roxo_padrao to-purple-500">Nutrição é a ciência dos alimentos, que contribui diretamente para a saúde fisica e mental.</h2>
                    </div>
                    <div>
                        <img src={Dieta} alt="Foto com um prato de salada e um halter" className="mt-10"/>
                    </div>
                </div>
                <div className="flex flex-col gap-16 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
                </div>
                <div className="flex mt-24 sm:mr-12 sm:ml-12 md:mr-24 md:ml-24">
                    <DietAccordion />
                </div>
            </section>
            <section id="saude-mental" className="bg-violet-300">
                <div className="flex flex-col gap-16 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
                    <h1 className="text-4xl font-bold mt-24">Nutrição X Saúde Mental</h1>
                    <h2 className="text-2xl">A nutrição é um fator crucial para a saúde mental, influenciando diretamente o funcionamento do cérebro e o bem-estar emocional. Uma dieta equilibrada, rica em alimentos como frutas, verduras, legumes, grãos integrais, proteínas magras e gorduras saudáveis, fornece nutrientes essenciais que ajudam a reduzir o risco de transtornos mentais, como depressão e ansiedade. Esses alimentos contribuem para a produção de neurotransmissores, como serotonina e dopamina, que regulam o humor e promovem a sensação de bem-estar.</h2>
                    <h2 className="text-2xl">Por outro lado, o consumo excessivo de alimentos ultraprocessados, ricos em açúcares e gorduras saturadas, está associado a um maior risco de problemas de saúde mental. Esses alimentos podem causar inflamações no organismo e prejudicar a microbiota intestinal, que tem uma conexão direta com o cérebro por meio do eixo intestino-cérebro. Uma microbiota saudável é fundamental para a produção de substâncias que influenciam positivamente o humor e a cognição.</h2>
                    <h2 className="text-2xl">Além disso, manter hábitos alimentares regulares e equilibrados é importante para evitar flutuações de energia e humor. A deficiência de nutrientes como ômega-3, vitaminas do complexo B, magnésio e zinco, por exemplo, pode estar relacionada a sintomas de depressão e ansiedade.</h2>
                    <h2 className="text-2xl">Em resumo, uma alimentação adequada é essencial para a saúde mental, pois fornece os elementos necessários para o bom funcionamento cerebral e ajuda a prevenir transtornos emocionais. Priorizar uma dieta balanceada e reduzir o consumo de alimentos ultraprocessados são estratégias eficazes para promover o equilíbrio emocional e a qualidade de vida.</h2>
                    <div className="flex justify-center items-center mb-24">
                        <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/KFowNIMdLiI?si=k2hbjyeENGxunVYv"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section id="fato-mito">
                <div className="flex flex-col gap-16 sm:mr-24 sm:ml-24 md:mr-48 md:ml-48">
                    <h1 className="text-4xl font-bold mt-24">Fato ou Mito</h1>
                    <h2 className="text-2xl">A nutrição, assim como outras áreas do conhecimento, está cercada de mitos populares e informações que, muitas vezes, são passadas adiante sem embasamento científico. Esses equívocos podem levar a escolhas alimentares inadequadas e até prejudicar a saúde. Para ajudar a desvendar o que é verdade e o que é mito, preparamos este quiz com afirmações sobre nutrição. Será que você consegue identificar o que é real e o que é fake? Vamos testar seus conhecimentos!</h2>
                    <Quiz/>
                </div>
            </section>
            <footer className="flex justify-center bg-gray-300 p-8 items-center gap-1">
                <p>© 2025 GoFit. All rights reserved.</p>
                <p>Informações</p>
            </footer>
        </div>
    )
}