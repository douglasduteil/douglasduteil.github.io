//

export function stateFrom(value, stateConstructor) {
  const { cache } = stateFrom;
  return cache.has(value)
    ? cache.get(value)
    : cache.set(value, stateConstructor());
}
stateFrom.cache = new Map();
