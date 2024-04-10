export function findDuplicate(nums: number[]): number {
  while (nums[0] !== nums[nums[0]]) {
    const tmp = nums[nums[0]];
    nums[nums[0]] = nums[0];
    nums[0] = tmp;
  }
  return nums[0];
}
