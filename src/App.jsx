import { useEffect, useState } from "react";
import Perfil from "./components/Perfil";

function App() {
  const [oscuro, setOscuro] = useState(() => {
    const guardado = localStorage.getItem("tema");
    if (guardado) return guardado === "oscuro";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", oscuro);
    localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
  }, [oscuro]);

  return (
    <div className="min-h-screen bg-fondo dark:bg-gray-900 relative">
      <button
        onClick={() => setOscuro((v) => !v)}
        aria-label="Cambiar tema"
        className="fixed top-4 right-4 z-20 bg-white dark:bg-gray-800 shadow-md rounded-full pl-3 pr-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform"
      >
        <span className="text-xl">{oscuro ? "🌙" : "☀️"}</span>
        {oscuro ? "Oscuro" : "Claro"}
      </button>
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
        aria-hidden="true"
      >
        <img
          src="/logocruz.jpg"
          alt=""
          className="w-[1000px] max-w-[80vw] opacity-[0.04]"
        />
      </div>
      <div className="relative z-10">
        <Perfil />
        <footer className="text-center text-gray-400 dark:text-gray-500 text-sm py-8">
          Backend en Node.js, frontend en React + Vite, desplegado en AWS — este mismo portafolio es la primera prueba de las habilidades descritas arriba.
        </footer>
      </div>
    </div>
  );
}

export default App;
