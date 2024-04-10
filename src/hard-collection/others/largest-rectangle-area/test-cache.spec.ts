import { largestRectangleArea } from './solution-cache';

it('largestRectangleArea should return 10 for heights = [2,1,5,6,2,3]', () => {
  const heights = [2, 1, 5, 6, 2, 3];
  const result = largestRectangleArea(heights);
  expect(result).toEqual(10);
});

it('largestRectangleArea should return 4 for heights = [2,4]', () => {
  const heights = [2, 4];
  const result = largestRectangleArea(heights);
  expect(result).toEqual(4);
});

it('largestRectangleArea should pass test with equal heights in time', () => {
  const heights: number[] = [];
  for (let i = 0; i < 50000; i++) {
    heights.push(42);
  }
  const passTime = countPassTime(() => {
    const result = largestRectangleArea(heights);
    expect(result).toEqual(2100000);
  });
  expect(passTime).toBeLessThan(100);
});

function countPassTime(test: () => void): number {
  const startTime = new Date().getTime();
  test();
  const endTime = new Date().getTime();
  const timeDiff = endTime - startTime;
  return timeDiff;
}
