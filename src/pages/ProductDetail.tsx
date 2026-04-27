import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { categories, getProduct, getProductsByCategory } from "@/data/catalog";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Truck,
  Wrench,
  FileText,
  Download,
  Sparkles,
  Tag,
  Zap,
  Ruler,
  Settings2,
  Snowflake,
  Wind,
  Droplets,
  Calendar,
  Printer,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  if (!product) return <Navigate to="/catalogo" replace />;
  const cat = categories.find((c) => c.slug === product.category);
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container-x py-8">
        <Link to="/catalogo" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2"/> Volver al catálogo
        </Link>
      </div>

      <section className="container-x pb-16 grid lg:grid-cols-2 gap-12">
        <div className="bg-surface rounded-2xl aspect-square relative overflow-hidden">
          {product.hasOffer && (
            <span className="absolute top-6 right-6 z-10 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Oferta -15%
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          {cat && <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{cat.name}</span>}
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.longDescription || product.description}</p>

          <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-border">
            {product.hasOffer && product.originalPrice && (
              <span className="text-xl line-through text-destructive font-medium">{product.originalPrice}€</span>
            )}
            <span className="text-4xl font-bold text-primary">{product.price}€</span>
            <span className="text-sm text-muted-foreground">/ mes</span>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Lo más destacado
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 bg-surface rounded-lg px-3 py-2">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ul className="space-y-2 mb-8 text-sm">
            {[
              "Mantenimiento integral incluido",
              "Servicio técnico 24/7",
              "Instalación profesional gratuita",
              "Sustitución inmediata por avería",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent"/> {b}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contacto#presupuesto">Pedir presupuesto</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contacto">Hablar con un asesor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA */}
      {product.specSheet && product.specSheet.length > 0 && (() => {
        // Icon mapping per group title (case-insensitive partial match)
        const iconForGroup = (title: string) => {
          const t = title.toLowerCase();
          if (t.includes("eléctric") || t.includes("electric")) return Zap;
          if (t.includes("dimens")) return Ruler;
          if (t.includes("aire")) return Wind;
          if (t.includes("hidrá") || t.includes("agua")) return Droplets;
          if (t.includes("frío") || t.includes("frio") || t.includes("refriger")) return Snowflake;
          if (t.includes("conex") || t.includes("gas")) return Zap;
          return Settings2;
        };

        // Build "Highlights": grab up to 4 key specs from the whole sheet
        const allItems = product.specSheet.flatMap((g) => g.items);
        const pickKeys = ["Potencia", "Capacidad", "Tensión", "Producción", "Caudal"];
        const highlights = pickKeys
          .map((k) => allItems.find((i) => i.label.toLowerCase().includes(k.toLowerCase())))
          .filter((x): x is { label: string; value: string } => Boolean(x))
          .slice(0, 4);

        const today = new Date().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
        });

        return (
          <section className="bg-surface border-y border-border">
            <div className="container-x py-16 md:py-20">
              {/* Header documento */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative bg-primary text-primary-foreground px-6 md:px-10 py-8 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                        <FileText className="h-3.5 w-3.5" />
                        Ficha técnica oficial
                      </span>
                      <h2 className="text-2xl md:text-4xl font-bold mt-3 leading-tight">
                        {product.name}
                      </h2>
                      <p className="text-primary-foreground/70 text-sm mt-2 max-w-xl">
                        Especificaciones completas verificadas por el fabricante.
                        Documento generado para uso comercial e instalación.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 backdrop-blur-sm text-xs font-medium px-3 py-2 rounded-lg transition-colors"
                      >
                        <Printer className="h-3.5 w-3.5" />
                        Imprimir
                      </button>
                    </div>
                  </div>
                </div>

                {/* Meta strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border-b border-border bg-card">
                  {[
                    { icon: Tag, label: "Referencia", value: product.id.toUpperCase() },
                    { icon: Sparkles, label: "Marca", value: product.brand },
                    { icon: ShieldCheck, label: "Garantía", value: "2 años" },
                    { icon: Calendar, label: "Actualizado", value: today },
                  ].map((m) => (
                    <div key={m.label} className="px-5 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                        <m.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                          {m.label}
                        </div>
                        <div className="text-sm font-semibold truncate">{m.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                {highlights.length > 0 && (
                  <div className="px-6 md:px-10 py-6 bg-card border-b border-border">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
                      Datos clave
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {highlights.map((h) => (
                        <div
                          key={h.label}
                          className="bg-surface rounded-xl px-4 py-3 border border-border"
                        >
                          <div className="text-xs text-muted-foreground">{h.label}</div>
                          <div className="text-lg font-bold text-primary mt-0.5 leading-tight">
                            {h.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Spec groups */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                  {product.specSheet.map((group) => {
                    const Icon = iconForGroup(group.title);
                    return (
                      <div key={group.title} className="bg-card flex flex-col">
                        <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-border">
                          <div className="h-7 w-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">
                            {group.title}
                          </h3>
                        </div>
                        <dl className="flex-1">
                          {group.items.map((item, i) => (
                            <div
                              key={item.label}
                              className={
                                "flex items-center justify-between gap-4 px-5 py-2.5 text-sm " +
                                (i % 2 === 1 ? "bg-surface/50" : "")
                              }
                            >
                              <dt className="text-muted-foreground">{item.label}</dt>
                              <dd className="font-semibold text-right text-foreground tabular-nums">
                                {item.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    );
                  })}
                </div>

                {/* Documents footer */}
                {product.documents && product.documents.length > 0 && (
                  <div className="px-6 md:px-10 py-6 bg-surface/60 border-t border-border">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                          Documentación adjunta
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Descarga la documentación oficial del fabricante
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.documents.map((doc) => (
                          <a
                            key={doc.label}
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="group inline-flex items-center gap-2.5 bg-card border border-border rounded-lg pl-3 pr-2 py-2 hover:border-accent hover:shadow-sm transition-all"
                          >
                            <FileText className="h-4 w-4 text-accent" />
                            <div className="text-xs">
                              <div className="font-semibold leading-tight">{doc.label}</div>
                              {doc.size && (
                                <div className="text-muted-foreground">PDF · {doc.size}</div>
                              )}
                            </div>
                            <span className="ml-1 h-7 w-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-accent transition-colors">
                              <Download className="h-3.5 w-3.5" />
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })()}

      <section className="bg-surface py-12">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Truck, title: "Entrega en 72h", text: "Logística en toda la península." },
            { icon: Wrench, title: "Mantenimiento", text: "Incluido durante todo el contrato." },
            { icon: ShieldCheck, title: "Sin permanencia", text: "Cambia o cancela cuando quieras." },
          ].map((b) => (
            <div key={b.title} className="flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <b.icon className="h-5 w-5 text-accent"/>
              </div>
              <div>
                <div className="font-semibold">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-x py-16">
          <h2 className="text-2xl font-bold mb-8">También te puede interesar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
