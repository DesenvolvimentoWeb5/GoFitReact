import { Menu } from "../../components/Menu";
import running from "../../assets/images/running.png";
import nutricao from "../../assets/images/nutricao.jpeg";
import academia from "../../assets/images/academia.jpg";
import calculadora from "../../assets/images/calculadora.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const [_isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div>
      <Menu onToggleMenu={handleToggleMenu} />
      <div>
        <section className="min-h-screen mt-[4.5rem] md:mt-[70px] bg-gradient-to-br from-roxo_padrao to-roxo-gradiente px-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8">
            <div className="flex flex-col text-center font-roboto">
              <h1 className="text-6xl mb-4 font-bold">
                Bem-vindo à <span className="text-gray-50">Gofit</span>!
              </h1>
              <p className="text-4xl font-bold">
                O seu guia para saúde e fitness!
              </p>
              <p className="text-lg max-w-[500px] mt-5">
                Seu recurso preferido para obter informações sobre nutrição e
                inspiração para exercícios físicos
              </p>
            </div>
            <img src={running} alt="Pessoas correndo" />
          </div>
        </section>
        <section className="mb-12">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-4xl mt-12 gap-2">
              Descubra tudo sobre GoFit
            </h1>
            <h2 className="mt-2">
              Explore nossas ferramentas e informações sobre nutrição, academia
              e saúde!
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 mt-12 justify-center items-center">
            <div className="flex flex-col justify-center items-center shadow-2xl p-8 transform transition duration-300 hover:scale-105">
              <img
                src={nutricao}
                alt="Comida"
                className="rounded-full shadow-lg w-40 h-40 object-cover"
              />
              <h1 className="font-bold mt-4 text-lg">Nutrição</h1>
              <h2 className="text-center max-w-[300px] mt-4">
                Descubra tudo que você precisa saber sobre nutrição
              </h2>
              <Link to="/nutrition">
                <button className="bg-roxo_padrao hover:bg-violet-700 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-full">
                  Explorar
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center shadow-2xl p-8 transform transition duration-300 hover:scale-105">
              <img
                src={academia}
                alt="Pesos de academia"
                className="rounded-full shadow-lg w-40 h-40 object-cover"
              />
              <h1 className="font-bold mt-4 text-lg">Academia</h1>
              <h2 className="text-center max-w-[300px] mt-4">
                Explore tudo o que você precisa saber sobre o universo da
                academia.
              </h2>
              <Link to="/gym">
                <button className="bg-roxo_padrao hover:bg-violet-700 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-full">
                  Explorar
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center shadow-2xl p-8 transform transition duration-300 hover:scale-105">
              <img
                src={calculadora}
                alt="Calculadora"
                className="rounded-full shadow-lg w-40 h-40 object-cover"
              />
              <h1 className="font-bold mt-4 text-lg">Calculadoras</h1>
              <h2 className="text-center max-w-[300px] mt-4">
                Saiba tudo sobre calculadoras de IMC, gordura corporal e muito
                mais!
              </h2>
              <Link to="/calculators">
                <button className="bg-roxo_padrao hover:bg-violet-700 transition-colors duration-300 ease-in-out text-gray-50 mt-4 px-6 py-2 rounded-full">
                  Explorar
                </button>
              </Link>
            </div>
          </div>
        </section>
        <footer className="flex justify-center bg-gray-300 p-8 items-center gap-1">
          <p>© 2025 GoFit. All rights reserved.</p>
          <p>Informações</p>
        </footer>
      </div>
    </div>
  );
}
