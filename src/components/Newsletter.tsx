import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.string().trim().email("Email no válido").max(255);

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("¡Gracias! Te avisaremos de novedades y ofertas.");
    setEmail("");
  };

  return (
    <section className="container-x py-20">
      <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent font-semibold mb-3">
              <Mail className="h-4 w-4" /> Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-balance">
              Ingrese aquí su email para recibir ofertas y novedades
            </h2>
            <p className="text-primary-foreground/70 text-sm">
              Sin spam. Solo información útil para tu negocio.
            </p>
          </div>
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              required
              maxLength={255}
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-foreground border-0 h-12"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-6 whitespace-nowrap">
              Suscribirme
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
