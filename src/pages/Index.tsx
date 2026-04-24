import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { categories } from "@/data/catalog";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  Star,
  Quote,
  Flame,
  Snowflake,
  Droplets,
  ChefHat,
  Wind,
  PhoneCall,
  ClipboardList,
  CheckCircle2,
  Clock,
  Zap,
  TrendingUp,
} from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarJavier from "@/assets/avatar-javier.jpg";
import avatarLucia from "@/assets/avatar-lucia.jpg";

const categoryIcons: Record<string, typeof Flame> = {
  coccion: Flame,
  "frio-industrial": Snowflake,
  lavado: Droplets,
  preparacion: ChefHat,
  extraccion: Wind,
};

const howItWorks = [
  {
    icon: PhoneCall,
    title: "Contáctanos",
    text: "Llámanos o escríbenos. Te respondemos en menos de 2 horas en horario laboral.",
  },
  {
    icon: ClipboardList,
    title: "Diagnóstico",
    text: "Analizamos tu necesidad o avería y te proponemos la solución más eficiente.",
  },
  {
    icon: Wrench,
    title: "Intervención rápida",
    text: "Técnico en sitio en 24-48h o instalación completa en 72h en toda España.",
  },
  {
    icon: CheckCircle2,
    title: "Seguimiento",
    text: "Mantenimiento preventivo incluido y soporte 24/7 mientras estés con nosotros.",
  },
];

const testimonials = [
  {
    name: "María Lozano",
    role: "Chef · Restaurante Almazara",
    text: "Cambiamos toda la cocina sin tocar nuestra liquidez. El servicio técnico responde en menos de 4 horas.",
    avatar: avatarMaria,
  },
  {
    name: "Javier Ruiz",
    role: "Director · Grupo Mediterráneo",
    text: "Tres locales equipados al completo. Restasat es ya parte de nuestro equipo.",
    avatar: avatarJavier,
  },
  {
    name: "Lucía Romero",
    role: "Propietaria · Café Norte",
    text: "Empezamos con un lavavasos y ahora gestionan toda la maquinaria. Cero averías sin solución.",
    avatar: avatarLucia,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO — dark editorial */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* radial gradients */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--accent) / 0.25), transparent 45%), radial-gradient(circle at 85% 80%, hsl(var(--accent) / 0.18), transparent 50%)",
          }}
        />
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container-x relative py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-primary-foreground/90">
                Disponibles · Respuesta en menos de 2 horas
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance mb-6">
              Tu cocina <span className="text-accent">profesional</span>,
              <br className="hidden md:block" /> sin invertir un euro de más.
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/75 mb-8 max-w-2xl text-balance">
              Equipamos restaurantes, bares y cafeterías con maquinaria premium.
              Mantenimiento, recambios y soporte 24/7 incluidos en todos nuestros planes.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contacto#presupuesto">
                  Pedir presupuesto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/catalogo">Ver catálogo</Link>
              </Button>
            </div>

            {/* horizontal stat badges */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { icon: TrendingUp, label: "+800 locales" },
                { icon: Clock, label: "24/7 soporte" },
                { icon: ShieldCheck, label: "15 años" },
                { icon: Star, label: "4.9 / 5" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
                >
                  <b.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-primary-foreground/10 shadow-2xl">
              <img
                src={heroKitchen}
                alt="Cocina profesional equipada por restaSAT"
                className="w-full h-full object-cover"
                width={1200}
                height={1500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

              {/* Floating bottom card */}
              <div className="absolute bottom-5 left-5 right-5 bg-background/95 backdrop-blur-md rounded-2xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">
                      Instalación en 72h
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Cobertura nacional · Madrid · Barcelona · Valencia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating top-right rating */}
            <div className="hidden md:flex absolute -top-4 -right-4 bg-background border border-border rounded-2xl p-4 shadow-xl items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-semibold text-foreground">4.9 / 5</div>
                <div className="text-muted-foreground">+800 reseñas</div>
              </div>
            </div>

            {/* Floating left badge */}
            <div className="hidden md:flex absolute top-1/3 -left-6 bg-accent text-accent-foreground rounded-2xl px-4 py-3 shadow-xl items-center gap-2.5 rotate-[-4deg]">
              <ShieldCheck className="h-5 w-5" />
              <div className="text-xs font-semibold leading-tight">
                Mantenimiento
                <br />
                incluido
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA — timeline horizontal */}
      <section className="relative bg-background py-24">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Cómo funciona
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
              Resolvemos tu problema en cuatro pasos
            </h2>
            <p className="text-muted-foreground">
              Desde el primer contacto hasta el seguimiento, te acompañamos en cada momento.
            </p>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {howItWorks.map((s, i) => (
                <div
                  key={s.title}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/60 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <s.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-muted-foreground/15 leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/85 p-8 md:p-10 border border-primary/20">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="text-primary-foreground">
                <div className="text-xl md:text-2xl font-bold mb-1">
                  ¿Tienes una avería o un proyecto nuevo?
                </div>
                <div className="text-sm text-primary-foreground/75">
                  Te llamamos en menos de 2 horas para asesorarte sin compromiso.
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0"
              >
                <Link to="/contacto#presupuesto">
                  Contactar ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES — bento grid */}
      <section className="relative bg-surface py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-x relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Especialidades
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-balance">
                Maquinaria para cada rincón de tu cocina
              </h2>
              <p className="text-muted-foreground mt-3">
                Equipos seleccionados de las mejores marcas del sector.
              </p>
            </div>
            <Button asChild variant="ghost" className="self-start md:self-auto">
              <Link to="/catalogo">
                Ver todo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => {
              const Icon = categoryIcons[c.slug] ?? Sparkles;
              const featured = i === 0;
              return (
                <Link
                  key={c.slug}
                  to={`/catalogo/${c.slug}`}
                  className={`group relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 ${
                    featured
                      ? "lg:col-span-2 lg:row-span-1 bg-primary text-primary-foreground border-primary p-8"
                      : "bg-card border-border hover:border-accent p-6"
                  }`}
                >
                  {featured && (
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 80% 20%, hsl(var(--accent)), transparent 50%)",
                      }}
                    />
                  )}
                  <div className="relative">
                    <div
                      className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 ${
                        featured
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3
                      className={`font-semibold mb-2 ${
                        featured ? "text-xl md:text-2xl" : "text-base"
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed line-clamp-2 ${
                        featured ? "text-primary-foreground/75" : "text-muted-foreground"
                      }`}
                    >
                      {c.description}
                    </p>
                    <div
                      className={`inline-flex items-center gap-1.5 text-sm font-medium mt-5 ${
                        featured ? "text-accent" : "text-foreground/70 group-hover:text-accent"
                      } transition-colors`}
                    >
                      Explorar
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS — premium */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Testimonios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-balance">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold">4.9 / 5</span>
              <span className="text-muted-foreground"> · +800 reseñas</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`group relative rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${
                i === 1
                  ? "bg-primary text-primary-foreground border border-primary"
                  : "bg-card border border-border"
              }`}
            >
              <Quote
                className={`absolute top-6 right-6 h-10 w-10 ${
                  i === 1 ? "text-accent/40" : "text-accent/15"
                }`}
              />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  i === 1 ? "text-primary-foreground/90" : "text-foreground/85"
                }`}
              >
                "{t.text}"
              </p>
              <div
                className={`flex items-center gap-3 pt-5 border-t ${
                  i === 1 ? "border-primary-foreground/15" : "border-border"
                }`}
              >
                <Avatar className="h-12 w-12 ring-2 ring-accent/30">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div
                    className={`text-xs ${
                      i === 1 ? "text-primary-foreground/65" : "text-muted-foreground"
                    }`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/testimonios">
              Ver todos los testimonios <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
