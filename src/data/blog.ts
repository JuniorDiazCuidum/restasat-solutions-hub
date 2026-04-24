import coverVentajas from "@/assets/blog/ventajas-alquiler.jpg";
import coverHorno from "@/assets/blog/elegir-horno.jpg";
import coverTendencias from "@/assets/blog/tendencias-2025.jpg";
import coverFrio from "@/assets/blog/mantenimiento-frio.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  cover: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "ventajas-alquiler-maquinaria",
    title: "5 ventajas del alquiler de maquinaria para hostelería",
    excerpt: "Por qué cada vez más restaurantes apuestan por el renting frente a la compra tradicional.",
    date: "12 Mar 2025",
    category: "Negocio",
    readTime: "4 min",
    cover: coverVentajas,
    content: [
      "El sector de la hostelería atraviesa una transformación profunda. Los márgenes son cada vez más ajustados y la inversión inicial en maquinaria puede comprometer la liquidez de cualquier negocio.",
      "1. Liquidez. No inmovilizas capital y mantienes la tesorería disponible para crecer.",
      "2. Mantenimiento incluido. Olvídate de averías inesperadas: nuestro servicio técnico responde en menos de 24h.",
      "3. Renovación constante. Cambia de equipo cada vez que tu negocio lo necesite.",
      "4. Fiscalidad. Las cuotas son 100% deducibles como gasto.",
      "5. Sin riesgo de obsolescencia. La tecnología avanza, tu cocina también.",
    ],
  },
  {
    slug: "como-elegir-horno",
    title: "Cómo elegir el horno mixto adecuado para tu cocina",
    excerpt: "Capacidad, potencia, vapor directo o boiler. Te ayudamos a decidir.",
    date: "28 Feb 2025",
    category: "Guías",
    readTime: "6 min",
    cover: coverHorno,
    content: [
      "El horno mixto es probablemente el equipo más versátil de una cocina profesional. Pero elegir el modelo equivocado puede convertirse en un dolor de cabeza diario.",
      "Lo primero a definir es la capacidad: el número de servicios diarios marcará si necesitas un 6, 10 o 20 GN.",
      "El sistema de generación de vapor (directo vs boiler) afecta a la calidad de cocción y al consumo energético.",
      "También conviene valorar el sistema de limpieza automática: en cocinas con poco personal es imprescindible.",
    ],
  },
  {
    slug: "tendencias-cocina-2025",
    title: "Tendencias en equipamiento de cocina para 2025",
    excerpt: "Conectividad, eficiencia energética y diseño modular: lo que viene.",
    date: "15 Feb 2025",
    category: "Tendencias",
    readTime: "5 min",
    cover: coverTendencias,
    content: [
      "El 2025 trae una clara apuesta por la cocina conectada. Los equipos IoT permiten monitorizar consumos, programar ciclos y anticipar averías.",
      "La eficiencia energética se convierte en obligación normativa, no en opción.",
      "El diseño modular gana terreno: cocinas que crecen y se reconfiguran con el negocio.",
    ],
  },
  {
    slug: "mantenimiento-frio-industrial",
    title: "Mantenimiento del frío industrial: errores comunes",
    excerpt: "Pequeños descuidos que disparan tu factura eléctrica.",
    date: "02 Feb 2025",
    category: "Mantenimiento",
    readTime: "3 min",
    cover: coverFrio,
    content: [
      "El frío industrial puede suponer hasta el 40% del consumo eléctrico de un restaurante.",
      "Limpiar los condensadores cada mes reduce el consumo hasta un 15%.",
      "Revisar las gomas de las puertas evita pérdidas térmicas constantes.",
      "Programar revisiones semestrales evita averías en momentos críticos.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
