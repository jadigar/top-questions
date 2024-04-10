import { solve } from './solution';

it('solve should correctly find surrounded regions for case 1', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ];
  const expected = [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
  ];
  solve(board);
  expect(board).toEqual(expected);
});

it('solve should correctly find surrounded regions for case 2', () => {
  const board = [
    ['X', 'O', 'O', 'O', 'X'],
    ['X', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'O', 'X'],
    ['X', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'O', 'X'],
  ];

  const expected = [
    ['X', 'O', 'O', 'O', 'X'],
    ['X', 'X', 'X', 'O', 'X'],
    ['X', 'X', 'X', 'O', 'X'],
    ['X', 'X', 'X', 'O', 'X'],
    ['X', 'O', 'O', 'O', 'X'],
  ];
  solve(board);
  expect(board).toEqual(expected);
});

it('solve should correctly find surrounded regions for case 3', () => {
  const board = [['X']];
  const expected = [['X']];
  solve(board);
  expect(board).toEqual(expected);
});

it('solve should correctly find surrounded regions for case 4', () => {
  const board = [
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
  ];
  const expected = [
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
  ];
  solve(board);
  expect(board).toEqual(expected);
});
