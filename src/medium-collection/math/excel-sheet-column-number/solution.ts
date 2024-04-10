export function titleToNumber(columnTitle: string): number {
  const alphaNumber = createAlphabeticMap();
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const num = alphaNumber.get(columnTitle[i]) ?? 0;
    result += num * 26 ** (columnTitle.length - i - 1);
  }
  return result;
}

function createAlphabeticMap(): Map<string, number> {
  const map = new Map<string, number>();
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(i + 65), i + 1);
  }
  return map;
}
