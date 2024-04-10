export function findMatrix(nums: number[]): number[][] {
  const frequencyMap = new Map<number, number>();
  const result: number[][] = [];
  for (const num of nums) {
    if (!frequencyMap.has(num)) {
      frequencyMap.set(num, 0);
    }
    const bucketIndex = frequencyMap.get(num)!;
    if (bucketIndex >= result.length) {
      result.push([]);
    }
    frequencyMap.set(num, bucketIndex + 1);
    result[bucketIndex].push(num);
  }
  return result;
}
