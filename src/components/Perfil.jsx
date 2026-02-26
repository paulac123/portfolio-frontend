import { useEffect, useState } from "react";
import api from "../services/api";
import Experiencia from "./Experiencia";
import Competencias from "./Competencias";
import fotoPerfil from "../assets/fotoPerfil.jpg";

function Perfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        const response = await api.get("/perfil");
        setPerfil(response.data);
      } catch (error) {
        console.error("Error cargando perfil:", error);
      }
    };
    cargarPerfil();
  }, []);

  if (!perfil) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-naranja text-xl font-semibold animate-pulse">
          Cargando...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* ── princial ── */}
      <section className="text-center mb-10">
        <img
          src={fotoPerfil}
          alt="Foto de Paula"
          className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {perfil.informacion.nombre}
        </h1>
        <h2 className="text-xl text-naranja font-semibold mb-3">
          {perfil.informacion.titulo}
        </h2>
        <p className="text-gray-500 mb-6">📍 {perfil.informacion.ubicacion}</p>
        <div className="flex justify-center gap-4">
          <a
            href={perfil.informacion.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-naranja text-white px-6 py-2 rounded-full font-semibold hover:bg-naranja-claro transition-all duration-300 shadow-md"
          >
            LinkedIn
          </a>

          <a
            href={perfil.informacion.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-naranja text-naranja px-6 py-2 rounded-full font-semibold hover:bg-naranja hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ── perfil profesional ── */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-1 border-l-4 border-naranja pl-4">
          Perfil Profesional
        </h3>
        <p className="text-gray-600 leading-relaxed bg-white rounded-xl p-6 shadow-md">
          {perfil.perfilProfesional}
        </p>
      </section>

      <Competencias competencias={perfil.competencias} />
      <Experiencia experiencia={perfil.experienciaProfesional} />
    </div>
  );
}

export default Perfil;
