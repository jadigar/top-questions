/* eslint-disable no-restricted-syntax */
// export function intersect(nums1: number[], nums2: number[]): number[] {
//   const result = [];
//   const [smaller, bigger] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];
//   smaller.sort((a, b) => a - b);
//   bigger.sort((a, b) => a - b);
//   for (let i = 0, k = 0; i < smaller.length; i++) {
//     const idx = bigger.indexOf(smaller[i], k);
//     if (idx !== -1) {
//       result.push(smaller[i]);
//       k = idx + 1;
//     }
//   }

//   return result;
// }

// export function intersect(nums1: number[], nums2: number[]): number[] {
//   const [smaller, bigger] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1];
//   const smallerMap = smaller.reduce((prev, current) => {
//     prev.set(current, (prev.get(current) ?? 0) + 1);
//     return prev;
//   }, new Map<number, number>());

//   const inter: number[] = [];
//   bigger.forEach((value) => {
//     const count = smallerMap.get(value) ?? 0;
//     if (count) {
//       inter.push(value);
//       smallerMap.set(value, count - 1);
//     }
//   });
//   return inter;
// }

export function intersect(nums1: number[], nums2: number[]): number[] {
  const numMap: Record<number, number> = {};
  for (const num of nums1) {
    numMap[num] = (numMap[num] || 0) + 1;
  }
  const result: number[] = [];
  for (const num of nums2) {
    if (numMap[num] > 0) {
      result.push(num);
      numMap[num]--;
    }
  }
  return result;
}
