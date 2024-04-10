import type { TreeNode } from '../common';

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) {
    return [];
  }
  const result: number[][] = [];
  const stack: { node: TreeNode; sum: number; path: number[] }[] = [];

  stack.push({ node: root, sum: 0, path: [] });

  while (stack.length > 0) {
    let { node, sum, path } = stack.pop()!;

    sum += node.val;
    path = [...path, node.val];

    if (node.left !== null) {
      stack.push({ node: node.left, sum, path });
    }

    if (node.right !== null) {
      stack.push({ node: node.right, sum, path });
    }

    if (node.left === null && node.right === null && sum === targetSum) {
      result.push(path);
    }
  }

  return result;
}
