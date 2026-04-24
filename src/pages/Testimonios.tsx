import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarJavier from "@/assets/avatar-javier.jpg";
import avatarLucia from "@/assets/avatar-lucia.jpg";
import avatarAndres from "@/assets/avatar-andres.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";
import avatarCarlos from "@/assets/avatar-carlos.jpg";

const items = [
  {
    name: "María Lozano",
    role: "Chef",
    company: "Restaurante Almazara",
    text: "Cambiamos toda la cocina sin tocar nuestra liquidez. El servicio técnico responde en menos de 4 horas.",
    avatar: avatarMaria,
  },
  {
    name: "Javier Ruiz",
    role: "Director",
    company: "Grupo Mediterráneo",
    text: "Tres locales equipados al completo. Restasat es ya parte de nuestro equipo.",
    avatar: avatarJavier,
  },
  {
    name: "Lucía Romero",
    role: "Propietaria",
    company: "Café Norte",
    text: "Empezamos con un lavavasos y ahora gestionan toda la maquinaria. Cero averías sin solución.",
    avatar: avatarLucia,
  },
  {
    name: "Andrés Vidal",
    role: "Chef ejecutivo",
    company: "Hotel Sirena",
    text: "El asesoramiento técnico marca la diferencia. Diseñaron la cocina pensando en nuestro flujo de trabajo real.",
    avatar: avatarAndres,
  },
  {
    name: "Patricia Soto",
    role: "Gerente",
    company: "Bistró Norte",
    text: "La flexibilidad del alquiler nos permitió abrir un segundo local mucho antes de lo previsto.",
    avatar: avatarPatricia,
  },
  {
    name: "Carlos Méndez",
    role: "Propietario",
    company: "Taberna 1920",
    text: "Llevamos 6 años con ellos. Profesionalidad, trato cercano y respuesta inmediata.",
    avatar: avatarCarlos,
  },
];

const Testimonios = () => {
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO — coherente con Nosotros */}
      <section className="bg-surface border-b border-border">
        <div className="container-x py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Testimonios
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
            La voz de quienes cocinan con nosotros
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Más de 800 hosteleros confían en Restasat para equipar sus cocinas. Estas son
            algunas de sus historias.
          </p>

          {/* Stats inline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl">
            {[
              { v: "4.9", l: "Valoración media" },
              { v: "+800", l: "Reseñas" },
              { v: "<4h", l: "Respuesta técnica" },
              { v: "97%", l: "Recomiendan" },
            ].map((s) => (
              <div key={s.l} className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTACADO — minimal editorial card */}
      <section className="container-x py-20">
        <article className="relative bg-card border border-border rounded-3xl p-8 md:p-14 overflow-hidden">
          {/* Accent corner mark */}
          <div className="absolute top-0 left-0 h-1 w-24 bg-accent rounded-br-full" />

          <div className="flex items-center justify-between mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Caso destacado
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-semibold leading-[1.25] tracking-tight text-balance max-w-4xl">
            <span className="text-accent">"</span>
            {featured.text}
            <span className="text-accent">"</span>
          </p>

          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border">
            <img
              src={featured.avatar}
              alt={featured.name}
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <div className="font-semibold">{featured.name}</div>
              <div className="text-sm text-muted-foreground">
                {featured.role} · {featured.company}
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* GRID — minimal cards */}
      <section className="bg-surface py-20 flex-1 border-t border-border">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Más reseñas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
                Opiniones recientes
              </h2>
            </div>
            <span className="text-sm text-muted-foreground tabular-nums">
              {String(rest.length).padStart(2, "0")} verificadas
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((t, idx) => (
              <article
                key={t.name}
                className="group relative bg-card border border-border rounded-2xl p-7 flex flex-col hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium text-muted-foreground tabular-nums">
                    {String(idx + 2).padStart(2, "0")}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/90 leading-relaxed flex-1 text-[0.95rem]">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-sm truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16">
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">
              ¿Quieres ser el próximo en confiar en nosotros?
            </h2>
            <p className="text-primary-foreground/70">
              Cuéntanos tu proyecto y te haremos un presupuesto sin compromiso.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/contacto#presupuesto">
              Pedir presupuesto <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Testimonios;
