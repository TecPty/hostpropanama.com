// Servicios
export const services = [
  {
    title: "Talento para Experiencias de Marca",
    description:
      "Profesionales capacitados para representar tu marca en ferias, congresos, lanzamientos y eventos premium con presencia impecable.",
    image: "/images/azafatas.png",
    benefits: [
      "Profesionales verificados",
      "Perfiles AAA",
      "Resultados garantizados"
    ]
  },
  {
    title: "Eventos Corporativos",
    description: "Perfiles bilingües especializados en protocolo, atención VIP y hospitalidad para invitados internacionales.",
    image: "/images/staff.png",
    benefits: [
      "Protocolo y hospitalidad",
      "Perfiles bilingües certificados",
      "Atención VIP especializada"
    ]
  },
  {
    title: "Activaciones BTL",
    description: "Entendemos que una activación no es solo presencia. Es percepción, experiencia y conversión. Ejecutamos activaciones en supermercados, retail, eventos corporativos, lanzamientos y eventos masivos, garantizando una experiencia coherente, profesional y orientada a objetivos. No improvisamos presencia. Diseñamos impacto.",
    image: "/images/brand.png",
    benefits: [
      "Ejecución en punto de venta",
      "Brand ambassadors capacitados",
      "Conversión medible"
    ]
  },
  {
    title: "Producciones audiovisuales",
    description:
      "Cada talento es previamente evaluado en imagen, actitud, expresión y profesionalismo. Porque en producción audiovisual, la imagen no es un detalle. Es el mensaje. Seleccionamos cuidadosamente cada perfil según el concepto creativo, identidad de marca y requerimientos técnicos de la producción.",
    image: "/images/register.png",
    benefits: [
      "Casting especializado",
      "Derechos de imagen incluidos",
      "Experiencia en cámara"
    ]
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
    q: "¿En cuánto tiempo responden una solicitud?",
    a: "Respondemos en menos de 1 hora hábil. Para urgencias, tienes WhatsApp directo +507 6980-1194.",
  },
  {
    q: "¿Cuentan con talento bilingüe?",
    a: "Sí. Bilingüe y perfiles con experiencia en protocolo, hospitality y marcas premium.",
  },
  {
    q: "¿Trabajan en todo Panamá?",
    a: "Cobertura nacional. Coordinamos transporte y uniformes según el evento.",
  },
  {
    q: "¿Cómo manejan uniformes y dress code?",
    a: "Nos adaptamos a tu guía. Podemos proveer propuestas de vestuario y briefing previo.",
  },
  {
    q: "¿Emiten factura y contratos?",
    a: "Sí. Facturación y acuerdos de confidencialidad disponibles para clientes corporativos.",
  },
];

// Talento
export const talent = [
  {
    name: "Ghazi",
    role: "Host corporativo",
    languages: "Español / Inglés",
    photo: "/talent/ghazi.png",
  },
  {
    name: "Jean",
    role: "Brand ambassador",
    languages: "Español / Inglés",
    photo: "/talent/jean.png",
  },
  {
    name: "Vanessa",
    role: "Hospitality / Protocolo",
    languages: "Español / Inglés",
    photo: "/talent/vanessa.png",
  },
  {
    name: "Sofia",
    role: "Promotora premium",
    languages: "Español",
    photo: "/talent/sofia.png",
  },
  {
    name: "Camila",
    role: "Recepción y check-in",
    languages: "Español / Inglés",
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
    name: "Pack 1",
    description: "Evento Corporativo Básico",
    price: "$280",
    features: [
      { name: "2 talentos profesionales verificados", included: true },
      { name: "Jornada estándar (4-6 horas)", included: true },
      { name: "Briefing previo + supervisión en sitio", included: true },
      { name: "Imagen alineada a tu marca", included: true },
      { name: "Respuesta en menos de 1 hora", included: true },
    ],
    cta: "Cotizar",
  },
  {
    name: "Pack 2",
    description: "Activación / BTL",
    price: "$480",
    featured: true,
    features: [
      { name: "3-4 talentos especializados", included: true },
      { name: "Capacitación previa del producto/servicio", included: true },
      { name: "Perfiles alineados a identidad de marca", included: true },
      { name: "Coordinación completa y logística", included: true },
      { name: "Reporte post-evento con métricas", included: true },
    ],
    cta: "Solicitar propuesta",
  },
  {
    name: "Pack 3",
    description: "Audiovisual / Spot",
    price: "$700",
    features: [
      { name: "Casting dirigido personalizado", included: true },
      { name: "1-3 talentos profesionales (modelos/actores)", included: true },
      { name: "Derechos de uso comercial incluidos", included: true },
      { name: "Coordinación directa con productora", included: true },
      { name: "Experiencia en producciones audiovisuales", included: true },
    ],
    cta: "Hablar directo",
  },
];
