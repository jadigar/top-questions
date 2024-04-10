import { deleteNode } from './solution';
import { arrayToList, getNodeToDelete, listToArray } from '../common';

it('deleteNode should return [4,1,9] for head = [4,5,1,9], node = 5', () => {
  const head = [4, 5, 1, 9];
  const node = 5;
  const root = arrayToList(head);
  const nodeToDelete = getNodeToDelete(root, node);
  if (nodeToDelete) {
    deleteNode(nodeToDelete);
  }
  const test = listToArray(root);
  expect(test).toEqual([4, 1, 9]);
});

it('deleteNode should return [4,5,9] for head = [4,5,1,9], node = 1', () => {
  const head = [4, 5, 1, 9];
  const node = 1;
  const root = arrayToList(head);
  const nodeToDelete = getNodeToDelete(root, node);
  if (nodeToDelete) {
    deleteNode(nodeToDelete);
  }
  const test = listToArray(root);
  expect(test).toEqual([4, 5, 9]);
});

it('deleteNode should return [1,2,4] for head = [1,2,3,4], node = 3', () => {
  const head = [1, 2, 3, 4];
  const node = 3;
  const root = arrayToList(head);
  const nodeToDelete = getNodeToDelete(root, node);
  if (nodeToDelete) {
    deleteNode(nodeToDelete);
  }
  const test = listToArray(root);
  expect(test).toEqual([1, 2, 4]);
});

it('deleteNode should return [1] for head = [0,1], node = 0', () => {
  const head = [0, 1];
  const node = 0;
  const root = arrayToList(head);
  const nodeToDelete = getNodeToDelete(root, node);
  if (nodeToDelete) {
    deleteNode(nodeToDelete);
  }
  const test = listToArray(root);
  expect(test).toEqual([1]);
});

it('deleteNode should return [5,-99] for head = [-3,5,-99], node = -3', () => {
  const head = [-3, 5, -99];
  const node = -3;
  const root = arrayToList(head);
  const nodeToDelete = getNodeToDelete(root, node);
  if (nodeToDelete) {
    deleteNode(nodeToDelete);
  }
  const test = listToArray(root);
  expect(test).toEqual([5, -99]);
});
