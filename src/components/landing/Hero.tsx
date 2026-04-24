import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt="Red de soluciones tecnológicas Restasat"
      width={1920}
      height={1280}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-hero opacity-90" />
    <div className="container relative z-10 py-32 animate-fade-up">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs backdrop-blur-sm mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Soluciones tecnológicas a medida
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Tu hub de <span className="bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">soluciones digitales</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10">
          En Restasat diseñamos, desarrollamos e implementamos software, infraestructura y consultoría que impulsan el crecimiento de tu empresa.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="hero" size="lg">
            <a href="#contacto">
              Empezar proyecto <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <a href="#servicios">Ver servicios</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
