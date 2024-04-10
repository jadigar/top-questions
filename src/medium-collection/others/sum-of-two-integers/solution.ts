export function getSum(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  // ensure that abs(a) >= abs(b)
  if (x < y) {
    return getSum(b, a);
  }

  // abs(a) >= abs(b) -->
  // a determines the sign
  const sign = a > 0 ? 1 : -1;

  if (a * b >= 0) {
    // sum of two positive integers x + y
    // where x > y
    while (y !== 0) {
      const answer = x ^ y;
      const carry = (x & y) << 1;
      x = answer;
      y = carry;
    }
  } else {
    // difference of two positive integers x - y
    // where x > y
    while (y !== 0) {
      const answer = x ^ y;
      const borrow = (~x & y) << 1;
      x = answer;
      y = borrow;
    }
  }
  return x * sign;
}
