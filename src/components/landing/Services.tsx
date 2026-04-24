import { Code2, Cloud, ShieldCheck, BarChart3, Smartphone, Cog } from "lucide-react";

const services = [
  { icon: Code2, title: "Desarrollo a medida", desc: "Aplicaciones web y plataformas SaaS construidas con tecnologías modernas y escalables." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Migración, arquitectura cloud y automatización para operar con agilidad y seguridad." },
  { icon: ShieldCheck, title: "Ciberseguridad", desc: "Auditorías, hardening y cumplimiento para proteger tus activos críticos." },
  { icon: BarChart3, title: "Datos & BI", desc: "Pipelines de datos, dashboards y modelos que convierten información en decisiones." },
  { icon: Smartphone, title: "Apps móviles", desc: "Experiencias nativas e híbridas pensadas para tus usuarios y tu negocio." },
  { icon: Cog, title: "Consultoría IT", desc: "Acompañamiento estratégico para alinear tecnología y objetivos del negocio." },
];

const Services = () => (
  <section id="servicios" className="py-24 bg-gradient-subtle">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <span className="text-sm font-semibold text-primary-glow uppercase tracking-wider">Servicios</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Todo lo que tu negocio necesita, en un solo lugar</h2>
        <p className="text-muted-foreground text-lg">Combinamos talento, experiencia y tecnología para entregar soluciones end-to-end.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
          >
            <div className="inline-flex p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-glow mb-5 group-hover:scale-110 transition-smooth">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
