import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPost, posts } from "@/data/blog";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2 } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero with cover */}
      <header className="relative bg-surface border-b border-border">
        <div className="container-x pt-10 pb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver al blog
          </Link>
        </div>
        <div className="container-x pb-14 max-w-4xl">
          <span className="inline-block bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-5">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-balance">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <button className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-accent hover:text-foreground transition-colors">
              <Share2 className="h-4 w-4" /> Compartir
            </button>
          </div>
        </div>
      </header>

      {/* Cover image, overlaps */}
      <div className="container-x -mt-8 max-w-5xl">
        <div className="rounded-2xl overflow-hidden aspect-[16/8] shadow-xl border border-border bg-surface">
          <img
            src={post.cover}
            alt={post.title}
            width={1280}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article body with sidebar */}
      <article className="container-x py-16 flex-1 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_220px] gap-12">
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-foreground/90">
            {post.content.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1"
                    : ""
                }
              >
                {para}
              </p>
            ))}

            {/* End card */}
            <div className="mt-12 p-6 rounded-xl bg-surface border-l-4 border-accent">
              <p className="text-sm text-muted-foreground mb-2">¿Te ha resultado útil?</p>
              <p className="font-semibold mb-4">
                Pide un presupuesto a medida para tu negocio.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Hablar con un asesor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Sticky aside */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                En este artículo
              </p>
              <div className="h-px bg-border" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </aside>
        </div>
      </article>

      {/* Related */}
      <section className="bg-surface border-t border-border py-16">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Más artículos
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">Sigue leyendo</h2>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              Ver todos <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={512}
                    height={320}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                  <h3 className="font-semibold mt-2 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center text-sm text-muted-foreground group-hover:text-accent transition-colors">
                    Leer más <ArrowRight className="h-4 w-4 ml-1" />
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
