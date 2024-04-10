import { isPowerOfThree } from './solution';

it('isPowerOfThree should return true for n = 27', () => {
  const n = 27;
  const result = isPowerOfThree(n);
  expect(result).toEqual(true);
});

it('isPowerOfThree should return false for n = 0', () => {
  const n = 0;
  const result = isPowerOfThree(n);
  expect(result).toEqual(false);
});

it('isPowerOfThree should return true for n = 1', () => {
  const n = 1;
  const result = isPowerOfThree(n);
  expect(result).toEqual(true);
});

it('isPowerOfThree should return true for n = 9', () => {
  const n = 9;
  const result = isPowerOfThree(n);
  expect(result).toEqual(true);
});

it('isPowerOfThree should return true for n = 45', () => {
  const n = 45;
  const result = isPowerOfThree(n);
  expect(result).toEqual(false);
});
