import { reverseBits } from './solution';

it('reverseBits should return 964176192 (0b00111001011110000010100101000000) for n = 0b00000010100101000001111010011100', () => {
  const n = 0b00000010100101000001111010011100;
  const result = reverseBits(n);
  expect(result).toEqual(0b00111001011110000010100101000000);
});

it('reverseBits should return 3221225471 (0b10111111111111111111111111111111) for n = 0b11111111111111111111111111111101', () => {
  const n = 0b11111111111111111111111111111101;
  const result = reverseBits(n);
  expect(result).toEqual(0b10111111111111111111111111111111);
});

it('reverseBits should return 2684354560 (0b10100000000000000000000000000000) for n = 0b00000000000000000000000000000101', () => {
  const n = 0b00000000000000000000000000000101;
  const result = reverseBits(n);
  expect(result).toEqual(0b10100000000000000000000000000000);
});

it('reverseBits should return 536870912 (0b00100000000000000000000000000000) for n = 0b00000000000000000000000000000100', () => {
  const n = 0b00000000000000000000000000000100;
  const result = reverseBits(n);
  expect(result).toEqual(0b00100000000000000000000000000000);
});
