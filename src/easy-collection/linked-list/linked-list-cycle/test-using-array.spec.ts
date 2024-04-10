import { arrayToList, createLoop } from '../common';
import { hasCycle } from './solution-using-array';

it('hasCycle should return true for head = [3,2,0,-4], pos = 1', () => {
  const head = [3, 2, 0, -4];
  const pos = 1;
  const list = arrayToList(head);
  const loopedList = createLoop(list, pos);
  const result = hasCycle(loopedList);
  expect(result).toBeTruthy();
});

it('hasCycle should return true for head = [1,2], pos = 0', () => {
  const head = [1, 2];
  const pos = 0;
  const list = arrayToList(head);
  const loopedList = createLoop(list, pos);
  const result = hasCycle(loopedList);
  expect(result).toBeTruthy();
});

it('hasCycle should return false for head = [1], pos = -1', () => {
  const head = [1];
  const pos = -1;
  const list = arrayToList(head);
  const loopedList = createLoop(list, pos);
  const result = hasCycle(loopedList);
  expect(result).toBeFalsy();
});
