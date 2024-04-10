export function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number,
): string[] {
  const result: string[] = [];
  let prev = lower - 1;
  for (let i = 0; i <= nums.length; i++) {
    const curr = i < nums.length ? nums[i] : upper + 1;
    if (prev + 1 <= curr - 1) {
      result.push(formatRange(prev + 1, curr - 1));
    }
    prev = curr;
  }
  return result;
}

function formatRange(lower: number, higher: number): string {
  return lower === higher ? `${lower}` : `${lower}->${higher}`;
}
