import React, { useState } from 'react';

interface MacronutrientCardProps {
  title: string;
  kcalPerGram: string;
  description: string;
  items: string[];
}

const MacronutrientCard: React.FC<MacronutrientCardProps> = ({
  title,
  kcalPerGram,
  description,
  items
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective w-full h-48 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative preserve-3d w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="absolute backface-hidden w-full h-full bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-purple-600 font-medium">{kcalPerGram}</p>
        </div>
        
        {/* Back of Card */}
        <div className="absolute rotate-y-180 backface-hidden w-full h-54 bg-purple-50 rounded-lg shadow-md p-4 overflow-y-auto border border-purple-200">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MacronutrientCards: React.FC = () => {
  const cardsData = [
    {
      title: 'Carboidrato',
      kcalPerGram: '1g = 4 kcal',
      description: 'Fonte primária de energia para o corpo e a mente.',
      items: [
        'Grãos e cereais',
        'Tubérculos e raízes',
        'Frutas',
        'Leguminosas',
        'Açúcares e doces'
      ]
    },
    {
      title: 'Proteína',
      kcalPerGram: '1g = 4 kcal',
      description: 'Forma músculos, regula hormônios e fortalece o sistema imunológico.',
      items: [
        'Carnes',
        'Ovos e leite',
        'Sementes',
        'Leguminosas',
        'Whey Protein'
      ]
    },
    {
      title: 'Gordura',
      kcalPerGram: '1g = 9 kcal',
      description: 'Fornece energia, ajuda na absorção de vitaminas e regula a temperatura corporal.',
      items: [
        'Óleos vegetais',
        'Peixes gordurosos',
        'Carnes',
        'Laticínios',
        'Abacate'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-6 p-4 max-w-6xl">
      {cardsData.map((card, index) => (
        <MacronutrientCard key={index} {...card} />
      ))}
    </div>
  );
};

export default MacronutrientCards;