import { arrayToList, listToArray } from '../common';
import { addTwoNumbers } from './solution-stack';

describe('Add Two Numbers II:', () => {
  it('addTwoNumbers should return [7,8,0,7] for l1 = [7,2,4,3], l2 = [5,6,4]', () => {
    const l1 = [7, 2, 4, 3];
    const l2 = [5, 6, 4];
    const list1 = arrayToList(l1);
    const list2 = arrayToList(l2);
    const resultList = addTwoNumbers(list1, list2);
    const resultArray = listToArray(resultList);
    expect(resultArray).toEqual([7, 8, 0, 7]);
  });

  it('addTwoNumbers should return [8,0,7] for l1 = [2,4,3], l2 = [5,6,4]', () => {
    const l1 = [2, 4, 3];
    const l2 = [5, 6, 4];
    const list1 = arrayToList(l1);
    const list2 = arrayToList(l2);
    const resultList = addTwoNumbers(list1, list2);
    const resultArray = listToArray(resultList);
    expect(resultArray).toEqual([8, 0, 7]);
  });

  it('addTwoNumbers should return [0] for l1 = [0], l2 = [0]', () => {
    const l1 = [0];
    const l2 = [0];
    const list1 = arrayToList(l1);
    const list2 = arrayToList(l2);
    const resultList = addTwoNumbers(list1, list2);
    const resultArray = listToArray(resultList);
    expect(resultArray).toEqual([0]);
  });

  it('addTwoNumbers should return [1,1,0] for l1 = [1,0], l2 = [1,0,0]', () => {
    const l1 = [1, 0];
    const l2 = [1, 0, 0];
    const list1 = arrayToList(l1);
    const list2 = arrayToList(l2);
    const resultList = addTwoNumbers(list1, list2);
    const resultArray = listToArray(resultList);
    expect(resultArray).toEqual([1, 1, 0]);
  });

  it('addTwoNumbers should return [1,0,0] for l1 = [1], l2 = [9,9]', () => {
    const l1 = [1];
    const l2 = [9, 9];
    const list1 = arrayToList(l1);
    const list2 = arrayToList(l2);
    const resultList = addTwoNumbers(list1, list2);
    const resultArray = listToArray(resultList);
    expect(resultArray).toEqual([1, 0, 0]);
  });
});
