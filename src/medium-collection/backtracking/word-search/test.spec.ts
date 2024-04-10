import { exist } from './solution';

it('exist should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'ABCCED';
  const result = exist(board, word);
  expect(result).toBeTruthy();
});

it('exist should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'SEE';
  const result = exist(board, word);
  expect(result).toBeTruthy();
});

it('exist should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCFDEES"', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'ABCCFDEES';
  const result = exist(board, word);
  expect(result).toBeTruthy();
});

it('exist should return false for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'ABCB';
  const result = exist(board, word);
  expect(result).toBeFalsy();
});

it('exist should return false for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCESCX"', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'ABCESCX';
  const result = exist(board, word);
  expect(result).toBeFalsy();
});

it('exist should return false for board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = "ABCESEEEFS"', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'E', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'ABCESEEEFS';
  const result = exist(board, word);
  expect(result).toBeTruthy();
});

it('exist should return false for board = [["A","B","C","A"],["S","F","C","F"],["A","D","E","E"]], word = "AFCCBA"', () => {
  const board = [
    ['A', 'B', 'C', 'A'],
    ['S', 'F', 'C', 'F'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = 'AFCCBA';
  const result = exist(board, word);
  expect(result).toBeTruthy();
});

it('exist should return false for board = [["a"]], word = "a"', () => {
  const board = [['a']];
  const word = 'a';
  const result = exist(board, word);
  expect(result).toBeTruthy();
});
