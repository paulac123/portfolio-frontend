function Experiencia({ experiencia }) {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-naranja pl-4">
        Experiencia Profesional
      </h3>

      <div className="flex flex-col gap-5">
        {experiencia.map((exp, i) => {
          const isBurgerStation = /burger|burguer|burge/i.test(JSON.stringify(exp));
          return (
          <div
            key={i}
            onClick={isBurgerStation ? () => window.open('https://fronted-burger-station.vercel.app/', '_blank', 'noopener,noreferrer') : undefined}
            className={`bg-white rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-l-4 border-lila ${isBurgerStation ? 'cursor-pointer' : ''}`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  {exp.empresa || exp.modalidad}
                </h4>
                <p className="text-naranja font-semibold">{exp.rol}</p>

                {exp.ubicacion && (
                  <p className="text-gray-400 text-sm">📍 {exp.ubicacion}</p>
                )}
              </div>

              {exp.periodo && (
                <span className="bg-lila-claro text-lila text-xs font-bold px-3 py-1 rounded-full">
                  {exp.periodo}
                </span>
              )}
            </div>

            {exp.descripcion && (
              <p className="text-gray-600 text-sm mb-3">{exp.descripcion}</p>
            )}

            {/* proyectos */}
            {exp.proyectos && (
              <div className="flex flex-col gap-3 mt-3">
                {exp.proyectos.map((proyecto, j) => (
                  <div key={j} className="bg-lila-claro rounded-lg p-4">
                    <h5 className="font-bold text-gray-700 mb-2">
                      🚀 {proyecto.cliente}
                    </h5>

                    <ul className="flex flex-col gap-1">
                      {proyecto.logros.map((logro, k) => (
                        <li
                          key={k}
                          className="text-gray-600 text-sm flex items-start gap-2"
                        >
                          <span className="text-naranja mt-0.5">▸</span>
                          {logro}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* logros simples */}
            {exp.logros && !exp.proyectos && (
              <ul className="flex flex-col gap-1 mt-2">
                {exp.logros.map((logro, k) => (
                  <li
                    key={k}
                    className="text-gray-600 text-sm flex items-start gap-2"
                  >
                    <span className="text-naranja mt-0.5">▸</span>
                    {logro}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )})}
      </div>
    </section>
  );
}

export default Experiencia;
