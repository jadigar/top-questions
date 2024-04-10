export function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } if (nums[mid] >= nums[start]) {
      // the left side from the mid is not rotated
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // the right side from the mid is not rotated
      if (nums[end] >= target && target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}
