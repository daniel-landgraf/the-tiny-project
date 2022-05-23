import { CustomElement, html, WebComponentBase } from '../the-tiny-project';

@CustomElement('hello-child')
export class HelloChild extends WebComponentBase {
  render() {
    return html`<button onclick="${this.onAdd}">Add 1</button>`;
  }

  private onAdd(ev: PointerEvent) {
    this.emitEvent('increaseAmount', { by: 1 });
  }
}
