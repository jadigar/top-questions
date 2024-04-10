import { isSubsequence } from './solution';

describe('Is Subsequence', () => {
  it('isSubsequence should return true for s = "abc", t = "ahbgdc"', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    const result = isSubsequence(s, t);
    expect(result).toBeTruthy();
  });

  it('isSubsequence should return false for s = "axc", t = "ahbgdc"', () => {
    const s = 'axc';
    const t = 'ahbgdc';
    const result = isSubsequence(s, t);
    expect(result).toBeFalsy();
  });

  it('isSubsequence should return false for s = "aaaaaa", t = "bbaaaa"', () => {
    const s = 'aaaaaa';
    const t = 'bbaaaa';
    const result = isSubsequence(s, t);
    expect(result).toBeFalsy();
  });
});
