import { arrayToTreeNodeLevel } from '../common';
import { levelOrder } from './solution-recursive';

it('levelOrder should return [[3],[9,20],[15,7]] for root = [3,9,20,null,null,15,7]', () => {
  const root = [3, 9, 20, null, null, 15, 7];
  const tree = arrayToTreeNodeLevel(root);
  const result = levelOrder(tree);
  expect(result).toEqual([[3], [9, 20], [15, 7]]);
});

it('levelOrder should return [[1]] for root = [1]', () => {
  const root = [1];
  const tree = arrayToTreeNodeLevel(root);
  const result = levelOrder(tree);
  expect(result).toEqual([[1]]);
});

it('levelOrder should return [] for root = []', () => {
  const root: number[] = [];
  const tree = arrayToTreeNodeLevel(root);
  const result = levelOrder(tree);
  expect(result).toEqual([]);
});
