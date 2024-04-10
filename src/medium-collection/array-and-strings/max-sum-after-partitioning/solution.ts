export function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    let maxPartitionVal = 0;
    let maxSum = 0;
    for (let j = 1; j <= k && i - j >= 0; j++) {
      maxPartitionVal = Math.max(maxPartitionVal, arr[i - j]);
      maxSum = Math.max(maxSum, dp[i - j] + maxPartitionVal * j);
    }
    dp[i] = maxSum;
  }
  return dp[n];
}
