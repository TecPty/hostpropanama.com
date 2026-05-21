# Documento de Entrega Ejecutiva — HostPro Panamá

**Proyecto**: hostpropanama.com  
**Stack**: Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4  
**Deploy**: Vercel (producción)  
**Fecha de entrega**: Mayo 2026

---

## Resumen Ejecutivo

Se desarrolló el sitio web completo de **HostPro Panamá**, agencia panameña de talento y personal para eventos. El proyecto cubre desde el diseño de la landing page y el catálogo de modelos, hasta la infraestructura de testing, CI/CD y optimización de assets. El resultado es una aplicación production-ready, con código mantenible, performance optimizada y cobertura de pruebas automatizadas.

---

## 1. Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Lenguaje | TypeScript 5 (strict mode) |
| Formularios | react-hook-form + Zod |
| Animaciones | Framer Motion + Lenis (smooth scroll) |
| Email | Resend |
| SEO | next-seo |
| Testing | Vitest + Testing Library + jsdom |
| Cobertura | @vitest/coverage-v8 |
| CI/CD | GitHub Actions + Vercel |

---

## 2. Arquitectura del Proyecto

```
src/
├── app/
│   ├── HomeClient.tsx        ← Landing page principal (client component)
│   ├── layout.tsx            ← Root layout con metadata global
│   ├── page.tsx              ← Entry point del servidor
│   ├── robots.ts             ← SEO: robots.txt dinámico
│   ├── sitemap.ts            ← SEO: sitemap.xml dinámico
│   ├── api/
│   │   ├── contact/          ← API route: formulario de cotización
│   │   └── apply/            ← API route: formulario de postulación de talento
│   └── modelos/
│       └── [slug]/           ← Template dinámico de perfil de modelo
├── components/               ← Componentes atómicos y de sección
├── constants/
│   └── content.ts            ← Source of truth: servicios, FAQs, talento
└── utils/                    ← Helpers: validación, WhatsApp, formato, API
```

---

## 3. Funcionalidades Implementadas

### 3.1 Landing Page

La landing page cubre el funnel completo de conversión con las siguientes secciones:

| Sección | Descripción |
|---------|-------------|
| **Hero** | Imagen de fondo con CTA principal hacia formulario de cotización |
| **Servicios** | 4 tarjetas: Talento, Eventos Corporativos, Activaciones BTL, Capacitaciones |
| **Nuestra Metodología** | Grid de 4 pasos: Análisis → Casting → Preparación → Ejecución |
| **New Faces** | Galería destacada del catálogo de modelos con flip card (hover) |
| **Contacto / Cotizá** | Formulario dual: cotización de eventos + postulación de talento |
| **FAQ** | Preguntas frecuentes con acordeón |
| **Footer** | Navegación, redes sociales, datos de contacto |

### 3.2 Catálogo de Modelos

- Ruta dinámica `/modelos/[slug]` con template por perfil
- Breadcrumb de navegación (Inicio → Modelos → Nombre)
- Datos por perfil: foto, perfil físico, idiomas, habilidades, tipos de evento, disponibilidad, redes sociales
- CTA de WhatsApp personalizado por perfil (mensaje pre-cargado con el nombre del modelo)
- Links clickeables a Instagram y TikTok
- Separador condicional idioma/altura (no se muestra si falta algún dato)
- Galería de imágenes por modelo

### 3.3 API Routes

**`/api/contact`** — Cotización de eventos:
- Validación de payload con Zod
- Envío de email vía Resend
- Respuestas tipadas: 200 OK, 400 Bad Request, 405 Method Not Allowed, 500 Error

**`/api/apply`** — Postulación de talento:
- Validación de payload con Zod
- Envío de email vía Resend
- Mismas respuestas de contrato

### 3.4 WhatsApp Integration

- Botón flotante de WhatsApp (presente en todas las vistas)
- CTAs contextuales por servicio (mensaje pre-cargado según el servicio clickeado)
- CTA personalizado por modelo en el template de perfil

### 3.5 SEO

- `robots.ts` dinámico
- `sitemap.ts` dinámico (incluye rutas de modelos)
- Metadata por página
- Open Graph configurado

---

## 4. Sistema de Testing

### 4.1 Infraestructura

| Herramienta | Rol |
|-------------|-----|
| Vitest v4 | Test runner |
| @testing-library/react v16 | Renderizado y queries |
| @testing-library/user-event v14 | Simulación de interacciones |
| jsdom | Entorno DOM |
| @vitest/coverage-v8 | Cobertura de código |

**Configuración** (`vitest.config.ts`):
- Entorno: jsdom con globals habilitados
- Setup: `setupTests.ts` (jest-dom matchers + cleanup automático)
- Alias: `@/*` → `src/*`
- Cobertura: HTML + LCOV → `./coverage/`

### 4.2 Suite de Tests Frontend

`src/components/__tests__/` — Tests de comportamiento real del usuario:

| Test | Qué protege |
|------|-------------|
| CTA hero → scroll a formulario | Flujo de conversión principal |
| Envío exitoso de formulario de contacto | Happy path de cotización |
| Validación de campos requeridos | UX de errores en formulario |
| Navegación mobile (open/close menú) | Usabilidad en mobile |
| Botón WhatsApp con número correcto | Conversión por WhatsApp |
| UI condicional según estado del tab | Lógica de formulario dual |
| Mensajes de error en formulario de talento | Validación de postulación |
| Render básico del componente header | Smoke test de navegación |

### 4.3 Tests de Contrato de API

`src/app/api/` — Tests de contrato para ambas rutas:

| Escenario | `/api/contact` | `/api/apply` |
|-----------|:--------------:|:------------:|
| Payload válido → 200 OK | ✅ | ✅ |
| Payload inválido → 400 | ✅ | ✅ |
| Campos requeridos faltantes → 400 | ✅ | ✅ |
| Método no soportado → 405 | ✅ | ✅ |
| Error interno → 500 con shape estable | ✅ | ✅ |

### 4.4 Comandos

```bash
npm run test              # Ejecución única (CI)
npm run test:watch        # Modo watch (desarrollo)
npm run test:coverage     # Cobertura completa
```

---

## 5. CI/CD

### GitHub Actions (`.github/workflows/ci-tests.yml`)

- **Trigger**: Pull Request a cualquier rama + Push a `main`/`master`
- **Steps**: checkout → Node.js 20 → `npm ci` → `npm run test`
- **Timeout**: 15 minutos
- **Efecto**: Ningún PR puede mergearse sin pasar los tests

### Vercel

- Deploy automático en cada push a `main`
- Preview deployments por PR

---

## 6. Optimización de Assets

### Pipeline de imágenes

- Script `scripts/convert-images.js` con `sharp`
- Convierte PNG → WebP (quality 80) y elimina el original
- Actualiza referencias en `src/` automáticamente
- Skippea archivos en `logos/` y `seo/` (deben mantenerse en PNG)

### Imágenes en producción

| Archivo | Formato | Uso |
|---------|---------|-----|
| `hero.webp` | WebP | Hero section background |
| `background-hero.webp` | WebP | Overlay de hero |
| `talentos.webp` | WebP | Card: Servicio de Talento |
| `eventos.webp` | WebP | Card: Eventos Corporativos |
| `activaciones-btl.webp` | WebP | Card: Activaciones BTL |
| `capacitaciones.webp` | WebP | Card: Capacitaciones |
| `talent-model.webp` | WebP | CTA section background |
| `talent/` | WebP | Fotos individuales del catálogo |

---

## 7. Decisiones Técnicas Relevantes

| Decisión | Justificación |
|----------|---------------|
| **App Router sobre Pages Router** | SSR nativo, Server Components, mejor performance |
| **Vitest sobre Jest** | Integración nativa con Vite/Turbopack, más rápido, mismo API |
| **react-hook-form + Zod** | Validación tipada end-to-end, sin dependencias pesadas |
| **Framer Motion** | Animaciones de producción con control fino sobre performance |
| **Resend sobre SMTP directo** | API moderna, mejor deliverability, sin configuración de servidor |
| **WebP para todas las imágenes** | 25-35% menos peso que JPEG/PNG con calidad equivalente |
| **content.ts como source of truth** | Un solo punto de cambio para actualizar textos/imágenes sin tocar JSX |

---

## 8. Estructura de Datos del Catálogo

Cada modelo en `content.ts` sigue el tipo `TalentModel`:

```typescript
type TalentModel = {
  name: string;
  slug: string;           // URL: /modelos/[slug]
  role: string;
  languages: string;
  status: "disponible" | "reservada";
  city: string;
  experienceSummary: string;
  skills: string[];
  eventTypes: string[];
  availability: { schedule: string; canTravel: boolean };
  physical: {
    height?, weight?, hairColor?, eyeColor?,
    shirtSize?, pantsSize?, shoeSize?
  };
  social?: { instagram?, tiktok? };
  gender: "mujer" | "hombre";
  photo: string;
  media: { gallery: string[] };
};
```

---

## 9. Cómo Agregar Contenido

### Nuevo modelo al catálogo

1. Agregar foto en `public/talent/mujeres/` o `public/talent/hombres/` (formato WebP)
2. Agregar el objeto en el array `talent` en `src/constants/content.ts`
3. El template `/modelos/[slug]` lo renderiza automáticamente
4. El sitemap lo incluye automáticamente

### Nueva imagen de servicio

1. Colocar PNG en `public/images/`
2. Correr `node scripts/convert-images.js` — convierte y actualiza referencias
3. Actualizar la propiedad `image` en el servicio correspondiente en `content.ts`

### Nuevo servicio

1. Agregar objeto al array `services` en `src/constants/content.ts`
2. La sección de servicios en `HomeClient.tsx` lo renderiza automáticamente

---

## 10. Acceso y Configuración

### Variables de entorno requeridas (`.env.local`)

```env
RESEND_API_KEY=        # API key de Resend para envío de emails
```

### Comandos de desarrollo

```bash
npm run dev            # Servidor local en http://localhost:3000
npm run build          # Build de producción
npm run lint           # ESLint
npm run test           # Tests
npm run test:coverage  # Tests + cobertura
```

---

*Documentación generada el 19 de mayo de 2026.*
