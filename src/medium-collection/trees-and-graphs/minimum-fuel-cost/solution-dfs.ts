export function minimumFuelCost(roads: number[][], seats: number): number {
  let fuel = 0;

  const tree = new Map<number, number[]>();
  for (const [from, to] of roads) {
    tree.set(from, (tree.get(from) || []).concat(to));
    tree.set(to, (tree.get(to) || []).concat(from));
  }

  [, fuel] = calculateFuel(0, -1, tree, seats, fuel);

  return fuel;
}

function calculateFuel(
  node: number,
  parent: number,
  adj: Map<number, number[]>,
  seats: number,
  fuel: number,
): [number, number] {
  let representatives = 1;
  if (!adj.has(node)) {
    return [representatives, fuel];
  }
  for (const child of adj.get(node)!) {
    if (child !== parent) {
      const [childRepresentatives, childFuel] = calculateFuel(
        child,
        node,
        adj,
        seats,
        fuel,
      );
      representatives += childRepresentatives;
      fuel = childFuel;
    }
  }
  if (node !== 0) {
    fuel += Math.ceil(representatives / seats);
  }
  return [representatives, fuel];
}
