import React, { useState } from "react";
import CalculatorMenu from "../../utils/calculatorMenu";
import BodyFatCalculator from "../../utils/bodyFatCalculator";
import IMCCalculator from "../../utils/imcCalculator";
import ProteinCalculator from "../../utils/proteinCalculator";
import TMBCalculator from "../../utils/tmbCalculator";
import WaterCalculator from "../../utils/waterCalculator";
import IdealWeightCalculator from "../../utils/idealWeightCalculator";
import { Menu } from "../../components/Menu";

type CalculatorType =
  | "imc"
  | "protein"
  | "tmb"
  | "bodyfat"
  | "water"
  | "idealweight";

export const Calculators: React.FC = () => {
  const [_isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const [selectedCalculator, setSelectedCalculator] =
    useState<CalculatorType | null>(null);

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case "imc":
        return <IMCCalculator />;
      case "protein":
        return <ProteinCalculator />;
      case "tmb":
        return <TMBCalculator />;
      case "bodyfat":
        return <BodyFatCalculator />;
      case "water":
        return <WaterCalculator />;
      case "idealweight":
        return <IdealWeightCalculator />;
      default:
        return (
          <div className="text-center py-20">
            <div className="mb-8">
              {/* <div className="text-8xl mb-6 animate-bounce">🧮</div> */}
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Selecione uma Calculadora
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Escolha entre as opções acima para começar a calcular seus dados
                de saúde e fitness
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-blue-900 mb-2">IMC</h3>
                <p className="text-sm text-gray-700">
                  Índice de Massa Corporal
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">🥩</div>
                <h3 className="font-bold text-green-900 mb-2">Proteína</h3>
                <p className="text-sm text-gray-700">Necessidade Diária</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="font-bold text-orange-900 mb-2">TMB</h3>
                <p className="text-sm text-gray-700">Taxa Metabólica Basal</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">📏</div>
                <h3 className="font-bold text-purple-900 mb-2">Gordura</h3>
                <p className="text-sm text-gray-700">Percentual Corporal</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border-2 border-cyan-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">💧</div>
                <h3 className="font-bold text-cyan-900 mb-2">Água</h3>
                <p className="text-sm text-gray-700">Consumo Ideal</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-2 border-pink-300 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="font-bold text-pink-900 mb-2">Peso Ideal</h3>
                <p className="text-sm text-gray-700">Faixa Recomendada</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Menu onToggleMenu={handleToggleMenu} />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Calculadoras de Saúde
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ferramentas precisas para monitorar sua saúde e atingir seus
              objetivos
            </p>
          </div>

          {/* Calculator Menu */}
          <div className="mb-8">
            <CalculatorMenu onSelect={setSelectedCalculator} />
          </div>

          {/* Calculator Content */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-purple-200 backdrop-blur-sm bg-opacity-95">
            {renderCalculator()}
          </div>

          {/* Info Cards */}
          {!selectedCalculator && (
            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg border-2 border-purple-300 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">💪</div>
                  <h3 className="text-2xl font-bold text-purple-900">
                    Saúde em Foco
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Monitore seus indicadores de saúde com precisão e tome
                  decisões informadas sobre seu bem-estar físico e nutricional.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl shadow-lg border-2 border-blue-300 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">🎯</div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Resultados Precisos
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Utilize fórmulas validadas cientificamente para obter cálculos
                  confiáveis e personalizados para suas necessidades
                  individuais.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-lg font-medium">
              © 2025 GoFit. All rights reserved.
            </p>
            <div className="w-2 h-2 bg-white rounded-full hidden md:block"></div>
            <p className="text-lg hover:text-purple-300 transition-colors cursor-pointer font-medium">
              Informações
            </p>
          </div>
        </div>
      </footer> */}
      <footer className="flex justify-center bg-gray-300 p-8 items-center gap-1">
        <p>© 2025 GoFit. All rights reserved.</p>
        <p>Informações</p>
      </footer>
    </div>
  );
};
