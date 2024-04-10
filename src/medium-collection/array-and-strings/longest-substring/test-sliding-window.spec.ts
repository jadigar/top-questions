import { lengthOfLongestSubstring } from './solution-sliding-window';

it('lengthOfLongestSubstring should return 3 for s = "abcabcbb"', () => {
  const s = 'abcabcbb';
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(3);
});

it('lengthOfLongestSubstring should return 1 for s = "bbbbb"', () => {
  const s = 'bbbbb';
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(1);
});

it('lengthOfLongestSubstring should return 3 for s = "pwwkew"', () => {
  const s = 'pwwkew';
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(3);
});

it('lengthOfLongestSubstring should return 5 for s = "pwwkexwabcd"', () => {
  const s = 'pwwkexwabcd';
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(8);
});

it('lengthOfLongestSubstring should return 3 for s = "dvdf"', () => {
  const s = 'dvdf';
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(3);
});
