export function calculate(s: string): number {
  if (s == null || s.length === 0) {
    return 0;
  }
  const { length } = s;
  let currentNumber = 0;
  let lastNumber = 0;
  let result = 0;
  let operation = '+';
  for (let i = 0; i < length; i++) {
    const currentChar = s[i];
    if (isDigit(currentChar)) {
      currentNumber = currentNumber * 10 + parseInt(currentChar, 10);
    }
    if ((!isDigit(currentChar) && currentChar !== ' ') || i == length - 1) {
      if (operation == '+' || operation == '-') {
        result += lastNumber;
        lastNumber = operation == '+' ? currentNumber : -currentNumber;
      } else if (operation == '*') {
        lastNumber *= currentNumber;
      } else if (operation == '/') {
        lastNumber = Math.trunc(lastNumber / currentNumber);
      }
      operation = currentChar;
      currentNumber = 0;
    }
  }
  result += lastNumber;
  return result;
}

// // we can rely on that if this is not a space or operator, it is a digit
function isDigit(s: string): boolean {
  return s !== ' ' && !isOperator(s);
}

function isOperator(s: string): boolean {
  return ['+', '-', '*', '/'].includes(s);
}
