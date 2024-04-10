export function findArray(pref: number[]): number[] {
  let prev = 0;
  const result: number[] = [];
  for (let i = 0; i < pref.length; i++) {
    result[i] = pref[i] ^ prev;
    prev = pref[i];
  }
  return result;
}
