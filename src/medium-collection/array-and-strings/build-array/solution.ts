export function buildArray(target: number[], n: number): string[] {
  const result: ('Pop' | 'Push')[] = [];
  let targetIndex = 0;
  let num = 1;
  while (targetIndex < target.length) {
    result.push('Push');
    if (target[targetIndex] === num) {
      targetIndex++;
    } else {
      result.push('Pop');
    }
    num++;
  }
  return result;
}
