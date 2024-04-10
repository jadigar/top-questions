import { strStr } from './solution-kmp';

it('strStr should return 2 for haystack = "hello", needle = "ll"', () => {
  const haystack = 'hello';
  const needle = 'll';
  const result = strStr(haystack, needle);
  expect(result).toEqual(2);
});

it('strStr should return -1 for haystack = "aaaaa", needle = "bba"', () => {
  const haystack = 'aaaaa';
  const needle = 'bba';
  const result = strStr(haystack, needle);
  expect(result).toEqual(-1);
});

it('strStr should return 3 for haystack = "abbaaa", needle = "aa"', () => {
  const haystack = 'abbaaa';
  const needle = 'aa';
  const result = strStr(haystack, needle);
  expect(result).toEqual(3);
});

it('strStr should return 3 for haystack = "abaabbaaa", needle = "aa"', () => {
  const haystack = 'abbaaa';
  const needle = 'aa';
  const result = strStr(haystack, needle);
  expect(result).toEqual(3);
});

it('strStr should return 4 for haystack = "mississippi",needle = "issip"', () => {
  const haystack = 'mississippi';
  const needle = 'issip';
  const result = strStr(haystack, needle);
  expect(result).toEqual(4);
});

it('strStr should return 6 for haystack = "abxabcabcaby", needle = "abcaby"', () => {
  const haystack = 'abxabcabcaby';
  const needle = 'abcaby';
  const result = strStr(haystack, needle);
  expect(result).toEqual(6);
});

it('strStr should return 6 for haystack = "ababcaababcaabc", needle = "ababcaabc"', () => {
  const haystack = 'ababcaababcaabc';
  const needle = 'ababcaabc';
  const result = strStr(haystack, needle);
  expect(result).toEqual(6);
});

it('strStr should return 0 for haystack = "", needle = ""', () => {
  const haystack = '';
  const needle = '';
  const result = strStr(haystack, needle);
  expect(result).toEqual(0);
});
