import { maxProfit } from './solution';

it('should find profit [7,1,5,3,6,4]', () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const profit = maxProfit(prices);
  expect(profit).toBe(7);
});

it('should find profit [1,2,3,4,5]', () => {
  const prices = [1, 2, 3, 4, 5];
  const profit = maxProfit(prices);
  expect(profit).toBe(4);
});

it('should find profit [7,6,4,3,1]', () => {
  const prices = [7, 6, 4, 3, 1];
  const profit = maxProfit(prices);
  expect(profit).toBe(0);
});
