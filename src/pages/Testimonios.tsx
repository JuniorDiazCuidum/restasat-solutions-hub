import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Quote, MessageCircle, ThumbsUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarJavier from "@/assets/avatar-javier.jpg";
import avatarLucia from "@/assets/avatar-lucia.jpg";
import avatarAndres from "@/assets/avatar-andres.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";
import avatarCarlos from "@/assets/avatar-carlos.jpg";

type Item = {
  name: string;
  role: string;
  company: string;
  city: string;
  text: string;
  avatar: string;
  rating: number;
};

const items: Item[] = [
  {
    name: "María Lozano",
    role: "Chef",
    company: "Restaurante Almazara",
    city: "Madrid",
    text: "Cambiamos toda la cocina sin tocar nuestra liquidez. El servicio técnico responde en menos de 4 horas y la diferencia con nuestro proveedor anterior es abismal.",
    avatar: avatarMaria,
    rating: 5,
  },
  {
    name: "Javier Ruiz",
    role: "Director",
    company: "Grupo Mediterráneo",
    city: "Valencia",
    text: "Tres locales equipados al completo. restaSAT es ya parte de nuestro equipo. Su asesoramiento nos ahorró un 20% en consumo eléctrico.",
    avatar: avatarJavier,
    rating: 5,
  },
  {
    name: "Lucía Romero",
    role: "Propietaria",
    company: "Café Norte",
    city: "Barcelona",
    text: "Empezamos con un lavavasos y ahora gestionan toda la maquinaria. Cero averías sin solución y un trato siempre cercano.",
    avatar: avatarLucia,
    rating: 5,
  },
  {
    name: "Andrés Vidal",
    role: "Chef ejecutivo",
    company: "Hotel Sirena",
    city: "Málaga",
    text: "El asesoramiento técnico marca la diferencia. Diseñaron la cocina pensando en nuestro flujo de trabajo real, no en vender más metros de inox.",
    avatar: avatarAndres,
    rating: 5,
  },
  {
    name: "Patricia Soto",
    role: "Gerente",
    company: "Bistró Norte",
    city: "Bilbao",
    text: "La flexibilidad del alquiler nos permitió abrir un segundo local mucho antes de lo previsto. Recomendados al 100%.",
    avatar: avatarPatricia,
    rating: 5,
  },
  {
    name: "Carlos Méndez",
    role: "Propietario",
    company: "Taberna 1920",
    city: "Sevilla",
    text: "Llevamos 6 años con ellos. Profesionalidad, trato cercano y respuesta inmediata. No me planteo cambiar.",
    avatar: avatarCarlos,
    rating: 5,
  },
];

const Testimonios = () => {
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* HERO con patrón diagonal y avatares flotantes */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Diagonal striped background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 12px)",
          }}
        />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="container-x relative py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-sm mb-6">
                <ThumbsUp className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-semibold tracking-wide">
                  Valorados con 4.9/5 por +800 hosteleros
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-balance mb-5">
                Cocinas que{" "}
                <span className="relative inline-block">
                  <span className="text-accent">hablan</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 5 Q 50 1, 100 5 T 198 5"
                      stroke="hsl(var(--accent))"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                por nosotros
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                Más de 800 hosteleros confían en restaSAT para equipar y mantener sus
                cocinas. Estas son sus historias reales.
              </p>

              {/* Stats horizontal */}
              <div className="flex flex-wrap gap-x-10 gap-y-5 mt-10">
                {[
                  { v: "4.9", l: "Valoración media", icon: Star },
                  { v: "+800", l: "Reseñas verificadas", icon: MessageCircle },
                  { v: "<4h", l: "Respuesta técnica", icon: Sparkles },
                  { v: "97%", l: "Recomiendan", icon: ThumbsUp },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <s.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold leading-none">{s.v}</div>
                      <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">
                        {s.l}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating avatars collage */}
            <div className="hidden lg:block relative h-[420px]">
              {[
                { src: avatarMaria, top: "0%", left: "20%", size: 110, delay: "0s" },
                { src: avatarJavier, top: "15%", left: "65%", size: 90, delay: "0.4s" },
                { src: avatarLucia, top: "45%", left: "5%", size: 80, delay: "0.8s" },
                { src: avatarAndres, top: "55%", left: "55%", size: 130, delay: "0.2s" },
                { src: avatarPatricia, top: "75%", left: "25%", size: 70, delay: "0.6s" },
                { src: avatarCarlos, top: "30%", left: "40%", size: 75, delay: "1s" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="absolute rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border"
                  style={{
                    top: a.top,
                    left: a.left,
                    width: a.size,
                    height: a.size,
                    animation: `float 6s ease-in-out ${a.delay} infinite`,
                  }}
                >
                  <img src={a.src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              {/* floating star badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2.5 z-10">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-sm font-bold">4.9 / 5</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}</style>
      </section>

      {/* DESTACADO - large quote with side avatar */}
      <section className="container-x py-20">
        <article className="relative grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center bg-primary text-primary-foreground rounded-3xl p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

          {/* Big avatar */}
          <div className="relative">
            <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-3xl overflow-hidden ring-4 ring-accent/30">
              <img
                src={featured.avatar}
                alt={featured.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground rounded-xl px-3 py-1.5 flex items-center gap-1 shadow-xl">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="text-xs font-bold">{featured.rating}.0</span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            <Quote className="h-12 w-12 text-accent mb-4" />
            <p className="text-2xl md:text-3xl font-medium leading-[1.35] tracking-tight text-balance mb-8">
              {featured.text}
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-bold text-lg">{featured.name}</div>
                <div className="text-sm text-primary-foreground/70">
                  {featured.role} · {featured.company}
                </div>
                <div className="text-xs text-primary-foreground/50 mt-1">
                  {featured.city}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* MASONRY-LIKE ALTERNATING GRID */}
      <section className="container-x pb-20 flex-1">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Más reseñas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Opiniones de toda España
            </h2>
          </div>
          <span className="text-sm text-muted-foreground tabular-nums">
            {String(rest.length).padStart(2, "0")} verificadas
          </span>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {rest.map((t, idx) => {
            const accentVariant = idx % 3;
            return (
              <article
                key={t.name}
                className="break-inside-avoid bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/40 transition-all relative overflow-hidden group"
              >
                {/* Decorative corner */}
                <div
                  className={
                    accentVariant === 0
                      ? "absolute -top-10 -right-10 h-24 w-24 rounded-full bg-accent/15 blur-2xl"
                      : accentVariant === 1
                        ? "absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl"
                        : "absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gold/15 blur-2xl"
                  }
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {t.city}
                    </span>
                  </div>

                  <Quote className="h-5 w-5 text-accent/40 mb-2" />
                  <p className="text-foreground/90 leading-relaxed text-[0.95rem] mb-6">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-border">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/20"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="relative bg-card border border-border rounded-3xl p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-6 items-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Tu turno
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-2 text-balance">
              ¿Quieres ser el próximo en confiar en nosotros?
            </h2>
            <p className="text-muted-foreground">
              Cuéntanos tu proyecto y te haremos un presupuesto sin compromiso.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="relative bg-primary hover:bg-primary/90 text-primary-foreground"
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
