import { checkArithmeticSubarrays } from './solution';

describe('Arithmetic Subarrays:', () => {
  it('should return [true,false,true] for nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]', () => {
    const nums = [4, 6, 5, 9, 3, 7];
    const l = [0, 0, 2];
    const r = [2, 3, 5];
    const result = checkArithmeticSubarrays(nums, l, r);
    expect(result).toEqual([true, false, true]);
  });

  it('should return [false,true,false,false,true,true] for nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]', () => {
    const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10];
    const l = [0, 1, 6, 4, 8, 7];
    const r = [4, 4, 9, 7, 9, 10];
    const result = checkArithmeticSubarrays(nums, l, r);
    expect(result).toEqual([false, true, false, false, true, true]);
  });
});
