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
  {
    slug: "sous-vide-cocina-profesional",
    title: "Sous-vide en cocina profesional: equipamiento y rentabilidad",
    excerpt: "Cómo el envasado al vacío y la cocción a baja temperatura disparan tus márgenes.",
    date: "22 Ene 2025",
    category: "Guías",
    readTime: "7 min",
    cover: coverHorno,
    content: [
      "El sous-vide ya no es exclusivo de la alta cocina. Cada vez más restaurantes de menú diario lo incorporan para optimizar mermas y trabajar mise en place con antelación.",
      "El equipamiento mínimo: una envasadora al vacío de campana, un termocirculador o roner profesional y un abatidor para enfriar de forma segura.",
      "El gran beneficio económico está en la merma: una pieza de carne cocinada a baja temperatura puede reducir su pérdida hasta un 25 % frente a una cocción tradicional.",
      "Además, permite estandarizar resultados independientemente del cocinero de turno, algo crítico en establecimientos con alta rotación de personal.",
      "Como contrapartida, exige rigor sanitario: control de temperatura, registros HACCP y formación específica del equipo.",
    ],
  },
  {
    slug: "ahorro-energetico-hosteleria",
    title: "Ahorro energético en hostelería: 7 medidas que funcionan",
    excerpt: "Reduce tu factura entre un 20 % y un 35 % con cambios concretos y medibles.",
    date: "10 Ene 2025",
    category: "Sostenibilidad",
    readTime: "5 min",
    cover: coverFrio,
    content: [
      "La factura energética es el segundo gasto fijo de cualquier restaurante después del personal. La buena noticia: hay margen real de ahorro.",
      "1. Sustituir iluminación por LED. Amortización en menos de 12 meses.",
      "2. Programar el encendido escalonado de equipos para evitar picos de potencia contratada.",
      "3. Renovar equipos de frío con clase energética A o superior y refrigerantes naturales (R290, R600a).",
      "4. Instalar recuperadores de calor en lavavajillas de capota y túneles.",
      "5. Apagar campanas extractoras cuando no hay cocción activa: representan hasta el 15 % del consumo.",
      "6. Aislar correctamente puertas de cámaras y revisar gomas cada trimestre.",
      "7. Monitorizar consumos con submedición por zonas para detectar desviaciones rápido.",
    ],
  },
  {
    slug: "diseno-cocina-pequeno-restaurante",
    title: "Cómo diseñar la cocina de un restaurante pequeño",
    excerpt: "Layout, flujo de trabajo y errores que cuestan caros si no se anticipan.",
    date: "28 Dic 2024",
    category: "Guías",
    readTime: "8 min",
    cover: coverHorno,
    content: [
      "En cocinas de menos de 25 m² cada centímetro cuenta. La diferencia entre un servicio fluido y un cuello de botella diario está en el diseño previo.",
      "El primer paso es definir el flujo: recepción → almacenaje → preparación → cocción → emplatado → pase. Cualquier cruce reduce eficiencia y multiplica errores.",
      "Apuesta por equipos modulares y multifunción: hornos mixtos, planchas con doble zona, mesas refrigeradas con encimera de trabajo integrada.",
      "Respeta los anchos mínimos de paso (90 cm en zonas de circulación, 120 cm si hay puertas de horno enfrentadas).",
      "Reserva al menos 1 m² por cada 10 cubiertos servidos en hora punta. Por debajo de esa ratio, el servicio se resentirá.",
      "Y no olvides extracción y reposición de aire: una cocina mal ventilada penaliza a tu equipo y dispara el consumo eléctrico de la sala.",
    ],
  },
  {
    slug: "haccp-equipamiento-cocina",
    title: "HACCP y equipamiento: qué exige realmente el inspector",
    excerpt: "Trazabilidad, registro de temperaturas y los puntos que más se incumplen.",
    date: "15 Dic 2024",
    category: "Mantenimiento",
    readTime: "6 min",
    cover: coverFrio,
    content: [
      "El sistema APPCC (HACCP en inglés) es obligatorio en toda actividad alimentaria desde hace décadas, pero sigue siendo el principal motivo de no conformidades en inspecciones.",
      "El equipamiento juega un papel clave: necesitas registros automáticos de temperatura en cámaras y abatidores, sondas calibradas anualmente y separación física entre alimentos crudos y cocinados.",
      "Los abatidores con registro HACCP integrado simplifican la trazabilidad: imprimen un ticket por cada ciclo con curva de temperatura.",
      "Las cámaras deben llevar termómetro visible y sistema de alarma por superación de umbral.",
      "Los lavavajillas profesionales deben alcanzar 82-85 ºC en aclarado: si no llegan, su sistema higienizante no es válido.",
      "Documenta todo: un cuaderno de registros y un plan de mantenimiento al día evitan el 80 % de las sanciones.",
    ],
  },
  {
    slug: "renting-vs-leasing-vs-compra",
    title: "Renting, leasing o compra: qué conviene a tu restaurante",
    excerpt: "Comparativa fiscal y de tesorería de las tres fórmulas más habituales.",
    date: "01 Dic 2024",
    category: "Negocio",
    readTime: "5 min",
    cover: coverVentajas,
    content: [
      "A la hora de equipar una cocina profesional, hay tres caminos: comprar, financiar mediante leasing o contratar renting. Cada uno tiene implicaciones muy distintas.",
      "Compra. Inmoviliza capital y obliga a amortizar fiscalmente entre 8 y 12 años. Ganas propiedad pero asumes obsolescencia y averías.",
      "Leasing. Pagas cuotas con opción de compra al final. Es deducible y permite acceder al equipo sin desembolso inicial, pero al cuarto año el equipo es tuyo (con todo lo bueno y lo malo).",
      "Renting. Cuota mensual 100 % deducible que incluye mantenimiento, seguros y sustitución por avería. No hay opción de compra al final: simplemente renuevas o devuelves.",
      "El renting suele ser la mejor opción si priorizas tesorería, flexibilidad y olvidarte del mantenimiento. La compra tiene sentido en equipos muy básicos y de larga vida útil.",
    ],
  },
  {
    slug: "extraccion-cocina-normativa",
    title: "Extracción de cocina: lo que dice la normativa en 2025",
    excerpt: "Caudales mínimos, conductos, filtros y nuevas exigencias acústicas.",
    date: "18 Nov 2024",
    category: "Tendencias",
    readTime: "6 min",
    cover: coverTendencias,
    content: [
      "La extracción es uno de los puntos más sensibles en cualquier proyecto de cocina, y la normativa se ha endurecido notablemente en los últimos años.",
      "La UNE 100165 marca caudales mínimos según tipo de cocción: 800 m³/h por metro lineal en cocción media, hasta 1.500 m³/h en cocción intensiva con freidoras y planchas.",
      "Los conductos deben ser de chapa galvanizada o inox, con clase de estanqueidad C y registros de limpieza cada 8 metros.",
      "Los filtros han de ser metálicos lavables (los de carbón activo solo como complemento, no como filtro principal).",
      "En zonas residenciales, los nuevos límites acústicos obligan a motores insonorizados y, en muchos casos, a instalar silenciadores en línea.",
      "Una extracción bien dimensionada no solo cumple la ley: mejora el confort del equipo, reduce el consumo de aire acondicionado y prolonga la vida útil de los equipos de cocción.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
