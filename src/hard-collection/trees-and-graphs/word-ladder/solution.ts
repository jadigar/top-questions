export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordMap = new Map<string, Word>();
  const passedWords = new Set<string>();
  const queue: Word[] = [];
  const begin = new Word(beginWord, wordList);
  queue.push(begin);
  let result = 0;
  while (queue.length) {
    result++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (node.word === endWord) {
        return result;
      }
      passedWords.add(node.word);
      const { neighbors } = node;
      for (let j = 0; j < neighbors.length; j++) {
        if (!passedWords.has(neighbors[j])) {
          const word = wordMap.get(neighbors[j]) ?? new Word(neighbors[j], wordList);
          wordMap.set(neighbors[j], word);
          queue.push(word);
        }
      }
    }
  }
  return 0;
}

class Word {
  word: string;

  neighbors: string[];

  constructor(word: string, wordList: string[]) {
    this.word = word;
    this.neighbors = [];
    this.addNeighbors(wordList);
  }

  private addNeighbors(wordList: string[]): void {
    for (let i = 0; i < wordList.length; i++) {
      if (this.isNeighbor(this.word, wordList[i])) {
        this.neighbors.push(wordList[i]);
      }
    }
  }

  private isNeighbor(left: string, right: string): boolean {
    let distance = 0;
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        distance++;
      }
      if (distance > 1) {
        return false;
      }
    }
    return distance === 1;
  }
}
