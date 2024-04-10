export function removeDuplicateLetters(s: string): string {
  // Create an array to hold the frequency of each character in the string.
  const count: number[] = Array(26).fill(0);

  // Boolean array to check if a character is currently in the stack.
  const inStack: boolean[] = Array(26).fill(false);

  // Stack to construct the final answer.
  const stack: string[] = [];

  // Populate the count array with the frequency of each character in the string.
  for (const char of s) {
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  // Process each character in the string to build the stack.
  for (const char of s) {
    // Index of the current character in count and inStack arrays.
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // Decrease the count for the current character.
    count[index]--;

    // If the current character is already in the stack, skip the remaining logic and continue to the next character.
    if (inStack[index]) continue;

    // While the stack has characters and the top character of the stack is lexicographically greater
    // than the current character, AND the top character will appear later in the string,
    // we pop it out from the stack. This ensures the smallest lexicographical order.
    while (
      stack.length
      && stack[stack.length - 1] > char
      && count[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > 0
    ) {
      inStack[stack[stack.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] = false;
      stack.pop();
    }

    // Add the current character to the stack and mark it as present in the stack.
    stack.push(char);
    inStack[index] = true;
  }

  // Convert the stack to a string to get the final answer.
  return stack.join('');
}
