# GreenRoom

Terminal-first UI components for web dashboards.

## Concepts

- **ANSI-inspired palettes**: Uses terminal-like color tokens with CSS variables
- **Compact components**: Cards, lists, gauges designed for dense dashboards
- **Dark/light adaptable**: Automatic via `prefers-color-scheme`

## Install

```
npm i @greenroom/ui
```

## Usage (no build)

Include the CSS tokens and the JS bundle:

```html
<link rel="stylesheet" href="/packages/greenroom/dist/tokens.css" />
<script type="module" src="/packages/greenroom/dist/index.js"></script>
```

Then use Web Components:

```html
<gr-card>
  <span slot="header">Status</span>
  <gr-list>
    <li>
      <span class="bullet"></span><span class="text">Nodes</span
      ><span class="gr-muted">12</span>
    </li>
  </gr-list>
  <gr-gauge value="64">Load</gr-gauge>
</gr-card>
```

## Roadmap

- **Cards, lists, gauges**: initial set
- **Tables & log views**: with horizontal scroll and ANSI color tagging
- **Graph widgets**: sparkline, mini-bar, capacity rings
- **Themes**: additional palettes (Solarized/Monokai-like)
