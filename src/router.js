import router from 'koa-router';
import { playMediaRequest, SAY } from './actions';

export default function (state, dispatch) {
  async function intent(ctx, waitForAction) {
    const { body } = ctx.request;

    if (body.data.type === 'playMedia') {
      dispatch(playMediaRequest(body.data.title));
    }

    if (body.data.waitForReply) {
      const result = await waitForAction(SAY);
      ctx.body = result.payload;
    } else {
      ctx.status = 202;
    }
  }

  return ({ waitForAction }) => (
    router()
      .post('/intent', async (ctx) => intent(ctx, waitForAction))
  );
}
