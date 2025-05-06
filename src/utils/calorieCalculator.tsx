import React, { useState, FormEvent } from 'react';

const CalorieCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(0);
  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [goal, setGoal] = useState<'maintain' | 'lose' | 'gain'>('maintain');
  const [targetWeight, setTargetWeight] = useState<number>(0);
  const [activityHours, setActivityHours] = useState<number>(0);
  const [activityLevel, setActivityLevel] = useState<'sedentary' | 'light' | 'moderate' | 'active'>('sedentary');
  
  const [result, setResult] = useState<{
    dailyCalories: number;
    currentWeight: number;
    targetWeight?: number;
    weeksToReachGoal?: number;
    message: string;
  } | null>(null);

  const showTargetWeight = goal === 'lose' || goal === 'gain';

  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725
  };

  const calculateCalories = (e: FormEvent) => {
    e.preventDefault();

    let bmr: number;
    if (gender === 'male') {
      bmr = 66.5 + (13.75 * currentWeight) + (5.003 * height) - (6.755 * age);
    } else {
      bmr = 655.1 + (9.563 * currentWeight) + (1.850 * height) - (4.676 * age);
    }

    let activityFactor = activityFactors[activityLevel] + (activityHours * 0.025);
    activityFactor = Math.min(activityFactor, 1.9);

    let maintenanceCalories = bmr * activityFactor;

    let dailyCalories: number;
    let weeksToReachGoal: number | undefined;
    let message: string;

    if (goal === 'lose') {
      const weightDifference = currentWeight - targetWeight;
      dailyCalories = maintenanceCalories - 500;
      weeksToReachGoal = Math.round(weightDifference / 0.5);
      message = `Para perder peso de ${currentWeight}kg para ${targetWeight}kg`;
    } else if (goal === 'gain') {
      const weightDifference = targetWeight - currentWeight;
      dailyCalories = maintenanceCalories + 500;
      weeksToReachGoal = Math.round(weightDifference / 0.5);
      message = `Para ganhar peso de ${currentWeight}kg para ${targetWeight}kg`;
    } else {
      dailyCalories = maintenanceCalories;
      message = `Para manter seu peso atual de ${currentWeight}kg`;
    }

    setResult({
      dailyCalories: Math.round(dailyCalories),
      currentWeight,
      targetWeight: goal !== 'maintain' ? targetWeight : undefined,
      weeksToReachGoal,
      message
    });
  };

  return (
    <section className="container mx-auto max-w-2xl p-6 bg-white rounded-lg shadow-md mb-24">
      <h1 className="text-2xl font-bold text-center mb-6 text-purple-700">Calculadora de Calorias Diárias</h1>
      
      <form onSubmit={calculateCalories} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna 1 */}
          <div className="space-y-4">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Idade:</label>
              <input
                type="number"
                id="age"
                value={age || ''}
                onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
                min="10"
                max="100"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Sexo:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              >
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>

            <div>
              <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Altura (cm):</label>
              <input
                type="number"
                id="height"
                step="0.1"
                value={height || ''}
                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
                min="100"
                max="250"
              />
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="space-y-4">
            <div>
              <label htmlFor="currentWeight" className="block text-sm font-medium text-gray-700 mb-1">Peso Atual (kg):</label>
              <input
                type="number"
                id="currentWeight"
                step="0.1"
                value={currentWeight || ''}
                onChange={(e) => setCurrentWeight(parseFloat(e.target.value) || 0)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
                min="30"
                max="300"
              />
            </div>

            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">Objetivo:</label>
              <select
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value as 'maintain' | 'lose' | 'gain')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              >
                <option value="maintain">Manter peso</option>
                <option value="lose">Emagrecer</option>
                <option value="gain">Engordar</option>
              </select>
            </div>

            {showTargetWeight && (
              <div>
                <label htmlFor="targetWeight" className="block text-sm font-medium text-gray-700 mb-1">Peso Desejado (kg):</label>
                <input
                  type="number"
                  id="targetWeight"
                  step="0.1"
                  value={targetWeight || ''}
                  onChange={(e) => setTargetWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required={showTargetWeight}
                  min={goal === 'lose' ? 30 : currentWeight}
                  max={goal === 'gain' ? 300 : currentWeight}
                />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="activityHours" className="block text-sm font-medium text-gray-700 mb-1">Horas de Exercício por Semana:</label>
            <input
              type="number"
              id="activityHours"
              step="0.1"
              value={activityHours || ''}
              onChange={(e) => setActivityHours(parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
              min="0"
              max="40"
            />
          </div>

          <div>
            <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-1">Nível de Atividade:</label>
            <select
              id="activityLevel"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value as 'sedentary' | 'light' | 'moderate' | 'active')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="sedentary">Sedentário (pouco ou nenhum exercício)</option>
              <option value="light">Leve (1-3 dias/semana)</option>
              <option value="moderate">Moderado (3-5 dias/semana)</option>
              <option value="active">Ativo (6-7 dias/semana)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Calcular Calorias Diárias
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 p-6 bg-purple-50 border border-purple-200 rounded-md space-y-4">
          <h3 className="text-xl font-bold text-purple-800 text-center">{result.message}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-500">Peso Atual</p>
              <p className="text-2xl font-bold text-purple-700">{result.currentWeight} kg</p>
            </div>
            
            {result.targetWeight && (
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-sm text-gray-500">Peso Desejado</p>
                <p className="text-2xl font-bold text-purple-700">{result.targetWeight} kg</p>
              </div>
            )}
          </div>

          <div className="text-center py-4">
            <p className="text-lg font-medium">Você deve consumir:</p>
            <p className="text-3xl font-bold text-purple-700 my-2">{result.dailyCalories} calorias/dia</p>
            <p className="text-sm text-gray-500">Baseado em sua taxa metabólica e nível de atividade</p>
          </div>

          {result.weeksToReachGoal && (
            <div className="text-center pt-4 border-t border-purple-100">
              <p className="text-purple-800">
                <span className="font-bold">Tempo estimado:</span> aproximadamente {result.weeksToReachGoal} semanas
                <br />
                <span className="text-sm text-gray-600">(considerando uma mudança de 0.5kg por semana)</span>
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CalorieCalculator;