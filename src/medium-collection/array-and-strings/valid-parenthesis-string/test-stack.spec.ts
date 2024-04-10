import { checkValidString } from './solution-stack';

describe('Valid Parenthesis String', () => {
  it('checkValidString should return true for s = "()"', () => {
    const s = '()';
    const result = checkValidString(s);
    expect(result).toBeTruthy();
  });

  it('checkValidString should return true for s = "(*)"', () => {
    const s = '(*)';
    const result = checkValidString(s);
    expect(result).toBeTruthy();
  });

  it('checkValidString should return true for s = "(*))"', () => {
    const s = '(*))';
    const result = checkValidString(s);
    expect(result).toBeTruthy();
  });
});
