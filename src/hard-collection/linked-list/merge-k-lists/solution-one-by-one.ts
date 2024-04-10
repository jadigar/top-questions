import { ListNode } from '../common';

export function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  if (lists.length === 0) {
    return null;
  }
  const result: ListNode = new ListNode();
  let temp: ListNode | null = result;
  let changed = false;
  do {
    let index = 0;
    changed = false;
    for (let i = 0; i < lists.length; i++) {
      // we should find the min element in the list
      if (lists[i] && (!temp?.next || temp.next.val > lists[i]!.val)) {
        // point our temp to the node we found
        temp!.next = lists[i];
        index = i;
        changed = true;
      }
    }
    const next = lists[index]?.next ?? null;
    if (temp?.next?.next) {
      temp.next.next = null;
    }
    temp = temp!.next;
    // move head of lists[index] forward
    lists[index] = next;
  } while (changed);
  return result.next;
}
