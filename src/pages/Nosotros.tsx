import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Target, Heart, Users, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Cercanía", text: "Asesoramiento real, no comerciales con guion." },
  { icon: Heart, title: "Compromiso", text: "Tu cocina es nuestra prioridad cada día." },
  { icon: Users, title: "Equipo", text: "Más de 40 técnicos especializados." },
  { icon: Award, title: "Calidad", text: "Solo trabajamos con marcas líderes del sector." },
];

const Nosotros = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="bg-surface border-b border-border">
      <div className="container-x py-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Nosotros</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">15 años equipando la hostelería</h1>
        <p className="text-muted-foreground max-w-2xl text-lg">Nacimos en 2009 con una idea simple: que ningún restaurante tenga que renunciar a la mejor maquinaria por falta de capital.</p>
      </div>
    </section>

    <section className="container-x py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Nuestra historia</h2>
        <p className="text-muted-foreground mb-4">Empezamos en un pequeño taller de Madrid reparando hornos y cámaras. Pronto descubrimos que muchos hosteleros necesitaban una alternativa flexible a la compra de equipos.</p>
        <p className="text-muted-foreground">Hoy somos referencia nacional en alquiler de maquinaria para hostelería, con presencia en toda España y un equipo técnico que nunca duerme.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary text-primary-foreground p-8 rounded-2xl"><div className="text-4xl font-bold">+800</div><div className="text-sm mt-1 opacity-80">Locales activos</div></div>
        <div className="bg-accent text-accent-foreground p-8 rounded-2xl"><div className="text-4xl font-bold">15</div><div className="text-sm mt-1 opacity-90">Años en el sector</div></div>
        <div className="bg-surface-2 p-8 rounded-2xl"><div className="text-4xl font-bold text-primary">40+</div><div className="text-sm mt-1 text-muted-foreground">Técnicos</div></div>
        <div className="bg-surface-2 p-8 rounded-2xl"><div className="text-4xl font-bold text-primary">24/7</div><div className="text-sm mt-1 text-muted-foreground">Soporte</div></div>
      </div>
    </section>

    <section className="bg-surface py-16">
      <div className="container-x">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros valores</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-xl p-6">
              <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4"><v.icon className="h-5 w-5 text-accent"/></div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Newsletter />
    <Footer />
  </div>
);

export default Nosotros;
