export function subsets(nums: number[]): number[][] {
  const item = nums.shift();
  if (item === undefined) {
    return [[]];
  }
  const result = subsets(nums);
  const { length } = result;
  for (let i = 0; i < length; i++) {
    result.push([item, ...result[i]]);
  }
  return result;
}
