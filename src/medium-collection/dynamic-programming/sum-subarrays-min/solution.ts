export function sumSubarrayMins(arr: number[]): number {
  const MOD: number = 1e9 + 7;
  let sum = 0;
  const stack: number[] = [];

  // We use a trick of adding a virtual element at the beginning and the end of the array.
  arr.unshift(0);
  arr.push(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      const current = stack.pop()!;
      const left = stack[stack.length - 1];
      // Contribution of arr[current] in subarrays is arr[current] * (i - current) * (current - left)
      sum = (sum + arr[current] * (i - current) * (current - left)) % MOD;
    }
    stack.push(i);
  }

  return sum;
}
