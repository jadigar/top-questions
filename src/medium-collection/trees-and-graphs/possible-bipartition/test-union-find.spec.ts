import { possibleBipartition } from './solution-union-find';

it('possibleBipartition should return true for n = 4, dislikes = [[1,2],[1,3],[2,4]]', () => {
  const n = 4;
  const dislikes = [
    [1, 2],
    [1, 3],
    [2, 4],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeTruthy();
});

it('possibleBipartition should return false for n = 3, dislikes = [[1,2],[1,3],[2,3]]', () => {
  const n = 3;
  const dislikes = [
    [1, 2],
    [1, 3],
    [2, 3],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeFalsy();
});

it('possibleBipartition should return false for n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]', () => {
  const n = 5;
  const dislikes = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 5],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeFalsy();
});

it('possibleBipartition should return false for n = 10, dislikes = [[1,2],[3,4],[5,6],[6,7],[8,9],[7,8]]', () => {
  const n = 10;
  const dislikes = [
    [1, 2],
    [3, 4],
    [5, 6],
    [6, 7],
    [8, 9],
    [7, 8],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeTruthy();
});

it('possibleBipartition should return false for n = 8, dislikes = [[1,2],[3,4],[3,5],[4,5],[7,8]]', () => {
  const n = 8;
  const dislikes = [
    [1, 2],
    [3, 4],
    [3, 5],
    [4, 5],
    [7, 8],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeFalsy();
});
