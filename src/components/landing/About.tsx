const stats = [
  { value: "+50", label: "Proyectos entregados" },
  { value: "+30", label: "Clientes activos" },
  { value: "98%", label: "Satisfacción" },
  { value: "24/7", label: "Soporte" },
];

const About = () => (
  <section id="nosotros" className="py-24">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Sobre nosotros</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">
          Somos el partner tecnológico que tu empresa estaba esperando
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          En Restasat Solutions Hub creemos que la tecnología debe ser un acelerador, no un obstáculo. Por eso
          trabajamos codo a codo contigo para entender tus retos y entregar soluciones que generan impacto real.
        </p>
        <p className="text-muted-foreground text-lg">
          Nuestro equipo combina experiencia técnica, visión de negocio y pasión por hacer las cosas bien.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="p-8 rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant">
            <div className="text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
            <div className="text-primary-foreground/80 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
