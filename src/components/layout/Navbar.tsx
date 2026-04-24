import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="restaSAT"
            width={48}
            height={48}
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <NavLink
                key={l.to}
                to={l.to}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-surface"
                )}
              >
                {l.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contacto#presupuesto">Pedir presupuesto</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-surface"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium",
                    active ? "bg-accent text-accent-foreground" : "hover:bg-surface"
                  )}
                >
                  {l.label}
                </NavLink>
              );
            })}
            <Button asChild className="mt-2 bg-primary text-primary-foreground">
              <Link to="/contacto#presupuesto" onClick={() => setOpen(false)}>
                Pedir presupuesto
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
