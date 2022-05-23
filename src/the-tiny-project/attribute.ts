export function Attribute() {
  return (target: any, propertyKey: string) => {
    const observedAttrs = target.constructor.observedAttributes || [];
    target.constructor.observedAttributes = [...observedAttrs, propertyKey];

    return {
      get: function (this: HTMLElement) {
        try {
          return JSON.parse(this.getAttribute(propertyKey));
        } catch {
          return this.getAttribute(propertyKey);
        }
      },
      set: function (this: HTMLElement, value: any) {
        this.setAttribute(propertyKey, value);
      },
    } as any;
  };
}
