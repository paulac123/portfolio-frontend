function Competencias({ competencias }) {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-naranja pl-4">
        Competencias
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(competencias).map(([categoria, valor]) => (
          <div
            key={categoria}
            className="bg-white rounded-xl p-5 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default border-t-4 border-naranja"
          >
            <p className="text-xs font-bold text-naranja uppercase tracking-wider mb-2">
              {categoria.replace(/_/g, " ")}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{valor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competencias;
