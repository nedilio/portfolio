# nedilio.dev — Identidad de marca

Guía de marca de nedilio.dev (Nelson Izquierdo, Desarrollador Web Frontend · Full-Stack).
Este paquete trae los assets y tokens listos para el sitio en Astro + Tailwind.
Cualquier pantalla o componente nuevo debe seguir esta guía.

## El logo

Una **N dentro de una pantalla, apoyada sobre un cursor verde lima**.
- La N es la inicial de Nelson y de nedilio.
- La pantalla representa lo que construyo: interfaces.
- La base del monitor es a la vez el cursor de una terminal. **Siempre va en lima**, y es el único punto de color.

Wordmark: `nedilio` + `.` + `dev`, en Inter Tight 600 con interletrado −0.045em.
El punto va en el color de acento y `dev` en el color secundario.

| Archivo | Uso |
|---|---|
| `logo/nedilio-logo-on-dark.svg` / `-on-light.svg` | Logo horizontal principal (nav, footer, firmas) |
| `logo/nedilio-logo-stacked-*.svg` | Apilado, para espacios cuadrados |
| `logo/nedilio-mark-*.svg` | Solo el símbolo: `on-dark`, `on-light`, `on-lime`, `mono-ink`, `mono-white` |
| `logo/nedilio-wordmark-*.svg` | Solo el texto |
| `icons/icon.svg` | Icono cuadrado (el cursor entra a la pantalla): favicon y app |
| `snippets/Logo.astro` | Componente inline que cambia solo según el tema (usa los tokens semánticos) |

El texto de todos los SVG está convertido a trazos: no dependen de fuentes instaladas.

### Reglas del logo
- Zona de respeto: deja libre alrededor del logo, como mínimo, el ancho de la base verde.
- Tamaño mínimo del logo completo: 24 px de alto. Por debajo de eso, usa `icons/icon.svg`.
- No cambiar el color del cursor, no girar ni deformar, no añadir sombras, degradados ni contornos, y no separar la base de la pantalla.

## Color

| Token | Hex | Uso |
|---|---|---|
| `lime` | `#BEF264` | Acento: cursor, punto final, botón principal, indicador "disponible". **Máximo 10% de una pieza.** |
| `ink` | `#121611` | Fondo oscuro; texto sobre claro |
| `ink-deep` | `#0B0D0A` | Superficie sobre fondo oscuro |
| `ink-line` | `#2C3229` | Bordes en oscuro |
| `cream` | `#F4F5EE` | Fondo claro; texto sobre oscuro |
| `fog` | `#E6E8DE` | Superficie secundaria en claro |
| `line` | `#DDE0D4` | Bordes en claro |
| `moss` | `#4D7C0F` | Acento como texto/icono sobre fondo claro |
| `stone` | `#A3A89B` | Texto secundario sobre oscuro |
| `stone-dark` | `#5B6156` | Texto secundario sobre claro |

**Contraste:** el lima nunca se usa como color de texto sobre fondo claro (no pasa el contraste). En modo claro, el acento en texto es `moss`. El texto sobre un fondo lima siempre es `ink`.

Tokens semánticos (en `tokens/brand.css`): `--bg`, `--surface`, `--fg`, `--muted`, `--border`, `--accent`, `--accent-fg`, `--accent-text`.
Cambian solos con `.dark` / `data-theme="dark"` en `<html>` o según la preferencia del sistema. Usa estos en los componentes antes que los hex directos.

## Tipografía

| Rol | Fuente | Detalle |
|---|---|---|
| Títulos y wordmark | **Inter Tight 600** | Interletrado −0.04em a −0.045em en titulares; −0.03em en h2/h3. Interlineado 1.0–1.1 |
| Texto | **Inter 400/500** | Interlineado 1.55 |
| Etiquetas y código | **JetBrains Mono 500** | Etiquetas en MAYÚSCULAS, interletrado +0.12em |

Patrón de titular: la segunda idea va en el color secundario y termina con un punto en acento.
Ej.: `Construyo interfaces <muted>rápidas, accesibles</muted> y con buen gusto<accent>.</accent>`

Para instalar las fuentes: `pnpm add @fontsource-variable/inter @fontsource-variable/inter-tight @fontsource/jetbrains-mono` (o usar Google Fonts).

## Forma
- Tarjetas: radio 28 px (`rounded-card`). Paneles: 20 px (`rounded-panel`). Botones, chips y etiquetas: píldora (`rounded-pill`).
- Sin sombras pesadas ni degradados en los componentes; el fondo puede llevar la cuadrícula sutil y los brillos difusos que ya tiene el sitio.
- Iconos de trazo (estilo Lucide), nunca emoji.

## Imágenes para compartir
`og/og-es.png` y `og/og-en.png` (1200×630) reemplazan a las `og-es.png` / `og-en.png` actuales del sitio.

---

## Tarea de integración (para Claude Code)

1. Copia `icons/*` (favicon.ico, favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png, icon-maskable-512.png, site.webmanifest) y `og/*.png` a `public/`, reemplazando los que existan con el mismo nombre.
2. Copia `logo/` a `public/brand/logo/` para usarlo como archivo estático.
3. Copia `tokens/brand.css` junto al CSS global e impórtalo justo después de `@import "tailwindcss";`. Revisa los colores y radios que ya están en el CSS del sitio y reemplázalos por estos tokens si son equivalentes, sin cambiar el aspecto actual.
4. Copia `snippets/Logo.astro` a `src/components/Logo.astro` y reemplaza el texto "Nelson." del navbar por `<Logo size={28} />`. Mantén el enlace a `/` y agrega `aria-label="nedilio.dev — inicio"`.
5. Agrega las etiquetas de `snippets/BaseHead-icons.astro` al `<head>` del layout, eliminando duplicados (favicon, theme-color, og:image).
6. Comprueba que `astro build` funcione y que el navbar se vea bien en modo claro, en modo oscuro y en móvil.
