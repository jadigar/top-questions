import { longestPalindrome } from './solution';

it('longestPalindrome should return "bab" for s = "babad"', () => {
  const s = 'babad';
  const result = longestPalindrome(s);
  expect(result).toEqual('bab');
});

it('longestPalindrome should return "bb" for s = "cbbd"', () => {
  const s = 'cbbd';
  const result = longestPalindrome(s);
  expect(result).toEqual('bb');
});

it('longestPalindrome should return "abbba" for s = "abbbacx"', () => {
  const s = 'abbbacx';
  const result = longestPalindrome(s);
  expect(result).toEqual('abbba');
});

it('longestPalindrome should return "bbabb" for s = "bbbabbcx"', () => {
  const s = 'bbbabbcx';
  const result = longestPalindrome(s);
  expect(result).toEqual('bbabb');
});

it('longestPalindrome should return "a" for s = "a"', () => {
  const s = 'a';
  const result = longestPalindrome(s);
  expect(result).toEqual('a');
});
