import { numberOfWeeks } from './solution';

describe('Maximum Number of Weeks for Which You Can Work', () => {
  it('numberOfWeeks should return 6 for milestones = [1,2,3]', () => {
    const milestones = [1, 2, 3];
    const result = numberOfWeeks(milestones);
    expect(result).toEqual(6);
  });

  it('numberOfWeeks should return 7 for milestones = [5,2,1]', () => {
    const milestones = [5, 2, 1];
    const result = numberOfWeeks(milestones);
    expect(result).toEqual(7);
  });

  it('numberOfWeeks should return 10 for milestones = [1, 2, 3, 4]', () => {
    const milestones = [1, 2, 3, 4];
    const result = numberOfWeeks(milestones);
    expect(result).toEqual(10);
  });

  it('numberOfWeeks should return 15 for milestones = [1, 2, 3, 4, 5]', () => {
    const milestones = [1, 2, 3, 4, 5];
    const result = numberOfWeeks(milestones);
    expect(result).toEqual(15);
  });

  it('numberOfWeeks should return 11 for milestones = [2, 3, 2, 4]', () => {
    const milestones = [2, 3, 2, 4];
    const result = numberOfWeeks(milestones);
    expect(result).toEqual(11);
  });
});
