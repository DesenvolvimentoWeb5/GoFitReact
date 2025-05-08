import { useState } from 'react';

type DietSection = {
    title: string;
    description: string;
    sections: {
        title: string;
        content: string;
    }[];
};

const DietAccordion = () => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (dietTitle: string, sectionTitle: string) => {
        const key = `${dietTitle}-${sectionTitle}`;
        setOpenSections(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const dietData: DietSection[] = [
        {
            title: "Intermitente",
            description: "Realizar cerca de 10 a 12 horas diárias de jejum com o propósito de diminuir o apetite e, consequentemente, comer menos nas próximas refeições. O jejum intermitente auxilia na diminuição do apetite, desintoxica o organismo e estimula a perda de peso. Porém, ainda não há estudos científicos que comprovem tal eficácia, o que gera um grande debate entre os especialistas. Por isso, busque a orientação de um nutricionista antes de iniciar a dieta intermitente.",
            sections: []
        },
        {
            title: "Low Carb",
            description: "Baseia-se na redução do consumo de carboidratos e no aumento da ingestão de proteínas e gorduras saudáveis. Nessa abordagem, os carboidratos representam entre 10% e 40% do total calórico diário, dependendo da estratégia adotada. O objetivo principal é reduzir os picos de glicose no sangue e incentivar o organismo a utilizar gorduras como principal fonte de energia, promovendo a perda de peso e o controle dos níveis de açúcar no sangue.",
            sections: [
                {
                    title: "O que Evitar",
                    content: "Pães, massas, arroz branco, açúcares, doces, refrigerantes e tubérculos ricos em amido."
                },
                {
                    title: "O que Comer",
                    content: "Carnes, ovos, queijos, frutas com baixo índice glicêmico, oleaginosas, verduras e legumes."
                },
                {
                    title: "Benefícios",
                    content: "Emagrecimento, controle do açúcar no sangue, saciedade e melhora dos níveis de colesterol."
                },
                {
                    title: "Cuidados",
                    content: "Adaptação pode causar cansaço, tontura e dor de cabeça. Precisa de acompanhamento para evitar déficits nutricionais."
                }
            ]
        },
        {
            title: "Cetogênica",
            description: "Baseia-se na redução extrema de carboidratos e no aumento significativo do consumo de gorduras, com uma ingestão moderada de proteínas. O objetivo principal dessa dieta é levar o corpo a um estado metabólico chamado cetose, no qual ele passa a utilizar gordura como principal fonte de energia em vez da glicose. Para isso, a ingestão de carboidratos é limitada a cerca de 5% a 10% do total diário de calorias, o que equivale a aproximadamente 20 a 50 gramas de carboidratos por dia.",
            sections: [
                {
                    title: "O que Evitar",
                    content: "Açúcar refinado (doces, bolos, sorvetes, refrigerantes), farinhas refinadas (pães, massas, bolachas, cereais industrializados), arroz branco e batata, frutas com alto teor de frutose (banana, uva, manga), bebidas adoçadas."
                },
                {
                    title: "O que Comer",
                    content: "Carnes (frango, carne bovina, porco, peixe), ovos, laticínios (queijos, nata, creme de leite), óleos e gorduras (azeite de oliva, manteiga, óleo de coco), oleaginosas (castanhas, nozes, amêndoas), vegetais de baixo carboidrato (brócolis, couve-flor, espinafre, abobrinha), abacate."
                },
                {
                    title: "Benefícios",
                    content: "Perda de peso rápida, maior saciedade, redução da inflamação e melhora da resistência à insulina, aumento da clareza mental e energia, pode ajudar no controle do diabetes tipo 2 e no tratamento da epilepsia refratária."
                },
                {
                    title: "Cuidados",
                    content: "Gripe cetogênica: fadiga, dor de cabeça, tontura nos primeiros dias, alterações no intestino (prisão de ventre ou diarreia), cãibras devido à perda de eletrólitos (necessário reposição com sódio e potássio)."
                }
            ]
        },
        {
            title: "Hiperproteica",
            description: "A dieta hiperproteica é um tipo de alimentação que prioriza um alto consumo de proteínas, representando de 30 a 40% das calorias diárias, com o objetivo de estimular o crescimento muscular, aumentar a saciedade e contribuir para o emagrecimento, sendo muito utilizada por atletas, praticantes de musculação e pessoas que buscam emagrecimento sem perder massa muscular. Além disso, essa abordagem reduz ou mantém moderado o consumo de carboidratos, garantindo um equilíbrio na ingestão de gorduras saudáveis.",
            sections: [
                {
                    title: "O que Evitar",
                    content: "Alimentos ricos em carboidratos refinados e açúcares: açucar, doce, farinha refinada, arroz branco, batatas, frituras, ultraprocessados e bebidas alcoólicas."
                },
                {
                    title: "O que Comer",
                    content: "Frango, peixe, carne vermelha magra, ovos, laticínios ricos em proteína (queijo, iogurte natural), oleaginosas (amêndoas, castanhas), leguminosas e vegetais ricos em proteína (lentilha, grão-de-bico, brócolis)."
                },
                {
                    title: "Benefícios",
                    content: "Favorece o ganho de massa muscular (hipertrofia), acelera o metabolismo, aumenta a saciedade, contribui para a preservação da massa muscular durante o emagrecimento."
                },
                {
                    title: "Cuidados",
                    content: "Excesso de proteínas pode sobrecarregar os rins, pode causar constipação, se a ingestão de fibras for baixa, deve ser equilibrada para evitar deficiências nutricionais."
                }
            ]
        },
        {
            title: "Bulking",
            description: "O bulking é uma fase do treinamento e da alimentação voltada para o ganho de massa muscular, onde é necessário manter um superávit calórico, ingerindo mais calorias do que se gasta para favorecer o crescimento muscular. Durante esse período, a dieta é rica em proteínas para auxiliar na recuperação e construção dos músculos, além de incluir uma ingestão equilibrada de carboidratos e gorduras para fornecer energia adequada. Aliado a isso, os treinos de força são intensos e progressivos, garantindo estímulos constantes para o desenvolvimento muscular.",
            sections: []
        },
        {
            title: "Cutting",
            description: "A dieta cutting é voltada para a redução de gordura corporal enquanto se preserva a massa muscular, sendo amplamente utilizada por praticantes de musculação e atletas em fase de definição. Essa abordagem envolve um déficit calórico controlado, aliado a um alto consumo de proteínas e uma ingestão moderada de carboidratos e gorduras saudáveis, garantindo energia suficiente para o treino e minimizando a perda de massa magra.",
            sections: [
                {
                    title: "O que Evitar",
                    content: "Alimentos ultraprocessados, frituras, açúcares refinados, fast food, bebidas alcoólicas, refrigerantes, doces e excesso de carboidratos simples."
                },
                {
                    title: "O que Comer",
                    content: "Proteínas magras (frango, peixe, carne vermelha magra, ovos), laticínios com baixo teor de gordura, vegetais fibrosos, leguminosas, oleaginosas e carboidratos complexos em quantidades controladas (batata-doce, arroz integral, quinoa, aveia)."
                },
                {
                    title: "Benefícios",
                    content: "Redução da gordura corporal, definição muscular, manutenção da massa magra, maior controle da ingestão calórica e melhora na performance física."
                },
                {
                    title: "Cuidados",
                    content: "Déficit calórico excessivo pode levar à perda de massa muscular, fadiga, queda de desempenho e deficiências nutricionais se não houver equilíbrio adequado na dieta."
                }
            ]
        },
        {
            title: "Vegana",
            description: "Baseada exclusivamente em alimentos de origem vegetal, exclui qualquer tipo de produto animal, como carnes, laticínios, ovos e mel. Os adeptos buscam equilibrar a ingestão de proteínas por meio de leguminosas, grãos integrais, sementes e suplementos quando necessário. Essa abordagem pode trazer benefícios cardiovasculares e ajudar no controle de peso, mas requer atenção especial à ingestão de vitamina B12, ferro, ômega-3 e proteínas suficientes.",
            sections: []
        },
        {
            title: "Vegetariana",
            description: "A dieta vegetariana exclui o consumo de carnes, mas permite a ingestão de alimentos de origem animal, como ovos, leite e derivados, dependendo da variação adotada. Os praticantes podem obter proteínas por meio de leguminosas, grãos integrais, laticínios e ovos, garantindo um equilíbrio nutricional. Essa alimentação pode oferecer benefícios para a saúde cardiovascular e o controle de peso, mas é importante manter atenção à ingestão de ferro, vitamina B12 e proteínas para evitar deficiências.",
            sections: []
        },
        {
            title: "Mediterrânea",
            description: "Baseia em alimentos naturais, dispensando o uso de processados e ultraprocessados. Os principais itens são frutas, vegetais, oleaginosas, frutos-do-mar, cereais, grãos, peixes, leites e queijos. O consumo de carne vermelha é bem pequeno. Essa dieta ajuda no controle do colesterol, já que não inclui gorduras ruins e fornece todos os nutrientes necessários para o organismo. Seus alimentos dão mais saciedade, o que ajuda a controlar a vontade de comer em excesso e combate a diabetes e problemas cardíacos, vasculares e digestivos.",
            sections: []
        },
        {
            title: "Dash",
            description: "Criada por cardiologistas dos Estados Unidos na década de 1990 para diminuir os casos de hipertensão no país, consiste em diminuir o sódio da alimentação e consumir alimentos que ajudam no bom funcionamento vascular, como frutas, vegetais, legumes, grãos, carnes magras, entre outros. Seu foco principal é o consumo diário de 2.300 miligramas (ou 5 gramas) de sódio, o equivalente a uma colher de chá.",
            sections: []
        },
        {
            title: "Paleo",
            description: "Inspirada na alimentação dos nossos ancestrais caçadores-coletores, essa dieta enfatiza o consumo de alimentos naturais, não processados, como carnes, peixes, ovos, frutas, vegetais, oleaginosas e gorduras saudáveis. Exclui completamente alimentos industrializados, grãos, laticínios e leguminosas, alegando que esses itens não fazem parte da dieta original da humanidade. Seu objetivo é promover saúde, perda de peso e melhor controle dos níveis de açúcar no sangue.",
            sections: []
        },
    ];

    const sectionColors: Record<string, string> = {
        "O que Evitar": "bg-red-50 border-red-200 text-red-800",
        "O que Comer": "bg-green-50 border-green-200 text-green-800",
        "Benefícios": "bg-blue-50 border-blue-200 text-blue-800",
        "Cuidados": "bg-yellow-50 border-yellow-200 text-yellow-800",
    };

    // Cor do ícone de seta
    const iconColors: Record<string, string> = {
        "O que Evitar": "text-red-500",
        "O que Comer": "text-green-500",
        "Benefícios": "text-blue-500",
        "Cuidados": "text-yellow-600",
    };

    return (
        <div className="max-w-5xl mx-auto font-sans space-y-8">
            {dietData.map((diet) => (
                <div key={diet.title} className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">
                        {diet.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{diet.description}</p>

                    {diet.sections.length > 0 && (
                        <div className="space-y-3">
                            {diet.sections.map((section) => {
                                const key = `${diet.title}-${section.title}`;
                                const colorClass = sectionColors[section.title] || "bg-gray-50 border-gray-200";
                                const iconColor = iconColors[section.title] || "text-gray-500";

                                return (
                                    <div key={key} className={`border rounded-md overflow-hidden ${colorClass}`}>
                                        <button
                                            onClick={() => toggleSection(diet.title, section.title)}
                                            className={`w-full p-4 text-left flex justify-between items-center transition-colors ${openSections[key] ? 'font-semibold' : ''
                                                }`}
                                        >
                                            <span>{section.title}</span>
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 ${iconColor} ${openSections[key] ? 'transform rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openSections[key] && (
                                            <div className="p-4 bg-white border-t border-gray-100">
                                                <p className="text-gray-700">{section.content}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DietAccordion;