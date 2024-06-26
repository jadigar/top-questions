import { findMissingRanges } from './solution';

it('findMissingRanges should return ["2","4->49","51->74","76->99"] for nums = [0,1,3,50,75], lower = 0, upper = 99', () => {
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['2', '4->49', '51->74', '76->99']);
});

it('findMissingRanges should return [] for nums = [-1], lower = -1, upper = -1', () => {
  const nums = [-1];
  const lower = -1;
  const upper = -1;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual([]);
});

it('findMissingRanges should return ["0->99"] for nums = [], lower = 0, upper = 99', () => {
  const nums: number[] = [];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['0->99']);
});

it('findMissingRanges should return ["1"] for nums = [], lower = 1, upper = 1', () => {
  const nums: number[] = [];
  const lower = 1;
  const upper = 1;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['1']);
});

it('findMissingRanges should return ["0->1"] for nums = [], lower = 0, upper = 1', () => {
  const nums: number[] = [];
  const lower = 0;
  const upper = 1;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['0->1']);
});

it('findMissingRanges should return ["0","2"] for nums = [1], lower = 0, upper = 2', () => {
  const nums: number[] = [1];
  const lower = 0;
  const upper = 2;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['0', '2']);
});

it('findMissingRanges should return ["3->24","26->41","43->98"] for nums = [0,1,2,25,42,99], lower = 0, upper = 99', () => {
  const nums = [0, 1, 2, 25, 42, 99];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['3->24', '26->41', '43->98']);
});

it('findMissingRanges should return ["2","4","8->98"] for nums = [], lower = 0, upper = 99', () => {
  const nums = [0, 1, 3, 5, 6, 7, 99];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['2', '4', '8->98']);
});

it('findMissingRanges should return ["0","2->41","43->95","98->99"] for nums = [1,42,96,97], lower = 0, upper = 99', () => {
  const nums = [1, 42, 96, 97];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['0', '2->41', '43->95', '98->99']);
});

it('findMissingRanges should return ["1->9"] for nums = [0], lower = 0, upper = 9', () => {
  const nums = [0];
  const lower = 0;
  const upper = 9;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['1->9']);
});

it('findMissingRanges should return ["0->8"] for nums = [0], lower = 0, upper = 9', () => {
  const nums = [9];
  const lower = 0;
  const upper = 9;
  const result = findMissingRanges(nums, lower, upper);
  expect(result).toEqual(['0->8']);
});
