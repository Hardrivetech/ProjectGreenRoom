import { define } from "../lib/register.js";

export class GRGauge extends HTMLElement {
  static tag = "gr-gauge";
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["value"];
  }
  attributeChangedCallback() {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  clamp(n) {
    return Math.max(0, Math.min(100, n));
  }
  render() {
    const value = this.clamp(parseFloat(this.getAttribute("value") || "0"));
    this.root.innerHTML = `
      <link rel="stylesheet" href="/packages/greenroom/dist/tokens.css">
      <style>
        :host{ display:block; }
        .wrap{ background:var(--gr-surface-alt); border:1px solid var(--gr-border); border-radius:var(--gr-radius); height:10px; overflow:hidden; }
        .bar{ height:100%; width:${value}%; background:linear-gradient(90deg, var(--gr-green), var(--gr-cyan)); }
        .label{ margin-top:6px; color:var(--gr-text-dim); font-size:12px; }
      </style>
      <div class="wrap" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}">
        <div class="bar"></div>
      </div>
      <div class="label"><slot>${value}%</slot></div>`;
  }
}

define(GRGauge.tag, GRGauge);
