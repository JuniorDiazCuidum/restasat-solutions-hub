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
  Truck,
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

      {/* HERO */}
      <section className="relative bg-surface overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-x relative py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-5">
              Alquiler de maquinaria de hostelería
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance mb-6">
              Tu cocina <span className="text-accent">profesional</span>, sin invertir un euro de más.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl text-balance">
              Equipamos restaurantes, bares y cafeterías con maquinaria premium. Mantenimiento, recambios y soporte 24/7 incluidos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contacto#presupuesto">Pedir presupuesto</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/catalogo">
                  Ver catálogo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border max-w-md">
              <div>
                <div className="text-2xl font-bold text-primary">+800</div>
                <div className="text-xs text-muted-foreground">Locales equipados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Servicio técnico</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-xs text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative">
              <img
                src={heroKitchen}
                alt="Cocina profesional equipada por Restasat"
                className="w-full h-full object-cover"
                width={1280}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Mantenimiento</div>
                  <div className="text-xs text-muted-foreground">Incluido siempre</div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-semibold">4.9 / 5</div>
                <div className="text-muted-foreground">+800 clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — ahora arriba */}
      <section className="container-x py-20">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Cómo funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Resolvemos tu problema en cuatro pasos
          </h2>
          <p className="text-muted-foreground mt-3">
            Desde el primer contacto hasta el seguimiento, te acompañamos en cada momento.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/60 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 justify-between p-6 bg-surface rounded-2xl border border-border">
          <div>
            <div className="font-semibold">¿Tienes una avería o un proyecto nuevo?</div>
            <div className="text-sm text-muted-foreground">Te llamamos en menos de 2 horas.</div>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contacto#presupuesto">Contactar ahora</Link>
          </Button>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Especialidades</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
                Maquinaria para cada rincón de tu cocina
              </h2>
            </div>
            <Button asChild variant="ghost" className="self-start md:self-auto">
              <Link to="/catalogo">
                Ver todo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((c) => {
              const Icon = categoryIcons[c.slug] ?? Sparkles;
              return (
                <Link
                  key={c.slug}
                  to={`/catalogo/${c.slug}`}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-accent hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{c.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{c.description}</p>
                  <ArrowRight className="h-4 w-4 mt-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="container-x py-20">
        <div className="mb-12 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative bg-card border border-border rounded-2xl p-7 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/15" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-foreground/85">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <Avatar className="h-12 w-12 ring-2 ring-accent/20">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
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
