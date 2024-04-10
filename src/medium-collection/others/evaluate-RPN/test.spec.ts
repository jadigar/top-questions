import { evalRPN } from './solution';

it('evalRPN should return 9 for tokens = ["2","1","+","3","*"]', () => {
  const tokens = ['2', '1', '+', '3', '*'];
  expect(evalRPN(tokens)).toEqual(9);
});

it('evalRPN should return 6 for tokens = ["4","13","5","/","+"]', () => {
  const tokens = ['4', '13', '5', '/', '+'];
  expect(evalRPN(tokens)).toEqual(6);
});

it('evalRPN should return 22 for tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]', () => {
  const tokens = [
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ];
  expect(evalRPN(tokens)).toEqual(22);
});
