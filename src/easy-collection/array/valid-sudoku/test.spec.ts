import { isValidSudoku } from './solution';

it('isValidSudoku should return true', () => {
  const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  const result = isValidSudoku(board);
  expect(result).toBe(true);
});

it('isValidSudoku should return false', () => {
  const board = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];
  const result = isValidSudoku(board);
  expect(result).toBe(false);
});

it('isValidSudoku should return false', () => {
  const board = [
    ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['9', '3', '.', '.', '2', '.', '4', '.', '.'],
    ['.', '.', '7', '.', '.', '.', '3', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '3', '4', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '5', '2', '.', '.'],
  ];
  const result = isValidSudoku(board);
  expect(result).toBe(false);
});
