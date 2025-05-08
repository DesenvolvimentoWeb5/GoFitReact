import React, { useState } from 'react';

const WaterCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [activity, setActivity] = useState<string>('1.2');
  const [climate, setClimate] = useState<string>('1');
  const [result, setResult] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const calculateWater = () => {
    if (!weight) {
      alert('Por favor, preencha seu peso');
      return;
    }

    const weightNum = parseFloat(weight);
    const activityNum = parseFloat(activity);
    const climateNum = parseFloat(climate);

    // Base calculation: 35ml per kg of body weight
    const baseWater = weightNum * 35;
    // Adjust for activity level and climate
    const totalWater = (baseWater * activityNum * climateNum).toFixed(0);
    
    setResult(totalWater);
  };

  return (
    <div className="calculator-container max-w-md mx-auto" data-name="water-calculator">
      <div className="flex justify-center mb-6">
        <h2 className="calculator-title text-2xl font-bold">Calculadora de Água</h2>
        <button 
          className="info-button mt-1.5 ml-2 w-8 h-8 rounded-full bg-blue-500 text-white font-bold"
          onClick={() => setShowInfo(true)}
          data-name="water-info-button"
        >
          ?
        </button>
      </div>

      <div className="input-group mb-4" data-name="water-weight-input">
        <label htmlFor="weight" className="block mb-2 font-medium">Peso (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Digite seu peso"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="input-group mb-4" data-name="water-activity-input">
        <label htmlFor="activity" className="block mb-2 font-medium">Nível de Atividade:</label>
        <select
          id="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="1.2">Sedentário</option>
          <option value="1.3">Levemente Ativo</option>
          <option value="1.4">Moderadamente Ativo</option>
          <option value="1.5">Muito Ativo</option>
          <option value="1.6">Extremamente Ativo</option>
        </select>
      </div>

      <div className="input-group mb-4" data-name="water-climate-input">
        <label htmlFor="climate" className="block mb-2 font-medium">Clima:</label>
        <select
          id="climate"
          value={climate}
          onChange={(e) => setClimate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="1">Temperado</option>
          <option value="1.1">Quente</option>
          <option value="1.2">Muito Quente</option>
        </select>
      </div>

      <button 
        className="calculator-button w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={calculateWater}
        data-name="water-calculate-button"
      >
        Calcular
      </button>

      {result && (
        <div className="result mt-6 text-center" data-name="water-result">
          <p className="text-lg">Consumo diário recomendado de água:</p>
          <p className="result-value text-3xl font-bold text-blue-600">{result}ml</p>
          <p className="text-sm text-gray-600 mt-2">({(parseInt(result)/1000).toFixed(1)} litros)</p>
        </div>
      )}

      {showInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowInfo(false)}
          />
          <div className="info-modal relative bg-white p-6 rounded-lg max-w-md mx-auto z-10" data-name="water-info-modal">
            <h3 className="text-xl font-bold mb-4">Sobre o Consumo de Água</h3>
            <p className="mb-4">O cálculo é baseado no seu peso e ajustado de acordo com seu nível de atividade física e clima.</p>
            <p className="mb-4">
              <strong>Fatores que aumentam a necessidade de água:</strong>
              <ul className="list-disc pl-5">
                <li>Exercício físico intenso</li>
                <li>Clima quente</li>
                <li>Altitude elevada</li>
                <li>Dieta rica em proteínas</li>
              </ul>
            </p>
            <button 
              className="calculator-button w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowInfo(false)}
              data-name="water-info-close-button"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaterCalculator;