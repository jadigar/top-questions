export function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words = sentence.split(' ');
  let result = -1;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isPrefix = true;
    if (word.length < searchWord.length) {
      continue;
    }
    for (let j = 0; j < searchWord.length; j++) {
      if (word[j] !== searchWord[j]) {
        isPrefix = false;
        break;
      }
    }
    if (isPrefix) {
      result = i + 1;
      break;
    }
  }
  return result;
}
