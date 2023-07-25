import type { BoardArr } from '$/useCace/boardUseCase';

export type Methods = {
  get: {
    resBody: BoardArr;
  };
  post: {
    reqBody: { x: number; y: number };
  };
};
