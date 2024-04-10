import { majorityElement } from './solution';

it('majorityElement should return 3 for nums = [3,2,3]', () => {
  const nums = [3, 2, 3];
  expect(majorityElement(nums)).toEqual(3);
});

it('majorityElement shoule return 2 for nums = [2,2,1,1,1,2,2]', () => {
  const nums = [2, 2, 1, 1, 1, 2, 2];
  expect(majorityElement(nums)).toEqual(2);
});
