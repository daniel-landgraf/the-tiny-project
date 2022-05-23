export function CustomElement(tag: string) {
  return (target: any) => {
    customElements.define(tag, target);
  };
}
