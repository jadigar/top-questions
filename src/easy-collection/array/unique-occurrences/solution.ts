export function uniqueOccurrences(arr: number[]): boolean {
  const numCount = new Map<number, number>();
  for (const num of arr) {
    numCount.set(num, (numCount.get(num) ?? 0) + 1);
  }
  const countSet = new Set<number>();
  for (const count of numCount.values()) {
    if (countSet.has(count)) {
      return false;
    }
    countSet.add(count);
  }
  return true;
}
