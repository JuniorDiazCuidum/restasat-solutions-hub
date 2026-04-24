import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/Newsletter";
import { posts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const [featured, ...rest] = posts;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-surface border-b border-border">
        <div className="container-x py-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-balance">Conocimiento para hosteleros</h1>
          <p className="text-muted-foreground max-w-2xl">Guías, tendencias y consejos prácticos para sacar el máximo partido a tu cocina.</p>
        </div>
      </section>

      <main className="container-x py-16 flex-1">
        <Link
          to={`/blog/${featured.slug}`}
          className="grid md:grid-cols-2 gap-8 group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-colors mb-16"
        >
          <div className="bg-surface aspect-video md:aspect-auto overflow-hidden">
            <img
              src={featured.cover}
              alt={featured.title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="bg-accent/15 text-accent font-semibold px-2 py-1 rounded">{featured.category}</span>
              <span>{featured.date}</span>
              <span>· {featured.readTime}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance group-hover:text-accent transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
            <span className="inline-flex items-center text-sm font-semibold text-accent">
              Leer más <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"/>
            </span>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-colors">
              <div className="bg-surface aspect-video overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="bg-accent/15 text-accent font-semibold px-2 py-0.5 rounded">{p.category}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.excerpt}</p>
                <span className="inline-flex items-center text-sm font-semibold text-accent">
                  Leer más <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"/>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
