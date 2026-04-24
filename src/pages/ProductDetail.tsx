import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { categories, getProduct, getProductsByCategory } from "@/data/catalog";
import { ArrowLeft, Check, ShieldCheck, Truck, Wrench } from "lucide-react";
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

          {product.specs && (
            <div className="mb-8">
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider">Características</h3>
              <dl className="grid grid-cols-2 gap-3">
                {product.specs.map((s) => (
                  <div key={s.label} className="bg-surface rounded-lg p-3">
                    <dt className="text-xs text-muted-foreground">{s.label}</dt>
                    <dd className="text-sm font-semibold mt-0.5">{s.value}</dd>
                  </div>
                ))}
              </dl>
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
