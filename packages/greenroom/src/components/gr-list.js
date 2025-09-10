import { define } from "../lib/register.js";

export class GRList extends HTMLElement {
  static tag = "gr-list";
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const density = this.getAttribute("density") || "compact";
    const pad = density === "comfortable" ? 10 : 6;
    this.root.innerHTML = `
      <link rel="stylesheet" href="/packages/greenroom/dist/tokens.css">
      <style>
        :host{ display:block; }
        ul{ list-style:none; margin:0; padding:0; }
        li{ display:flex; gap:8px; align-items:center; padding:${pad}px 8px; border-bottom:1px solid var(--gr-border); }
        li:last-child{ border-bottom:none; }
        .bullet{ width:6px; height:6px; border-radius:999px; background:var(--gr-accent); box-shadow:0 0 0 2px color-mix(in oklab, var(--gr-accent) 30%, transparent); }
        .text{ flex:1; }
        .muted{ color:var(--gr-text-dim); font-size:12px; }
      </style>
      <ul>
        <slot></slot>
      </ul>`;
  }
}

define(GRList.tag, GRList);
