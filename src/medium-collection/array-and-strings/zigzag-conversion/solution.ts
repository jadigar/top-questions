export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const n = s.length;
  const sections = Math.ceil(n / (2 * numRows - 2));
  const numCols = sections * (numRows - 1);
  const matrix = new Array(numRows)
    .fill(0)
    .map(() => new Array(numCols).fill(' '));

  let currRow = 0;
  let currCol = 0;
  let currStringIndex = 0;
  while (currStringIndex < n) {
    while (currRow < numRows && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currStringIndex++;
      currRow++;
    }

    currRow -= 2;
    currCol++;
    while (currRow > 0 && currCol < numCols && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currRow--;
      currCol++;
      currStringIndex++;
    }
  }

  const result = matrix
    .map((m) => m.join(''))
    .join('')
    .replace(/\s/g, '');
  return result;
}
