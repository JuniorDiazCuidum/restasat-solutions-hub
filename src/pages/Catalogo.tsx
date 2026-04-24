import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, SearchX } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { categories, getProductsByCategory, products, type Product } from "@/data/catalog";
import { cn } from "@/lib/utils";

const Catalogo = () => {
  const { categoria } = useParams();
  const activeSlug = categoria;
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filterByQuery = (items: Product[]) => {
    if (!normalizedQuery) return items;
    return items.filter(
      (p) =>
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery),
    );
  };

  const visibleProducts = useMemo(() => {
    const base = activeSlug ? getProductsByCategory(activeSlug) : products;
    return filterByQuery(base);
  }, [activeSlug, normalizedQuery]);

  const visibleCategories = activeSlug
    ? categories.filter((c) => c.slug === activeSlug)
    : categories;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-surface border-b border-border">
        <div className="container-x py-12 md:py-16">
          {/* Filter bar at top */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Link
              to="/catalogo"
              className={cn(
                "px-5 py-2.5 rounded-md text-sm font-medium transition-colors border",
                !activeSlug
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-accent",
              )}
            >
              Todos
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/catalogo/${c.slug}`}
                className={cn(
                  "px-5 py-2.5 rounded-md text-sm font-medium transition-colors border",
                  activeSlug === c.slug
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-accent",
                )}
              >
                {c.name}
              </Link>
            ))}
          </div>

          {/* Title block */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Catálogo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Maquinaria profesional para hostelería
            </h1>
            <p className="text-muted-foreground">
              Equipos seleccionados para cocinas exigentes. Filtra por categoría o busca por nombre.
            </p>

            {/* Search bar */}
            <div className="relative mt-8 max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar producto: horno, freidora, cámara..."
                className="pl-11 h-12 text-base bg-card"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container-x py-16 flex-1">
        {visibleProducts.length === 0 ? (
          <div className="text-center py-20 max-w-md mx-auto">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface mb-5">
              <SearchX className="h-7 w-7 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No se encontraron productos</h2>
            <p className="text-muted-foreground text-sm">
              No hay coincidencias para <span className="font-medium text-foreground">"{query}"</span>
              {activeSlug ? " en esta categoría." : "."} Prueba con otro término o revisa todas las categorías.
            </p>
            {(query || activeSlug) && (
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="px-4 py-2 text-sm font-medium rounded-md border border-border hover:border-accent transition-colors"
                  >
                    Limpiar búsqueda
                  </button>
                )}
                {activeSlug && (
                  <Link
                    to="/catalogo"
                    className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground"
                  >
                    Ver todas las categorías
                  </Link>
                )}
              </div>
            )}
          </div>
        ) : (
          visibleCategories.map((c) => {
            const items = filterByQuery(getProductsByCategory(c.slug));
            if (items.length === 0) return null;
            return (
              <section key={c.slug} className="mb-16">
                <div className="flex items-end justify-between mb-8 pb-4 border-b border-border">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{c.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {items.length} producto{items.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
