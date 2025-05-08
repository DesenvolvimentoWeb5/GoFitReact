import React, { useState } from 'react';

type Pergunta = {
  pergunta: string;
  resposta: boolean;
  explicacao: string;
};

const perguntas: Pergunta[] = [
    {
        pergunta: "Beber água com limão em jejum emagrece.",
        resposta: false,
        explicacao: "Falso. Beber água com limão em jejum não tem propriedades mágicas para emagrecimento. Apesar de ser uma bebida saudável e hidratante, não há evidências científicas que comprovem que ela acelera o metabolismo ou queima gordura."
    },
    {
        pergunta: "O ômega-3 é importante para a saúde do cérebro.",
        resposta: true,
        explicacao: "Verdadeiro. O ômega-3 é um ácido graxo essencial que contribui para a saúde cerebral, melhorando a memória e a função cognitiva."
    },
    {
        pergunta: "Comer carboidratos à noite engorda.",
        resposta: false,
        explicacao: "Falso. O ganho de peso está relacionado ao consumo excessivo de calorias ao longo do dia, não ao horário em que os carboidratos são consumidos."
    },
    {
        pergunta: "O consumo de fibras ajuda no funcionamento do intestino.",
        resposta: true,
        explicacao: "Verdadeiro. As fibras são essenciais para a saúde intestinal, ajudando a regular o trânsito e prevenir a constipação."
    },
    {
        pergunta: "Alimentos orgânicos são sempre mais nutritivos.",
        resposta: false,
        explicacao: "Falso. Alimentos orgânicos podem ter menos pesticidas, mas não necessariamente são mais nutritivos do que os convencionais."
    },
    {
        pergunta: "Ovo aumenta o colesterol ruim.",
        resposta: false,
        explicacao: "Falso. O ovo contém colesterol, mas seu consumo moderado não está diretamente associado ao aumento do colesterol ruim (LDL) em pessoas saudáveis."
    },
    {
        pergunta: "Chá verde emagrece.",
        resposta: false,
        explicacao: "Falso. O chá verde pode ajudar no metabolismo, mas não é uma solução mágica para emagrecimento. Ele deve ser combinado com uma dieta equilibrada e exercícios."
    },
    {
        pergunta: "Comer abacaxi à noite faz mal.",
        resposta: false,
        explicacao: "Falso. Não há evidências científicas que comprovem que comer abacaxi à noite faz mal. Ele é rico em fibras e vitaminas, podendo ser consumido em qualquer horário."
    },
    {
        pergunta: "Beber água é essencial para manter o corpo hidratado.",
        resposta: true,
        explicacao: "Verdadeiro. A água é vital para o funcionamento do organismo, ajudando na regulação da temperatura, transporte de nutrientes e eliminação de toxinas."
    },
    {
        pergunta: "Açúcar mascavo é mais saudável que açúcar refinado.",
        resposta: false,
        explicacao: "Falso. Açúcar mascavo contém alguns minerais, mas a diferença nutricional em relação ao açúcar refinado é mínima. Ambos devem ser consumidos com moderação."
    },
    {
        pergunta: "A vitamina D é importante para a saúde dos ossos.",
        resposta: true,
        explicacao: "Verdadeiro. A vitamina D ajuda na absorção de cálcio, sendo fundamental para a saúde óssea e a prevenção de doenças como a osteoporose."
    },
    {
        pergunta: "Glúten faz mal para todo mundo.",
        resposta: false,
        explicacao: "Falso. O glúten só faz mal para pessoas com doença celíaca ou sensibilidade ao glúten. Para a maioria das pessoas, ele é seguro e não causa problemas."
    },
    {
        pergunta: "Comer banana previne cãibras.",
        resposta: true,
        explicacao: "Verdadeiro. A banana é rica em potássio, um mineral importante para a prevenção de cãibras musculares."
    },
    {
        pergunta: "Dietas sem carboidratos são mais saudáveis.",
        resposta: false,
        explicacao: "Falso. Carboidratos são uma fonte importante de energia para o corpo. Dietas sem carboidratos podem levar à falta de nutrientes e energia."
    },
    {
        pergunta: "O consumo de frutas e vegetais reduz o risco de doenças crônicas.",
        resposta: true,
        explicacao: "Verdadeiro. Frutas e vegetais são ricos em vitaminas, minerais e antioxidantes, que ajudam a prevenir doenças como diabetes, hipertensão e problemas cardíacos."
    },
];

const Quiz: React.FC = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respondeu, setRespondeu] = useState(false);
  const [respostaCerta, setRespostaCerta] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const pergunta = perguntas[perguntaAtual];

  const handleResposta = (resposta: boolean) => {
    const correta = resposta === pergunta.resposta;
    if (correta) setPontuacao(p => p + 1);
    setRespostaCerta(correta);
    setRespondeu(true);
  };

  const handleProxima = () => {
    const proxima = perguntaAtual + 1;
    if (proxima < perguntas.length) {
      setPerguntaAtual(proxima);
      setRespondeu(false);
    } else {
      setMostrarResultado(true);
    }
  };

  const handleRecomecar = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setRespondeu(false);
    setMostrarResultado(false);
  };

  const getMensagem = () => {
    if (pontuacao <= 5) return "Aprender é um processo contínuo. Continue estudando!";
    if (pontuacao <= 10) return "Bom trabalho! Ainda há espaço para aprender mais.";
    return "Parabéns! Seu conhecimento sobre nutrição é impressionante!";
  };

  if (mostrarResultado) {
    return (
      <div className="bg-purple-200 flex h-96 flex-col justify-center items-center p-4 mb-24">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-xl w-full">
          <h2 className="text-xl font-bold mb-4">Quiz Concluído!</h2>
          <p>Você acertou {pontuacao} de {perguntas.length} perguntas.</p>
          <p className="mt-2">{getMensagem()}</p>
          <button
            onClick={handleRecomecar}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Recomeçar Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-96 flex flex-col justify-center items-center p-4 transition-colors duration-300 mb-24 ${respondeu ? (respostaCerta ? "bg-green-300" : "bg-red-300") : "bg-purple-200"}`}>
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-full">
        <h2 className="text-lg font-bold mb-4">Pergunta {perguntaAtual + 1}:</h2>
        <p className="mb-6 text-gray-700">{pergunta.pergunta}</p>
        <div className="flex justify-around mb-4">
          <button
            className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
            onClick={() => handleResposta(true)}
            disabled={respondeu}
          >
            Verdadeiro
          </button>
          <button
            className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
            onClick={() => handleResposta(false)}
            disabled={respondeu}
          >
            Falso
          </button>
        </div>

        {respondeu && (
          <>
            <p className="text-sm text-gray-600 mb-4">{pergunta.explicacao}</p>
            <button
              onClick={handleProxima}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Próxima Pergunta →
            </button>
            <button
              onClick={handleRecomecar}
              className="ml-4 inline-flex items-center bg-gray-300 px-3 py-2 rounded hover:bg-gray-400 transition"
              title="Recomeçar Quiz"
            >
              🔁
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
