import { checkInclusion } from './solution';

it('checkInclusion should return true for s1 = "ab", s2 = "eidbaooo"', () => {
  const s1 = 'ab';
  const s2 = 'eidbaooo';
  const result = checkInclusion(s1, s2);
  expect(result).toBeTruthy();
});

it('checkInclusion should return true for s1 = "ab", s2 = "eidboaoo"', () => {
  const s1 = 'ab';
  const s2 = 'eidboaoo';
  const result = checkInclusion(s1, s2);
  expect(result).toBeFalsy();
});
