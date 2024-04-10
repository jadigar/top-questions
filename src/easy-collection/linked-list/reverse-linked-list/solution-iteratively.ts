import type { ListNode } from '../common';

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;
  while (current) {
    const tempNode = current.next;
    current.next = prev;
    prev = current;
    current = tempNode;
  }
  return prev;
}
