export * as actions from './actions';
import router from './router';

export default function (state, dispatch) {
  return {
    router: router(state, dispatch),
  };
}
