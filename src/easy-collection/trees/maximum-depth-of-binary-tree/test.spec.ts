import { arrayToTreeNodeLevel } from '../common';
import { maxDepth } from './solution';

it('maxDepth should return 3 for root = [3,9,20,null,null,15,7]', () => {
  const root = [3, 9, 20, null, null, 15, 7];
  const tree = arrayToTreeNodeLevel(root);
  const result = maxDepth(tree);
  expect(result).toBe(3);
});

it('maxDepth should return 2 for root = [1,null,2]', () => {
  const root = [1, null, 2];
  const tree = arrayToTreeNodeLevel(root);
  const result = maxDepth(tree);
  expect(result).toBe(2);
});

it('maxDepth should return 3 for root = [1,null,2,null,null,3,4]', () => {
  const root = [1, null, 2, null, null, 3, 4];
  const tree = arrayToTreeNodeLevel(root);
  const result = maxDepth(tree);
  expect(result).toBe(3);
});

it('maxDepth should return 0 for root = []', () => {
  const root: (number | null)[] = [];
  const tree = arrayToTreeNodeLevel(root);
  const result = maxDepth(tree);
  expect(result).toBe(0);
});

it('maxDepth should return 1 for root = [0]', () => {
  const root = [0];
  const tree = arrayToTreeNodeLevel(root);
  const result = maxDepth(tree);
  expect(result).toBe(1);
});
