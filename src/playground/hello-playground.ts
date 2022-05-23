import {
  Attribute,
  css,
  CustomElement,
  html,
  State,
  WebComponentBase,
} from '../the-tiny-project';

@CustomElement('hello-playground')
export class HelloPlayground extends WebComponentBase {
  @Attribute() text: string;

  @State() amount: number;

  onInit(): void {
    this.amount = 2;
    setTimeout(() => {
      this.amount = 3;
    }, 2000);
  }

  render() {
    return html`
      <p>${this.text}</p>
      <span>${this.amount} is a ${typeof this.amount}</span>
      <hello-child onIncreaseAmount=${this.increaseAmount}></hello-child>
    `;
  }

  styles() {
    return css`
      :host {
        display: block;
        background-color: lightgray;
      }
    `;
  }

  private increaseAmount(ev: CustomEvent<{ by: number }>) {
    this.amount += ev.detail.by;
  }
}
