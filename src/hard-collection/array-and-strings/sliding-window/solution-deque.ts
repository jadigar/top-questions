export function maxSlidingWindow(num: number[], k: number) {
  if (k === 1) {
    return num;
  }
  const deque: number[] = [];
  const result = [];
  for (let i = 0; i < num.length; i++) {
    while (num[deque[deque.length - 1]] <= num[i]) {
      deque.pop();
    }
    deque.push(i);
    if (deque[0] === i - k) {
      deque.shift();
    }
    if (i >= k - 1) {
      result.push(num[deque[0]]);
    }
  }
  return result;
}
