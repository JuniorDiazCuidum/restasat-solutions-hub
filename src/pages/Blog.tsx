import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { posts } from "@/data/blog";
import { ArrowRight, Calendar, Clock, Search, BookOpen, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [featured, ...rest] = posts;
  const categoryList = useMemo(
    () => ["Todos", ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  );
  const [activeCat, setActiveCat] = useState("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((p) => {
      if (activeCat !== "Todos" && p.category !== activeCat) return false;
      if (q && !p.title.toLowerCase().includes(q) && !p.excerpt.toLowerCase().includes(q))
        return false;
      return true;
    });
  }, [rest, activeCat, query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO - light editorial paper */}
      <section className="relative overflow-hidden border-b border-border bg-surface text-foreground">
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft warm wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
          {/* Diagonal lines pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, hsl(var(--foreground)) 0 1px, transparent 1px 14px)",
            }}
          />
          {/* Accent blobs */}
          <div className="absolute -top-32 right-10 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />
          {/* Bottom fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="container-x relative py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-6">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wide">
                {posts.length} artículos · Actualizado este mes
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-balance leading-[1.05]">
              Conocimiento para{" "}
              <span className="relative inline-block">
                <span className="text-accent">hosteleros</span>
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
              Guías, tendencias y consejos prácticos para sacar el máximo partido a tu cocina
              profesional. Escrito por nuestro equipo técnico.
            </p>

            {/* Search */}
            <div className="relative mt-10 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar artículo..."
                className="pl-11 h-12 text-base bg-card text-foreground border-0 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container-x py-16 flex-1">
        {/* FEATURED */}
        <Link
          to={`/blog/${featured.slug}`}
          className="group relative grid md:grid-cols-2 gap-0 bg-card border border-border rounded-3xl overflow-hidden hover:border-accent transition-all hover:shadow-2xl mb-20"
        >
          <div className="relative bg-surface aspect-video md:aspect-auto overflow-hidden">
            <img
              src={featured.cover}
              alt={featured.title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              <TrendingUp className="h-3.5 w-3.5 text-accent" />
              Destacado
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs mb-4">
              <span className="bg-accent/15 text-accent font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {featured.category}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-3 w-3" /> {featured.date}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" /> {featured.readTime}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance group-hover:text-accent transition-colors leading-tight">
              {featured.title}
            </h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center text-sm font-bold text-accent">
              Leer artículo completo
              <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
            </span>
          </div>
        </Link>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Más artículos
            </span>
            <h2 className="text-3xl font-bold mt-2">Explora por categoría</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryList.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                  activeCat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-accent",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-2xl">
            <p className="text-muted-foreground">
              No hay artículos que coincidan con tu búsqueda.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative bg-surface aspect-video overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {p.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm text-foreground text-[10px] font-semibold px-2 py-1 rounded-full shadow inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" /> {p.date}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2 flex-1">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-accent mt-auto">
                    Leer más
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
