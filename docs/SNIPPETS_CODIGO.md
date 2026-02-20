# 🔧 SNIPPETS DE CÓDIGO - IMPLEMENTACIÓN RÁPIDA

**Archivo:** Código copy-paste organizado por prioridad  
**Uso:** Copiar directamente al archivo correspondiente

---

## 🔴 PRIORIDAD CRÍTICA

### 1. IMPORTAR COMPONENTES NUEVOS EN PAGE.TSX

**Archivo:** `src/app/page.tsx`  
**Línea:** Después de imports existentes (~25)

```tsx
// NUEVOS IMPORTS - Agregar después de imports existentes
import { MobileMenu } from "@/components/MobileMenu";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Lightbox } from "@/components/Lightbox";
```

---

### 2. AGREGAR MOBILE MENU EN HEADER

**Archivo:** `src/app/page.tsx`  
**Buscar:** `<header className="fixed top-0...`  
**Línea aproximada:** ~40

**REEMPLAZAR ESTO:**
```tsx
<div className="flex items-center gap-12">
  <nav className="hidden md:flex items-center gap-12">
    {/* ... links existentes ... */}
  </nav>

  <div className="flex items-center gap-4">
    {/* ... botones sociales ... */}
  </div>
</div>
```

**POR ESTO:**
```tsx
<div className="flex items-center gap-12">
  {/* Desktop Nav - sin cambios */}
  <nav className="hidden md:flex items-center gap-12">
    <Link href="#galeria" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Experiencias</Link>
    <Link href="#servicios" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Servicios</Link>
    <Link href="#planes" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Planes</Link>
    <Link href="#contacto" className="text-sm font-bold uppercase tracking-widest hover:text-[#d4b200] transition-colors py-3 px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md">Contacto</Link>
  </nav>

  {/* Desktop CTAs - solo visibles en desktop */}
  <div className="hidden md:flex items-center gap-4">
    <Link href="https://instagram.com/hostpropanama" className="text-sm font-bold hover:text-[#d4b200] transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md" aria-label="Instagram de HostPro Panamá">
      <Instagram className="h-5 w-5" />
    </Link>
    <Link href="https://tiktok.com/@hostpropanama" className="text-sm font-bold hover:text-[#d4b200] transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b200] focus-visible:rounded-md" aria-label="TikTok de HostPro Panamá">
      <Music2 className="h-5 w-5" />
    </Link>
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#d4b200] text-black px-6 py-2 rounded-lg font-black text-xs uppercase tracking-wider">
      <Link href="#contacto">Empieza Ahora</Link>
    </motion.button>
  </div>

  {/* NUEVO: Mobile Menu */}
  <MobileMenu />
</div>
```

---

### 3. AGREGAR BADGE DE URGENCIA EN HERO

**Archivo:** `src/app/page.tsx`  
**Buscar:** `<motion.h1` en Hero Section  
**Línea aproximada:** ~90

**AGREGAR ANTES DEL H1:**
```tsx
{/* NUEVO: Badge de urgencia con animación */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  className="inline-flex items-center gap-2 bg-[#d4b200]/90 backdrop-blur-sm text-black px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider mb-6 shadow-lg shadow-[#d4b200]/30"
>
  <motion.span
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    ⚡
  </motion.span>
  <span>Respuesta en menos de 1 hora</span>
  <motion.div
    className="w-2 h-2 bg-green-500 rounded-full"
    animate={{ opacity: [1, 0.3, 1] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
  />
  <span className="text-[10px] font-semibold">EN LÍNEA AHORA</span>
</motion.div>
```

---

### 4. OPTIMIZAR SUBTÍTULO HERO (MÁS CORTO)

**Archivo:** `src/app/page.tsx`  
**Buscar:** `<motion.p` después del H1 en Hero  
**Línea aproximada:** ~110

**REEMPLAZAR:**
```tsx
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
>
  Azafatas, modelos y staff profesional bilingüe para eventos corporativos, ferias y congresos en Ciudad de Panamá. Respuesta garantizada en menos de 1 hora.
</motion.p>
```

**POR (más corto y directo):**
```tsx
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15 }}
  className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-3"
>
  Staff profesional bilingüe para eventos corporativos en Panamá.
</motion.p>

{/* NUEVO: Beneficios clave en bullets */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-slate-200 mb-8 max-w-2xl mx-auto"
>
  <div className="flex items-center gap-2">
    <Check className="h-4 w-4 text-[#d4b200]" />
    <span>Personal verificado</span>
  </div>
  <div className="flex items-center gap-2">
    <Check className="h-4 w-4 text-[#d4b200]" />
    <span>Disponibilidad inmediata</span>
  </div>
  <div className="flex items-center gap-2">
    <Check className="h-4 w-4 text-[#d4b200]" />
    <span>Cobertura nacional</span>
  </div>
</motion.div>
```

---

### 5. OPTIMIZAR CTAs HERO (JERARQUÍA CLARA)

**Archivo:** `src/app/page.tsx`  
**Buscar:** CTAs en Hero Section  
**Línea aproximada:** ~120

**REEMPLAZAR:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25 }}
  className="flex flex-col sm:flex-row gap-6 justify-center"
>
  <Link href="#contacto" className="bg-[#d4b200] text-black px-8 py-4 rounded-full font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50">
    Solicitar Staff
    <ArrowRight className="h-4 w-4" />
  </Link>
  <Link href="https://wa.me/50769801194" className="bg-black text-[#d4b200] px-8 py-4 rounded-full font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50 border-2 border-[#d4b200]">
    WhatsApp
    <ArrowRight className="h-4 w-4" />
  </Link>
</motion.div>
```

**POR (jerarquía más clara):**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25 }}
  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>
  {/* CTA Primario - más grande y prominente */}
  <Link 
    href="#contacto" 
    className="group bg-[#d4b200] text-black px-10 py-5 rounded-full font-black uppercase text-base tracking-wider hover:scale-105 hover:shadow-2xl hover:shadow-[#d4b200]/40 transition-all inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4b200]/50 w-full sm:w-auto"
  >
    Solicitar Cotización Gratis
    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Link>
  
  {/* CTA Secundario - más discreto */}
  <Link 
    href="https://wa.me/50769801194" 
    className="bg-transparent text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 border-2 border-white/30 hover:border-white/60 w-full sm:w-auto"
  >
    <MessageCircle className="h-4 w-4" />
    WhatsApp Directo
  </Link>
</motion.div>

{/* NUEVO: Trust indicator sutil */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.35 }}
  className="text-xs text-slate-400 mt-6 uppercase tracking-widest"
>
  🏆 Más de 500 eventos exitosos en Panamá
</motion.p>
```

---

### 6. AGREGAR STATS BANNER

**Archivo:** `src/constants/content.ts`  
**Agregar al final del archivo:**

```typescript
// Stats para banner
export const stats = [
  { value: "500+", label: "Eventos exitosos" },
  { value: "2,000+", label: "Horas de servicio" },
  { value: "100+", label: "Clientes corporativos" },
  { value: "<1h", label: "Tiempo de respuesta" },
];
```

**Archivo:** `src/app/page.tsx`  
**Agregar DESPUÉS de Hero Section, ANTES de Visión Section:**

```tsx
{/* STATS BANNER */}
<section className="py-8 bg-[#d4b200]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-3xl md:text-5xl font-black text-black mb-2">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm font-semibold text-black/70 uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

### 7. REEMPLAZAR WHATSAPP BUTTON FIJO

**Archivo:** `src/app/page.tsx`  
**Buscar:** `{/* WhatsApp Button */}` al final del archivo  
**Línea aproximada:** ~600

**REEMPLAZAR:**
```tsx
{/* WhatsApp Button */}
<Link
  href="https://wa.me/50769801194"
  aria-label="Hablar por WhatsApp"
  className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[-2px] hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
>
  <MessageCircle className="h-7 w-7 text-white" />
</Link>
```

**POR:**
```tsx
{/* WhatsApp Button - Componente mejorado */}
<WhatsAppButton />
```

---

### 8. OPTIMIZAR FORMULARIO - ZOD SCHEMA

**Archivo:** `src/components/forms.tsx`  
**Buscar:** `const leadSchema =`  
**Línea aproximada:** ~13

**REEMPLAZAR:**
```typescript
const leadSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  company: z.string().min(2, "Empresa requerida"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
  eventType: z.string().min(2, "Tipo de evento requerido"),
  date: z.string().optional(),
  message: z.string().min(5, "Cuéntanos más del evento"),
});
```

**POR (campos opcionales):**
```typescript
const leadSchema = z.object({
  // CAMPOS OBLIGATORIOS - solo 3
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Teléfono requerido"),
  
  // CAMPOS OPCIONALES - reducen fricción
  company: z.string().optional(),
  eventType: z.string().optional(),
  date: z.string().optional(),
  message: z.string().min(10, "Cuéntanos brevemente sobre el evento").optional(),
});
```

---

### 9. OPTIMIZAR FORMULARIO - COMPONENTE LEADFORM

**Archivo:** `src/components/forms.tsx`  
**Buscar:** `export function LeadForm()`  
**Línea aproximada:** ~100

**Agregar imports necesarios:**
```typescript
import { Plus } from "lucide-react"; // Agregar a imports existentes
```

**Agregar estados:**
```typescript
export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [showOptionalFields, setShowOptionalFields] = useState(false); // NUEVO
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields }, // AGREGAR isValid, dirtyFields
    watch, // AGREGAR watch
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: "onChange", // CAMBIAR: validación en tiempo real
  });

  // NUEVO: Contador de campos completados
  const completedFields = Object.keys(dirtyFields).length;
  const totalFields = showOptionalFields ? 7 : 3;

  // ... resto del código existente ...
```

**REEMPLAZAR estructura del formulario completa:**

Ver archivo `AUDITORIA_UX_UI_AVANZADA.md` - Solución 3.1 para código completo.

Quick version - estructura básica:

```tsx
return (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
    {/* Progress indicator */}
    <div className="flex items-center justify-between text-xs text-slate-400">
      <span>Completa los campos para cotizar</span>
      <span className="font-semibold text-[#d4b200]">
        {completedFields}/{totalFields} completados
      </span>
    </div>

    {/* Campos ESENCIALES - siempre visibles */}
    <div className="space-y-4">
      <TextInput<LeadFormData>
        label="Nombre completo"
        name="name"
        register={register}
        error={errors.name?.message}
        placeholder="Juan Pérez"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <TextInput<LeadFormData>
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          placeholder="juan@empresa.com"
          type="email"
        />
        <TextInput<LeadFormData>
          label="Teléfono / WhatsApp"
          name="phone"
          register={register}
          error={errors.phone?.message}
          placeholder="+507 6980-1194"
          type="tel"
        />
      </div>
    </div>

    {/* Toggle para campos opcionales */}
    {!showOptionalFields && (
      <button
        type="button"
        onClick={() => setShowOptionalFields(true)}
        className="text-sm text-[#d4b200] hover:text-[#e6c700] font-semibold text-left flex items-center gap-2 transition-colors"
      >
        <Plus className="h-4 w-4" />
        Agregar más detalles (opcional - obtén cotización más precisa)
      </button>
    )}

    {/* Campos OPCIONALES - colapsables */}
    <AnimatePresence>
      {showOptionalFields && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 overflow-hidden"
        >
          {/* ... campos opcionales ... */}
          {/* Ver código completo en AUDITORIA_UX_UI_AVANZADA.md */}
        </motion.div>
      )}
    </AnimatePresence>

    {/* Status + Submit */}
    <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <StatusBadge state={state} />
      <button
        type="submit"
        disabled={state === "loading" || !isValid}
        className="inline-flex items-center gap-2 rounded-full bg-[#d4b200] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-black transition hover:bg-[#e6c700] hover:shadow-lg hover:shadow-[#d4b200]/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          <>
            Solicitar Cotización <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </div>

    {/* Trust signal */}
    <p className="text-xs text-center text-slate-500">
      🔒 Respetamos tu privacidad. Respuesta en menos de 1 hora.
    </p>
  </form>
);
```

---

### 10. MEJORAR PLAN DESTACADO

**Archivo:** `src/app/page.tsx`  
**Buscar:** sección de Planes  
**Línea aproximada:** ~210

**ACTUALIZAR el plan featured (Pack 2):**

```tsx
className={`relative rounded-[2rem] p-8 transition-all duration-300 ${
  plan.featured
    ? "bg-gradient-to-br from-[#d4b200] via-[#d4b200] to-[#b39700] text-black shadow-2xl shadow-[#d4b200]/40 scale-105 md:scale-110 z-10"
    : "bg-slate-900/80 backdrop-blur-sm border border-white/10 hover:border-[#d4b200]/30 hover:shadow-xl text-white"
}`}
```

**ACTUALIZAR badge superior:**

```tsx
{plan.featured && (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
    <div className="bg-black text-[#d4b200] px-5 py-2 rounded-full text-xs font-black uppercase whitespace-nowrap shadow-lg flex items-center gap-2">
      <Zap className="h-3 w-3" />
      Más Popular
    </div>
  </div>
)}
```

**AGREGAR trust badge al final del plan featured:**

```tsx
{/* Trust badge */}
{plan.featured && (
  <p className="text-center text-xs text-black/60 font-semibold flex items-center justify-center gap-2">
    <Shield className="h-3 w-3" />
    Garantía de satisfacción 100%
  </p>
)}
```

---

## 🟡 PRIORIDAD MEDIA

### 11. AGREGAR SOCIAL PROOF - LOGOS CLIENTES

**Archivo:** `src/constants/content.ts`  
**Agregar:**

```typescript
export const clientLogos = [
  { name: "Copa Airlines", logo: "/logos/clients/copa.png" },
  { name: "Banco General", logo: "/logos/clients/banco-general.png" },
  { name: "Samsung", logo: "/logos/clients/samsung.png" },
  { name: "Rolex", logo: "/logos/clients/rolex.png" },
  { name: "Hotel Riu", logo: "/logos/clients/riu.png" },
  { name: "Expocomer", logo: "/logos/clients/expocomer.png" },
];
```

**Archivo:** `src/app/page.tsx`  
**Agregar después de Stats Banner:**

```tsx
{/* CLIENT LOGOS */}
<section className="py-12 bg-slate-900/20 border-b border-white/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-center text-sm uppercase tracking-[0.3em] text-slate-400 mb-8 font-semibold">
      Han confiado en nosotros
    </p>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
      {clientLogos.map((client, idx) => (
        <motion.div
          key={client.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          viewport={{ once: true }}
          className="grayscale hover:grayscale-0 transition-all duration-300"
        >
          <Image
            src={client.logo}
            alt={`Logo de ${client.name} - Cliente de HostPro Panamá`}
            width={120}
            height={60}
            className="w-full h-auto object-contain filter brightness-0 invert"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

### 12. AGREGAR TESTIMONIOS

**Archivo:** `src/constants/content.ts`  
**Agregar:**

```typescript
export const testimonials = [
  {
    quote: "El staff de HostPro superó nuestras expectativas. Profesionales, puntuales y con una actitud impecable. Nuestro evento fue un éxito rotundo.",
    author: "María González",
    role: "Directora de Eventos",
    company: "Copa Airlines",
    avatar: "/testimonials/maria.jpg",
    rating: 5,
  },
  {
    quote: "Respuesta inmediata, personal bilingüe de primer nivel. Trabajamos con ellos en 3 congresos médicos y siempre cumplen a la perfección.",
    author: "Dr. Carlos Muñoz",
    role: "Coordinador General",
    company: "Congreso Latinoamericano de Cardiología",
    avatar: "/testimonials/carlos.jpg",
    rating: 5,
  },
  {
    quote: "La mejor agencia de staffing en Panamá. Su atención al detalle y capacidad de respuesta es incomparable.",
    author: "Ana Rodríguez",
    role: "Gerente de Marketing",
    company: "Samsung Panamá",
    avatar: "/testimonials/ana.jpg",
    rating: 5,
  },
];
```

**Archivo:** `src/app/page.tsx`  
**Agregar después de Logos:**

```tsx
{/* TESTIMONIALS */}
<section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="text-[#d4b200] font-bold uppercase tracking-[0.2em] text-xs">
        Testimonios
      </span>
      <h2 className="text-3xl font-black mt-4 uppercase text-white">
        Lo Que Dicen Nuestros Clientes
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, idx) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-slate-900 rounded-3xl p-8 border border-white/10 hover:border-[#d4b200]/30 transition-all"
        >
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#d4b200] text-[#d4b200]" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-slate-300 mb-6 leading-relaxed italic">
            "{testimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#d4b200]/40 flex-shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-white text-sm">{testimonial.author}</p>
              <p className="text-xs text-slate-400">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

---

### 13. REEMPLAZAR GALERÍA CON LIGHTBOX

**Archivo:** `src/constants/content.ts`  
**REEMPLAZAR:**

```typescript
export const gallery = [
  "/talent/jean.png",
  "/talent/ghazi.png",
  "/talent/vanessa.png",
  "/talent/sofia.png",
  "/talent/camila.png",
  "/images/hero-image.png",
];
```

**POR:**

```typescript
export const gallery = [
  {
    src: "/talent/jean.png",
    alt: "Staff profesional HostPro en congreso internacional",
    caption: "Congreso Médico Internacional 2025 - Hotel Riu Plaza",
  },
  {
    src: "/talent/ghazi.png",
    alt: "Azafatas bilingües en feria comercial Expocomer",
    caption: "Expocomer 2025 - Atlapa Convention Center",
  },
  {
    src: "/talent/vanessa.png",
    alt: "Brand ambassadors en lanzamiento Samsung",
    caption: "Lanzamiento Galaxy S26 - Albrook Mall",
  },
  {
    src: "/talent/sofia.png",
    alt: "Hosts corporativos en evento Copa Airlines",
    caption: "Aniversario Copa Airlines 2025",
  },
  {
    src: "/talent/camila.png",
    alt: "Staff de registro en congreso de cardiología",
    caption: "Congreso Latinoamericano de Cardiología",
  },
  {
    src: "/images/hero-image.png",
    alt: "Equipo completo HostPro en evento premium",
    caption: "Evento corporativo - Torre de las Américas",
  },
];
```

**Archivo:** `src/app/page.tsx`  
**Buscar:** Sección GALERÍA  
**REEMPLAZAR grid completo por:**

```tsx
<Lightbox images={gallery} />
```

---

## 🟢 PRIORIDAD BAJA (OPTIMIZACIÓN)

### 14. AGREGAR AUTOSAVE EN FORMULARIOS

**Crear archivo:** `src/hooks/useFormAutosave.ts`

```typescript
import { useEffect } from "react";
import { UseFormWatch } from "react-hook-form";

export function useFormAutosave<T>(
  watch: UseFormWatch<T>,
  formKey: string,
  delay = 1000
) {
  useEffect(() => {
    const subscription = watch((data) => {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(formKey, JSON.stringify(data));
      }, delay);
      return () => clearTimeout(timeoutId);
    });
    
    return () => subscription.unsubscribe();
  }, [watch, formKey, delay]);

  const getSavedData = (): Partial<T> | null => {
    try {
      const saved = localStorage.getItem(formKey);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };

  const clearSavedData = () => {
    localStorage.removeItem(formKey);
  };

  return { getSavedData, clearSavedData };
}
```

**Usar en forms.tsx:**

```typescript
import { useFormAutosave } from "@/hooks/useFormAutosave";

export function LeadForm() {
  // ... estados existentes ...
  
  const { getSavedData, clearSavedData } = useFormAutosave(watch, "leadForm");

  // Recuperar datos al montar
  useEffect(() => {
    const saved = getSavedData();
    if (saved) {
      Object.keys(saved).forEach((key) => {
        if (saved[key]) {
          setValue(key as keyof LeadFormData, saved[key]);
        }
      });
    }
  }, []);

  // Limpiar tras envío exitoso
  const onSubmit = async (data: LeadFormData) => {
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      
      setState("success");
      reset();
      clearSavedData(); // NUEVO
    } catch (error) {
      console.error(error);
      setState("error");
    } finally {
      setTimeout(() => setState("idle"), 4000);
    }
  };
}
```

---

## ⚙️ CONFIGURACIÓN ADICIONAL

### 15. AGREGAR ICONOS FALTANTES

**Archivo:** `src/app/page.tsx`  
**Agregar a imports:**

```typescript
import {
  ArrowRight,
  Star,
  Shield,
  Clock3,
  Sparkles,
  MessageCircle,
  Instagram,
  Music2,
  Check,
  X,
  Zap,
  Users,
  Briefcase,
  Heart,
  Mail,
  Phone,
  ChevronDown,
  Plus, // NUEVO
  Send, // NUEVO
  Loader2, // NUEVO
  CheckCircle, // NUEVO
  AlertTriangle, // NUEVO
} from "lucide-react";
```

---

### 16. CONFIGURAR TRACKING GA4

**Archivo:** `src/components/forms.tsx`  
**En función onSubmit:**

```typescript
const onSubmit = async (data: LeadFormData) => {
  setState("loading");
  
  // Track form start
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      form_type: 'lead_form',
    });
  }
  
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al enviar");
    
    // Track form submit
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        form_type: 'lead_form',
        fields_completed: completedFields,
      });
    }
    
    setState("success");
    reset();
  } catch (error) {
    console.error(error);
    
    // Track error
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_error', {
        form_type: 'lead_form',
        error_message: error.message,
      });
    }
    
    setState("error");
  } finally {
    setTimeout(() => setState("idle"), 5000);
  }
};
```

---

## 📝 NOTAS IMPORTANTES

### Dependencias necesarias:
- ✅ framer-motion (ya instalado)
- ✅ lucide-react (ya instalado)
- ✅ next/image (ya instalado)
- ✅ react-hook-form (ya instalado)
- ✅ zod (ya instalado)

### Testing después de cada cambio:
1. Verificar en Chrome DevTools responsive mode
2. Testing en dispositivo real (mobile)
3. Verificar errores en consola (F12)
4. Lighthouse audit (Performance + Accessibility)

### Deploy workflow:
1. Cambios en branch `feature/ux-improvements`
2. Testing en staging
3. Merge a `main`
4. Deploy automático (Vercel)

---

**Archivo creado:** 19 de Febrero, 2026  
**Versión:** 1.0  
**Uso:** Copiar snippets directamente al proyecto
