import { Link } from "react-router-dom";
import { Product } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all flex flex-col h-full">
      {product.hasOffer && (
        <span className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
          Oferta
        </span>
      )}
      <div className="aspect-[4/3] bg-surface rounded-lg mb-5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={512}
          height={384}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
        {product.description}
      </p>
      <div className="mt-auto">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-baseline gap-2">
              {product.hasOffer && product.originalPrice && (
                <span className="text-sm line-through text-destructive font-medium">
                  {product.originalPrice}€
                </span>
              )}
              <span className="text-2xl font-bold text-primary">{product.price}€</span>
            </div>
            <span className="text-xs text-muted-foreground">/ mes</span>
          </div>
        </div>
        <Button asChild variant="outline" className="w-full group/btn">
          <Link to={`/producto/${product.id}`}>
            Más información
            <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
      </div>
    </article>
  );
};
