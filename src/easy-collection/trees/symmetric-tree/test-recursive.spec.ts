import { arrayToTreeNodeLevel } from '../common';
import { isSymmetric } from './solution-recursive';

it('isSymmetric should return true for root = [1,2,2,3,4,4,3]', () => {
  const root = [1, 2, 2, 3, 4, 4, 3];
  const tree = arrayToTreeNodeLevel(root);
  const result = isSymmetric(tree);
  expect(result).toBeTruthy();
});

it('isSymmetric should return false for root = [1,2,2,null,3,null,3]', () => {
  const root = [1, 2, 2, null, 3, null, 3];
  const tree = arrayToTreeNodeLevel(root);
  const result = isSymmetric(tree);
  expect(result).toBeFalsy();
});

it('isSymmetric should return false for root = [1,2,2,3,null,3,null]', () => {
  const root = [1, 2, 2, 3, null, 3, null];
  const tree = arrayToTreeNodeLevel(root);
  const result = isSymmetric(tree);
  expect(result).toBeFalsy();
});

it('isSymmetric should return true for root = [1,2,2,3,null,null,3]', () => {
  const root = [1, 2, 2, 3, null, null, 3];
  const tree = arrayToTreeNodeLevel(root);
  const result = isSymmetric(tree);
  expect(result).toBeTruthy();
});
