export function numUniqueEmails(emails: string[]): number {
  const emailsSet = new Set<string>();
  for (const email of emails) {
    const atIndex = email.indexOf('@');
    const plusIndex = email.indexOf('+');
    const index = plusIndex === -1 ? atIndex : plusIndex;
    let name = email.substring(0, index);
    name = name.replace(/\./g, '');
    emailsSet.add(name + email.substring(atIndex));
  }
  return emailsSet.size;
}
