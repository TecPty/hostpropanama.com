# Modelo: Clínica Dental Pro

> **Supuestos.** Los datos del modelo llegaron sin completar, así que se usaron los ejemplos del brief como base. Todo lo marcado **[SUPUESTO]** debe confirmarse antes de vender o publicar el modelo.
>
> | Campo | Valor usado |
> |---|---|
> | Nombre | Clínica Dental Pro [SUPUESTO] |
> | Nicho | Salud · odontología [SUPUESTO] |
> | Público | Pacientes de 25 a 55 años en Ciudad de Panamá [SUPUESTO] |
> | Objetivo | Agendar citas por WhatsApp [SUPUESTO] |
> | Secciones | Hero, Servicios, Nosotros, Testimonios, Galería, FAQ, Contacto [SUPUESTO] |
> | Estilo | Limpio, moderno, tonos claros (verde azulado clínico) [SUPUESTO] |
> | Paleta | Por defecto: primario `#0B6E77` [SUPUESTO] |
> | Referencias | Ninguna; buenas prácticas del nicho [SUPUESTO] |
> | Plan | Profesional [SUPUESTO] |
> | Datos del negocio | Dirección, teléfono +507 6123-4567, correo, precios, cifras y testimonios **ficticios** [SUPUESTO] |
> | Fotos | Imágenes de muestra generadas localmente; hay que cambiarlas por fotos reales [SUPUESTO] |

Demo: `/plantillas/clinica-dental-pro` · Catálogo: `/plantillas`

---

## 1. Resumen del modelo

Una landing de una sola página para clínicas dentales cuyo único objetivo es **convertir visitas en citas por WhatsApp**. Tiene un hero con CTA visible sin hacer scroll desde 320px, servicios con precios en USD para responder la objeción del costo, y prueba social (equipo, cifras y testimonios). Cierra con preguntas frecuentes y un formulario que abre WhatsApp con el mensaje ya escrito. No necesita backend, carga rápido y se personaliza en dos archivos.

## 2. Mapa del sitio y wireframe

```
/ (one-page)
├── Header fijo ─ logo · menú (#anclas) · [Agendar cita por WhatsApp]   (móvil: ☰)
├── #inicio      Hero
├── #servicios   Servicios
├── #nosotros    Nosotros
├── #testimonios Testimonios
├── #galeria     Galería
├── #preguntas   FAQ
├── #contacto    Contacto
├── Footer
└── Botón flotante WhatsApp (siempre visible)
```

**Hero** (fondo `surface`)
```
[eyebrow: Odontología integral en Obarrio]
H1  Tu sonrisa sana y sin dolor…
p   Especialistas en…
[■ Agendar cita por WhatsApp]  Ver servicios y precios →
✓ Valoración desde $35  ✓ Aceptamos seguros  ✓ Sábados
                                   [ imagen consultorio ]  ← debajo en móvil
```
**Servicios**: eyebrow + H2 + bajada centrados → grilla 1/2/3 columnas de tarjetas (ícono · H3 · descripción · "Desde $X") → botón outline de WhatsApp.
**Nosotros** (fondo `surface`): imagen del equipo | H2 + 2 párrafos + 4 viñetas ✓ + 3 cifras (12+ años · 8,000+ pacientes · 4.9/5). En móvil el texto va primero.
**Testimonios**: H2 → 3 tarjetas (★★★★★ · cita · nombre · tratamiento).
**Galería** (fondo `surface`): H2 → grilla 2 columnas en móvil, 3 en desktop, formato 4:3, lazy loading.
**FAQ**: H2 → acordeón `<details>` con 5 preguntas (funciona sin JavaScript).
**Contacto** (fondo `surface`): H2 + dirección / Cómo llegar / teléfono / correo / horarios | formulario (nombre · servicio · fecha) → abre WhatsApp.
**Footer** (oscuro): nombre + lema | secciones | redes → © año · "Sitio web por **HostPro Panamá**" en `#FFDE59`.

## 3. Estructura de carpetas

```
src/
├── app/plantillas/
│   ├── page.tsx                  # Catálogo HostPro (lista de modelos)
│   └── [slug]/page.tsx           # Render de cada modelo + metadata SEO
├── templates/
│   ├── types.ts                  # Contrato TemplateContent + CatalogEntry
│   ├── registry.ts               # Registro del catálogo
│   ├── __tests__/templates.test.tsx  # Valida contenido, SEO, +507, imágenes, schema
│   ├── _shared/                  # Común a TODOS los modelos (coherencia de familia)
│   │   ├── template-base.css     # Tokens base, contenedor, secciones, foco
│   │   ├── schema.ts             # JSON-LD LocalBusiness del nicho + FAQPage
│   │   ├── whatsapp.ts
│   │   └── components/
│   │       ├── TemplateSite.tsx  # Ensambla las secciones según content.sections
│   │       ├── SiteHeader.tsx  Hero.tsx  Services.tsx  About.tsx
│   │       ├── Testimonials.tsx  Gallery.tsx  Faq.tsx
│   │       ├── Contact.tsx  ContactForm.tsx  SiteFooter.tsx
│   │       ├── WhatsAppFloat.tsx  WhatsAppCta.tsx  SectionHeading.tsx  Icon.tsx
│   └── clinica-dental-pro/       # Lo único específico del modelo
│       ├── content.json          # TODO el texto, imágenes y enlaces
│       ├── tokens.css            # Paleta y forma del cliente
│       └── catalog.ts            # Ficha comercial
public/templates/clinica-dental-pro/  # hero, equipo, galeria-1…6 (.webp), og.jpg
```

## 4. Componentes

El código está en `src/templates/_shared/components/`. Cada sección es un componente independiente que solo recibe su parte de `content.json`. Solo `SiteHeader` (menú móvil) y `ContactForm` son client components. El resto se renderiza en el servidor sin JavaScript.

## 5. Contenido editable

`src/templates/clinica-dental-pro/content.json`: meta SEO, datos del negocio (teléfono, WhatsApp, dirección, horarios, redes), orden de secciones, menú y el texto de cada sección. Si quitas un id de `"sections"`, esa sección y su enlace del menú desaparecen.

## 6. Tokens de diseño

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--tpl-primary` | `#0B6E77` | Botones, enlaces, íconos | 5.98:1 sobre blanco |
| `--tpl-primary-hover` | `#08555C` | Hover | 8.52:1 con blanco |
| `--tpl-primary-soft` | `#E6F4F5` | Fondos de íconos y badges | — |
| `--tpl-bg` / `--tpl-surface` | `#FFFFFF` / `#F4F9F9` | Fondos alternos de secciones | — |
| `--tpl-text` | `#102A2D` | Texto | 15.1:1 |
| `--tpl-muted` | `#4B6468` | Texto secundario | 6.32:1 |
| `--tpl-border` | `#D5E5E6` | Bordes | — |
| `--tpl-star` | `#C27C0E` | Estrellas | 3.4:1 (no textual) |
| `--tpl-footer-bg` / `-text` / `-muted` | `#0C2326` / `#D8E6E7` / `#9FB8BB` | Footer | 12.77:1 / 7.83:1 |
| `--hostpro-yellow` | `#FFDE59` | Firma HostPro (fija) | 12.34:1 sobre footer |

- **Tipografía:** Inter (ya cargada en el sitio). H1 32px en móvil, 48px en sm y 54px en lg. H2 30px y 36px en sm. Cuerpo de 16 a 18px.
- **Espaciado:** contenedor de 72rem, gutter de 16px (24px desde sm), secciones con `clamp(4rem, 9vw, 7rem)`, radios de 1rem y 1.75rem.
- **Objetivos táctiles:** 48px como mínimo.

## 7. Ficha para el catálogo

- **Nombre:** Clínica Dental Pro
- **Descripción comercial (32 palabras):** Sitio para clínicas dentales que convierte visitas en citas por WhatsApp: servicios con precios en USD, equipo, testimonios, galería, preguntas frecuentes y formulario que abre WhatsApp con el mensaje listo.
- **Ideal para:** clínicas dentales, odontólogos independientes, ortodoncistas y consultorios médicos pequeños.
- **Secciones:** Hero, Servicios, Nosotros, Testimonios, Galería, FAQ, Contacto, botón flotante de WhatsApp.
- **Plan recomendado:** Profesional.

## 8. Checklist de personalización del cliente

| # | Qué cambiar | Dónde |
|---|---|---|
| 1 | Nombre, logo en texto, teléfono (`+507…`), WhatsApp (`507…`, solo dígitos), correo | `content.json` → `business` |
| 2 | Dirección, enlace de Google Maps, horarios (formato 24 h) | `content.json` → `business.address`, `mapsUrl`, `hours` |
| 3 | Mensaje prellenado de WhatsApp | `business.whatsappMessage` |
| 4 | Redes sociales | `business.social` |
| 5 | Title (≤ 60 car. ideal) y description (70 a 160 car.), keywords con la zona del cliente | `content.json` → `meta` |
| 6 | Dominio final | `meta.siteUrl` (canonical, OG y schema) |
| 7 | Servicios y precios en USD reales | `services.items` (íconos permitidos: ver `Icon.tsx`) |
| 8 | Años, pacientes y calificación **reales** | `about.stats` |
| 9 | Testimonios **reales** y con permiso del paciente | `testimonials.items` |
| 10 | Preguntas frecuentes (seguros, pagos con Yappy, estacionamiento…) | `faq.items` |
| 11 | Fotos reales en WebP (hero 1200×900, equipo 900×1100, galería 800×600), `alt` descriptivo y `width`/`height` correctos | `public/templates/<slug>/` + rutas en `content.json` |
| 12 | Imagen OG de 1200×630 (JPG o PNG) | `meta.ogImage` |
| 13 | Paleta del cliente, verificando contraste AA (≥ 4.5:1 en texto) | `tokens.css` |
| 14 | Activar u ocultar secciones | `content.json` → `sections` |
| 15 | Subtipo schema.org si cambia el nicho (Dentist, MedicalClinic…) | `business.schemaType` |
| 16 | Revisar con `npm test` (valida +507, SEO, imágenes y alt) y medir con Lighthouse | terminal / Chrome DevTools |

**No tocar:** la firma "Sitio web por HostPro Panamá" en `#FFDE59` del footer.

## Notas de producción

- En la demo dentro de hostpropanama.com, el layout raíz agrega la analítica y el JSON-LD de HostPro. Para el sitio real del cliente, el modelo se despliega en su propio proyecto de Vercel con un layout limpio: se copian `_shared/`, la carpeta del modelo y `TemplateSite`.
- No se incluye `aggregateRating` en schema.org, porque Google no acepta reseñas publicadas por el propio negocio.
- **Nuevo modelo:** copia `clinica-dental-pro/` con el nuevo slug, edita sus 3 archivos, importa `tokens.css` en `globals.css` y regístralo en `registry.ts`.
