import React from 'react';
import { useAuth } from '../../auth/AuthContext'; // Caminho correto

const Home: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">GoFit</h1>
          <div className="flex items-center space-x-4">
        <span className="text-gray-700">Olá, {user?.name}</span>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Sair
        </button>
      </div>
    </div>
  </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bem-vindo ao GoFit!
            </h2>
            <p className="text-gray-600 mb-4">
              Você está logado como: {user?.email}
            </p>
            <p className="text-gray-500">
              Conteúdo principal da aplicação será exibido aqui.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;