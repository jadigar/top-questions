export function minExtraChar(s: string, dictionary: string[]): number {
  const set = new Set(dictionary);
  const dp = new Array(s.length + 1).fill(0);
  for (let start = s.length - 1; start >= 0; start--) {
    dp[start] = dp[start + 1] + 1;
    for (let end = start; end < s.length; end++) {
      const substr = s.substring(start, end + 1);
      if (set.has(substr)) {
        dp[start] = Math.min(dp[start], dp[end + 1]);
      }
    }
  }
  return dp[0];
}
