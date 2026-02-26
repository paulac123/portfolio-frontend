import { useEffect, useState } from "react";
import api from "../services/api";
import "./Perfil.css";

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
    return <p>Cargando...</p>;
  }

  return (
    <div className="perfil-container">
      <section>
        <h1>{perfil.informacion.nombre}</h1>
        <h2>{perfil.informacion.titulo}</h2>
        <p>{perfil.informacion.ubicacion}</p>
        <p>{perfil.informacion.telefono}</p>
        <p>{perfil.informacion.email}</p>

        <div>
          <a
            href={perfil.informacion.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <a
          href={perfil.informacion.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </section>

      <section>
        <h3>Perfil Profesional</h3>
        <p>{perfil.perfilProfesional}</p>
      </section>

      <section>
        <h3>Competencias</h3>
        <p>{perfil.competencias.backend}</p>
        <p>{perfil.competencias.frontend}</p>
        <p>{perfil.competencias.bases_de_datos}</p>
        <p>{perfil.competencias.devops}</p>
        <p>{perfil.competencias.testing}</p>
        <p>{perfil.competencias.marketing}</p>
      </section>

      <section>
        <h3>Experiencia Profesional</h3>

        {perfil.experienciaProfesional.map((exp, i) => {
          return (
            <div key={i}>
              <h4>{exp.empresa}</h4>
              <h4>{exp.rol}</h4>
              <p>{exp.descripcion}</p>
              <p>{exp.logros}</p>
              <p>{exp.modalidad}</p>
              <p>{exp.ubicacion}</p>
              <p>{exp.periodo}</p>

              {exp.proyectos &&
                exp.proyectos.map((proyecto, j) => {
                  return (
                    <div key={j}>
                      <h4>{proyecto.cliente}</h4>

                      <ul>
                        {proyecto.logros &&
                          proyecto.logros.map((logro, k) => {
                            return <li key={k}>{logro}</li>;
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Perfil;
