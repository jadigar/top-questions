import { arrayToTreeNodeLevel } from '../common';
import { inorderTraversal } from './solution-recursive';

it('inorderTraversal should return [1,3,2] for root = [1,null,2,null,null,3,null]', () => {
  const root = [1, null, 2, null, null, 3, null];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([1, 3, 2]);
});

it('inorderTraversal should return [4,2,1,3,5] for root = [1,2,3,4,null,null,5]', () => {
  const root = [1, 2, 3, 4, null, null, 5];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([4, 2, 1, 3, 5]);
});

it('inorderTraversal should return [4,2,5,1,6,3,7] for root = [1,2,3,4,5,6,7]', () => {
  const root = [1, 2, 3, 4, 5, 6, 7];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([4, 2, 5, 1, 6, 3, 7]);
});

it('inorderTraversal should return [2,4,1,5,3] for root = [1,2,3,null,4,5,null]', () => {
  const root = [1, 2, 3, null, 4, 5, null];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([2, 4, 1, 5, 3]);
});

it('inorderTraversal should return [] for root = []', () => {
  const root: number[] = [];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([]);
});

it('inorderTraversal should return [1] for root = [1]', () => {
  const root = [1];
  const rootNode = arrayToTreeNodeLevel(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([1]);
});
