import { Robot } from './robot';
import { cleanRoom } from './solution';

it('should pass test 1', () => {
  const room = [
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ];
  const row = 1;
  const col = 3;
  const robot = new Robot(room, row, col);
  cleanRoom(robot);
  const result = isRoomClean(room);
  expect(result).toBeTruthy();
});

it('should pass test 2', () => {
  const room = [[1]];
  const row = 0;
  const col = 0;
  const robot = new Robot(room, row, col);
  cleanRoom(robot);
  const result = isRoomClean(room);
  expect(result).toBeTruthy();
});

function isRoomClean(room: number[][]): boolean {
  return !room.some((row) => row.some((cell) => cell === 1));
}
