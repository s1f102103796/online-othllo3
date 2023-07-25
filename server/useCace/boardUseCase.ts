import type { UserId } from '$/commonTypesWithClient/branded';

export type BoardArr = number[][];

const board: BoardArr = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export const boardUseCace = {
  getBoard: () => board,
  clickBoard: (params: { x: number; y: number }, userId: UserId) => {
    console.log('111', Math.random(), userId);
    board[params.y][params.x] = 1;
  },
};
