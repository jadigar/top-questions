import { arrayToList } from '../common';
import { isPalindrome } from './solution-reverse-first-half';

it('isPalindrome should return true for head = [1,2,2,1]', () => {
  const head = [1, 2, 2, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeTruthy();
});

it('isPalindrome should return true for head = [1,2,3,2,1]', () => {
  const head = [1, 2, 3, 2, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeTruthy();
});

it('isPalindrome should return true for head = [12,1]', () => {
  const head = [1, 1, 2, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeFalsy();
});

it('isPalindrome should return true for head = [12,1]', () => {
  const head = [1, 2, 1, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeFalsy();
});

it('isPalindrome should return false for head = [1,2]', () => {
  const head = [1, 2];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeFalsy();
});

it('isPalindrome should return true for head = [1]', () => {
  const head = [1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeTruthy();
});
