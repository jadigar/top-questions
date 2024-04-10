export function missingNumber(nums: number[]): number {
  const gaussSum = (nums.length * (nums.length + 1)) / 2;
  const actualSum = nums.reduce((p, c) => p + c);
  return gaussSum - actualSum;
}
