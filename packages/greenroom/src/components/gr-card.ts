import { define } from "../lib/register";

/**
 * <gr-card> — compact ANSI-styled card
 * Slots:
 * - default: content
 * - header: header area (optional)
 */
export class GRCard extends HTMLElement {
  static tag = "gr-card";
  private root: ShadowRoot;

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  private render() {
    this.root.innerHTML = `
      <link rel="stylesheet" href="./tokens.css">
      <style>
        :host{ display:block; }
        .card{ background:var(--gr-surface); color:var(--gr-text); border:1px solid var(--gr-border); border-radius:var(--gr-radius); padding:12px; }
        .header{ display:flex; align-items:center; gap:8px; margin-bottom:8px; color:var(--gr-text-dim); font-weight:600; text-transform:uppercase; letter-spacing:.04em; font-size:12px; }
      </style>
      <div class="card">
        <div class="header"><slot name="header"></slot></div>
        <slot></slot>
      </div>
    `;
  }
}

define(GRCard.tag, GRCard);
