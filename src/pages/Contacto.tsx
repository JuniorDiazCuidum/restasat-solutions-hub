import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().nonempty("El nombre es obligatorio").max(100),
  email: z.string().trim().email("Email no válido").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().nonempty("Cuéntanos tu proyecto").max(1000),
});

const Contacto = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

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
    { icon: Phone, title: "Teléfono", text: "900 123 456", sub: "L-V · 9:00 - 19:00" },
    { icon: Mail, title: "Email", text: "hola@restasat.com", sub: "Respuesta en 24h" },
    { icon: MapPin, title: "Sedes", text: "Madrid · Barcelona · Valencia", sub: "Cobertura nacional" },
    { icon: Clock, title: "Servicio técnico", text: "Disponible 24/7", sub: "Para clientes activos" },
  ];

  const perks = [
    { icon: Zap, text: "Respuesta en menos de 24h" },
    { icon: ShieldCheck, text: "Presupuesto sin compromiso" },
    { icon: MessageSquare, text: "Asesoramiento personalizado" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="bg-surface border-b border-border">
        <div className="container-x py-16">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">
              Hablemos de tu proyecto
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Cuéntanos qué necesitas y te haremos un presupuesto a medida sin compromiso.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mt-10 max-w-3xl">
            {perks.map((p) => (
              <div key={p.text} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <p.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main id="presupuesto" className="container-x py-16 flex-1">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* INFO + CHANNELS */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
              <h2 className="text-2xl font-bold mb-3 relative">Estamos para ayudarte</h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed relative">
                Llevamos 15 años equipando cocinas profesionales. Sea cual sea tu proyecto o avería,
                tenemos la solución.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map((c) => (
                <div
                  key={c.title}
                  className="bg-card border border-border rounded-xl p-5 hover:border-accent/60 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <c.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {c.title}
                  </div>
                  <div className="font-semibold text-sm leading-tight">{c.text}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.sub}</div>
                </div>
              ))}
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:col-span-3">
            <form
              onSubmit={submit}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-5 shadow-sm"
            >
              <div>
                <h2 className="text-2xl font-bold mb-1">Pedir presupuesto</h2>
                <p className="text-sm text-muted-foreground">
                  Respuesta garantizada en menos de 24h.
                </p>
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
                <Label htmlFor="message">¿Qué necesitas? *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Cuéntanos tu proyecto, la maquinaria que necesitas o la avería que tienes..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
              >
                Enviar solicitud
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Al enviar aceptas nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
