import { Trie } from './solution';

it('should insert search words in trie', () => {
  const trie = new Trie();
  trie.insert('apple');
  expect(trie.search('apple')).toBe(true);
  expect(trie.search('app')).toBe(false);
  expect(trie.startsWith('app')).toBe(true);
  trie.insert('app');
  expect(trie.search('app')).toBe(true);
});

it('should delete words from trie', () => {
  const trie = new Trie();
  trie.insert('apple');
  trie.insert('application');
  expect(trie.search('apple')).toBeTruthy();
  expect(trie.search('application')).toBeTruthy();
  trie.delete('apple');
  expect(trie.search('apple')).toBeFalsy();
  expect(trie.search('application')).toBeTruthy();
  trie.delete('application');
  expect(trie.search('application')).toBeFalsy();
  expect(trie.startsWith('app')).toBeFalsy();
});

it('should delete similar words from trie', () => {
  const words = [
    'oath',
    'pea',
    'eat',
    'rain',
    'oathi',
    'oathk',
    'oathf',
    'oate',
    'oathii',
    'oathfi',
    'oathfii',
  ];
  const trie = new Trie();
  words.forEach((word) => {
    trie.insert(word);
  });

  while (words.length) {
    const word = words.pop()!;
    trie.delete(word);
    expect(trie.search(word)).toBeFalsy();
    words.forEach((w) => {
      expect(trie.search(w)).toBeTruthy();
    });
  }
});
