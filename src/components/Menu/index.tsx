import { useState } from "react";
import levantador_de_peso from "../../assets/images/levantamento-de-peso.png"


export function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen">
            <nav className="flex justify-evenly items-center p-4 gap-2 bg-violet-500 rounded-md">

                <div className="flex justify-center items-center gap-2">
                    <img src={levantador_de_peso} alt="Homem levantando peso" className="w-10 h-10" />
                    <h1 className="text-gray-50 font-roboto text-4xl">GoFit</h1>
                </div>

                <div className="flex flex-col md:flex-row">

                    <button className="rounded-full p-2 text-gray-50 font-roboto text-xl hover:bg-violet-800">
                        Academia
                    </button>

                    <button className="rounded-full p-2 text-gray-50 font-roboto text-xl hover:bg-violet-800" onClick={() => setIsOpen(!isOpen)}>
                        Nutrição
                        {/* <select className="text-gray-500">
                            <option>Macro x Micro</option>
                            <option>Macro x Micro</option>
                            <option>Macro x Micro</option>
                            <option>Macro x Micro</option>
                            <option>Macro x Micro</option>
                            <option>Macro x Micro</option>
                        </select> */}
                    </button>
                    
                    <button className="rounded-full p-2 text-gray-50 font-roboto text-xl hover:bg-violet-800">
                        Calculadoras
                    </button>

                    <button className="rounded-full p-2 text-gray-50 font-roboto text-xl hover:bg-violet-800">
                        Quem Somos
                    </button>
                    
                </div>

            </nav>
            {isOpen && (
                <div className="bg-white shadow-lg top-full rounded-md">
                    <ul>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Macro x Micro</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Caloria</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Info Nutricional</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Dieta</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Saúde Mental</li>
                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Fato x Mito</li>
                    </ul>
                </div>
            )}
        </div>
    )
}