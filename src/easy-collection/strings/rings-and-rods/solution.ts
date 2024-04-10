export function countPoints(rings: string): number {
  const map = new Map<number, Set<string>>();
  let result = 0;
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod: number = +rings[i + 1];
    if (!map.has(rod)) {
      map.set(rod, new Set());
    }
    // if rod doesn't have this color
    if (!map.get(rod)!.has(color)) {
      // add it to this rod
      map.get(rod)?.add(color);
      // if we have all three colors here
      if (map.get(rod)?.size === 3) {
        // increase the result
        result++;
      }
    }
  }
  return result;
}
