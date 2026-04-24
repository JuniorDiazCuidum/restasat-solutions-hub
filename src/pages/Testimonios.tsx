import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

const stats = [
  { v: "4.9", l: "Valoración" },
  { v: "800+", l: "Reseñas" },
  { v: "<4h", l: "Respuesta" },
  { v: "97%", l: "Recomiendan" },
];

const Testimonios = () => {
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO — minimal, editorial */}
      <section className="border-b border-border">
        <div className="container-x pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                — Testimonios
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-[1.05] tracking-tight text-balance">
                La voz de quienes
                <br />
                <span className="text-muted-foreground">cocinan con nosotros.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                Más de 800 hosteleros confían en Restasat para equipar sus cocinas. Estas son
                algunas de sus historias.
              </p>
            </div>
          </div>

          {/* Stats — tipo data row, sin cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-20 border-t border-border">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`py-8 ${i !== 0 ? "md:border-l border-border" : ""} ${i === 2 ? "border-l md:border-l" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-semibold tracking-tight tabular-nums">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTACADO — quote editorial gigante */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            01 — Caso destacado
          </span>
          <blockquote className="mt-8">
            <p className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight text-balance">
              {featured.text}
            </p>
          </blockquote>
          <div className="flex items-center gap-4 mt-12">
            <img
              src={featured.avatar}
              alt={featured.name}
              className="h-12 w-12 rounded-full object-cover grayscale"
              loading="lazy"
            />
            <div className="text-sm">
              <div className="font-medium">{featured.name}</div>
              <div className="text-muted-foreground">
                {featured.role}, {featured.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID — minimal, line-divided */}
      <section className="border-t border-border flex-1">
        <div className="container-x py-20">
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Más opiniones
            </h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground tabular-nums">
              {String(rest.length).padStart(2, "0")} verificadas
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {rest.map((t, idx) => (
              <article key={t.name} className="group">
                <span className="text-xs font-medium text-muted-foreground tabular-nums">
                  {String(idx + 2).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed mt-4 text-[1.05rem]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-9 w-9 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1 text-sm">
                    <div className="font-medium truncate">{t.name}</div>
                    <div className="text-muted-foreground text-xs truncate">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — minimal line */}
      <section className="border-t border-border">
        <div className="container-x py-20 md:py-24">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance max-w-2xl">
              ¿Quieres ser el próximo en confiar en nosotros?
            </h2>
            <Button asChild size="lg" variant="default" className="rounded-full px-7">
              <Link to="/contacto#presupuesto">
                Pedir presupuesto <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Testimonios;
