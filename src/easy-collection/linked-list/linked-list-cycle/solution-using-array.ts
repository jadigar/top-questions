import type { ListNode } from '../common';

export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  const arrayList: ListNode[] = [];
  let temp: ListNode | null = head;
  while (temp) {
    if (arrayList.includes(temp)) {
      return true;
    }
    arrayList.push(temp);
    temp = temp.next;
  }
  return false;
}
