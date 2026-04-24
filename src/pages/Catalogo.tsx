import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, SearchX, SlidersHorizontal, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { categories, getProductsByCategory, products, brands, type Product } from "@/data/catalog";
import { cn } from "@/lib/utils";
import catalogHero from "@/assets/catalog-hero.jpg";

type SortOption = "relevance" | "price-asc" | "price-desc" | "name-asc";

const PRICE_MIN = 0;
const PRICE_MAX = 350;

const Catalogo = () => {
  const { categoria } = useParams();
  const activeSlug = categoria;
  const [query, setQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
    setOnlyOffers(false);
    setSort("relevance");
  };

  const activeFilterCount =
    selectedBrands.length +
    (priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX ? 1 : 0) +
    (onlyOffers ? 1 : 0);

  const applyFilters = (items: Product[]) => {
    return items.filter((p) => {
      if (normalizedQuery && !p.name.toLowerCase().includes(normalizedQuery) && !p.description.toLowerCase().includes(normalizedQuery)) {
        return false;
      }
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (onlyOffers && !p.hasOffer) return false;
      return true;
    });
  };

  const sortItems = (items: Product[]) => {
    const arr = [...items];
    switch (sort) {
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "name-asc":
        return arr.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return arr;
    }
  };

  const visibleProducts = useMemo(() => {
    const base = activeSlug ? getProductsByCategory(activeSlug) : products;
    return sortItems(applyFilters(base));
  }, [activeSlug, normalizedQuery, selectedBrands, priceRange, onlyOffers, sort]);

  const visibleCategories = activeSlug
    ? categories.filter((c) => c.slug === activeSlug)
    : categories;

  const FiltersPanel = (
    <div className="space-y-6">
      {/* Sort */}
      <div className="space-y-2">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Ordenar por
        </Label>
        <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
          <SelectTrigger className="bg-card">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevancia</SelectItem>
            <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
            <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
            <SelectItem value="name-asc">Nombre A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Price */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Precio mensual
          </Label>
          <span className="text-sm font-medium">
            {priceRange[0]}€ – {priceRange[1]}€
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={(v) => setPriceRange([v[0], v[1]] as [number, number])}
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={5}
          className="py-2"
        />
      </div>

      <Separator />

      {/* Brands */}
      <div className="space-y-3">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Fabricante
        </Label>
        <div className="space-y-2.5 max-h-64 overflow-auto pr-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2.5">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label
                htmlFor={`brand-${brand}`}
                className="text-sm font-normal cursor-pointer flex-1"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Offers */}
      <div className="flex items-center gap-2.5">
        <Checkbox
          id="only-offers"
          checked={onlyOffers}
          onCheckedChange={(c) => setOnlyOffers(c === true)}
        />
        <Label htmlFor="only-offers" className="text-sm font-normal cursor-pointer">
          Solo productos en oferta
        </Label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />



      {/* Hero with image */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={catalogHero}
            alt="Cocina industrial profesional con maquinaria de hostelería"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/95" />
        </div>

        <div className="container-x relative py-16 md:py-24">

          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Catálogo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Maquinaria profesional para hostelería
            </h1>
            <p className="text-muted-foreground">
              Equipos seleccionados para cocinas exigentes. Filtra por categoría, fabricante o precio.
            </p>

            {/* Search + filter button */}
            <div className="flex gap-2 mt-8 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar producto: horno, freidora, cámara..."
                  className="pl-11 h-12 text-base bg-card"
                />
              </div>
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="lg" className="h-12 bg-card relative shrink-0">
                    <SlidersHorizontal className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Filtros</span>
                    {activeFilterCount > 0 && (
                      <Badge
                        variant="default"
                        className="absolute -top-2 -right-2 h-5 min-w-5 px-1.5 text-[10px]"
                      >
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md flex flex-col">
                  <SheetHeader>
                    <SheetTitle>Filtrar productos</SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto py-6">{FiltersPanel}</div>
                  <SheetFooter className="flex-row gap-2 sm:justify-between border-t pt-4">
                    <Button variant="ghost" onClick={clearFilters} className="flex-1">
                      Limpiar
                    </Button>
                    <Button onClick={() => setFiltersOpen(false)} className="flex-1">
                      Aplicar
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active filter chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {selectedBrands.map((b) => (
                  <button
                    key={b}
                    onClick={() => toggleBrand(b)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-xs hover:border-accent transition-colors"
                  >
                    {b}
                    <X className="h-3 w-3" />
                  </button>
                ))}
                {(priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX) && (
                  <button
                    onClick={() => setPriceRange([PRICE_MIN, PRICE_MAX])}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-xs hover:border-accent transition-colors"
                  >
                    {priceRange[0]}€ – {priceRange[1]}€
                    <X className="h-3 w-3" />
                  </button>
                )}
                {onlyOffers && (
                  <button
                    onClick={() => setOnlyOffers(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-xs hover:border-accent transition-colors"
                  >
                    Solo ofertas
                    <X className="h-3 w-3" />
                  </button>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-accent hover:underline px-2"
                >
                  Limpiar todo
                </button>
              </div>
            )}
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
              No hay coincidencias con los filtros seleccionados. Prueba ajustando los criterios.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="px-4 py-2 text-sm font-medium rounded-md border border-border hover:border-accent transition-colors"
                >
                  Limpiar búsqueda
                </button>
              )}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground"
                >
                  Quitar filtros
                </button>
              )}
            </div>
          </div>
        ) : sort !== "relevance" || activeFilterCount > 0 || normalizedQuery ? (
          // Flat grid when filtering/sorting actively
          <section>
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-border">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Resultados</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Productos que coinciden con tus filtros
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                {visibleProducts.length} producto{visibleProducts.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {visibleProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        ) : (
          visibleCategories.map((c) => {
            const items = sortItems(applyFilters(getProductsByCategory(c.slug)));
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
