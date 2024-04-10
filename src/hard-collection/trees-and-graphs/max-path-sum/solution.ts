import type { TreeNode } from '../common';

export function maxPathSum(root: TreeNode | null): number {
  const [_, result] = getMaxPath(root);
  return result;
}

function getMaxPath(
  root: TreeNode | null,
): [branchSum: number, maxSum: number] {
  if (!root) {
    return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  }
  const [left, leftSum] = getMaxPath(root.left);
  const [right, rightSum] = getMaxPath(root.right);
  const maxSum = Math.max(
    root.val,
    root.val + left,
    root.val + right,
    root.val + left + right,
    leftSum,
    rightSum,
  );
  const maxBranch = Math.max(root.val, root.val + left, root.val + right);
  return [maxBranch, maxSum];
}
