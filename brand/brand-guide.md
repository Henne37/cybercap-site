# CyberCap — Starter Brand Guide

Lightweight starter identity to launch with. Upgrade later if you commission a designer.

## Logo files
- `logo-full.svg` — mark + wordmark, for light backgrounds (primary).
- `logo-full-inverse.svg` — for dark backgrounds (e.g. footer, hero band).
- `logo-mark.svg` — icon only, for favicon, social avatar, app icon.

**Clear space:** keep padding around the logo at least the height of the shield's node dot.
**Minimum width:** don't render the full logo below ~120px wide; use the mark alone instead.

## Color palette
| Role | Name | Hex |
|---|---|---|
| Primary / text / dark sections | Ink Navy | `#0A2540` |
| Accent / CTAs / highlights | Teal Accent | `#17B6A7` |
| Links / secondary actions | Link Blue | `#1E6FD9` |
| Body secondary text | Slate | `#5B7083` |
| Page background | Mist BG | `#F5F8FA` |
| Surfaces / cards | White | `#FFFFFF` |
| Borders / dividers | Cloud | `#E1E8ED` |

Usage: navy for headings and the dark hero/footer; teal reserved for primary CTAs and accents (don't overuse it); white/mist for page surfaces.

## Typography (web)
- **Headings:** a geometric/humanist sans — e.g. **Inter** or **Plus Jakarta Sans** (free, Google Fonts), bold (700).
- **Body:** same family, regular (400) / medium (500), ~16–18px.
- The SVG wordmark currently uses a system-font stack so it renders everywhere. For a fully portable logo file, outline the text to paths in a vector tool (Illustrator/Inkscape) before sending to print vendors.

## Favicon
Generate `favicon.ico` / PNGs from `logo-mark.svg` (any favicon generator). I can produce these during the build.

## Notes
- SVG is resolution-independent — scales crisply at any size.
- If you later want a PNG/transparent export for slides or email signatures, I can generate those too.
