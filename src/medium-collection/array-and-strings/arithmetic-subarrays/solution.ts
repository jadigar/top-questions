export function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[],
): boolean[] {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    const slice = nums.slice(l[i], r[i] + 1);
    slice.sort((a, b) => a - b);
    result.push(isArrayArithmetic(slice));
  }
  return result;
}

function isArrayArithmetic(nums: number[]): boolean {
  if (nums.length < 2) {
    return false;
  }
  const diff = nums[1] - nums[0];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] !== diff) {
      return false;
    }
  }
  return true;
}
