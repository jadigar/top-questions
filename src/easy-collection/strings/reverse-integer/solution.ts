export function reverse(x: number): number {
  let reverse = x % 10;
  x = Math.trunc(x / 10);
  while (x !== 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return reverse > 2 ** 31 - 1 || reverse < (-2) ** 31
    ? 0
    : reverse;
}
