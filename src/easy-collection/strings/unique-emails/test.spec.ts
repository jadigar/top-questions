import { numUniqueEmails } from './solution';

describe('Unique Email Addresses:', () => {
  it('numUniqueEmails should pass test 1', () => {
    const emails = [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ];
    const result = numUniqueEmails(emails);
    expect(result).toEqual(2);
  });

  it('numUniqueEmails should pass test 2', () => {
    const emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];
    const result = numUniqueEmails(emails);
    expect(result).toEqual(3);
  });
});
