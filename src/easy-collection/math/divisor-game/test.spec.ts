import { divisorGame } from './solution';

describe('Divisor Game:', () => {
  it('divisorGame should return true for n = 2', () => {
    const n = 2;
    const result = divisorGame(n);
    expect(result).toBeTruthy();
  });

  it('divisorGame should return false for n = 3', () => {
    const n = 3;
    const result = divisorGame(n);
    expect(result).toBeFalsy();
  });
});
