export function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);
  const first = nums.indexOf(target);
  const last = nums.lastIndexOf(target);
  const result: number[] = [];
  if (first === -1) {
    return [];
  }
  for (let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
}
