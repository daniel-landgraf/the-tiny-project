import { WebComponentBase } from './web-component-base';

export function State() {
  return (target: any, propertyKey: string) => {
    return {
      get: function (this: WebComponentBase) {
        return this.getState(propertyKey);
      },
      set: function (this: WebComponentBase, value: any) {
        this.setState(propertyKey, value);
      },
    } as any;
  };
}
