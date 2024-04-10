import type { TreeNode } from '../common';

export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  traverseNode(root, result);
  return result;
}

function traverseNode(node: TreeNode | null, result: number[]) {
  if (!node) {
    return;
  }
  traverseNode(node.left, result);
  result.push(node.val);
  traverseNode(node.right, result);
}
