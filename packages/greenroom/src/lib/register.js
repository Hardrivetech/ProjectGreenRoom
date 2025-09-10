export function define(tag, ctor) {
  if (!customElements.get(tag)) customElements.define(tag, ctor);
}
