import { validateBinaryTreeNodes } from './solution';

describe('Validate Binary Tree Nodes:', () => {
  it('validateBinaryTreeNodes should return true for n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]', () => {
    const n = 4;
    const leftChild = [1, -1, 3, -1];
    const rightChild = [2, -1, -1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeTruthy();
  });

  it('validateBinaryTreeNodes should return false for n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]', () => {
    const n = 4;
    const leftChild = [1, -1, 3, -1];
    const rightChild = [2, 3, -1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeFalsy();
  });

  it('validateBinaryTreeNodes should return false for n = 2, leftChild = [1,0], rightChild = [-1,-1]', () => {
    const n = 2;
    const leftChild = [1, 0];
    const rightChild = [-1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeFalsy();
  });

  it('validateBinaryTreeNodes should return false for n = 4, leftChild = [1,-1,3,-1], rightChild = [-1,-1,-1,-1]', () => {
    const n = 4;
    const leftChild = [1, -1, 3, -1];
    const rightChild = [-1, -1, -1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeFalsy();
  });

  it('validateBinaryTreeNodes should return true for n = 4, leftChild = [1,2,3,-1], rightChild = [-1,-1,-1,-1]', () => {
    const n = 4;
    const leftChild = [1, 2, 3, -1];
    const rightChild = [-1, -1, -1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeTruthy();
  });

  it('validateBinaryTreeNodes should return true for n = 4, leftChild = [1,0,3,-1], rightChild = [-1,-1,-1,-1]', () => {
    const n = 4;
    const leftChild = [1, 0, 3, -1];
    const rightChild = [-1, -1, -1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeFalsy();
  });

  it('validateBinaryTreeNodes should return true for n = 4, leftChild = [1,-1,2,-1], rightChild = [3,-1,-1,-1]', () => {
    const n = 4;
    const leftChild = [1, -1, 2, -1];
    const rightChild = [3, -1, -1, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeFalsy();
  });

  it('validateBinaryTreeNodes should return true for n = 4, leftChild = [3,-1,1,-1], rightChild = [-1,-1,0,-1]', () => {
    const n = 4;
    const leftChild = [3, -1, 1, -1];
    const rightChild = [-1, -1, 0, -1];
    const result = validateBinaryTreeNodes(n, leftChild, rightChild);
    expect(result).toBeTruthy();
  });
});
