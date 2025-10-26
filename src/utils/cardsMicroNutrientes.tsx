import React, { useState } from "react";

interface MicronutrientCardProps {
  title: string;
  kcalPerGram: string;
  description: string;
  items: string[];
}

const MicronutrientCard: React.FC<MicronutrientCardProps> = ({
  title,
  kcalPerGram,
  description,
  items,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective w-full h-48 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative preserve-3d w-full h-full transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
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

const MicronutrientCards: React.FC = () => {
  const cardsData = [
    {
      title: "Vitamina",
      kcalPerGram: "0 kcal",
      description:
        "Fortalece o sistema imunológico, melhora a saúde da pele e auxilia no funcionamento do metabolismo.",
      items: [
        "Frutas cítricas",
        "Ovos e laticínios",
        "Grãos integrais",
        "Suplementos",
      ],
    },
    {
      title: "Mineral",
      kcalPerGram: "0 kcal",
      description:
        "Fortalece os ossos, regula o equilíbrio hidroeletrolítico e auxilia na produção de energia.",
      items: [
        "Castanhas e sementes",
        "Leite e derivados",
        "Grãos integrais",
        "Suplementos",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 p-4 max-w-4xl mx-auto">
      {cardsData.map((card, index) => (
        <MicronutrientCard key={index} {...card} />
      ))}
    </div>
  );
};

export default MicronutrientCards;
