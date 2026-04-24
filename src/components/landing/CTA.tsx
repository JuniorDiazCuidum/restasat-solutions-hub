import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const CTA = () => (
  <section id="contacto" className="py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-20 text-center shadow-elegant">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow))_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para impulsar tu próximo proyecto?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas con una propuesta inicial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <a href="mailto:hola@restasat.com">
                <Mail className="w-4 h-4" /> hola@restasat.com
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="#servicios">
                Ver servicios <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
