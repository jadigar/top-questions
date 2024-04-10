import type { ListNode } from '../common';

export function splitListToParts(
  head: ListNode | null,
  k: number,
): (ListNode | null)[] {
  let currentNode: ListNode | null = head;
  let count = 0;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    count++;
  }

  const num = Math.floor(count / k);
  const rest = count % k;

  const result: (ListNode | null)[] = new Array(k).fill(null);
  currentNode = head;
  for (let i = 0; i < k; i++) {
    const node: ListNode | null = currentNode;
    for (let j = 0; j < num + (i < rest ? 1 : 0) - 1; j++) {
      if (currentNode !== null) {
        currentNode = currentNode.next;
      }
    }
    if (currentNode !== null) {
      const prev: ListNode | null = currentNode;
      currentNode = currentNode.next;
      if (prev !== null) {
        prev.next = null;
      }
    }
    result[i] = node;
  }
  return result;
}
