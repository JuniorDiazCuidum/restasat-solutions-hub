import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { posts } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO — editorial minimal */}
      <section className="border-b border-border">
        <div className="container-x pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                — Blog
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold mt-6 leading-[1.05] tracking-tight text-balance">
                Conocimiento
                <br />
                <span className="text-muted-foreground">para hosteleros.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                Guías, tendencias y consejos prácticos para sacar el máximo partido a tu cocina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADO */}
      <section className="container-x py-20 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            01 — Destacado
          </span>
        </div>

        <Link
          to={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-12 gap-10 items-center"
        >
          <div className="md:col-span-7 overflow-hidden rounded-lg bg-surface aspect-[16/10]">
            <img
              src={featured.cover}
              alt={featured.title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-5">
              <span>{featured.category}</span>
              <span className="h-px w-6 bg-border" />
              <span>{featured.date}</span>
              <span className="h-px w-6 bg-border" />
              <span>{featured.readTime}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] text-balance group-hover:text-muted-foreground transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-8 text-sm font-medium border-b border-foreground pb-1 group-hover:gap-3 transition-all">
              Leer artículo <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* GRID — minimal, sin cards */}
      <section className="border-t border-border flex-1">
        <div className="container-x py-20">
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Más artículos
            </h2>
            <span className="text-xs uppercase tracking-wider text-muted-foreground tabular-nums">
              {String(rest.length).padStart(2, "0")} publicaciones
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {rest.map((p, idx) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col"
              >
                <div className="overflow-hidden rounded-md bg-surface aspect-[4/3] mb-6">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground tabular-nums">
                  {String(idx + 2).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground mt-3">
                  <span>{p.category}</span>
                  <span className="h-px w-4 bg-border" />
                  <span>{p.date}</span>
                </div>
                <h3 className="font-semibold text-xl mt-3 leading-snug tracking-tight group-hover:text-muted-foreground transition-colors text-balance">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-foreground/80 group-hover:gap-3 transition-all">
                  Leer <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
