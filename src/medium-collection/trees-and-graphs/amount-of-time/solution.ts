import type { TreeNode } from '../common';

export function amountOfTime(root: TreeNode | null, start: number): number {
  const graph = new Map<number, number[]>();
  createGraph(root, null, graph);
  let result = -1;
  const queue: number[] = [start];
  const visited = new Set<number>(queue);
  while (queue.length > 0) {
    result++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      for (const neighbor of graph.get(node)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  return result;
}

function createGraph(
  node: TreeNode | null,
  parent: TreeNode | null,
  graph: Map<number, number[]>,
) {
  if (node === null) {
    return;
  }
  if (!graph.has(node.val)) {
    graph.set(node.val, []);
  }
  if (parent !== null) {
    graph.get(node.val)?.push(parent.val);
    graph.get(parent.val)?.push(node.val);
  }
  createGraph(node.left, node, graph);
  createGraph(node.right, node, graph);
}
