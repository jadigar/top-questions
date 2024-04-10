import { isPowerOfTwo } from './solution';

describe('Power of Two:', () => {
  it('isPowerOfTwo should return true for n = 1', () => {
    const n = 1;
    const result = isPowerOfTwo(n);
    expect(result).toBeTruthy();
  });

  it('isPowerOfTwo should return true for n = 16', () => {
    const n = 16;
    const result = isPowerOfTwo(n);
    expect(result).toBeTruthy();
  });

  it('isPowerOfTwo should return true for n = 3', () => {
    const n = 3;
    const result = isPowerOfTwo(n);
    expect(result).toBeFalsy();
  });
});
