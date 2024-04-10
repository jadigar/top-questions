export function findDiagonalOrder(nums: number[][]): number[] {
  const diagonalTable: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      // items from the same diagonal have same indexes sum
      const diagonalIndex = i + j;
      if (diagonalTable[diagonalIndex] === undefined) {
        diagonalTable[diagonalIndex] = [];
      }
      diagonalTable[diagonalIndex].push(nums[i][j]);
    }
  }
  const result = [];
  for (let i = 0; i < diagonalTable.length; i++) {
    for (let j = diagonalTable[i].length - 1; j >= 0; j--) {
      result.push(diagonalTable[i][j]);
    }
  }
  return result;
}
