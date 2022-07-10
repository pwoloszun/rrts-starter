export function delayValue<T>(value: T, ms: number): Promise<T> {
  return new Promise((resolveFn) => {
    setTimeout(() => {
      resolveFn(value);
    }, ms);
  });
}
