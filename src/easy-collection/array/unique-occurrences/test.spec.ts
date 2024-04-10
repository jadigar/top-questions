import { uniqueOccurrences } from './solution';

describe('Unique Number of Occurrences', () => {
  it('uniqueOccurrences should return true for arr = [1,2,2,1,1,3]', () => {
    const arr = [1, 2, 2, 1, 1, 3];
    const result = uniqueOccurrences(arr);
    expect(result).toBeTruthy();
  });

  it('uniqueOccurrences should return false for arr = [1,2]', () => {
    const arr = [1, 2];
    const result = uniqueOccurrences(arr);
    expect(result).toBeFalsy();
  });

  it('uniqueOccurrences should return true for arr = [-3,0,1,-3,1,1,1,-3,10,0]', () => {
    const arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
    const result = uniqueOccurrences(arr);
    expect(result).toBeTruthy();
  });
});
