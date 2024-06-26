// export function isPalindrome(s: string): boolean {
//   const isAlphaNumeric = /[a-zA-Z0-9]/;
//   let li = 0;
//   let ri = s.length - 1;

//   while (li <= ri) {
//     if (!isAlphaNumeric.test(s[li])) {
//       li++;
//       continue;
//     }
//     if (!isAlphaNumeric.test(s[ri])) {
//       ri--;
//       continue;
//     }
//     if (s[li].toLowerCase() !== s[ri].toLowerCase()) {
//       return false;
//     }
//     li++;
//     ri--;
//   }
//   return true;
// }

export function isPalindrome(s: string): boolean {
  const v = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  return [...v].reverse().join('') === v;
}
