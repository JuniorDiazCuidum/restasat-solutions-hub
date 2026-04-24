const steps = [
  { n: "01", title: "Descubrimiento", desc: "Analizamos tu negocio, objetivos y contexto técnico." },
  { n: "02", title: "Estrategia", desc: "Definimos roadmap, alcance y arquitectura óptima." },
  { n: "03", title: "Construcción", desc: "Desarrollamos con metodologías ágiles y entregas continuas." },
  { n: "04", title: "Evolución", desc: "Medimos, optimizamos y escalamos junto a ti." },
];

const Process = () => (
  <section id="proceso" className="py-24 bg-gradient-subtle">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Proceso</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Cómo trabajamos contigo</h2>
        <p className="text-muted-foreground text-lg">Un método probado que minimiza riesgos y maximiza resultados.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="p-8 rounded-xl bg-card border border-border hover:border-primary-glow/50 transition-smooth">
            <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">{s.n}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
