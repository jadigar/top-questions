import type { ListNode } from '../common';

export function reverseList(head: ListNode | null): ListNode | null {
  const listArray: ListNode[] = [];
  let tempNode = head;
  while (tempNode) {
    listArray.push(tempNode);
    tempNode = tempNode.next;
  }
  if (listArray.length === 0) {
    return null;
  }
  listArray[0].next = null;
  const result = listArray.pop() || null;
  tempNode = result;
  while (listArray && tempNode) {
    tempNode.next = listArray.pop() || null;
    tempNode = tempNode.next || null;
  }

  return result;
}
