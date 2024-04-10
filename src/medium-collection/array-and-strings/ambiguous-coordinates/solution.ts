export function ambiguousCoordinates(s: string): string[] {
  const result: string[] = [];
  const str = s.substring(1, s.length - 1); // Remove brackets

  for (let i = 1; i < str.length; i++) {
    const left = str.substring(0, i);
    const right = str.substring(i);

    const leftCombinations = dotCombinations(left);
    const rightCombinations = dotCombinations(right);

    for (const l of leftCombinations) {
      for (const r of rightCombinations) {
        result.push(`(${l}, ${r})`);
      }
    }
  }

  return result;
}

function dotCombinations(s: string): string[] {
  const result: string[] = [];
  if (isValidInteger(s)) {
    result.push(s); // Push s if it is valid without decimal point
  }
  if (s !== '0') {
    // Do not insert decimal point when s is '0'
    for (let i = 1; i < s.length; i++) {
      const integerPart = s.substring(0, i);
      const decimalPart = s.substring(i);
      if (isValidInteger(integerPart) && isValidDecimal(decimalPart)) {
        result.push(`${integerPart}.${decimalPart}`);
      }
    }
  }

  return result;
}

function isValidInteger(s: string): boolean {
  return !(s.length > 1 && s.startsWith('0'));
}

function isValidDecimal(s: string): boolean {
  return !s.endsWith('0');
}
