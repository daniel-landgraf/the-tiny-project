import { RenderFn } from './html';

export abstract class WebComponentBase extends HTMLElement {
  private state = new Map<string, any>();

  protected windowPropName: string;

  constructor() {
    super();

    this.windowPropName = `${this.tagName}-${
      Math.random().toString().split('.')[1]
    }`;
    window[this.windowPropName] = this;

    this.attachShadow({ mode: 'open' });

    this.refresh();
  }

  onInit() {}
  onDestroy() {}

  render(): RenderFn {
    return (_) => '';
  }

  styles(): string {
    return '';
  }

  getState(key: string) {
    return this.state.get(key);
  }

  setState(key: string, value: any) {
    const oldValue = this.getState(key);
    console.log(
      this.tagName,
      'setting state',
      key.toUpperCase(),
      'from',
      oldValue,
      'to',
      value
    );

    this.state.set(key, value);

    this.refresh();
  }

  emitEvent<T>(type: string, detail: T) {
    const event = new CustomEvent(type, { detail });
    this.dispatchEvent(event);

    const attributeName = 'on' + type;
    const eventMethod = this[attributeName];

    if (eventMethod) {
      eventMethod();
    } else {
      eval(this.getAttribute(attributeName));
    }
  }

  private connectedCallback() {
    if (this.isConnected) {
      console.log(this.tagName, 'connected');

      this.onInit();
    }
  }

  private disconnectedCallback() {
    console.log(this.tagName, 'disconnected');

    this.onDestroy();
  }

  private attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log(
      this.tagName,
      'changed attribute',
      name.toUpperCase(),
      'from',
      oldValue,
      'to',
      newValue
    );

    this.refresh();
  }

  private refresh() {
    const renderFn = this.render();
    this.shadowRoot.innerHTML = renderFn(this.windowPropName);

    const style = document.createElement('style');
    style.innerText = this.styles();
    this.shadowRoot.appendChild(style);
  }
}
