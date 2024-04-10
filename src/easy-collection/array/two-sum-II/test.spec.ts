import { twoSum } from './solution';

it('twoSum should return [1,2] for numbers = [2,7,11,15], target = 9', () => {
  const numbers = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(numbers, target);
  expect(result).toEqual([1, 2]);
});

it('twoSum should return [1,2] for numbers = [2,7,11,15], target = 9', () => {
  const numbers = [-5, -1, 0, 2, 3, 5, 7, 11, 15];
  const target = 9;
  const result = twoSum(numbers, target);
  expect(result).toEqual([4, 7]);
});

it('twoSum should return [1,3] for numbers = [2,3,4], target = 6', () => {
  const numbers = [2, 3, 4];
  const target = 6;
  const result = twoSum(numbers, target);
  expect(result).toEqual([1, 3]);
});

it('twoSum should return [1,2] for numbers = [-1,0], target = -1', () => {
  const numbers = [-1, 0];
  const target = -1;
  const result = twoSum(numbers, target);
  expect(result).toEqual([1, 2]);
});
