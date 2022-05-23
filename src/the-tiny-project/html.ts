export type RenderFn = (componentWindowPropName: string) => string;

export function html(
  strings: TemplateStringsArray,
  ...expressions: any[]
): RenderFn {
  return (componentWindowPropName) => {
    let result = strings[0];

    for (let i = 0; i < expressions.length; i++) {
      const expression = expressions[i];
      if (typeof expression === 'function') {
        result += `window['${componentWindowPropName}'].${expression.name}(event)`;
      } else {
        result += expression;
      }

      result += strings[i + 1];
    }

    return result;
  };
}
