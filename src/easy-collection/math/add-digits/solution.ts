export function addDigits(num: number): number {
  let result = num;
  while (num > 9) {
    let rest = Math.trunc(num / 10);
    const lastDigit = num % 10;
    num = rest;

    rest = Math.trunc(num / 10);
    const prevDigit = num % 10;
    result = lastDigit + prevDigit;
    num = rest * 10 + result;
  }
  return result;
}
