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
    <div className="max-w-6xl mx-auto px-6 py-8">
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
        <div className="flex justify-center gap-4 flex-wrap">
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

          {perfil.informacion.whatsapp && (
            <a
              href={perfil.informacion.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-md flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          )}
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
