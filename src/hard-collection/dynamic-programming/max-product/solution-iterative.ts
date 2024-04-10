export function maxProduct(nums: number[]): number {
  if (nums.length == 0) return 0;

  let max = nums[0];
  let min = nums[0];
  let result = max;

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const maxProd = max * curr;
    const minProd = min * curr;
    max = Math.max(curr, maxProd, minProd);
    min = Math.min(curr, maxProd, minProd);

    result = Math.max(max, result);
  }

  return result;
}
