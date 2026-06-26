function Experiencia({ experiencia }) {
  const items = experiencia.flatMap((exp) => {
    if (exp.proyectos) {
      return exp.proyectos.map((proyecto) => ({
        nombre: proyecto.cliente,
        rol: exp.rol,
        modalidad: exp.modalidad,
        periodo: exp.periodo,
        ubicacion: exp.ubicacion,
        url: proyecto.url,
        imagen: proyecto.imagen,
        logros: proyecto.logros,
        stack: proyecto.stack || exp.stack,
        dificultad: proyecto.dificultad || exp.dificultad,
      }));
    }
    return [{
      nombre: exp.empresa || exp.modalidad,
      rol: exp.rol,
      periodo: exp.periodo,
      ubicacion: exp.ubicacion,
      url: exp.url,
      imagen: exp.imagen,
      logros: exp.logros,
      descripcion: exp.descripcion,
      stack: exp.stack,
      dificultad: exp.dificultad,
    }];
  });

  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-naranja pl-4">
        Experiencia Profesional
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, i) => {
          const isClickable = !!item.url;
          return (
            <div
              key={i}
              onClick={isClickable ? () => window.open(item.url, '_blank', 'noopener,noreferrer') : undefined}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-l-4 border-lila ${isClickable ? 'cursor-pointer' : ''}`}
            >
              {item.imagen && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  {isClickable && (
                    <span className="absolute bottom-3 right-3 bg-naranja text-white text-xs font-bold px-3 py-1 rounded-full">
                      Ver →
                    </span>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">{item.nombre}</h4>
                    <p className="text-naranja font-semibold">{item.rol}</p>
                    {item.modalidad && (
                      <p className="text-gray-500 text-sm">{item.modalidad}</p>
                    )}
                    {item.ubicacion && (
                      <p className="text-gray-400 text-sm">📍 {item.ubicacion}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {item.periodo && (
                      <span className="bg-lila-claro text-lila text-xs font-bold px-3 py-1 rounded-full">
                        {item.periodo}
                      </span>
                    )}
                    {isClickable && !item.imagen && (
                      <span className="bg-naranja text-white text-xs font-bold px-3 py-1 rounded-full">
                        Ver →
                      </span>
                    )}
                  </div>
                </div>

                {item.descripcion && (
                  <p className="text-gray-600 text-sm mb-3">{item.descripcion}</p>
                )}

                {item.stack && (
                  <div className="mb-3">
                    <span className="text-xs font-bold text-naranja uppercase tracking-wider">Stack Tecnológico</span>
                    <p className="text-gray-700 text-sm font-medium mt-1">{item.stack}</p>
                  </div>
                )}

                {item.dificultad && (
                  <div className="mb-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span className="text-xs font-bold text-naranja uppercase tracking-wider">Reto Técnico</span>
                    <p className="text-gray-600 text-sm italic mt-1">{item.dificultad}</p>
                  </div>
                )}

                {item.logros && (
                  <ul className="flex flex-col gap-1 mt-2">
                    {item.logros.map((logro, k) => (
                      <li key={k} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-naranja mt-0.5">▸</span>
                        {logro}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experiencia;
