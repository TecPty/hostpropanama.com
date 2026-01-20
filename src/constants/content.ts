// Servicios
export const services = [
  {
    title: "Azafatas y modelos corporativos",
    description:
      "Presencia impecable para ferias, congresos, lanzamientos y eventos premium.",
  },
  {
    title: "Staff bilingue VIP",
    description: "Talento capacitado en protocolo y atencion a invitados internacionales.",
  },
  {
    title: "Brand ambassadors y promotores",
    description: "Perfiles que comunican tu marca con seguridad y elegancia.",
  },
  {
    title: "Registro y hospitality",
    description:
      "Recepcion, check-in, control de accesos y acompanamiento con calidez y precision.",
  },
];

// Proceso
export const process = [
  "Brief y requerimientos del evento",
  "Seleccion curada del staff",
  "Confirmacion y logistica",
  "Ejecucion y supervision en sitio",
  "Reporte y feedback post-evento",
];

// FAQs
export const faqs = [
  {
    q: "En cuanto tiempo responden una solicitud?",
    a: "Respondemos en menos de 1 hora habil. Para urgencias, tienes WhatsApp directo +507 .",
  },
  {
    q: "Cuentan con talento bilingue?",
    a: "Si. Bilingue y perfiles con experiencia en protocolo, hospitality y marcas premium.",
  },
  {
    q: "Trabajan en todo Panama?",
    a: "Cobertura nacional. Coordinamos transporte y uniformes segun el evento.",
  },
  {
    q: "Como manejan uniformes y dress code?",
    a: "Nos adaptamos a tu guia. Podemos proveer propuestas de vestuario y briefing previo.",
  },
  {
    q: "Emiten factura y contratos?",
    a: "Si. Facturacion y acuerdos de confidencialidad disponibles para clientes corporativos.",
  },
];

// Talento
export const talent = [
  {
    name: "Ghazi",
    role: "Host corporativo",
    languages: "Espanol / Ingles",
    photo: "/talent/ghazi.png",
  },
  {
    name: "Jean",
    role: "Brand ambassador",
    languages: "Espanol / Ingles",
    photo: "/talent/jean.png",
  },
  {
    name: "Vanessa",
    role: "Hospitality / Protocolo",
    languages: "Espanol / Ingles",
    photo: "/talent/vanessa.png",
  },
  {
    name: "Sofia",
    role: "Promotora premium",
    languages: "Espanol",
    photo: "/talent/sofia.png",
  },
  {
    name: "Camila",
    role: "Recepcion y check-in",
    languages: "Espanol / Ingles",
    photo: "/talent/camila.png",
  },
];

// Galería
export const gallery = [
  "/talent/jean.png",
  "/talent/ghazi.png",
  "/talent/vanessa.png",
  "/talent/sofia.png",
  "/talent/camila.png",
  "/images/hero-image.png",
];

// Planes de servicio
export const plans = [
  {
    name: "Básico",
    description: "Para eventos pequeños",
    price: "A consultar",
    features: [
      { name: "1-3 personas", included: true },
      { name: "Evento puntual", included: true },
      { name: "Uniforme básico", included: true },
      { name: "Protocolo estándar", included: false },
      { name: "Cobertura nacional", included: false },
    ],
    cta: "Cotizar",
  },
  {
    name: "Premium",
    description: "Recomendado para corporativos",
    price: "A consultar",
    featured: true,
    features: [
      { name: "4-8 personas", included: true },
      { name: "Multiples eventos", included: true },
      { name: "Uniformes personalizados", included: true },
      { name: "Protocolo VIP", included: true },
      { name: "Cobertura nacional", included: true },
    ],
    cta: "Solicitar propuesta",
  },
  {
    name: "Enterprise",
    description: "Para marcas exigentes",
    price: "Personalizado",
    features: [
      { name: "Staff ilimitado", included: true },
      { name: "Eventos continuos", included: true },
      { name: "Diseño de vestuario", included: true },
      { name: "Protocolo + seguridad", included: true },
      { name: "Soporte 24/7", included: true },
    ],
    cta: "Hablar directo",
  },
];
