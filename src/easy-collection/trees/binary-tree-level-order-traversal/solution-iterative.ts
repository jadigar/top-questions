import type { TreeNode } from '../common';

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const queue: (TreeNode | null)[] = [root];
  let level = 0;
  const result: number[][] = [];
  while (queue.length) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      if (result.length === level) {
        result[level] = [];
      }
      const node = queue.shift();
      if (node) {
        result[level].push(node.val);
      }
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return result;
}
