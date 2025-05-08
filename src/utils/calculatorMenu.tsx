import React from 'react';

type CalculatorMenuProps = {
  onSelect: (calculator: 'imc' | 'protein' | 'tmb' | 'bodyfat' | 'water' | 'idealweight') => void;
};

const CalculatorMenu: React.FC<CalculatorMenuProps> = ({ onSelect }) => {
  const calculators = [
    { id: 'imc', name: 'IMC' },
    { id: 'protein', name: 'Proteína' },
    { id: 'tmb', name: 'TMB' },
    { id: 'bodyfat', name: 'Gordura' },
    { id: 'water', name: 'Água' },
    { id: 'idealweight', name: 'Peso Ideal' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 my-8" data-name="calculator-menu">
      {calculators.map(calc => (
        <button
          key={calc.id}
          onClick={() => onSelect(calc.id as any)}
          className="px-6 py-3 text-white font-bold uppercase rounded-full 
                   bg-gradient-to-r from-indigo-400 to-indigo-600
                   hover:from-purple-400 hover:to-purple-700
                   transform hover:scale-105 transition-all
                   shadow-lg hover:shadow-xl"
          data-name={`calculator-button-${calc.id}`}
        >
          {calc.name}
        </button>
      ))}
    </div>
  );
};

export default CalculatorMenu;