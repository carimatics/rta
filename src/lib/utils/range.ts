export function range<T extends number>(begin: T, end: T): T[] {
  return [...Array(end - begin)].map((_, i) => begin + i) as T[];
}

export function closedRange<T extends number>(first: T, last: T): T[] {
  return [...Array(last - first + 1)].map((_, i) => first + i) as T[];
}

export function clamp<T extends number>(value: T, min: T, max: T): T {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
