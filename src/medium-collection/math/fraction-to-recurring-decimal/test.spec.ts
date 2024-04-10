import { fractionToDecimal } from './solution';

it('fractionToDecimal should return 0.5 for numerator = 1, denominator = 2', () => {
  const numerator = 1;
  const denominator = 2;
  expect(fractionToDecimal(numerator, denominator)).toBe('0.5');
});

it('fractionToDecimal should return 2 for numerator = 2, denominator = 1', () => {
  const numerator = 2;
  const denominator = 1;
  expect(fractionToDecimal(numerator, denominator)).toBe('2');
});

it('fractionToDecimal should return 0.(012) for numerator = 4, denominator = 333', () => {
  const numerator = 4;
  const denominator = 333;
  expect(fractionToDecimal(numerator, denominator)).toBe('0.(012)');
});

it('fractionToDecimal should return -6.25 for numerator = -50, denominator = 8', () => {
  const numerator = -50;
  const denominator = 8;
  expect(fractionToDecimal(numerator, denominator)).toBe('-6.25');
});

it('fractionToDecimal should return 6.25 for numerator = -50, denominator = -8', () => {
  const numerator = -50;
  const denominator = -8;
  expect(fractionToDecimal(numerator, denominator)).toBe('6.25');
});
