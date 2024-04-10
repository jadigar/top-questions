export function merge(intervals: number[][]): number[][] {
  if (intervals.length === 1) {
    return intervals;
  }
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  let [left, right] = sortedIntervals[0];
  for (let i = 1; i < sortedIntervals.length; i++) {
    const [nextLeft, nextRight] = sortedIntervals[i];
    if (nextLeft <= right && nextRight > right) {
      right = nextRight;
    } else if (nextLeft > right) {
      result.push([left, right]);
      left = nextLeft;
      right = nextRight;
    }
  }
  result.push([left, right]);
  return result;
}
