# Alma Canina — Sitio web

**Educamos con alma · Educamos · Conectamos · Transformamos**

Sitio web de Alma Canina, club de educación, bienestar, experiencias y cultura animal en Tenjo (Cundinamarca). Está listo para producción y para desplegarse en Netlify, y tiene un administrador privado en `/admin` para editar el contenido sin tocar código.

> **Antes de publicar**, revisa la lista de [pendientes por completar](#pendientes-por-completar-antes-de-publicar) al final de este documento.

---

## Índice

1. [Arquitectura UX](#1-arquitectura-ux)
2. [Sistema visual](#2-sistema-visual)
3. [Estructura de navegación](#3-estructura-de-navegación)
4. [Tecnología y por qué se eligió](#4-tecnología-y-por-qué-se-eligió)
5. [Estructura del código y componentes](#5-estructura-del-código-y-componentes)
6. [Responsive y accesibilidad](#6-responsive-y-accesibilidad)
7. [Animaciones y personaje digital](#7-animaciones-y-personaje-digital)
8. [Centro de legislación](#8-centro-de-legislación)
9. [CMS y modelo de datos](#9-cms-y-modelo-de-datos)
10. [SEO](#10-seo)
11. [Configuración de Netlify](#11-configuración-de-netlify)
12. [Paso a paso: subir el proyecto a GitHub](#12-paso-a-paso-subir-el-proyecto-a-github)
13. [Paso a paso: desplegar en Netlify](#13-paso-a-paso-desplegar-en-netlify)
14. [Paso a paso: crear únicamente tu usuario administrador](#14-paso-a-paso-crear-únicamente-tu-usuario-administrador)
15. [Cómo editar la información sin código](#15-cómo-editar-la-información-sin-código)
16. [Cómo añadir una ley](#16-cómo-añadir-una-ley)
17. [Cómo cambiar el estado de un proyecto de ley](#17-cómo-cambiar-el-estado-de-un-proyecto-de-ley)
18. [Cómo crear un evento](#18-cómo-crear-un-evento)
19. [Cómo sustituir fotografías](#19-cómo-sustituir-fotografías)
20. [Formulario de contacto](#20-formulario-de-contacto)
21. [Trabajar en tu computador (opcional)](#21-trabajar-en-tu-computador-opcional)

---

## 1. Arquitectura UX

La sensación que debe dejar el sitio es esta: *«Aquí no solo puedo llevar a mi perro. Aquí puedo aprender a vivir mejor con él».* Por eso la arquitectura combina contenido comercial (experiencias) y educativo (Aprende, Legislación) para que se apoyen entre sí.

**Recorrido principal (inicio):**

| # | Bloque | Propósito |
|---|---|---|
| 1 | Hero de pantalla completa | Claim «Educamos con alma», promesa y dos llamados a la acción |
| 2 | Alma Canina es… | Educamos · Conectamos · Transformamos, en tres piezas visuales |
| 3 | Nuestra historia | Storytelling en tres capítulos unidos por un sendero punteado y huellas |
| 4 | ¿Quiénes somos? | Texto base y la frase destacada |
| 5 | Experiencias | Seis tarjetas interactivas; la pelota rebota al entrar a la sección |
| 6 | Cifras reales | Contadores animados calculados del propio contenido (experiencias, leyes, proyectos). No hay números inventados |
| 7 | Legislación | Leyes destacadas, la huella que se convierte en documento y acceso a la orientación ciudadana |
| 8 | Agenda | Próximas experiencias o un mensaje para avisar cuando abran inscripciones |
| 9 | Tenjo | «Un lugar para respirar, aprender y conectar» |
| 10 | Cierre | «Aquí no solo puedes traer a tu perro. Aquí aprenden a vivir mejor juntos» |

**Páginas:**

- `/` Inicio
- `/alma-canina/` Quiénes somos, historia, misión, visión, pilares, equipo, Tenjo (ubicación, horarios, mapa) y preguntas frecuentes
- `/experiencias/` Catálogo con filtros, y `/experiencias/<experiencia>/` con la ficha de cada experiencia
- `/aprende/` Centro de conocimiento con buscador, categorías, filtros y destacado, y `/aprende/<artículo>/` con contenido relacionado
- `/legislacion/` Centro de legislación: pestañas Leyes y Proyectos de ley, buscador, filtros por tema y herramienta «¿Necesitas orientación?»
- `/legislacion/<ley>/` Ficha pedagógica completa de cada ley
- `/legislacion/proyectos/<proyecto>/` Ficha de cada proyecto de ley, con la línea del trámite
- `/comunidad/` La manada: agenda, experiencias realizadas, testimonios, galería y aliados
- `/contacto/` Hablemos: formulario, datos de contacto y aviso de emergencias
- `/politica-de-privacidad/`, `/tratamiento-de-datos/`, `/terminos/` Páginas legales
- `/admin/` Administrador privado (no aparece en la navegación ni en buscadores)

## 2. Sistema visual

**Inspiración:** naturaleza + perros + familia + educación + movimiento + bienestar. Premium, pero cercano.

| Token | Color | Uso |
|---|---|---|
| `bosque-900` | `#1a3124` | Fondos oscuros, títulos |
| `bosque-800` | `#234030` | Botón principal |
| `salvia-100/200/400` | `#e5ecdf` `#d0dcc6` `#9ab28b` | Fondos de sección y etiquetas |
| `crema` | `#f6efe2` | Fondos cálidos |
| `arena-100/200/300` | `#efe4d0` `#e6d6ba` `#d6bf98` | Acentos neutros |
| `blanco` | `#fcfaf5` | Blanco cálido de fondo |
| `terracota-500/700` | `#c9714f` `#9e4a2b` | Acentos y botón «Vive Alma Canina» |
| `cielo-200/700` | `#cfe2ee` `#34647f` | Acento azul cielo, reservado para *proyectos de ley* |

- **Tipografía:** *Fraunces* (eje SOFT, expresiva y cálida) para títulos y *Figtree* (muy legible) para el contenido. Las dos están alojadas en el propio sitio, sin depender de Google Fonts.
- **Formas:** bordes orgánicos (blobs), tarjetas redondeadas, ondas entre secciones, textura sutil de papel y bastante espacio negativo.
- **Logo:** es **provisional**: una cabeza de perro cuyas orejas son hojas. Cuando tengas el definitivo, súbelo en *Configuración → Logo definitivo*.
- **Fotos:** las secciones principales usan **fotografías demo de Unsplash** (licencia de uso comercial gratuito, una foto por perro), listadas en `FOTOS-DEMO.md` con el lugar donde se reemplazan. Donde todavía no hay foto (equipo, eventos, galería) se muestran ilustraciones originales de Alma Canina con la etiqueta «Foto pendiente». Si una foto externa deja de estar disponible, aparece automáticamente una ilustración.

Los tokens están en `src/styles/global.css` (bloque `@theme`).

## 3. Estructura de navegación

Menú principal: **Inicio · Alma Canina · Experiencias · Aprende · Legislación · Comunidad · Contáctanos**, más el botón **Vive Alma Canina 🐾** (con colita que se mueve al pasar el mouse).

- **Escritorio:** menú horizontal que se vuelve sólido al hacer scroll y se oculta al bajar.
- **Móvil:** menú a pantalla completa con tipografía grande, aparición escalonada, cierre con `Esc` y foco atrapado dentro del menú.
- **Pie de página:** logo, *Educamos con Alma*, Tenjo (Cundinamarca), navegación, redes configurables, enlaces legales y *Educamos · Conectamos · Transformamos 🐾*.

## 4. Tecnología y por qué se eligió

**Astro 5 + TypeScript + Tailwind CSS 4 + Sveltia CMS + Netlify.**

Astro genera **HTML estático**: cada página llega al navegador ya construida, que es lo mejor para el **SEO** y la **velocidad**. Solo se envía JavaScript donde hace falta (filtros, menú, formulario), en scripts pequeños y sin frameworks pesados. Las animaciones son CSS con un único observador de scroll, de modo que son ligeras y respetan `prefers-reduced-motion`. El contenido vive en archivos Markdown/JSON dentro del repositorio y se edita con un **CMS basado en Git**: no hay base de datos que mantener ni costos extra, y cada cambio queda en el historial de GitHub.

Resultado de Lighthouse en el inicio (prueba local, perfil móvil): **Rendimiento 99 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100**.

## 5. Estructura del código y componentes

```
alma-canina/
├── astro.config.mjs        Configuración (sitemap, Tailwind, URL del sitio)
├── netlify.toml            Build, encabezados de seguridad y caché, redirecciones
├── public/
│   ├── admin/              Administrador (index.html + config.yml del CMS)
│   ├── images/uploads/     Aquí guarda el CMS las fotos que subas
│   ├── favicon.svg, og-image.png, apple-touch-icon.png
├── src/
│   ├── content.config.ts   Modelo de datos (esquemas de cada colección)
│   ├── content/            Colecciones editables
│   │   ├── experiences/  events/  articles/  laws/  bills/
│   │   ├── team/  testimonials/  faqs/  pages/
│   ├── data/               Páginas únicas editables (JSON)
│   │   ├── settings.json   Contacto, WhatsApp, redes, ubicación, datos legales, formulario
│   │   ├── home.json  about.json  community.json  guidance.json
│   ├── components/         Componentes reutilizables
│   ├── layouts/BaseLayout.astro
│   ├── lib/                Utilidades (etiquetas, consultas, schema.org)
│   ├── pages/              Rutas del sitio
│   ├── scripts/main.ts     Interacciones globales
│   └── styles/global.css   Sistema visual
```

**Componentes:** `Header`, `Footer`, `Logo`, `AlmaMark`, `Icon` (íconos propios), `Photo` (foto optimizada o ilustración de reemplazo), `PageHero`, `SectionTitle`, `Breadcrumbs`, `ExperienceCard`, `EventCard`, `ArticleCard`, `LawCard` (sirve para leyes y proyectos), `PawTrail`, `DogSide`, `DogFace`, `DogWalker`, `WhatsAppFloat` y `Seo`.

No hay textos quemados en los componentes: todo sale de `src/content` y `src/data`.

## 6. Responsive y accesibilidad

- Diseño *mobile first*, probado a 390 px, en tableta, en portátil y a 1440 px, sin scroll horizontal.
- HTML semántico, enlace «Saltar al contenido», jerarquía de títulos, `aria-current`, `aria-pressed`, pestañas accesibles con flechas del teclado, `aria-live` para los resultados de los filtros y etiquetas en todos los campos.
- Focus visible en terracota, botones de mínimo 44–48 px y contraste AA.
- `prefers-reduced-motion`: desactiva las animaciones, el parallax y el perrito caminante.
- Texto alternativo en las imágenes; cada foto tiene su campo «Descripción» en el CMS.

## 7. Animaciones y personaje digital

Prioridad: experiencia > espectáculo. Todo es CSS ligero.

| Microinteracción | Dónde |
|---|---|
| Perrito que camina por el borde inferior (una vez por visita, al pasar la mitad de la página) | Todo el sitio |
| Colita que se mueve al pasar el mouse | Botones «Vive Alma Canina», «Conoce Alma Canina», «Quiero participar», «Enviar» |
| Perro que asoma la cabeza detrás de una tarjeta | Experiencias |
| Pelota que rebota al entrar a la sección, y que se desplaza al cambiar de filtro | Inicio / Experiencias |
| Huellas que aparecen al avanzar | Nuestra historia |
| Orejitas detrás del título | Agenda y Equipo |
| Huella que se transforma en documento | Legislación |
| Perrito que salta y mensaje «¡Mensaje enviado!…» | Formulario de contacto |
| Reveal on scroll, parallax sutil, tarjetas que se elevan, zoom suave, contadores, acordeones fluidos y filtros animados | General |

## 8. Centro de legislación

**Contenido verificado** (consultado el 3 de octubre de 2026) en SUIN-Juriscol, el Gestor Normativo de Función Pública, el Régimen Legal de Bogotá y la Rama Judicial. El sitio de la senadora Andrea Padilla se usó como fuente pedagógica y de contexto.

| Ley | Número | Expedición |
|---|---|---|
| Ley Kiara | 2480 de 2025 | 16 jul 2025 |
| Ley Ángel | 2455 de 2025 | 18 abr 2025 |
| Esterilizar Salva | 2374 de 2024 | 12 jul 2024 |
| Ley Empatía | 2563 de 2025 | 29 dic 2025 |
| Ley Lorenzo | 2454 de 2025 | 14 abr 2025 |
| Centros Regionales de Bienestar Animal | 2499 de 2025 | 28 jul 2025 |
| Transporte de fauna silvestre | 2404 de 2024 | 2 ago 2024 |

**Proyectos de ley:** Cielos en Calma, Zoópolis, Proteccionistas, Simona, Yoko y Corralejas. Todos están marcados como **«Estado pendiente de verificación»** (`verified: false`), con su último movimiento conocido y su fecha. Zoópolis y Proteccionistas fueron **radicados nuevamente el 4 de agosto de 2026** según la prensa; su número nuevo está pendiente. La legislatura 2022-2026 terminó, así que el estado de Cielos en Calma, Simona, Yoko y Corralejas debe confirmarse en el Congreso antes de publicar.

**Reglas que respeta el sitio:**

- Nunca presenta un proyecto como ley vigente: los proyectos tienen otro color (azul cielo, borde punteado), la etiqueta PROYECTO DE LEY y un aviso.
- No inventa datos: lo incierto dice «Pendiente de verificación/actualización» y es editable.
- Cada ficha incluye fuentes con atribución, «Última actualización» y el aviso pedagógico.
- La herramienta «¿Necesitas orientación?» se edita en *Configuración → Orientación ciudadana*.

## 9. CMS y modelo de datos

**Sveltia CMS**: un CMS moderno basado en Git y compatible con el formato de Decap CMS. **No usa Netlify Identity ni Git Gateway** (en desuso): inicia sesión directamente con **GitHub**.

El panel `/admin` muestra: 🏠 Inicio · 🐾 Experiencias · 📅 Agenda · 📚 Aprende · ⚖️ Legislación · 📜 Proyectos de ley · 🐶 Comunidad · 👥 Equipo · 💬 Testimonios · ❓ Preguntas frecuentes · ⚙️ Configuración · 📄 Páginas legales.

Colecciones (`src/content.config.ts`): `experiences` (servicios y experiencias), `events`, `articles`, `laws`, `bills`, `team`, `testimonials`, `faqs`, `pages`, más `settings` y las páginas únicas en `src/data/*.json`.

Los campos de las leyes siguen el modelo pedido: `slug, title, popularName, type, lawNumber, year, status, sanctionDate, summary, problem, keyChanges, beneficiaries, obligations, citizenTools, authorities, faq, officialDocument, pedagogicalSource, sources, tags, lastUpdated`, además de `publication`, `citizenMeaning`, `routes` y `almaRelevance`.

Los de los proyectos: `slug, title, type, projectNumber, legislature, status, chamber, stage, summary, objective, keyPoints, authors, timeline, documents, sources, lastUpdated`, además de `verified`, `whyItMatters`, `lastMovement`, `lastMovementDate` y `nextSteps`.

Si un dato no cumple el modelo (por ejemplo, una fecha mal escrita), el build falla y Netlify **no publica** el error: el sitio anterior sigue en línea.

## 10. SEO

- `title` y `meta description` únicos en cada página, URL canónica, Open Graph y Twitter Card (imagen `og-image.png` de 1200×630, editable).
- `sitemap-index.xml` automático y `robots.txt` dinámico que bloquea `/admin/`.
- Schema.org: `Organization` + `LocalBusiness` (Tenjo, Cundinamarca, sin dirección inventada), `WebSite`, `BreadcrumbList`, `Service` (experiencias), `Article` (Aprende), `Legislation` (cada ley), `FAQPage`, `Event` (agenda) e `ItemList`.
- URLs amigables en español: `/legislacion/ley-angel/`, `/experiencias/spa-y-grooming/`.
- Palabras clave trabajadas en los textos: club canino Tenjo, educación canina Tenjo, entrenamiento canino Cundinamarca, bienestar animal, actividades con perros, talleres para tutores, legislación animal Colombia y leyes de protección animal Colombia.

## 11. Configuración de Netlify

`netlify.toml` ya incluye:

- Build `npm run build` → carpeta `dist`, con Node 22.
- Encabezados de seguridad, caché larga para los recursos y `noindex` para `/admin/`.
- Redirecciones (`/blog` → `/aprende/`, `/leyes` → `/legislacion/`…).
- Imágenes optimizadas automáticamente con **Netlify Image CDN** (WebP/AVIF y tamaños responsivos), sin configuración adicional.
- La URL del sitio se toma automáticamente de Netlify (variable `URL`), así que el sitemap y las etiquetas canónicas se ajustan solos, también cuando conectes un dominio propio.

---

## 12. Paso a paso: subir el proyecto a GitHub

1. Crea una cuenta en [github.com](https://github.com) si aún no la tienes. Tu **nombre de usuario** es lo que aparece en `github.com/TU-USUARIO`.
2. Entra a [github.com/new](https://github.com/new) y crea un repositorio:
   - **Repository name:** `alma-canina`
   - **Private** ✅ (importante)
   - No marques «Add a README».
3. Descomprime el `.zip` del proyecto en tu computador.
4. **Antes de subirlo**, abre `public/admin/config.yml` con cualquier editor de texto y reemplaza `USUARIO-GITHUB` por tu usuario:
   ```yaml
   repo: maria-paz-ejemplo/alma-canina
   ```
5. Sube los archivos. Tienes dos opciones:
   - **Sin instalar nada:** en la página del repositorio vacío, haz clic en **«uploading an existing file»**, arrastra **todo el contenido** de la carpeta (no la carpeta en sí) y pulsa **Commit changes**. Si GitHub no acepta carpetas al arrastrar, usa GitHub Desktop.
   - **Con [GitHub Desktop](https://desktop.github.com):** *File → Add local repository*, elige la carpeta, *Publish repository* y deja marcada la opción **Keep this code private**.
   - **Con la terminal:**
     ```bash
     cd alma-canina
     git init && git add . && git commit -m "Sitio Alma Canina"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/alma-canina.git
     git push -u origin main
     ```

## 13. Paso a paso: desplegar en Netlify

1. Crea una cuenta en [netlify.com](https://app.netlify.com/signup) con **Sign up with GitHub**.
2. **Add new site → Import an existing project → GitHub**, autoriza el acceso y elige `alma-canina`.
3. Netlify detecta la configuración sola (build `npm run build`, publish `dist`). Pulsa **Deploy**.
4. En 1–2 minutos el sitio estará en línea en una dirección como `https://nombre-aleatorio.netlify.app`. Puedes cambiarla en **Site configuration → Change site name** (por ejemplo, `alma-canina`).
5. **Dominio propio (opcional):** *Domain management → Add a domain* y sigue las instrucciones de DNS. El HTTPS es gratuito y automático.
6. **Formulario:** en *Forms → Enable form detection*, activa la detección y vuelve a desplegar (*Deploys → Trigger deploy*). Para recibir los mensajes por correo: *Forms → Form notifications → Add notification → Email notification*, formulario `contacto`.

## 14. Paso a paso: crear únicamente tu usuario administrador

La edición está protegida por GitHub: **solo puede guardar cambios quien tenga permiso de escritura en el repositorio privado**. Si el repositorio es tuyo y no invitas a nadie, **solo tú puedes editar**. No hay registro público ni contraseñas adicionales que administrar.

### Opción A (recomendada): iniciar sesión con GitHub mediante el OAuth de Netlify

1. En GitHub ve a **Settings → Developer settings → OAuth Apps → New OAuth App** ([enlace directo](https://github.com/settings/applications/new)):
   - **Application name:** `Alma Canina Admin`
   - **Homepage URL:** la URL de tu sitio (por ejemplo, `https://alma-canina.netlify.app`)
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
2. Pulsa **Register application**, copia el **Client ID** y genera un **Client secret** (*Generate a new client secret*).
3. En Netlify ve a **Site configuration → Access & security → OAuth → Authentication providers → Install provider → GitHub**, pega el Client ID y el Client secret y guarda.
4. Entra a `https://tu-sitio.netlify.app/admin/` → **Sign In with GitHub** → autoriza. Ya estás dentro.

### Opción B (alternativa rápida): token de acceso personal

1. En `/admin/`, elige **Sign In Using Access Token**. El CMS te muestra un enlace a GitHub para crear un *fine-grained token*.
2. Limita el token **solo al repositorio `alma-canina`**, con permiso **Contents: Read and write**. Dale una fecha de vencimiento.
3. Pega el token en el CMS. Queda guardado solo en ese navegador. No compartas el token con nadie.

> **Seguridad:** no agregues colaboradores al repositorio a menos que quieras que también puedan editar. Para revocar un acceso, quítalo en *GitHub → Settings → Applications*.

## 15. Cómo editar la información sin código

1. Entra a `tu-sitio/admin/` e inicia sesión.
2. Elige la sección en el menú de la izquierda (por ejemplo, **⚙️ Configuración → Datos generales, contacto y redes**).
3. Edita los campos y pulsa **Save** (Guardar).
4. Cada vez que guardas, el CMS hace un *commit* en GitHub, Netlify reconstruye el sitio y **en 1–2 minutos** el cambio está publicado.

**Lo primero que conviene completar en ⚙️ Configuración:**

- **Contacto:** correo, teléfono y **WhatsApp** (con indicativo, por ejemplo `573001234567`). El botón flotante de WhatsApp aparece automáticamente cuando lo llenas.
- **Redes sociales:** enlaces completos. Los íconos aparecen solos en el pie de página y en Contacto.
- **Ubicación:** horarios, instrucciones para llegar, dirección (opcional), enlace del mapa y URL para insertar el mapa.
- **Datos legales:** responsable, NIT o cédula y correo para datos personales. Se muestran en las páginas legales.
- **Formulario:** opciones de «¿Qué te interesa?» y mensaje de confirmación.
- Cuando hayas subido tus fotos, **desactiva «Mostrar indicaciones Foto pendiente»**.

Para editar **precios y horarios**, ve a **🐾 Experiencias**, abre la experiencia y completa los campos *Precio* y *Horarios*. Si los dejas vacíos se muestra «Consúltanos».

## 16. Cómo añadir una ley

1. **⚖️ Legislación → New Ley.**
2. Completa como mínimo: *Nombre popular, Título oficial, Número oficial, Año, Estado, Fecha de sanción, Tema, ¿De qué trata?, ¿Qué problema busca solucionar?, Fuentes* y *Última actualización*.
3. Agrega lo que aplique: *¿Qué cambia?*, *Ruta práctica* (situación → pasos), *Autoridades*, *Preguntas frecuentes*, *Documento oficial* (botón «Consultar ley») y *Fuente pedagógica* (botón «Conocer material pedagógico»).
4. Elige los **Temas** para que aparezca en los filtros.
5. **Save.** La ficha aparecerá en `/legislacion/nombre-popular/`.

> Usa siempre fuentes oficiales (SUIN-Juriscol, Secretaría del Senado, Congreso). Si un dato no está confirmado, escribe «Pendiente de verificación».

## 17. Cómo cambiar el estado de un proyecto de ley

1. **📜 Proyectos de ley** → abre el proyecto.
2. Consulta el estado actual en el Senado o la Cámara.
3. Actualiza *Número actual, Legislatura, Estado* y la **Etapa legislativa** (Radicación → Comisión → Plenaria → Otra Cámara → Conciliación → Sanción). La etapa se resalta en la línea del trámite.
4. Escribe el *Último movimiento conocido* y su fecha, y agrega una fila a la *Cronología*.
5. Si lo verificaste en una fuente oficial, marca **«¿Estado verificado en fuente oficial?»** y agrega el enlace en *Fuentes oficiales*.
6. Cambia **Última actualización** a la fecha de hoy y pulsa **Save**.
7. **Si el proyecto se convierte en ley:** crea una ficha nueva en **⚖️ Legislación** y elimina o actualiza la del proyecto. Una ley vigente nunca debe quedar como «proyecto», ni al revés.

## 18. Cómo crear un evento

1. **📅 Agenda → New Evento.** También puedes duplicar la plantilla «Ejemplo: Jornada familiar» (está oculta como borrador).
2. Completa *Actividad, Fecha, Hora, Duración, Cupos, Precio (opcional), Ubicación, Perros permitidos, Resumen* y *Foto*.
3. Elige el **Estado**: *Próximamente · Inscripciones abiertas · Cupos agotados · Finalizado*.
4. Deja **Borrador** desmarcado y pulsa **Save**.
5. El evento aparece en Inicio, Experiencias y Comunidad. El botón **«Quiero participar»** abre el formulario con el evento ya escrito. Cuando la fecha pasa, el evento sale solo de la agenda.

> Consejo: si quieres que los eventos pasados salgan de la agenda aunque nadie edite el sitio, crea en Netlify un *Build hook* (*Site configuration → Build & deploy → Build hooks*) y prográmalo una vez al día con un servicio gratuito como cron-job.org.

## 19. Cómo sustituir fotografías

1. Abre la sección donde está la foto (por ejemplo, **🏠 Inicio → Página de inicio → Portada (hero) → Fotografía de portada**).
2. Haz clic en el campo de imagen → **Upload** → elige tu foto.
3. Escribe la **Descripción de la foto** (qué se ve; sirve para la accesibilidad y para Google).
4. **Save.** La ilustración de reemplazo desaparece y queda tu foto, optimizada automáticamente.

**Mapa de fotos que hay que subir:**

| Lugar | Dónde se edita |
|---|---|
| Portada (familias y perros en la naturaleza) y video opcional | Inicio → Portada |
| Tres capítulos de la historia | Inicio → Nuestra historia |
| ¿Quiénes somos? | Inicio → ¿Quiénes somos? |
| Tenjo (paisaje o video) | Inicio → Sección Tenjo |
| Una foto por cada experiencia | 🐾 Experiencias |
| Eventos | 📅 Agenda |
| Artículos | 📚 Aprende |
| Profesionales | 👥 Equipo |
| Galería y logos de aliados | 🐶 Comunidad |
| Imagen para compartir en redes (1200×630) | ⚙️ Configuración |

Recomendaciones: fotos horizontales de al menos 2000 px de ancho, en JPG y de menos de 3 MB. Usa solo fotos propias o con licencia comercial, nunca imágenes tomadas de otros sitios web.

## 20. Formulario de contacto

Usa **Netlify Forms** (gratis hasta 100 envíos al mes). Incluye protección antispam (*honeypot*), validación accesible, la autorización de tratamiento de datos obligatoria y la animación de éxito. Los mensajes se ven en *Netlify → Forms → contacto*. Configura el aviso por correo como se explica en el paso 13.6.

## 21. Trabajar en tu computador (opcional)

Requiere [Node.js 20 o superior](https://nodejs.org).

```bash
npm install        # instala dependencias (una sola vez)
npm run dev        # sitio local en http://localhost:4321
npm run build      # verifica tipos y genera /dist
```

Para editar el contenido de forma local, abre `http://localhost:4321/admin/` en Chrome o Edge y elige **Work with Local Repository**.

---

## Pendientes por completar antes de publicar

- [ ] Reemplazar `USUARIO-GITHUB` en `public/admin/config.yml`.
- [x] WhatsApp (+57 301 610 8885) e Instagram (@alma_caninaoficial) configurados.
- [ ] Correo, horarios y ubicación (⚙️ Configuración).
- [ ] Datos legales del responsable del tratamiento de datos, y revisión de las **tres páginas legales por un abogado** (hoy son plantillas marcadas como tales).
- [ ] Reemplazar las fotografías demo de Unsplash por fotos propias (ver `FOTOS-DEMO.md` y el paso 19).
- [ ] Logo definitivo (opcional).
- [ ] Precios y horarios de las experiencias (opcional).
- [ ] Equipo y testimonios reales (hoy hay plantillas ocultas como borrador).
- [ ] **Verificar en el Congreso** el estado actual de los seis proyectos de ley, sobre todo los números nuevos de Zoópolis y Proteccionistas (radicados en agosto de 2026).
- [ ] Verificar en una fuente oficial: la reglamentación de Esterilizar Salva (se reportó la Resolución 0229 de 2026), el reglamento técnico de la Ley Kiara, la Ruta Nacional de Atención al Maltrato Animal (Ley Ángel), los lineamientos de la Ley Empatía y los protocolos de la Ley 2404.

---

*Este contenido tiene fines pedagógicos e informativos y no sustituye asesoría jurídica profesional.*

Educamos · Conectamos · Transformamos 🐾
