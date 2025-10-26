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
            <h2 className="text-2xl font-bold mb-4">
              Selecione uma calculadora
            </h2>
            <p className="text-gray-600">
              Escolha entre as opções acima para começar
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <Menu onToggleMenu={handleToggleMenu} />
      <div className="min-h-screen bg-gray-50 mt-10 flex justify-center items-center">
        <div className="container mx-auto px-4 py-8">
          <CalculatorMenu onSelect={setSelectedCalculator} />
          <div className="bg-white rounded-lg shadow-md p-6">
            {renderCalculator()}
          </div>
        </div>
      </div>
      <footer className="flex justify-center bg-gray-300 p-8 items-center gap-1">
        <p>© 2025 GoFit. All rights reserved.</p>
        <p>Informações</p>
      </footer>
    </div>
  );
};
