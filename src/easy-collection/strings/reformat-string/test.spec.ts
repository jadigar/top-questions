import { reformat } from './solution';

describe('Reformat The String:', () => {
  it('reformat should return "0a1b2c" for s = "a0b1c2"', () => {
    const s = 'a0b1c2';
    const result = reformat(s);
    const validPermutations = ['0a1b2c', 'a0b1c2', '0a1b2c', '0c2a1b'];
    expect(validPermutations.some((p) => p === result)).toBeTruthy();
  });

  it('reformat should return "" for s = "leetcode"', () => {
    const s = 'leetcode';
    const result = reformat(s);
    expect(result).toEqual('');
  });

  it('reformat should return "0a1b2c" for s = "1229857369"', () => {
    const s = '1229857369';
    const result = reformat(s);
    expect(result).toEqual('');
  });

  it('reformat should return "c2o0v1i9d" for s = "covid2019"', () => {
    const s = 'covid2019';
    const result = reformat(s);
    expect(result).toEqual('c2o0v1i9d');
  });
});
