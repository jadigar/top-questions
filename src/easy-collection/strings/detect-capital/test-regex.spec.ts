import { detectCapitalUse } from './solution-regex';

it('detectCapitalUse should return true for word = "USA"', () => {
  const word = 'USA';
  const result = detectCapitalUse(word);
  expect(result).toBeTruthy();
});

it('detectCapitalUse should return false for word = "FlaG"', () => {
  const word = 'FlaG';
  const result = detectCapitalUse(word);
  expect(result).toBeFalsy();
});

it('detectCapitalUse should return true for word = "ggg"', () => {
  const word = 'ggg';
  const result = detectCapitalUse(word);
  expect(result).toBeTruthy();
});

it('detectCapitalUse should return true for word = "Leetcode"', () => {
  const word = 'Leetcode';
  const result = detectCapitalUse(word);
  expect(result).toBeTruthy();
});

it('detectCapitalUse should return true for word = "A"', () => {
  const word = 'A';
  const result = detectCapitalUse(word);
  expect(result).toBeTruthy();
});

it('detectCapitalUse should return true for word = "a"', () => {
  const word = 'a';
  const result = detectCapitalUse(word);
  expect(result).toBeTruthy();
});
