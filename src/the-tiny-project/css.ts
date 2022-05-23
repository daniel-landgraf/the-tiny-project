export function css(strings: TemplateStringsArray, ...expressions: any[]) {
  let result = strings[0];

  for (let i = 0; i < expressions.length; i++) {
    result += expressions[i];
    result += strings[i + 1];
  }

  return result;
}
