import { romanToInt } from './solution';

it('romanToInt should return 3 for s = "III"', () => {
  const s = 'III';
  const result = romanToInt(s);
  expect(result).toEqual(3);
});

it('romanToInt should return 4 for s = "IV"', () => {
  const s = 'IV';
  const result = romanToInt(s);
  expect(result).toEqual(4);
});

it('romanToInt should return 58 for s = "LVIII"', () => {
  const s = 'LVIII';
  const result = romanToInt(s);
  expect(result).toEqual(58);
});

it('romanToInt should return 1994 for s = "MCMXCIV"', () => {
  const s = 'MCMXCIV';
  const result = romanToInt(s);
  expect(result).toEqual(1994);
});

it('romanToInt should return 1999 for s = "MCMXCIX"', () => {
  const s = 'MCMXCIX';
  const result = romanToInt(s);
  expect(result).toEqual(1999);
});

it('romanToInt should return 1444 for s = "MCDXLIV"', () => {
  const s = 'MCDXLIV';
  const result = romanToInt(s);
  expect(result).toEqual(1444);
});
