import { permute } from './solution-backtrack';
import { arrayEquals } from '../common';

it('permute should return [[1]] for nums = [1]', () => {
  const nums = [1];
  const expectedResult = [[1]];
  const permutations = permute(nums);
  expect(expectedResult.length).toEqual(permutations.length);
  expectedResult.forEach((item) => {
    const result = permutations.some((p) => arrayEquals(p, item));
    expect(result).toBeTruthy();
  });
});

it('permute should return [[0,1],[1,0]] for nums = [0,1]', () => {
  const nums = [0, 1];
  const expectedResult = [
    [0, 1],
    [1, 0],
  ];
  const permutations = permute(nums);
  expect(expectedResult.length).toEqual(permutations.length);
  expectedResult.forEach((item) => {
    const result = permutations.some((p) => arrayEquals(p, item));
    expect(result).toBeTruthy();
  });
});

it('permute should return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] for nums = [1,2,3]', () => {
  const nums = [1, 2, 3];
  const expectedResult = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];
  const permutations = permute(nums);
  expect(expectedResult.length).toEqual(permutations.length);
  expectedResult.forEach((item) => {
    const result = permutations.some((p) => arrayEquals(p, item));
    expect(result).toBeTruthy();
  });
});
