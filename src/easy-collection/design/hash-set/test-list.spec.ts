import { MyHashSet } from './solution';

describe('Design HashSet:', () => {
  it('should pass test 1', () => {
    const myHashSet = new MyHashSet();
    myHashSet.add(1); // set = [1]
    myHashSet.add(2); // set = [1, 2]
    expect(myHashSet.contains(1)).toBeTruthy(); // return True
    expect(myHashSet.contains(3)).toBeFalsy(); // return False, (not found)
    myHashSet.add(2); // set = [1, 2]
    expect(myHashSet.contains(2)).toBeTruthy(); // return True
    myHashSet.remove(2); // set = [1]
    expect(myHashSet.contains(2)).toBeFalsy(); // return False, (already removed)
  });

  it('should pass test 2', () => {
    const myHashSet = new MyHashSet();
    myHashSet.add(1000000);
    expect(myHashSet.contains(1000000)).toBeTruthy(); // return True
  });
});
