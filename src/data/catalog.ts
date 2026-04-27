import imgHornoConv10 from "@/assets/products/horno-conv-10.jpg";
import imgFogon6q from "@/assets/products/fogon-6q.jpg";
import imgPlanchaCromo from "@/assets/products/plancha-cromo.jpg";
import imgFreidoraDoble from "@/assets/products/freidora-doble.jpg";
import imgSalamandra from "@/assets/products/salamandra.jpg";
import imgCamaraFria from "@/assets/products/camara-fria.jpg";
import imgAbatidor10 from "@/assets/products/abatidor-10.jpg";
import imgMesaFria from "@/assets/products/mesa-fria.jpg";
import imgVitrinaTapas from "@/assets/products/vitrina-tapas.jpg";
import imgArmarioCong from "@/assets/products/armario-cong.jpg";
import imgBotellero3p from "@/assets/products/botellero-3p.jpg";
import imgExpositorVert from "@/assets/products/expositor-vert.jpg";
import imgLavavajillasCap from "@/assets/products/lavavajillas-cap.jpg";
import imgLavavasos40 from "@/assets/products/lavavasos-40.jpg";
import imgTunelArrastre from "@/assets/products/tunel-arrastre.jpg";
import imgFregadero2c from "@/assets/products/fregadero-2c.jpg";
import imgAmasadora20 from "@/assets/products/amasadora-20.jpg";
import imgCortadoraFiambre from "@/assets/products/cortadora-fiambre.jpg";
import imgProcesadorVeg from "@/assets/products/procesador-veg.jpg";
import imgBatidorPlanet from "@/assets/products/batidor-planet.jpg";
import imgEnvasadoraVacio from "@/assets/products/envasadora-vacio.jpg";
import imgTermoselladora from "@/assets/products/termoselladora.jpg";
import imgCampanaMural from "@/assets/products/campana-mural.jpg";
import imgCampanaCentral from "@/assets/products/campana-central.jpg";
import imgMotorExtractor from "@/assets/products/motor-extractor.jpg";
import imgFiltroCarbon from "@/assets/products/filtro-carbon.jpg";

export type SpecGroup = {
  title: string;
  items: { label: string; value: string }[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // EUR / mes
  category: string;
  brand: string;
  image: string;
  hasOffer?: boolean;
  originalPrice?: number;
  longDescription?: string;
  /** Bullet list of key features highlighted in the product page */
  features?: string[];
  /** Structured technical sheet, grouped by section */
  specSheet?: SpecGroup[];
  /** Optional documents (datasheet, manual...) */
  documents?: { label: string; size?: string }[];
};

export const brands = [
  "Rational",
  "Fagor",
  "Repagas",
  "Infrico",
  "Coreco",
  "Sammic",
  "Mainho",
  "Movilfrit",
] as const;

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  { slug: "coccion", name: "Cocción", description: "Hornos, fogones y planchas profesionales para alta producción." },
  { slug: "frio-industrial", name: "Frío industrial", description: "Cámaras, abatidores y conservación a medida." },
  { slug: "lavado", name: "Lavado", description: "Lavavajillas y lavavasos para servicio continuo." },
  { slug: "preparacion", name: "Preparación", description: "Procesadores, amasadoras y maquinaria de barra." },
  { slug: "extraccion", name: "Extracción", description: "Campanas y sistemas de ventilación industrial." },
];

// Helper to mark every 3rd product as offer
const withOffers = (items: Omit<Product, "hasOffer" | "originalPrice">[]): Product[] =>
  items.map((p, i) => {
    if ((i + 1) % 3 === 0) {
      const original = Math.round(p.price * 1.15);
      return { ...p, hasOffer: true, originalPrice: original };
    }
    return p;
  });

const standardDocs = [
  { label: "Ficha técnica PDF", size: "1.2 MB" },
  { label: "Manual de uso", size: "2.4 MB" },
];

const raw: Omit<Product, "hasOffer" | "originalPrice">[] = [
  // ───────── Cocción ─────────
  {
    id: "horno-conv-10",
    name: "Horno mixto 10 GN",
    category: "coccion",
    brand: "Rational",
    price: 189,
    image: imgHornoConv10,
    description: "10 bandejas GN 1/1, vapor directo y convección.",
    longDescription:
      "Horno mixto profesional con 10 niveles GN 1/1, control digital táctil, sondas multipunto y limpieza automática integrada. Ideal para cocinas centrales, banquetes y producción intensiva.",
    features: [
      "5 modos de cocción programables",
      "Limpieza automática con 4 niveles",
      "Sonda multipunto Cook & Hold",
      "Conexión iKitchen / IoT",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "10 bandejas GN 1/1" },
          { label: "Material", value: "Inox AISI 304" },
          { label: "Control", value: "Pantalla táctil 7\"" },
          { label: "Garantía", value: "2 años in-situ" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "18,9 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Consumo medio", value: "9,2 kWh" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "850 mm" },
          { label: "Fondo", value: "842 mm" },
          { label: "Alto", value: "1.014 mm" },
          { label: "Peso", value: "133 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "fogon-6q",
    name: "Fogón industrial 6 quemadores",
    category: "coccion",
    brand: "Repagas",
    price: 79,
    image: imgFogon6q,
    description: "Estructura inox, quemadores de alto rendimiento.",
    longDescription:
      "Fogón con 6 quemadores de hierro fundido, parrillas robustas y cuba estampada de una sola pieza para limpieza fácil.",
    features: [
      "Quemadores de hierro fundido",
      "Encendido piezoeléctrico",
      "Cuba estampada estanca",
      "Parrillas reforzadas independientes",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Quemadores", value: "6 (2× 7,5 kW · 4× 5,5 kW)" },
          { label: "Material", value: "Inox AISI 304" },
          { label: "Encendido", value: "Piezoeléctrico" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Conexión",
        items: [
          { label: "Potencia gas", value: "37 kW" },
          { label: "Tipo de gas", value: "Natural / Propano" },
          { label: "Conexión", value: "1/2\" GAS" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "1.200 mm" },
          { label: "Fondo", value: "750 mm" },
          { label: "Alto", value: "850 mm" },
          { label: "Peso", value: "98 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "plancha-cromo",
    name: "Plancha cromo dura",
    category: "coccion",
    brand: "Mainho",
    price: 65,
    image: imgPlanchaCromo,
    description: "Plancha de doble zona, superficie cromada.",
    longDescription:
      "Plancha profesional con superficie de cromo duro que evita la transmisión de sabores, reduce el consumo de aceite y mejora la conservación de propiedades del alimento.",
    features: [
      "Superficie de cromo duro",
      "Doble zona independiente",
      "Cajón recoge-grasas extraíble",
      "Salpicaderos en 3 lados",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Superficie útil", value: "780 × 450 mm" },
          { label: "Acabado", value: "Cromo duro 60µm" },
          { label: "Zonas", value: "2 independientes" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "7,8 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Termostato", value: "100 - 300 ºC" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "800 mm" },
          { label: "Fondo", value: "600 mm" },
          { label: "Alto", value: "290 mm" },
          { label: "Peso", value: "62 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "freidora-doble",
    name: "Freidora doble 2x10L",
    category: "coccion",
    brand: "Movilfrit",
    price: 55,
    image: imgFreidoraDoble,
    description: "Dos cubas independientes, recuperación rápida.",
    longDescription:
      "Freidora eléctrica de doble cuba con sistema de zona fría que prolonga la vida del aceite. Ideal para diferenciar productos sin transferir sabores.",
    features: [
      "Sistema zona fría",
      "Resistencias basculantes",
      "Grifos de vaciado independientes",
      "Termostato de seguridad",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "2 × 10 L" },
          { label: "Producción", value: "Hasta 20 kg/h" },
          { label: "Cestas", value: "2 incluidas" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "2 × 7,5 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Termostato", value: "60 - 190 ºC" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "800 mm" },
          { label: "Fondo", value: "600 mm" },
          { label: "Alto", value: "850 mm" },
          { label: "Peso", value: "55 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "salamandra",
    name: "Salamandra eléctrica",
    category: "coccion",
    brand: "Fagor",
    price: 42,
    image: imgSalamandra,
    description: "Gratinador con elevación, control independiente.",
    longDescription:
      "Salamandra profesional para gratinados, dorados y mantenimiento de temperatura. Cabezal con elevación motorizada y control de zonas independiente.",
    features: [
      "Cabezal con elevación motorizada",
      "Doble zona independiente",
      "Bandeja recoge-grasas",
      "Cuerpo en inox AISI 304",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Superficie", value: "600 × 350 mm" },
          { label: "Resistencias", value: "Cuarzo infrarrojo" },
          { label: "Zonas", value: "2 independientes" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "3,6 kW" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Tiempo calentamiento", value: "< 60 s" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "660 mm" },
          { label: "Fondo", value: "500 mm" },
          { label: "Alto", value: "550 mm" },
          { label: "Peso", value: "32 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },

  // ───────── Frío industrial ─────────
  {
    id: "camara-fria",
    name: "Cámara frigorífica 8m³",
    category: "frio-industrial",
    brand: "Infrico",
    price: 220,
    image: imgCamaraFria,
    description: "Panel sándwich, equipo monobloc silencioso.",
    longDescription:
      "Cámara modular de 8 m³ con paneles sándwich de poliuretano inyectado, suelo reforzado, equipo monobloc silencioso y termostato digital con registro HACCP.",
    features: [
      "Panel sándwich 80 mm poliuretano",
      "Suelo antideslizante reforzado",
      "Equipo monobloc < 55 dB",
      "Registro HACCP integrado",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Volumen útil", value: "8 m³" },
          { label: "Aislamiento", value: "Poliuretano 80 mm" },
          { label: "Rango temperatura", value: "0 / +5 ºC" },
          { label: "Garantía", value: "2 años + 5 compresor" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "1,6 kW" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Consumo medio", value: "5,8 kWh/día" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "2.040 mm" },
          { label: "Fondo", value: "2.040 mm" },
          { label: "Alto", value: "2.200 mm" },
          { label: "Peso", value: "210 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "abatidor-10",
    name: "Abatidor 10 GN",
    category: "frio-industrial",
    brand: "Fagor",
    price: 175,
    image: imgAbatidor10,
    description: "Abatimiento positivo y negativo, ciclos por sonda.",
    longDescription:
      "Abatidor profesional con 10 niveles GN 1/1, sonda de núcleo multipunto y ciclos automáticos HACCP para conservación segura de alimentos.",
    features: [
      "Ciclos +90→+3 ºC y +90→-18 ºC",
      "Sonda multipunto incluida",
      "Pantalla táctil con HACCP",
      "Gas R452A bajo GWP",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "10 GN 1/1" },
          { label: "Producción +3ºC", value: "40 kg / 90 min" },
          { label: "Producción -18ºC", value: "30 kg / 240 min" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "2,3 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Refrigerante", value: "R452A" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "790 mm" },
          { label: "Fondo", value: "800 mm" },
          { label: "Alto", value: "1.290 mm" },
          { label: "Peso", value: "175 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "mesa-fria",
    name: "Mesa refrigerada 3 puertas",
    category: "frio-industrial",
    brand: "Coreco",
    price: 95,
    image: imgMesaFria,
    description: "Bajo encimera inox, refrigeración ventilada.",
    longDescription:
      "Mesa refrigerada con encimera reforzada de 60 mm y refrigeración por aire forzado. Capacidad para 9 bandejas GN 1/1.",
    features: [
      "Encimera reforzada 60 mm",
      "Refrigeración ventilada uniforme",
      "Cierre magnético reversible",
      "Patas regulables en altura",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "405 L" },
          { label: "Puertas", value: "3 (con cierre magnético)" },
          { label: "Rango temperatura", value: "0 / +8 ºC" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "350 W" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Refrigerante", value: "R290" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "1.795 mm" },
          { label: "Fondo", value: "700 mm" },
          { label: "Alto", value: "850 mm" },
          { label: "Peso", value: "115 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "vitrina-tapas",
    name: "Vitrina de tapas refrigerada",
    category: "frio-industrial",
    brand: "Infrico",
    price: 78,
    image: imgVitrinaTapas,
    description: "Curvada, iluminación LED, frío estático.",
    longDescription:
      "Vitrina expositora ideal para barras de bar y cafeterías. Cristal curvo, iluminación LED y frío estático silencioso.",
    features: [
      "Cristal curvo abatible",
      "Iluminación LED frontal",
      "Frío estático silencioso",
      "3 niveles de exposición",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "150 L" },
          { label: "Iluminación", value: "LED 12 W" },
          { label: "Rango temperatura", value: "+4 / +10 ºC" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "280 W" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Refrigerante", value: "R290" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "1.500 mm" },
          { label: "Fondo", value: "375 mm" },
          { label: "Alto", value: "395 mm" },
          { label: "Peso", value: "55 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "armario-cong",
    name: "Armario congelador 700L",
    category: "frio-industrial",
    brand: "Coreco",
    price: 110,
    image: imgArmarioCong,
    description: "Inox AISI 304, ventilado, hasta -22ºC.",
    longDescription:
      "Armario de congelación profesional con desescarche automático y refrigerante ecológico R290.",
    features: [
      "Refrigeración ventilada",
      "Desescarche automático",
      "Refrigerante ecológico R290",
      "Cierre magnético con llave",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "700 L" },
          { label: "Bandejas", value: "3 GN 2/1" },
          { label: "Rango temperatura", value: "-18 / -22 ºC" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "850 W" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Refrigerante", value: "R290" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "740 mm" },
          { label: "Fondo", value: "830 mm" },
          { label: "Alto", value: "2.080 mm" },
          { label: "Peso", value: "138 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "botellero-3p",
    name: "Botellero refrigerado 3P",
    category: "frio-industrial",
    brand: "Infrico",
    price: 68,
    image: imgBotellero3p,
    description: "Refrigeración estática, ideal hostelería.",
    longDescription: "Botellero compacto para barras y office, con tres puertas correderas y patas regulables.",
    features: [
      "Puertas correderas vidrio",
      "Iluminación LED interior",
      "Patas regulables",
      "Refrigeración estática",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "335 L" },
          { label: "Puertas", value: "3 correderas" },
          { label: "Rango temperatura", value: "+2 / +8 ºC" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "240 W" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Refrigerante", value: "R600a" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "1.500 mm" },
          { label: "Fondo", value: "500 mm" },
          { label: "Alto", value: "850 mm" },
          { label: "Peso", value: "82 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "expositor-vert",
    name: "Expositor vertical 600L",
    category: "frio-industrial",
    brand: "Coreco",
    price: 88,
    image: imgExpositorVert,
    description: "Puerta cristal, iluminación LED frontal.",
    longDescription: "Expositor vertical para bebidas con iluminación LED de bajo consumo y refrigeración ventilada.",
    features: [
      "Puerta cristal doble",
      "Iluminación LED perimetral",
      "5 estantes regulables",
      "Refrigeración ventilada",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad", value: "600 L" },
          { label: "Estantes", value: "5 regulables" },
          { label: "Rango temperatura", value: "+2 / +10 ºC" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "480 W" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Refrigerante", value: "R290" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "680 mm" },
          { label: "Fondo", value: "740 mm" },
          { label: "Alto", value: "2.040 mm" },
          { label: "Peso", value: "97 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },

  // ───────── Lavado ─────────
  {
    id: "lavavajillas-cap",
    name: "Lavavajillas de capota",
    category: "lavado",
    brand: "Sammic",
    price: 145,
    image: imgLavavajillasCap,
    description: "Ciclos rápidos, dosificadores incorporados.",
    longDescription:
      "Lavavajillas de capota con doble pared, dosificadores integrados y ciclo rápido de 60 segundos. Ahorro de agua: 2 L por ciclo.",
    features: [
      "Doble pared insonorizada",
      "Dosificadores incluidos",
      "Bomba de desagüe integrada",
      "Solo 2 L por ciclo",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Producción", value: "60 cestas/h" },
          { label: "Cesta", value: "500 × 500 mm" },
          { label: "Ciclos", value: "60 / 90 / 180 s" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico / Hidráulico",
        items: [
          { label: "Potencia", value: "9 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Consumo agua", value: "2 L/ciclo" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "735 mm" },
          { label: "Fondo", value: "750 mm" },
          { label: "Alto abierto", value: "2.030 mm" },
          { label: "Peso", value: "108 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "lavavasos-40",
    name: "Lavavasos 40x40",
    category: "lavado",
    brand: "Sammic",
    price: 58,
    image: imgLavavasos40,
    description: "Compacto, ideal barras y cafeterías.",
    longDescription: "Lavavasos profesional compacto con bomba de desagüe opcional y cuba estampada de una pieza.",
    features: [
      "Cuba estampada inox",
      "Cesta 400 × 400 mm",
      "Bomba desagüe opcional",
      "Doble dosificador",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Producción", value: "30 cestas/h" },
          { label: "Cesta", value: "400 × 400 mm" },
          { label: "Ciclos", value: "120 / 180 s" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico / Hidráulico",
        items: [
          { label: "Potencia", value: "2,8 kW" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Consumo agua", value: "2,4 L/ciclo" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "455 mm" },
          { label: "Fondo", value: "510 mm" },
          { label: "Alto", value: "680 mm" },
          { label: "Peso", value: "32 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "tunel-arrastre",
    name: "Túnel de arrastre",
    category: "lavado",
    brand: "Fagor",
    price: 320,
    image: imgTunelArrastre,
    description: "Alta producción, ahorro de agua y energía.",
    longDescription: "Túnel de lavado de arrastre para grandes producciones, hasta 1.500 platos/hora con recuperación de calor.",
    features: [
      "Recuperación de calor",
      "Triple zona: lavado, aclarado y secado",
      "Variador de velocidad",
      "Pantalla táctil de control",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Producción", value: "Hasta 1.500 platos/h" },
          { label: "Zonas", value: "Lavado + aclarado + secado" },
          { label: "Material", value: "Inox AISI 304" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico / Hidráulico",
        items: [
          { label: "Potencia", value: "28,5 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Consumo agua", value: "180 L/h" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "2.450 mm" },
          { label: "Fondo", value: "780 mm" },
          { label: "Alto", value: "1.580 mm" },
          { label: "Peso", value: "320 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "fregadero-2c",
    name: "Fregadero 2 cubas + escurridor",
    category: "lavado",
    brand: "Repagas",
    price: 35,
    image: imgFregadero2c,
    description: "Inox AISI 304, soldado y reforzado.",
    longDescription: "Fregadero industrial con dos cubas profundas y escurridor lateral. Estructura totalmente soldada.",
    features: [
      "Inox AISI 304 calidad alimentaria",
      "Cubas embutidas sin soldaduras",
      "Estante inferior reforzado",
      "Patas regulables",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Cubas", value: "2 (500 × 400 × 300 mm)" },
          { label: "Material", value: "Inox AISI 304" },
          { label: "Espesor", value: "1,2 mm" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "1.800 mm" },
          { label: "Fondo", value: "700 mm" },
          { label: "Alto", value: "850 mm" },
          { label: "Peso", value: "48 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },

  // ───────── Preparación ─────────
  {
    id: "amasadora-20",
    name: "Amasadora espiral 20kg",
    category: "preparacion",
    brand: "Sammic",
    price: 95,
    image: imgAmasadora20,
    description: "Cabezal fijo, dos velocidades, temporizador.",
    longDescription: "Amasadora de espiral profesional para masas de pan, pizza y bollería. Bowl extraíble y temporizador integrado.",
    features: [
      "Doble velocidad",
      "Temporizador digital",
      "Espiral y bowl en inox",
      "Parada de seguridad",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad masa", value: "20 kg" },
          { label: "Capacidad bowl", value: "30 L" },
          { label: "Velocidades", value: "2" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "1,1 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "440 mm" },
          { label: "Fondo", value: "750 mm" },
          { label: "Alto", value: "830 mm" },
          { label: "Peso", value: "112 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "cortadora-fiambre",
    name: "Cortadora fiambre 300mm",
    category: "preparacion",
    brand: "Sammic",
    price: 48,
    image: imgCortadoraFiambre,
    description: "Cuchilla 300mm, afilador integrado.",
    longDescription: "Cortadora de fiambre con cuchilla cromada de 300 mm, afilador integrado y carro deslizante de aluminio.",
    features: [
      "Cuchilla cromada 300 mm",
      "Afilador integrado",
      "Carro deslizante aluminio",
      "Protector de cuchilla",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Diámetro cuchilla", value: "300 mm" },
          { label: "Grosor de corte", value: "0 - 16 mm" },
          { label: "Recorrido carro", value: "260 mm" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "230 W" },
          { label: "Tensión", value: "230 V · 1N~" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "555 mm" },
          { label: "Fondo", value: "490 mm" },
          { label: "Alto", value: "415 mm" },
          { label: "Peso", value: "23 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "procesador-veg",
    name: "Procesador vegetales",
    category: "preparacion",
    brand: "Sammic",
    price: 62,
    image: imgProcesadorVeg,
    description: "Cortadora-rallador, varios discos incluidos.",
    longDescription: "Procesador de vegetales con 5 discos de corte intercambiables. Ideal para producción media-alta.",
    features: [
      "5 discos incluidos",
      "Cabezal con seguridad magnética",
      "Producción 250 kg/h",
      "Cuerpo en aluminio anodizado",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Producción", value: "250 kg/h" },
          { label: "Discos incluidos", value: "5" },
          { label: "Velocidad", value: "375 rpm" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "550 W" },
          { label: "Tensión", value: "230 V · 1N~" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "320 mm" },
          { label: "Fondo", value: "590 mm" },
          { label: "Alto", value: "550 mm" },
          { label: "Peso", value: "21 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "batidor-planet",
    name: "Batidora planetaria 20L",
    category: "preparacion",
    brand: "Fagor",
    price: 75,
    image: imgBatidorPlanet,
    description: "Tres velocidades, accesorios incluidos.",
    longDescription: "Batidora planetaria con gancho, varilla y pala. Bowl de 20 L y rejilla de protección.",
    features: [
      "3 velocidades",
      "Gancho, varilla y pala incluidos",
      "Rejilla de seguridad",
      "Elevación bowl manual",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Capacidad bowl", value: "20 L" },
          { label: "Velocidades", value: "3" },
          { label: "Accesorios", value: "Gancho + varilla + pala" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "750 W" },
          { label: "Tensión", value: "400 V · 3N~" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "520 mm" },
          { label: "Fondo", value: "560 mm" },
          { label: "Alto", value: "830 mm" },
          { label: "Peso", value: "92 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "envasadora-vacio",
    name: "Envasadora al vacío",
    category: "preparacion",
    brand: "Sammic",
    price: 88,
    image: imgEnvasadoraVacio,
    description: "Campana, barra de soldadura 35cm.",
    longDescription: "Envasadora al vacío de campana profesional para conservación y cocina sous-vide. Bomba Busch de 21 m³/h.",
    features: [
      "Bomba Busch 21 m³/h",
      "Barra soldadura 350 mm",
      "Programas configurables",
      "Inyección de gas opcional",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Tipo", value: "Campana" },
          { label: "Bomba", value: "Busch 21 m³/h" },
          { label: "Barra soldadura", value: "350 mm" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "0,9 kW" },
          { label: "Tensión", value: "230 V · 1N~" },
          { label: "Vacío final", value: "99,8 %" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "478 mm" },
          { label: "Fondo", value: "550 mm" },
          { label: "Alto", value: "460 mm" },
          { label: "Peso", value: "55 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "termoselladora",
    name: "Termoselladora barquetas",
    category: "preparacion",
    brand: "Fagor",
    price: 70,
    image: imgTermoselladora,
    description: "Sellado para take-away y delivery.",
    longDescription: "Termoselladora para barquetas de plástico, ideal delivery. Cambio de molde rápido sin herramientas.",
    features: [
      "Cambio de molde sin herramientas",
      "Compatible PET, PP y CPET",
      "Sellado en 3 segundos",
      "Producción 4 barquetas/ciclo",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Barquetas/ciclo", value: "4" },
          { label: "Tiempo ciclo", value: "3 - 5 s" },
          { label: "Compatible", value: "PET, PP, CPET" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "1,5 kW" },
          { label: "Tensión", value: "230 V · 1N~" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "520 mm" },
          { label: "Fondo", value: "640 mm" },
          { label: "Alto", value: "440 mm" },
          { label: "Peso", value: "48 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },

  // ───────── Extracción ─────────
  {
    id: "campana-mural",
    name: "Campana mural 2m",
    category: "extraccion",
    brand: "Repagas",
    price: 85,
    image: imgCampanaMural,
    description: "Filtros inox lavavajillas, iluminación LED.",
    longDescription: "Campana extractora mural con filtros inox y motor opcional. Cumple con normativa UNE 100165.",
    features: [
      "Filtros inox aptos lavavajillas",
      "Iluminación LED estanca",
      "Canal recoge-grasas",
      "Cumple UNE 100165",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Tipo", value: "Mural snack" },
          { label: "Filtros", value: "4 filtros inox" },
          { label: "Iluminación", value: "LED 2× 18 W" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Aire",
        items: [
          { label: "Caudal recomendado", value: "2.000 m³/h" },
          { label: "Salida", value: "Ø 250 mm" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "2.000 mm" },
          { label: "Fondo", value: "900 mm" },
          { label: "Alto", value: "650 mm" },
          { label: "Peso", value: "62 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "campana-central",
    name: "Campana central 3m",
    category: "extraccion",
    brand: "Mainho",
    price: 130,
    image: imgCampanaCentral,
    description: "Doble vertiente, alta capacidad.",
    longDescription: "Campana central de doble vertiente para islas de cocción con plenum compensado.",
    features: [
      "Doble vertiente",
      "Plenum compensado",
      "8 filtros inox",
      "Iluminación LED estanca",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Tipo", value: "Central isla" },
          { label: "Filtros", value: "8 filtros inox" },
          { label: "Iluminación", value: "LED 4× 18 W" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Aire",
        items: [
          { label: "Caudal recomendado", value: "5.000 m³/h" },
          { label: "Salida", value: "Ø 315 mm × 2" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "3.000 mm" },
          { label: "Fondo", value: "1.800 mm" },
          { label: "Alto", value: "650 mm" },
          { label: "Peso", value: "145 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "motor-extractor",
    name: "Motor extractor 3000m³/h",
    category: "extraccion",
    brand: "Repagas",
    price: 95,
    image: imgMotorExtractor,
    description: "Caja de ventilación insonorizada.",
    longDescription: "Motor de extracción con caja insonorizada para instalación en cubierta. Variador de velocidad incluido.",
    features: [
      "Caja insonorizada",
      "Variador de velocidad",
      "Compatible 400 ºC / 2h",
      "Mantenimiento sencillo",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Caudal", value: "3.000 m³/h" },
          { label: "Presión estática", value: "350 Pa" },
          { label: "Resistencia al fuego", value: "F400/120" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Eléctrico",
        items: [
          { label: "Potencia", value: "1,1 kW" },
          { label: "Tensión", value: "400 V · 3N~" },
          { label: "Nivel sonoro", value: "62 dB(A)" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "650 mm" },
          { label: "Fondo", value: "650 mm" },
          { label: "Alto", value: "560 mm" },
          { label: "Peso", value: "48 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
  {
    id: "filtro-carbon",
    name: "Filtro de carbón activo",
    category: "extraccion",
    brand: "Mainho",
    price: 28,
    image: imgFiltroCarbon,
    description: "Sistema antiolor para zonas urbanas.",
    longDescription: "Sistema de filtrado por carbón activo para neutralizar olores en zonas urbanas o residenciales.",
    features: [
      "Carbón activo recargable",
      "Eficiencia >90 %",
      "Acceso lateral rápido",
      "Indicador de saturación",
    ],
    specSheet: [
      {
        title: "General",
        items: [
          { label: "Carga carbón", value: "25 kg" },
          { label: "Eficiencia", value: "> 90 %" },
          { label: "Vida útil", value: "6 - 12 meses" },
          { label: "Garantía", value: "2 años" },
        ],
      },
      {
        title: "Aire",
        items: [
          { label: "Caudal máx.", value: "3.000 m³/h" },
          { label: "Pérdida de carga", value: "120 Pa" },
        ],
      },
      {
        title: "Dimensiones",
        items: [
          { label: "Ancho", value: "600 mm" },
          { label: "Fondo", value: "600 mm" },
          { label: "Alto", value: "500 mm" },
          { label: "Peso", value: "38 kg" },
        ],
      },
    ],
    documents: standardDocs,
  },
];

export const products: Product[] = withOffers(raw);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getProduct = (id: string) => products.find((p) => p.id === id);
