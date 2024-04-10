export function countNicePairs(nums: number[]): number {
  const mod = 1e9 + 7;
  let result = 0;
  const reversedMap = new Map<number, number>();
  const frequencyMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (!reversedMap.has(nums[i])) {
      reversedMap.set(nums[i], rev(nums[i]));
    }
    const diff = nums[i] - reversedMap.get(nums[i])!;
    if (!frequencyMap.has(diff)) {
      frequencyMap.set(diff, 0);
    }
    result = (result + frequencyMap.get(diff)!) % mod;
    frequencyMap.set(diff, frequencyMap.get(diff)! + 1);
  }
  return result;
}

function rev(num: number): number {
  let result = 0;
  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}
