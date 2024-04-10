import { ListNode } from '../common';

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const l1Stack = createStack(l1);
  const l2Stack = createStack(l2);
  let head = new ListNode();

  while (l1Stack.length || l2Stack.length) {
    const sum = head.val + (l1Stack.pop() ?? 0) + (l2Stack.pop() ?? 0);
    head.val = sum % 10;
    const carry = Math.trunc(sum / 10);
    const node = new ListNode(carry);
    node.next = head;
    head = node;
  }
  return head.val === 0 ? head.next : head;
}

function createStack(list: ListNode | null): number[] {
  const stack: number[] = [];
  let head = list;
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  return stack;
}
