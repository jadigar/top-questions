/* eslint-disable @typescript-eslint/no-unnecessary-condition */
// Sort solution
// export function containsDuplicate(nums: number[]): boolean {
//   nums.sort();
//   for (let index = 0; index < nums.length - 1; index++) {
//     if (nums[index] === nums[index + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// Set solution
export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}

// export function containsDuplicate(nums: number[]): boolean {
//   const set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) return true;
//     set.add(nums[i]);
//   }
//   return false;
// }
