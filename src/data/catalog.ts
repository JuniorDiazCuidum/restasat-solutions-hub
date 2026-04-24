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
  specs?: { label: string; value: string }[];
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

const raw: Omit<Product, "hasOffer" | "originalPrice">[] = [
  // Cocción - 5
  { id: "horno-conv-10", name: "Horno mixto 10 GN", category: "coccion", price: 189, image: imgHornoConv10, description: "10 bandejas GN 1/1, vapor directo y convección.", longDescription: "Horno mixto profesional con 10 niveles GN 1/1, control digital, sondas de núcleo y limpieza automática. Ideal para cocinas centrales y banquetes.", specs:[{label:"Capacidad",value:"10 GN 1/1"},{label:"Potencia",value:"18 kW"},{label:"Conexión",value:"400V"}]},
  { id: "fogon-6q", name: "Fogón industrial 6 quemadores", category: "coccion", price: 79, image: imgFogon6q, description: "Estructura inox, quemadores de alto rendimiento.", longDescription: "Fogón con 6 quemadores de hierro fundido, parrillas robustas y cuba estampada para limpieza fácil.", specs:[{label:"Quemadores",value:"6"},{label:"Potencia",value:"36 kW"}]},
  { id: "plancha-cromo", name: "Plancha cromo dura", category: "coccion", price: 65, image: imgPlanchaCromo, description: "Plancha de doble zona, superficie cromada.", longDescription: "Plancha profesional con superficie de cromo duro que evita la transmisión de sabores y reduce el consumo de aceite.", specs:[{label:"Superficie",value:"80x45 cm"},{label:"Zonas",value:"2"}]},
  { id: "freidora-doble", name: "Freidora doble 2x10L", category: "coccion", price: 55, image: imgFreidoraDoble, description: "Dos cubas independientes, recuperación rápida.", longDescription: "Freidora eléctrica de doble cuba, ideal para diferenciar productos sin transferir sabores.", specs:[{label:"Capacidad",value:"2x10 L"}]},
  { id: "salamandra", name: "Salamandra eléctrica", category: "coccion", price: 42, image: imgSalamandra, description: "Gratinador con elevación, control independiente.", longDescription: "Salamandra profesional para gratinados, dorados y mantenimiento de temperatura.", specs:[{label:"Potencia",value:"3.6 kW"}]},

  // Frio industrial - 7
  { id: "camara-fria", name: "Cámara frigorífica 8m³", category: "frio-industrial", price: 220, image: imgCamaraFria, description: "Panel sándwich, equipo monobloc silencioso.", longDescription: "Cámara modular de 8 m³ con suelo reforzado, equipo monobloc y termostato digital.", specs:[{label:"Volumen",value:"8 m³"},{label:"Rango",value:"0/+5 ºC"}]},
  { id: "abatidor-10", name: "Abatidor 10 GN", category: "frio-industrial", price: 175, image: imgAbatidor10, description: "Abatimiento positivo y negativo, ciclos por sonda.", longDescription: "Abatidor profesional con 10 niveles, sonda de núcleo multipunto y ciclos automáticos HACCP." },
  { id: "mesa-fria", name: "Mesa refrigerada 3 puertas", category: "frio-industrial", price: 95, image: imgMesaFria, description: "Bajo encimera inox, refrigeración ventilada.", longDescription: "Mesa refrigerada con encimera reforzada y refrigeración por aire forzado." },
  { id: "vitrina-tapas", name: "Vitrina de tapas refrigerada", category: "frio-industrial", price: 78, image: imgVitrinaTapas, description: "Curvada, iluminación LED, frío estático.", longDescription: "Vitrina expositora ideal para barras de bar y cafeterías." },
  { id: "armario-cong", name: "Armario congelador 700L", category: "frio-industrial", price: 110, image: imgArmarioCong, description: "Inox AISI 304, ventilado, hasta -22ºC.", longDescription: "Armario de congelación profesional con desescarche automático." },
  { id: "botellero-3p", name: "Botellero refrigerado 3P", category: "frio-industrial", price: 68, image: imgBotellero3p, description: "Refrigeración estática, ideal hostelería.", longDescription: "Botellero compacto para barras y office." },
  { id: "expositor-vert", name: "Expositor vertical 600L", category: "frio-industrial", price: 88, image: imgExpositorVert, description: "Puerta cristal, iluminación LED frontal.", longDescription: "Expositor vertical para bebidas con iluminación LED de bajo consumo." },

  // Lavado - 4
  { id: "lavavajillas-cap", name: "Lavavajillas de capota", category: "lavado", price: 145, image: imgLavavajillasCap, description: "Ciclos rápidos, dosificadores incorporados.", longDescription: "Lavavajillas de capota con doble pared, dosificadores integrados y ciclo rápido de 60 segundos.", specs:[{label:"Cestas/h",value:"60"}]},
  { id: "lavavasos-40", name: "Lavavasos 40x40", category: "lavado", price: 58, image: imgLavavasos40, description: "Compacto, ideal barras y cafeterías.", longDescription: "Lavavasos profesional compacto con bomba de desagüe opcional." },
  { id: "tunel-arrastre", name: "Túnel de arrastre", category: "lavado", price: 320, image: imgTunelArrastre, description: "Alta producción, ahorro de agua y energía.", longDescription: "Túnel de lavado de arrastre para grandes producciones, hasta 1500 platos/hora." },
  { id: "fregadero-2c", name: "Fregadero 2 cubas + escurridor", category: "lavado", price: 35, image: imgFregadero2c, description: "Inox AISI 304, soldado y reforzado.", longDescription: "Fregadero industrial con dos cubas profundas y escurridor lateral." },

  // Preparación - 6
  { id: "amasadora-20", name: "Amasadora espiral 20kg", category: "preparacion", price: 95, image: imgAmasadora20, description: "Cabezal fijo, dos velocidades, temporizador.", longDescription: "Amasadora de espiral profesional para masas de pan, pizza y bollería." },
  { id: "cortadora-fiambre", name: "Cortadora fiambre 300mm", category: "preparacion", price: 48, image: imgCortadoraFiambre, description: "Cuchilla 300mm, afilador integrado.", longDescription: "Cortadora de fiambre con cuchilla cromada y afilador integrado." },
  { id: "procesador-veg", name: "Procesador vegetales", category: "preparacion", price: 62, image: imgProcesadorVeg, description: "Cortadora-rallador, varios discos incluidos.", longDescription: "Procesador de vegetales con 5 discos de corte intercambiables." },
  { id: "batidor-planet", name: "Batidora planetaria 20L", category: "preparacion", price: 75, image: imgBatidorPlanet, description: "Tres velocidades, accesorios incluidos.", longDescription: "Batidora planetaria con gancho, varilla y pala. Bowl de 20L." },
  { id: "envasadora-vacio", name: "Envasadora al vacío", category: "preparacion", price: 88, image: imgEnvasadoraVacio, description: "Campana, barra de soldadura 35cm.", longDescription: "Envasadora al vacío de campana profesional para conservación y cocina sous-vide." },
  { id: "termoselladora", name: "Termoselladora barquetas", category: "preparacion", price: 70, image: imgTermoselladora, description: "Sellado para take-away y delivery.", longDescription: "Termoselladora para barquetas de plástico, ideal delivery." },

  // Extracción - 4
  { id: "campana-mural", name: "Campana mural 2m", category: "extraccion", price: 85, image: imgCampanaMural, description: "Filtros inox lavavajillas, iluminación LED.", longDescription: "Campana extractora mural con filtros inox y motor opcional." },
  { id: "campana-central", name: "Campana central 3m", category: "extraccion", price: 130, image: imgCampanaCentral, description: "Doble vertiente, alta capacidad.", longDescription: "Campana central de doble vertiente para islas de cocción." },
  { id: "motor-extractor", name: "Motor extractor 3000m³/h", category: "extraccion", price: 95, image: imgMotorExtractor, description: "Caja de ventilación insonorizada.", longDescription: "Motor de extracción con caja insonorizada para instalación en cubierta." },
  { id: "filtro-carbon", name: "Filtro de carbón activo", category: "extraccion", price: 28, image: imgFiltroCarbon, description: "Sistema antiolor para zonas urbanas.", longDescription: "Sistema de filtrado por carbón activo para neutralizar olores." },
];

export const products: Product[] = withOffers(raw);

export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.category === slug);

export const getProduct = (id: string) => products.find((p) => p.id === id);
