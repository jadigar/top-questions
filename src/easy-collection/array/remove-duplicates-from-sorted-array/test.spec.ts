import { removeDuplicates } from './solution';

it('should removeDuplicates from sorted array', () => {
  const nums = [1, 1, 2, 3, 3, 3, 4, 5]; // Input array
  const expectedNums = [1, 2, 3, 4, 5]; // The expected answer with correct length
  const k = removeDuplicates(nums); // Calls your implementation
  for (let i = 0; i < k; i++) {
    expect(nums[i]).toEqual(expectedNums[i]);
  }
});
