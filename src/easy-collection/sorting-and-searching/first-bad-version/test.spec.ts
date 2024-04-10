import { solution } from './solution';

it('solution should return 5 for n = 5, bad = 5', () => {
  const n = 5;
  const bad = 5;
  const result = solution((item: number) => item === bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 4 for n = 5, bad = 4', () => {
  const n = 5;
  const bad = 4;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 1 for n = 5, bad = 1', () => {
  const n = 5;
  const bad = 1;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 4 for n = 4, bad = 4', () => {
  const n = 4;
  const bad = 4;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 3 for n = 4, bad = 3', () => {
  const n = 4;
  const bad = 3;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 1 for n = 4, bad = 1', () => {
  const n = 4;
  const bad = 1;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 1 for n = 2, bad = 1', () => {
  const n = 2;
  const bad = 1;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 2 for n = 2, bad = 2', () => {
  const n = 2;
  const bad = 2;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});

it('solution should return 1 for n = 1, bad = 1', () => {
  const n = 1;
  const bad = 1;
  const result = solution((item: number) => item >= bad)(n);
  expect(result).toBe(bad);
});
