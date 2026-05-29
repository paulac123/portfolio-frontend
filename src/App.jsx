import Perfil from "./components/Perfil";

function App() {
  return (
    <div className="min-h-screen bg-fondo relative">
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
      </div>
    </div>
  );
}

export default App;
