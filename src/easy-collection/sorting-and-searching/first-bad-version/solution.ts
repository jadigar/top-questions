/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

export var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;
    while (left < right) {
      const index = Math.floor((right - left) / 2) + left;
      if (isBadVersion(index)) {
        right = index;
      } else {
        left = index + 1;
      }
    }
    return left;
  };
};
