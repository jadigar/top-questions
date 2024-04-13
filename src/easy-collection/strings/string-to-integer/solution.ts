// export function myAtoi(s: string): number {
//   let sign = '';
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ' && !sign.length) {
//       continue;
//     }
//     if (sign.length === 0) {
//       if (s[i] === '-' || s[i] === '+') {
//         sign = s[i];
//         continue;
//       }
//       sign = '+';
//     }
//     if (
//       s.charCodeAt(i) >= '0'.charCodeAt(0)
//       && s.charCodeAt(i) <= '9'.charCodeAt(0)
//     ) {
//       if (result === 0) {
//         result = parseInt(s[i]);
//         continue;
//       }
//       result = result * 10 + parseInt(s[i]);
//     } else {
//       break;
//     }
//   }
//   result = sign === '-' ? result * -1 : result;
//   if (result > 2147483647) {
//     result = 2147483647;
//   }
//   if (result < -2147483648) {
//     result = -2147483648;
//   }
//   return result;
// }

// function myAtoi(s: string): number {
//   let res = 0;
//   let sign = '';
//   let hasDigit = false;

//   for (let i = 0; i < s.length; ++i) {
//     const char = s[i];
//     const charCode = char.charCodeAt(0);

//     if (char === ' ' && !hasDigit && !sign) {
//       continue;
//     }

//     if (charCode >= 48 && charCode <= 57) {
//       res = res * 10 + charCode - '0'.charCodeAt(0);
//       hasDigit = true;
//     } else if (char === '+' || char === '-') {
//       if (sign || hasDigit) break;
//       sign = char;
//     } else {
//       if (!hasDigit) return 0;
//       break;
//     }
//   }

//   res = sign === '-' ? -res : res;

//   if (res > 2147483647) {
//     return 2147483647;
//   }
//   if (res < -2147483648) {
//     return -2147483648;
//   }

//   return res;
// }

const ZERO_CHAR_CODE = '0'.charCodeAt(0);

export function myAtoi(s: string): number {
  let res = 0;
  let sign = 1;
  let i = 0;

  while (s[i] === ' ') {
    i++;
  }

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  while (i < s.length) {
    const charCode = s[i].charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      break;
    }
    res = res * 10 + (charCode - ZERO_CHAR_CODE);
    i++;
  }

  res *= sign;

  if (res > 2147483647) {
    return 2147483647;
  }
  if (res < -2147483648) {
    return -2147483648;
  }

  return res;
}
