import { boardUseCace } from '$/useCace/boardUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: boardUseCace.getBoard() }),
  //reqbody
  post: ({ body, user }) => ({ status: 201, body: boardUseCace.clickBoard(body, user.id) }),
}));
