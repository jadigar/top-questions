import { isValid } from './solution';

it('isValid should return true for s = "()"', () => {
  const s = '()';
  const result = isValid(s);
  expect(result).toBeTruthy();
});

it('isValid should return true for s = "()[]{}"', () => {
  const s = '()[]{}';
  const result = isValid(s);
  expect(result).toBeTruthy();
});

it('isValid should return true for s = "{{}[][[[]]]}"', () => {
  const s = '{{}[][[[]]]}';
  const result = isValid(s);
  expect(result).toBeTruthy();
});

it('isValid should return false for s = "{{}[][[[]]]}"', () => {
  const s = '{{}[][[[[]]]}';
  const result = isValid(s);
  expect(result).toBeFalsy();
});

it('isValid should return false for s = "(]"', () => {
  const s = '(]';
  const result = isValid(s);
  expect(result).toBeFalsy();
});
