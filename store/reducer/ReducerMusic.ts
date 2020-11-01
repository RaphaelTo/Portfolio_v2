import produce from 'immer';

import {
  ACTIVATED_INACTIVATED_MUSIC,
} from '@/store/action/ActionMusic';

type StateType = {
  music: Boolean
}

const initialState = {
  music: false
};

const reducerMusic = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ACTIVATED_INACTIVATED_MUSIC:
        draft.music = action.payload;
        break;
      default:
        return state
    }
  })
};

export default reducerMusic;