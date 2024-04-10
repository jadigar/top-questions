export function numSubarraysWithSum(nums: number[], goal: number): number {
  const prefixSumCount = new Map<number, number>();
  let prefixSum = 0;
  prefixSumCount.set(0, 1);
  let result = 0;
  for (const num of nums) {
    prefixSum += num;
    if (prefixSumCount.has(prefixSum - goal)) {
      result += prefixSumCount.get(prefixSum - goal)!;
    }
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) ?? 0) + 1);
  }
  return result;
}
