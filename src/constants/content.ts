// Servicios
export const services = [
  {
    title: "Talento para Experiencias de Marca",
    description:
      "Profesionales capacitados para representar tu marca en ferias, congresos, lanzamientos y eventos premium con presencia impecable.",
    image: "/images/talentos.png",
    benefits: [
      "Profesionales verificados",
      "Perfiles AAA",
      "Resultados garantizados"
    ],
    whatsappContext: "service-experiencias" as const,
  },
  {
    title: "Eventos corporativos",
    description: "Perfiles bilingües especializados en protocolo, atención VIP y hospitalidad para invitados internacionales.",
    image: "/images/eventos.png",
    benefits: [
      "Protocolo y hospitalidad",
      "Perfiles bilingües certificados",
      "Atención VIP especializada"
    ],
    whatsappContext: "service-corporativo" as const,
  },
  {
    title: "Activaciones BTL",
    description: "Entendemos que una activación no es solo presencia. Es percepción, experiencia y conversión. Ejecutamos activaciones en supermercados, retail, eventos corporativos, lanzamientos y eventos masivos, garantizando una experiencia coherente, profesional y orientada a objetivos. No improvisamos presencia. Diseñamos impacto.",
    image: "/images/activaciones-btl.png",
    benefits: [
      "Ejecución en punto de venta",
      "Brand ambassadors capacitados",
      "Conversión medible"
    ],
    whatsappContext: "service-btl" as const,
  },
  {
    title: "Capacitaciones",
    description:
      "Programa de formación profesional para azafatas y brand ambassadors orientado a resultados en campo. Entrenamos protocolo, comunicación, servicio al cliente, manejo de objeciones, ejecución en activaciones y representación de marca para garantizar equipos más consistentes, seguros y efectivos.",
    image: "/images/capacitaciones.png",
    benefits: [
      "Entrenamiento práctico por módulos",
      "Role play y simulaciones reales",
      "Evaluación final con certificación"
    ],
    whatsappContext: "service-capacitaciones" as const,
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

];

// Talento
export type TalentGender = "mujer" | "hombre";
export type TalentStatus = "disponible" | "reservada";

type TalentAvailability = {
  schedule: string;
  canTravel: boolean;
};

type TalentPhysicalProfile = {
  height?: string;
  weight?: string;
  hairColor?: string;
  eyeColor?: string;
  shirtSize?: string;
  pantsSize?: string;
  shoeSize?: string;
};

type TalentSocial = {
  instagram?: string;
  tiktok?: string;
};

type TalentMedia = {
  gallery: string[];
};

export type TalentModel = {
  name: string;
  slug: string;
  role: string;
  languages: string;
  status: TalentStatus;
  updatedAt: string;
  city: string;
  experienceSummary: string;
  skills: string[];
  eventTypes: string[];
  availability: TalentAvailability;
  physical: TalentPhysicalProfile;
  social?: TalentSocial;
  gender: TalentGender;
  photo: string;
  media: TalentMedia;
};

export const talent: TalentModel[] = [
  {
    name: "Johana Hoyos",
    slug: "johana-hoyos",
    role: "Azafata protocolo y contenido comercial",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-02-27",
    city: "Ciudad de Panamá",
    experienceSummary: "Experiencia en protocolo, impulso, degustación y grabación para comerciales.",
    skills: ["Trabajo en equipo", "Toma de decisiones", "Comunicación con público"],
    eventTypes: ["Eventos corporativos", "Activaciones BTL", "Producción audiovisual"],
    availability: {
      schedule: "Semana y fines de semana",
      canTravel: true,
    },
    physical: {
      height: "1.70 m",
      weight: "65 kg",
      hairColor: "Castaño oscuro",
      eyeColor: "Café",
      shirtSize: "M o S",
      pantsSize: "10 o M",
      shoeSize: "39",
    },
    social: {
      instagram: "@johanahoyos4193",
      tiktok: "@johana.hoyos5",
    },
    gender: "mujer",
    photo: "/talent/mujeres/johana-hoyos.webp",
    media: {
      gallery: ["/talent/mujeres/johana-hoyos.webp"],
    },
  },
  {
    name: "Isabella Acevedo",
    slug: "isabella-acevedo",
    role: "Servicio al cliente y protocolo",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Atención al cliente en eventos y apoyo operativo en protocolo.",
    skills: ["Servicio al cliente", "Atención de público", "Adaptación en sitio"],
    eventTypes: ["Eventos corporativos", "Registro y hospitality"],
    availability: {
      schedule: "Todos los días con coordinación previa",
      canTravel: true,
    },
    physical: {
      height: "1.63 m",
      weight: "50 kg",
      hairColor: "Negro",
      eyeColor: "Cafés",
      shirtSize: "Small",
      pantsSize: "3",
      shoeSize: "36.5",
    },
    gender: "mujer",
    photo: "/talent/mujeres/isabella-acevedo.webp",
    media: {
      gallery: ["/talent/mujeres/isabella-acevedo.webp"],
    },
  },
  {
    name: "Genesis Gonzalez",
    slug: "genesis-gonsales",
    role: "Modelo para activaciones y eventos",
    languages: "Español, Inglés",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Perfil para representación de marca en puntos de alto tráfico.",
    skills: ["Presencia de marca", "Interacción con público"],
    eventTypes: ["Activaciones BTL", "Lanzamientos"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.64 m",
    },
    gender: "mujer",
    photo: "/talent/mujeres/genesis-gonsales.webp",
    media: {
      gallery: ["/talent/mujeres/genesis-gonsales.webp"],
    },
  },
  {
    name: "Marianne Diaz",
    slug: "marianne-diaz",
    role: "Modelo para protocolo corporativo",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Perfil orientado a protocolo y hospitalidad en eventos ejecutivos.",
    skills: ["Protocolo", "Hospitalidad", "Imagen corporativa"],
    eventTypes: ["Eventos corporativos", "Hospitality VIP"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.58 m",
    },
    gender: "mujer",
    photo: "/talent/mujeres/marianne-diaz.webp",
    media: {
      gallery: ["/talent/mujeres/marianne-diaz.webp"],
    },
  },
  {
    name: "Sofia Sanchez",
    slug: "sofia-sanchez",
    role: "Modelo para hospitalidad y recepción",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-02-27",
    city: "Ciudad de Panamá",
    experienceSummary: "Atención de recepción y acompañamiento de invitados en eventos.",
    skills: ["Recepción", "Hospitalidad", "Relación con clientes"],
    eventTypes: ["Registro", "Ferias", "Hospitality"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.68 m", // Estimado o dejar vacío si el UI lo maneja
    },

    gender: "mujer",
    photo: "/talent/mujeres/sofia-sanchez/sofia-sanchez.webp",
    media: {
      gallery: [
        "/talent/mujeres/sofia-sanchez/1.png",
        "/talent/mujeres/sofia-sanchez/2.png",
        "/talent/mujeres/sofia-sanchez/3.png",
        "/talent/mujeres/sofia-sanchez/4.png",
        "/talent/mujeres/sofia-sanchez/5.png",
        "/talent/mujeres/sofia-sanchez/6.png",
        "/talent/mujeres/sofia-sanchez/7.png",
      ],
    },
  },
  {
    name: "Valeria Ortega",
    slug: "valeria-ortega",
    role: "Modelo para brand experiences",
    languages: "Español, Inglés",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Perfil comercial para activaciones y experiencias de marca.",
    skills: ["Imagen de marca", "Activaciones", "Protocolo"],
    eventTypes: ["Experiencias de marca", "Lanzamientos"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.55 m",
    },
    gender: "mujer",
    photo: "/talent/mujeres/valeria-ortega.webp",
    media: {
      gallery: ["/talent/mujeres/valeria-ortega.webp"],
    },
  },
  {
    name: "Ana Lorena",
    slug: "ana-lorena",
    role: "Modelo para protocolo y experiencias de marca",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Perfil para hospitalidad, protocolo y representación de marca en eventos corporativos.",
    skills: ["Protocolo", "Atención al cliente", "Imagen de marca"],
    eventTypes: ["Eventos corporativos", "Experiencias de marca", "Hospitality"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.72 m",
    },

    gender: "mujer",
    photo: "/talent/mujeres/ana-lorena/ana-lorena.webp",
    media: {
      gallery: [
        "/talent/mujeres/ana-lorena/1.png",
        "/talent/mujeres/ana-lorena/2.png",
        "/talent/mujeres/ana-lorena/3.png",
        "/talent/mujeres/ana-lorena/4.png",
        "/talent/mujeres/ana-lorena/5.png",
        "/talent/mujeres/ana-lorena/6.png",
        "/talent/mujeres/ana-lorena/7.png",
        "/talent/mujeres/ana-lorena/8.png",
        "/talent/mujeres/ana-lorena/9.png",
        "/talent/mujeres/ana-lorena/10.png",
        "/talent/mujeres/ana-lorena/11.png",
        "/talent/mujeres/ana-lorena/12.png",
        "/talent/mujeres/ana-lorena/13.png",
        "/talent/mujeres/ana-lorena/14.png",
        "/talent/mujeres/ana-lorena/15.png",
        "/talent/mujeres/ana-lorena/16.png",
        "/talent/mujeres/ana-lorena/17.png",
        "/talent/mujeres/ana-lorena/18.png",
      ],
    },
  },
  {
    name: "Irving Rios",
    slug: "irving-rios",
    role: "Modelo masculino para activaciones y protocolo",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Modelo masculino para eventos corporativos y campañas visuales.",
    skills: ["Protocolo", "Presencia comercial", "Atención en eventos"],
    eventTypes: ["Eventos corporativos", "Activaciones", "Audiovisual"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.72 m",
    },
    gender: "hombre",
    photo: "/talent/hombres/irving-rios/irving-rios.webp",
    media: {
      gallery: [
        "/talent/hombres/irving-rios/1.png",
        "/talent/hombres/irving-rios/2.png",
        "/talent/hombres/irving-rios/3.png",
        "/talent/hombres/irving-rios/4.png",
        "/talent/hombres/irving-rios/5.png",
      ],
    },
  },
  {
    name: "Carlos Wilson",
    slug: "carlos-wilson",
    role: "Modelo masculino para activaciones y protocolo corporativo",
    languages: "Español",
    status: "disponible",
    updatedAt: "2026-03-03",
    city: "Ciudad de Panamá",
    experienceSummary: "Perfil comercial para activaciones, eventos ejecutivos y contenido audiovisual.",
    skills: ["Presencia comercial", "Protocolo", "Atención de público"],
    eventTypes: ["Activaciones BTL", "Eventos corporativos", "Producción audiovisual"],
    availability: {
      schedule: "Coordinación por agenda",
      canTravel: true,
    },
    physical: {
      height: "1.80 m",
    },
    social: {
      instagram: "@carloswilsonoficial",
      tiktok: "@carloswilsonoficial",
    },
    gender: "hombre",
    photo: "/talent/hombres/carlos-wilson/carlos-wilson.webp",
    media: {
      gallery: [
        "/talent/hombres/carlos-wilson/1.png",
        "/talent/hombres/carlos-wilson/2.png",
        "/talent/hombres/carlos-wilson/3.png",
      ],
    },
  },
];

export const getTalentByGender = (gender: TalentGender): TalentModel[] => {
  return talent.filter((model) => model.gender === gender);
};

export const getTalentBySlug = (slug: string): TalentModel | undefined => {
  return talent.find((model) => model.slug === slug);
};

// Galería
export const gallery = [
  ...talent.map((model) => model.photo),
];

// Planes de servicio
export const stats = [
  { value: "500+", label: "Eventos exitosos" },
  { value: "2,000+", label: "Horas de servicio" },
  { value: "100+", label: "Clientes corporativos" },
  { value: "<1h", label: "Tiempo de respuesta" },
];

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
    cta: "Cotizar por WhatsApp",
    whatsappContext: "plan-basic" as const,
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
    whatsappContext: "plan-btl" as const,
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
    cta: "Hablar con especialista",
    whatsappContext: "plan-audiovisual" as const,
  },
];
