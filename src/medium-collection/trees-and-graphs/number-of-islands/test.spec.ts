import { numIslands } from './solution';

it('numIslands should return 1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];
  const result = numIslands(grid);
  expect(result).toEqual(1);
});

it('numIslands should return 3', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];
  const result = numIslands(grid);
  expect(result).toEqual(3);
});
