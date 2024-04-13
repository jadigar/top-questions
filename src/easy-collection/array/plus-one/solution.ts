/* eslint-disable no-param-reassign */
// export function plusOne(digits: number[]): number[] {
//   let lastIndex = digits.length - 1;
//   while (digits[lastIndex] === 9) {
//     digits[lastIndex] = 0;
//     if (lastIndex !== 0) {
//       lastIndex--;
//     } else if (lastIndex === 0) {
//       digits.unshift(0);
//     }
//   }
//   digits[lastIndex]++;
//   return digits;
// }

export function plusOne(digits: number[]): number[] {
  let l = digits.length;
  while (l--) {
    const digit = digits[l];
    if (digit === 9) {
      digits[l] = 0;
      if (!l) { digits.unshift(1); }
    } else {
      digits[l] = digit + 1;
      break;
    }
  }
  return digits;
}
