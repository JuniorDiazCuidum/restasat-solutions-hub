import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPost, posts } from "@/data/blog";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  BookOpen,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import { toast } from "sonner";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!post) return <Navigate to="/blog" replace />;
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Enlace copiado");
    } catch {
      toast.error("No se pudo copiar");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Reading progress */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />

      {/* HERO with cover background */}
      <header className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={post.cover}
            alt=""
            className="w-full h-full object-cover opacity-30"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/85 to-primary" />
          <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container-x relative pt-10 pb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver al blog
          </Link>
        </div>
        <div className="container-x relative pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm mb-6">
            <BookOpen className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-balance">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} de lectura</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                Compartir
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent hover:text-primary inline-flex items-center justify-center transition-colors"
                aria-label="Compartir en Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent hover:text-primary inline-flex items-center justify-center transition-colors"
                aria-label="Compartir en Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent hover:text-primary inline-flex items-center justify-center transition-colors"
                aria-label="Compartir en LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                onClick={copyLink}
                className="h-9 w-9 rounded-full border border-primary-foreground/20 hover:bg-accent hover:border-accent hover:text-primary inline-flex items-center justify-center transition-colors"
                aria-label="Copiar enlace"
              >
                <LinkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cover image floating over hero edge */}
      <div className="container-x -mt-10 max-w-5xl relative z-10">
        <div className="rounded-3xl overflow-hidden aspect-[16/8] shadow-2xl border border-border bg-surface">
          <img
            src={post.cover}
            alt={post.title}
            width={1280}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="container-x py-20 flex-1 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_240px] gap-12">
          <div className="space-y-6 text-[1.075rem] leading-[1.85] text-foreground/90">
            {post.content.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl leading-[1.7] text-foreground first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-1.5"
                    : ""
                }
              >
                {para}
              </p>
            ))}

            {/* CTA card */}
            <div className="mt-14 relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-10">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  ¿Te ha resultado útil?
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
                  Pide un presupuesto a medida para tu negocio
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-xl">
                  Nuestro equipo te asesora para que escojas el equipamiento perfecto. Sin
                  compromiso y respuesta en menos de 24h.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold text-sm transition-colors group"
                >
                  Hablar con un asesor
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky aside */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Resumen
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="h-px bg-border my-4" />
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Categoría</span>
                    <span className="text-accent font-semibold">{post.category}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Lectura</span>
                    <span className="text-foreground font-semibold">{post.readTime}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Publicado</span>
                    <span className="text-foreground font-semibold">{post.date}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={copyLink}
                className="w-full bg-card border border-border rounded-2xl p-4 text-sm font-medium hover:border-accent transition-colors inline-flex items-center justify-center gap-2"
              >
                <Share2 className="h-4 w-4" /> Compartir artículo
              </button>
            </div>
          </aside>
        </div>
      </article>

      {/* Related */}
      <section className="bg-surface border-t border-border py-20">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Más artículos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Sigue leyendo</h2>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center text-sm font-semibold text-accent hover:underline"
            >
              Ver todos <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={512}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-background/95 backdrop-blur-sm text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {p.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold mt-1 mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center text-sm font-semibold text-accent">
                    Leer más{" "}
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
