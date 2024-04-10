import type { Node } from './node';

export function postorder(root: Node | null): number[] {
  if (root === null) {
    return [];
  }
  const stack: Node[] = [root];
  const result: number[] = [];
  while (stack.length > 0) {
    const node = stack.pop();
    result.unshift(node!.val);
    for (const child of node!.children) {
      stack.push(child);
    }
  }
  return result;
}
