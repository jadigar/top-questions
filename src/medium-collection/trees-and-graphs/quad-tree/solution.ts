import { QuadTreeNode } from '../common';

export function construct(grid: number[][]): QuadTreeNode | null {
  if (checkIsLeaf(grid)) {
    return new QuadTreeNode(!!grid[0][0], true);
  }
  const [topLeft, topRight, bottomLeft, bottomRight] = splitArray(grid);
  const tlNode = construct(topLeft);
  const trNode = construct(topRight);
  const blNode = construct(bottomLeft);
  const brNode = construct(bottomRight);

  return new QuadTreeNode(true, false, tlNode, trNode, blNode, brNode);
}

function checkIsLeaf(grid: number[][]): boolean {
  const val = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[i].length; k++) {
      if (grid[i][k] !== val) {
        return false;
      }
    }
  }
  return true;
}

function splitArray(grid: number[][]): number[][][] {
  const half = Math.trunc(grid.length / 2);
  const topLeft: number[][] = [];
  const topRight: number[][] = [];
  const bottomLeft: number[][] = [];
  const bottomRight: number[][] = [];
  for (let i = 0; i < half; i++) {
    topLeft.push(grid[i].slice(0, half));
    topRight.push(grid[i].slice(half));
  }

  for (let i = half; i < grid.length; i++) {
    bottomLeft.push(grid[i].slice(0, half));
    bottomRight.push(grid[i].slice(half));
  }
  return [topLeft, topRight, bottomLeft, bottomRight];
}
