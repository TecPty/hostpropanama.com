# 🎨 Ejemplos de Personalización

## Ejemplos de Código para Personalizar tu Landing Page

### 1. Agregar un Nuevo Servicio

```tsx
// En page.tsx, dentro de const services = [...]
const services = [
  {
    title: "Azafatas y modelos corporativos",
    description: "Presencia impecable para ferias, congresos, lanzamientos y eventos premium.",
  },
  // ... otros servicios ...
  {
    title: "Seguridad VIP y Personal Shopper",
    description: "Equipo entrenado en seguridad discreta y acompañamiento de clientes premium.",
  },
];
```

### 2. Agregar un Nuevo Plan

```tsx
// En page.tsx, dentro de const plans = [...]
const plans = [
  // ... planes existentes ...
  {
    name: "Platinum",
    description: "Para marcas de lujo extremo",
    price: "Presupuesto abierto",
    featured: false,
    features: [
      { name: "Staff exclusivo", included: true },
      { name: "Eventos ilimitados", included: true },
      { name: "Personal stylist", included: true },
      { name: "Gestor dedicado 24/7", included: true },
      { name: "Eventos internacionales", included: true },
    ],
    cta: "Solicitud especial",
  },
];
```

### 3. Agregar un Testimonio

```tsx
// En page.tsx, dentro de const testimonials = [...]
const testimonials = [
  // ... testimonios existentes ...
  {
    text: "Trabajar con HostPro fue transformador para nuestro evento. El nivel de profesionalismo fue excepcional.",
    author: "Jorge Flores",
    role: "Director de Eventos",
    company: "Grupo Empresarial XYZ",
    image: "/talent/nueva-foto.png",
  },
];
```

### 4. Cambiar Colores (Dos opciones)

#### Opción A: Cambiar todo el tema
```css
/* En globals.css */
:root {
  --background: #0a0a0a;
  --foreground: #f5f5f5;
  --gold: #FF6B35;  /* Naranja en lugar de amarillo */
  --card: #111111;
}
```

#### Opción B: Cambiar solo un elemento
```tsx
// En una clase específica
className="bg-[#FF6B35] hover:bg-[#FF8C42]"
```

### 5. Agregar una Nueva Sección

```tsx
// Después del hero, antes de servicios
<section id="nueva-seccion" className="relative py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <motion.div 
      className="space-y-4 mb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-[#d4b200] font-semibold">
        Nueva Sección
      </p>
      <h2 className="font-display text-4xl lg:text-5xl">
        Título de la Nueva Sección
      </h2>
    </motion.div>

    {/* Tu contenido aquí */}
  </div>
</section>
```

### 6. Personalizar el Header

```tsx
// Cambiar links del header
<div className="hidden gap-8 text-base font-semibold md:flex">
  <a href="#tu-nueva-seccion" className="relative group text-white/80 hover:text-[#d4b200] transition-colors">
    Tu Nueva Opción
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4b200] group-hover:w-full transition-all duration-300" />
  </a>
</div>
```

### 7. Agregar un FAQ Nuevo

```tsx
// En page.tsx, dentro de const faqs = [...]
const faqs = [
  // ... FAQs existentes ...
  {
    q: "¿Ofrecen cobertura internacional?",
    a: "Sí. Contamos con staff en Panamá, Colombia y Costa Rica. Coordinamos eventos transfronterizos.",
  },
];
```

### 8. Agregar Animación Personalizada

```css
/* En globals.css */
@keyframes mi-animacion {
  0% {
    opacity: 0;
    transform: translateY(-10px) rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

.animate-mi-animacion {
  animation: mi-animacion 0.6s ease-out;
}
```

Luego úsalo:
```tsx
className="animate-mi-animacion"
```

### 9. Cambiar Fuentes

```css
/* En globals.css */
.font-display {
  font-family: "Georgia", serif;  /* Cambiar de Playfair Display */
  letter-spacing: -0.01em;
}

.font-sans {
  font-family: "Inter", sans-serif;  /* Cambiar de Montserrat */
}
```

### 10. Agregar un Card de Feature Personalizado

```tsx
<motion.div
  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#d4b200]/30 hover:bg-white/10 transition-all"
  whileHover={{ scale: 1.05 }}
>
  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#d4b200]/20">
    <YourIcon className="h-6 w-6 text-[#d4b200]" />
  </div>
  <h3 className="font-semibold text-lg mb-2">Tu Feature</h3>
  <p className="text-white/70 text-sm">Descripción</p>
</motion.div>
```

### 11. Cambiar el Botón Principal

```tsx
// Cambiar color del botón
<Link
  href="#contacto"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 text-white font-semibold text-lg transition hover:-translate-y-1 hover:bg-[#FF8C42] hover:shadow-[0_20px_40px_rgba(255,107,53,0.3)]"
>
  Tu CTA
  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-2" />
</Link>
```

### 12. Personalizar Formulario

```tsx
// Dentro del LeadForm en components/forms.tsx
// Ejemplo de campo personalizado:
<input
  type="text"
  placeholder="Tu Pregunta Personalizada"
  {...register("custom_field")}
  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-[#d4b200] focus:outline-none transition"
/>
```

### 13. Agregar Efecto de Parallax

```tsx
// En un elemento dentro del Hero
<motion.div
  style={{
    y: useMotionTemplate`calc(${useViewportScroll().scrollY} * 0.5)`,
  }}
  className="absolute top-0 left-0 w-full h-full"
>
  {/* Contenido con parallax */}
</motion.div>
```

### 14. Cambiar Spacing

```tsx
// Aumentar espacio entre secciones
<section className="relative py-32 px-6">  {/* De py-24 a py-32 */}
  {/* Contenido */}
</section>
```

### 15. Agregar Badge o Etiqueta

```tsx
<div className="inline-flex items-center gap-2 rounded-full border border-[#d4b200]/50 bg-[#d4b200]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4b200]">
  <Sparkles className="h-4 w-4" />
  Tu Etiqueta
</div>
```

### 16. Cambiar Borde de Cards

```tsx
// De border-white/10 a otro color
className="rounded-3xl border-2 border-[#d4b200]/30 bg-white/5 p-8"
```

### 17. Agregar Gradient en Fondo

```tsx
className="bg-gradient-to-r from-[#d4b200]/10 via-transparent to-white/5"
```

### 18. Personalizar Footer

```tsx
// Agregar nueva columna en footer
<motion.div 
  className="space-y-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <p className="text-sm uppercase tracking-[0.3em] font-semibold text-[#d4b200]">
    Nueva Sección
  </p>
  <div className="space-y-2 text-sm">
    <a href="#" className="block text-white/80 hover:text-[#d4b200] transition">
      Link 1
    </a>
    <a href="#" className="block text-white/80 hover:text-[#d4b200] transition">
      Link 2
    </a>
  </div>
</motion.div>
```

### 19. Ajustar Tipografía

```tsx
// Hacer títulos más grandes
className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"

// Hacer títulos más pequeños
className="font-display text-3xl sm:text-4xl lg:text-5xl"
```

### 20. Agregar Elemento Flotante

```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
  className="inline-block"
>
  {/* Tu elemento aquí */}
</motion.div>
```

## 🎯 Combinaciones Populares

### Dark Mode Mejorado
```css
:root {
  --background: #050505;  /* Aún más oscuro */
  --gold: #FFD700;        /* Oro más brillante */
}
```

### Tech/Startup Moderno
```css
:root {
  --background: #0f0f0f;
  --gold: #00D9FF;        /* Cyan */
}
```

### Luxury/Premium
```css
:root {
  --background: #0a0a0a;
  --gold: #C0AF00;        /* Oro más cálido */
}
```

## 📋 Checklist de Personalización

- [ ] Cambiar colores del tema
- [ ] Actualizar mensaje del hero
- [ ] Reemplazar imágenes
- [ ] Agregar servicios propios
- [ ] Personalizar planes de precios
- [ ] Actualizar equipo/talento
- [ ] Agregar testimonios reales
- [ ] Cambiar contacto
- [ ] Personalizar FAQ
- [ ] Revisar animaciones
- [ ] Probar responsive
- [ ] Verificar links

## 🚀 Próximas Mejoras

1. **Agregar blog**: Nueva sección con artículos
2. **Agregar case studies**: Proyectos destacados
3. **Agregar video hero**: En lugar de imagen estática
4. **Agregar contador**: Clientes, eventos, etc.
5. **Agregar newsletter**: Suscripción
6. **Agregar integración de Instagram**: Feed integrado

---

¿Necesitas ayuda con alguna personalización específica? Revisa la guía principal en `LANDING_PAGE_GUIDE.md`
