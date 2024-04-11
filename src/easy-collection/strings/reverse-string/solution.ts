/**
 Do not return anything, modify s in-place instead.
 */
// export function reverseString(s: string[]): void {
//   for (let i = 0; i < s.length / 2; i++) {
//     const temp = s[i];
//     s[i] = s[s.length - 1 - i];
//     s[s.length - 1 - i] = temp;
//   }
// }

export function reverseString(s: string[]): void {
  let i = 0;
  let l = s.length - 1;
  while (i <= l) {
    const temp = s[i];
    s[i] = s[l];
    s[l] = temp;
    i += 1;
    l -= 1;
  }
}

// #TODO: need fix
// export function reverseString(s: string[]): void {
//   let i = 0;
//   let l = s.length - 1;
//   while (--l) {
//     const temp = s[i];
//     s[i] = s[l];
//     s[l] = temp;
//     i += 1;
//   }
// }
