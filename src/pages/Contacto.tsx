import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Zap,
  Send,
  ArrowRight,
  Sparkles,
  Wrench,
  ShoppingCart,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().nonempty("El nombre es obligatorio").max(100),
  email: z.string().trim().email("Email no válido").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().nonempty("Cuéntanos tu proyecto").max(1000),
});

type Topic = "presupuesto" | "tecnico" | "alquiler" | "otro";

const topics: { id: Topic; label: string; icon: typeof Sparkles; description: string }[] = [
  { id: "presupuesto", label: "Presupuesto", icon: ShoppingCart, description: "Equipar tu cocina" },
  { id: "tecnico", label: "Servicio técnico", icon: Wrench, description: "Avería o mantenimiento" },
  { id: "alquiler", label: "Alquiler", icon: Sparkles, description: "Renting de maquinaria" },
  { id: "otro", label: "Otra consulta", icon: HelpCircle, description: "Te escuchamos" },
];

const Contacto = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [topic, setTopic] = useState<Topic>("presupuesto");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    toast.success("Solicitud enviada. Te contactaremos en menos de 24h.");
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const channels = [
    {
      icon: Phone,
      title: "Teléfono",
      text: "900 123 456",
      sub: "L-V · 9:00 - 19:00",
      href: "tel:900123456",
      cta: "Llamar ahora",
      accent: "from-accent/30 to-accent/0",
    },
    {
      icon: Mail,
      title: "Email",
      text: "hola@restasat.com",
      sub: "Respuesta en 24h",
      href: "mailto:hola@restasat.com",
      cta: "Enviar email",
      accent: "from-primary/30 to-primary/0",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      text: "+34 900 123 456",
      sub: "Respuesta inmediata",
      href: "https://wa.me/34900123456",
      cta: "Abrir chat",
      accent: "from-emerald-500/30 to-emerald-500/0",
    },
    {
      icon: Clock,
      title: "Servicio técnico 24/7",
      text: "Urgencias",
      sub: "Para clientes activos",
      href: "tel:900654321",
      cta: "Línea urgencias",
      accent: "from-destructive/30 to-destructive/0",
    },
  ];

  const sedes = [
    { city: "Madrid", address: "C/ Gran Vía 45 · 28013", hours: "L-V · 9:00 - 19:00" },
    { city: "Barcelona", address: "Av. Diagonal 220 · 08018", hours: "L-V · 9:00 - 19:00" },
    { city: "Valencia", address: "C/ Colón 12 · 46004", hours: "L-V · 9:00 - 18:00" },
  ];

  const faqs = [
    {
      q: "¿En cuánto tiempo recibo el presupuesto?",
      a: "Respondemos a todas las solicitudes en menos de 24 horas laborables. Para proyectos urgentes, llámanos directamente.",
    },
    {
      q: "¿Hacéis instalación de la maquinaria?",
      a: "Sí. Nuestro equipo técnico se encarga de la entrega, instalación, puesta en marcha y formación a tu personal en todas nuestras sedes.",
    },
    {
      q: "¿Qué cubre el servicio técnico?",
      a: "Mantenimiento preventivo, averías, recambios originales y asistencia 24/7 para clientes con contrato. Cobertura nacional.",
    },
    {
      q: "¿Puedo alquilar en lugar de comprar?",
      a: "Por supuesto. Ofrecemos renting de maquinaria con cuotas mensuales, mantenimiento incluido y opción a renovación.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO - dark with grid mesh + conic glow */}
      <section className="relative overflow-hidden border-b border-border bg-foreground text-background">
        <div className="absolute inset-0 pointer-events-none">
          {/* Conic warm glow */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "conic-gradient(from 220deg at 80% 20%, hsl(var(--accent) / 0.35), transparent 35%, hsl(var(--primary) / 0.4) 70%, transparent)",
            }}
          />
          {/* Grid mesh */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
            }}
          />
          {/* Soft accent blob */}
          <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
        </div>

        <div className="container-x relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium tracking-wide">Disponibles ahora · Respuesta en 24h</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance leading-[1.05]">
              Hablemos de tu{" "}
              <span className="relative inline-block">
                <span className="text-accent">proyecto</span>
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
              </span>
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl leading-relaxed">
              Cuéntanos qué necesitas y te haremos un presupuesto a medida sin compromiso.
              15 años equipando cocinas profesionales en toda España.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-xl">
              {[
                { value: "<24h", label: "Respuesta" },
                { value: "800+", label: "Hosteleros" },
                { value: "24/7", label: "Soporte" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS - floating over hero/main edge */}
      <section className="container-x -mt-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-xl transition-all overflow-hidden"
            >
              <div
                className={cn(
                  "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br blur-2xl opacity-60 group-hover:opacity-100 transition-opacity",
                  c.accent,
                )}
              />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  {c.title}
                </div>
                <div className="font-bold text-base leading-tight mb-1">{c.text}</div>
                <div className="text-xs text-muted-foreground mb-4">{c.sub}</div>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                  {c.cta}
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* MAIN: Form + Sidebar */}
      <main id="presupuesto" className="container-x py-20 flex-1">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* FORM */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50" />

              <form
                onSubmit={submit}
                className="relative bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6 shadow-xl"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Formulario
                  </span>
                  <h2 className="text-3xl font-bold mt-2 mb-2">Cuéntanos tu proyecto</h2>
                  <p className="text-sm text-muted-foreground">
                    Respuesta garantizada en menos de 24h.
                  </p>
                </div>

                {/* Topic selector */}
                <div>
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
                    ¿En qué podemos ayudarte?
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                    {topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTopic(t.id)}
                        className={cn(
                          "relative p-3 rounded-xl border text-left transition-all group",
                          topic === t.id
                            ? "border-accent bg-accent/5 shadow-sm"
                            : "border-border hover:border-accent/50 bg-background",
                        )}
                      >
                        {topic === t.id && (
                          <CheckCircle2 className="absolute top-2 right-2 h-4 w-4 text-accent" />
                        )}
                        <t.icon
                          className={cn(
                            "h-5 w-5 mb-2 transition-colors",
                            topic === t.id ? "text-accent" : "text-muted-foreground",
                          )}
                        />
                        <div className="text-sm font-semibold leading-tight">{t.label}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">
                          {t.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      maxLength={100}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-1.5 h-11"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 h-11"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5 h-11"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    maxLength={1000}
                    placeholder="Cuéntanos tu proyecto, la maquinaria que necesitas o la avería que tienes..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 resize-none"
                  />
                  <div className="text-[11px] text-muted-foreground text-right mt-1">
                    {form.message.length}/1000
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base group"
                >
                  Enviar solicitud
                  <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar aceptas nuestra política de privacidad.
                </p>
              </form>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-2 order-1 lg:order-2 space-y-6">
            {/* Perks */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Por qué elegirnos
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Zap, title: "Respuesta en menos de 24h", text: "Compromiso real de atención rápida." },
                  { icon: ShieldCheck, title: "Presupuesto sin compromiso", text: "Sin letra pequeña ni costes ocultos." },
                  { icon: MessageSquare, title: "Asesoramiento personalizado", text: "Te ayudamos a elegir lo que necesitas." },
                ].map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <p.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{p.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{p.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sedes */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Nuestras sedes
              </h3>
              <ul className="space-y-4">
                {sedes.map((s) => (
                  <li
                    key={s.city}
                    className="flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{s.city}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{s.address}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" /> {s.hours}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="mt-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Preguntas frecuentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Resolvemos tus dudas
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-accent/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
