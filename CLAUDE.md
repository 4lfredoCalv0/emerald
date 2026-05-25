# Emerald — Contexto del Proyecto

## Descripción

Emerald es una agencia AI-first con sede en Barranquilla, Colombia. Ofrece:

- Presencia Digital Premium (branding, web, SEO)
- Automatización con IA (workflows, agentes, integraciones)
- Chatbots WhatsApp con IA

**Filosofía de marca:** No es "otra agencia más". Debe sentirse como una empresa de tecnología premium, AI-native, moderna y exclusiva. Cada decisión visual responde: *"¿Esto se siente premium y AI-first?"*

**Inspiraciones de diseño:** Apple, Stripe, Linear, Vercel, Raycast, Arc Browser.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Iconos | lucide-react |
| Email | Resend |
| Blog | MDX (next-mdx-remote + gray-matter) |
| Analytics | @vercel/analytics, @vercel/speed-insights |
| OG Images | @vercel/og |
| Deploy | Vercel (proyecto: `emeraldproject/emerald`) |
| Repo | GitHub: `4lfredoCalv0/emerald` |

---

## Diseño y Colores

### Paleta principal (tailwind.config.ts)

```
brand.500 / neon.green      #10b981   ← Verde neón principal
neon.green-bright           #34d399   ← Verde claro acento
neon.cyan                   #06b6d4   ← Cyan acento
neon.magenta                #ec4899   ← Magenta acento (usar con moderación)
surface.DEFAULT             #030303   ← Fondo base
surface.50                  #0a0a0a
surface.100                 #111111
surface.200                 #1a1a1a
```

### Tipografía

```
font-heading / font-brand   Space Grotesk   ← Títulos, headings
font-body                   Inter           ← Cuerpo de texto
font-mono                   JetBrains Mono  ← Código, datos técnicos
```

### Estilo visual

- Glassmorphism sutil
- Gradientes suaves
- Mucho whitespace / espacio negativo
- Bordes redondeados premium
- Animaciones suaves (Framer Motion)
- Layouts limpios, jerarquía fuerte
- Sensación "high-end SaaS"
- `clip-path: cutout` para esquinas recortadas estilo tech

**Evitar:** sombras exageradas, exceso de colores, UI sobrecargada, estética corporativa genérica.

---

## Estructura de Páginas

```
app/
  page.tsx                          ← Homepage
  layout.tsx                        ← Layout global (Schema, fuentes, analytics)
  blog/                             ← Blog MDX
  contacto/                         ← Formulario de contacto (Resend)
  soluciones/
    presencia-digital-premium/      ← Servicio web/branding/SEO
    automatizacion-inteligente/     ← Servicio IA y automatización
    chatbots-whatsapp-ia/           ← Servicio chatbots WhatsApp
  sobre-emerald/                    ← About
  agenda/                           ← Agendar llamada
  beneficios/
  sitemap.ts                        ← Sitemap dinámico
  og-image.png/route.tsx            ← OG image API route
```

## Estructura de Componentes

```
components/
  Navbar.tsx
  Footer.tsx
  Breadcrumbs.tsx
  ParticleField.tsx
  Testimonials.tsx
  Benefits.tsx
  AnalyticsWrapper.tsx
  seo/
    faq-section.tsx                 ← FAQ con schema FAQ structured data
    table-of-contents.tsx           ← TOC para artículos
  solutions/                        ← Secciones reutilizables para páginas de soluciones
    SolutionHero.tsx
    AnimatedBackground.tsx
    FeatureShowcase.tsx
    ProcessSteps.tsx
    SolutionCTA.tsx
    NarrativeSection.tsx
    TransformationSection.tsx
    IndustryFit.tsx
  visuals/                          ← Visualizaciones animadas (dashboards, flows)
    HeroVisual.tsx, DashboardMockup.tsx, DataFlow.tsx, ...

lib/
  seo/
    metadata.ts                     ← defaultMetadata, generateMetadata helpers
    schema.ts                       ← JSON-LD: Organization, LocalBusiness, FAQ, etc.
  blog.ts                           ← Helpers para leer MDX
  animation-variants.ts             ← Variantes Framer Motion reutilizables
```

---

## SEO

El SEO técnico es crítica prioridad. Implementaciones presentes:

- `lib/seo/metadata.ts` — metadata base y por página
- `lib/seo/schema.ts` — JSON-LD (Organization, LocalBusiness, FAQPage, BreadcrumbList)
- `components/seo/faq-section.tsx` — FAQs con structured data
- `components/seo/table-of-contents.tsx` — TOC para artículos
- `app/sitemap.ts` — sitemap dinámico
- `app/opengraph-image.tsx` — OG image global
- Open Graph completo en cada página
- `lang="es"`, canonical URLs, breadcrumbs

---

## Copywriting

**Tono:** Premium, seguro, estratégico, minimalista. Sin buzzwords, sin clichés de agencia, sin emojis excesivos.

**Headlines:** Cortos y fuertes. Frases limpias. Sensación de exclusividad.

**Ejemplo bueno:** "Diseño intencional. Tecnología moderna. Experiencia que genera confianza."

**Evitar:** "¡Transformamos tu negocio!", "Somos apasionados por...", "Soluciones innovadoras de vanguardia".

---

## Deployment

- **GitHub:** `git push origin master` (credenciales en Windows Credential Manager, URL limpia sin token)
- **Vercel:** `vercel --prod` (CLI autenticado, proyecto vinculado en `.vercel/project.json`)
- **No hacer push/deploy** sin que el usuario lo indique explícitamente.

---

## Seguridad

### Secrets y credenciales
- **Nunca** embeber tokens, API keys ni contraseñas en URLs de git remote, código fuente o archivos versionados.
- Todos los secrets van en `.env.local` — está en `.gitignore` (patrón `.env*.local`), nunca se commitea.
- El credencial helper está configurado como `manager` (Windows Credential Manager, cifrado); no usar `store` (plaintext).
- Si se necesita un nuevo secret, agregarlo a `.env.local` y accederlo vía `process.env.NOMBRE_VARIABLE`.

### dangerouslySetInnerHTML
- Único uso permitido: contenido MDX del blog (`app/blog/[slug]/ArticleClient.tsx`) — viene de archivos `.mdx` del repo, nunca de input del usuario. No requiere sanitización.
- Para JSON-LD schema en `app/layout.tsx` el uso es seguro: `JSON.stringify` sobre objetos estáticos del servidor.
- **Nunca** usar `dangerouslySetInnerHTML` con data proveniente de formularios, URL params, o APIs externas sin sanitizar con DOMPurify primero.

### Formulario de contacto (`app/actions.ts`)
- Es un Server Action — la validación de inputs debe hacerse en el servidor, no confiar en validación client-side.
- El `RESEND_API_KEY` se lee de `process.env.RESEND_API_KEY` correctamente.

### Checklist antes de hacer push
- [ ] No hay tokens ni API keys hardcodeados en el código
- [ ] No hay archivos `.env.local` ni `.env*.local` en el staging area (`git status`)
- [ ] Cualquier nuevo `dangerouslySetInnerHTML` usa data de fuente confiable o está sanitizado

---

## Reglas para Claude Code

1. **Siempre responder en español** — todas las respuestas al usuario y todo el contenido generado relacionado con Emerald (copy, captions, documentación, Notion, comentarios de código) deben estar en español. Sin excepciones.
2. **Consistencia visual primero** — cualquier cambio debe respetar la paleta, tipografía y estilo descritos arriba.
3. **No romper el minimalismo** — si una adición se siente recargada, simplificarla.
4. **Responsive impecable** — mobile-first, probar breakpoints sm/md/lg/xl.
5. **Performance y SEO** — no añadir dependencias pesadas innecesarias; mantener las optimizaciones existentes.
6. **Animaciones suaves** — usar `framer-motion` con `lib/animation-variants.ts`; nunca animaciones abruptas.
7. **Componentes reutilizables** — antes de crear algo nuevo, revisar si existe en `components/solutions/` o `components/visuals/`.
8. **No hacer commit/push/deploy** sin instrucción explícita del usuario.
9. **Preguntar antes** de cambios que afecten branding, SEO o conversión.
10. **Secrets nunca en código** — cualquier valor sensible va en `.env.local` y se accede con `process.env`.
