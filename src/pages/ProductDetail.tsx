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
      {product.specSheet && product.specSheet.length > 0 && (
        <section className="bg-surface border-y border-border">
          <div className="container-x py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  <FileText className="h-3.5 w-3.5" />
                  Ficha técnica
                </span>
                <h2 className="text-3xl font-bold mt-2">Especificaciones</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Datos verificados por el fabricante · {product.brand}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Tag className="h-3.5 w-3.5" />
                Ref. {product.id.toUpperCase()}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {product.specSheet.map((group) => (
                <div
                  key={group.title}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  <div className="bg-primary text-primary-foreground px-5 py-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      {group.title}
                    </h3>
                  </div>
                  <dl className="divide-y divide-border">
                    {group.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 px-5 py-3"
                      >
                        <dt className="text-sm text-muted-foreground">{item.label}</dt>
                        <dd className="text-sm font-semibold text-right">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            {product.documents && product.documents.length > 0 && (
              <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl">
                {product.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 hover:border-accent transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate">{doc.label}</div>
                      {doc.size && (
                        <div className="text-xs text-muted-foreground">PDF · {doc.size}</div>
                      )}
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
