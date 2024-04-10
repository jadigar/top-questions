import { arrayToTreeNodeLevel } from '../common';
import { isValidBST } from './solution';

it('isValidBST should return true for root = [2,1,3]', () => {
  const root = [2, 1, 3];
  const tree = arrayToTreeNodeLevel(root);
  const result = isValidBST(tree);
  expect(result).toBeTruthy();
});

it('isValidBST should return false for root = [5,1,4,null,null,3,6]', () => {
  const root = [5, 1, 4, null, null, 3, 6];
  const tree = arrayToTreeNodeLevel(root);
  const result = isValidBST(tree);
  expect(result).toBeFalsy();
});

it('isValidBST should return false for root = [2,2,2]', () => {
  const root = [2, 2, 2];
  const tree = arrayToTreeNodeLevel(root);
  const result = isValidBST(tree);
  expect(result).toBeFalsy();
});

it('isValidBST should return false for root = [5,4,6,null,null,3,7]', () => {
  const root = [5, 4, 6, null, null, 3, 7];
  const tree = arrayToTreeNodeLevel(root);
  const result = isValidBST(tree);
  expect(result).toBeFalsy();
});

it('isValidBST should return false for root = [0,null,-1]', () => {
  const root = [0, null, -1];
  const tree = arrayToTreeNodeLevel(root);
  const result = isValidBST(tree);
  expect(result).toBeFalsy();
});
