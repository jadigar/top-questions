import { isAnagram } from './solution-sort';

it('isAnagram should return true for s = "anagram", t = "nagaram"', () => {
  const s = 'anagram';
  const t = 'nagaram';
  const result = isAnagram(s, t);
  expect(result).toBe(true);
});

it('isAnagram should return false for s = "rat", t = "car"', () => {
  const s = 'rat';
  const t = 'car';
  const result = isAnagram(s, t);
  expect(result).toBe(false);
});

it('isAnagram should return false for s = "rat", t = "tarz"', () => {
  const s = 'rat';
  const t = 'tarz';
  const result = isAnagram(s, t);
  expect(result).toBe(false);
});
