import { isGood } from './solution';

describe('Check if Array is Good:', () => {
  it('isGood should return false for nums = [2, 1, 3]', () => {
    const nums = [2, 1, 3];
    const result = isGood(nums);
    expect(result).toBeFalsy();
  });

  it('isGood should return true for nums = [1, 3, 3, 2]', () => {
    const nums = [1, 3, 3, 2];
    const result = isGood(nums);
    expect(result).toBeTruthy();
  });

  it('isGood should return true for nums = [1, 1]', () => {
    const nums = [1, 1];
    const result = isGood(nums);
    expect(result).toBeTruthy();
  });

  it('isGood should return false for nums = [3, 4, 4, 1, 2, 1]', () => {
    const nums = [3, 4, 4, 1, 2, 1];
    const result = isGood(nums);
    expect(result).toBeFalsy();
  });

  it('isGood should return false for nums = [1, 3, 5, 97, 5]', () => {
    const nums = [1, 3, 5, 97, 5];
    const result = isGood(nums);
    expect(result).toBeFalsy();
  });

  it('isGood should return false for nums = [1,4,5,4,3,3]', () => {
    const nums = [1, 4, 5, 4, 3, 3];
    const result = isGood(nums);
    expect(result).toBeFalsy();
  });

  it('isGood should return true for nums = [1,2,3,4,5,5]', () => {
    const nums = [1, 2, 3, 4, 5, 5];
    const result = isGood(nums);
    expect(result).toBeTruthy();
  });

  it('isGood should return false for nums = [1,1,4,4,5,5]', () => {
    const nums = [1, 1, 4, 4, 5, 5];
    const result = isGood(nums);
    expect(result).toBeFalsy();
  });

  it('isGood should return false for nums = [1,1,1]', () => {
    const nums = [1, 1, 1];
    const result = isGood(nums);
    expect(result).toBeFalsy();
  });
});
