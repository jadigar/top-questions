export function getSumAbsoluteDifferences(nums: number[]): number[] {
  let leftSum = 0;
  const totalSum = nums.reduce((prev, curr) => prev + curr, 0);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    const leftDifference = nums[i] * i - leftSum;
    const rightDifference = rightSum - nums[i] * (nums.length - i - 1);
    const difference = leftDifference + rightDifference;
    leftSum += nums[i];
    result.push(difference);
  }
  return result;
}
