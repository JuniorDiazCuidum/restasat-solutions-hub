import { Button } from "@/components/ui/button";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
    <nav className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-bold text-lg">
        <span className="inline-block w-8 h-8 rounded-md bg-gradient-primary shadow-glow" />
        <span>Restasat<span className="text-primary-glow">.</span></span>
      </a>
      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <Button asChild variant="default" size="sm">
        <a href="#contacto">Hablemos</a>
      </Button>
    </nav>
  </header>
);

export default Navbar;
