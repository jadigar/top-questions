import { longestCommonPrefix } from './solution';

it('longestCommonPrefix should return "fl" for strs = ["flower","flow","flight"]', () => {
  const strs = ['flower', 'flow', 'flight'];
  const result = longestCommonPrefix(strs);
  expect(result).toBe('fl');
});

it('longestCommonPrefix should return "" for strs = ["dog","racecar","car"]', () => {
  const strs = ['dog', 'racecar', 'car'];
  const result = longestCommonPrefix(strs);
  expect(result).toBe('');
});

it('longestCommonPrefix should return "aab" for strs = ["aabc","aabaa","aabac"]', () => {
  const strs = ['aabc', 'aabaa', 'aabac'];
  const result = longestCommonPrefix(strs);
  expect(result).toBe('aab');
});

it('longestCommonPrefix should return "aabaac" for strs = ["aabaac","aabaac","aabaac"]', () => {
  const strs = ['aabaac', 'aabaac', 'aabaac'];
  const result = longestCommonPrefix(strs);
  expect(result).toBe('aabaac');
});

it('longestCommonPrefix should return "aabaac" for strs = ["aabaac"]', () => {
  const strs = ['aabaac'];
  const result = longestCommonPrefix(strs);
  expect(result).toBe('aabaac');
});
