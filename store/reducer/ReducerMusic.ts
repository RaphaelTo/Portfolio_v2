import produce from 'immer';
import IActionMusic from '@/interfaces/IActionMusic';
import {
  ACTIVATED_INACTIVATED_MUSIC,
} from '@/store/action/ActionMusic';

type StateType = {
  music: Boolean
}

const initialState: StateType = {
  music: false
};

const reducerMusic = (state = initialState, action: IActionMusic) => {
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