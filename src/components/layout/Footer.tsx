import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-primary-foreground/10 rounded-lg p-2">
              <img
                src={logo}
                alt="restaSAT"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Alquiler de maquinaria de hostelería con mantenimiento integral.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Enlaces</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-accent">Catálogo</Link></li>
            <li><Link to="/nosotros" className="hover:text-accent">Nosotros</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Categorías</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/catalogo/coccion" className="hover:text-accent">Cocción</Link></li>
            <li><Link to="/catalogo/frio-industrial" className="hover:text-accent">Frío industrial</Link></li>
            <li><Link to="/catalogo/lavado" className="hover:text-accent">Lavado</Link></li>
            <li><Link to="/catalogo/preparacion" className="hover:text-accent">Preparación</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /> 900 123 456</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /> hola@restasat.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Madrid · Barcelona · Valencia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Restasat. Todos los derechos reservados.</span>
          <span>Diseñado para hosteleros, por hosteleros.</span>
        </div>
      </div>
    </footer>
  );
};
