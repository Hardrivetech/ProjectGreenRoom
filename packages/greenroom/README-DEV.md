# GreenRoom Dev Notes

- Vanilla Web Components with CSS variables for ANSI theme.
- No bundler required for demo; library can be published after `tsc` and copying CSS.

## Build steps

1. Ensure Node 18+ and npm.
2. From `packages/greenroom`: `npm install` (only TypeScript dev dep).
3. `npm run build` -> outputs JS/DTs in `dist` and copies `tokens.css`.

## File layout

- `src/styles/tokens.css` — design tokens
- `src/components/*` — elements
- `src/lib/register*.{ts,js}` — helpers and side-effect registration
- `dist/` — built output for consumers

## Roadmap fit

- Cards, lists, gauges implemented.
- Light/dark via prefers-color-scheme in tokens.
