export function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let lastIndex = n - 1;
  const result = new Array(n);
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[lastIndex] = nums[left] ** 2;
      left++;
    } else {
      result[lastIndex] = nums[right] ** 2;
      right--;
    }
    lastIndex--;
  }
  return result;
}
