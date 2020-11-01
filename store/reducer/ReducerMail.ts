import { produce } from 'immer';
import {
  ACTION_ERROR_MAIL,
  ACTION_MAIL_SENDED,
  ACTION_RESET_MSG_MAIL
} from '@/store/action/ActionMail';

type StateType = {
  mail: Boolean
}

const initialState = {
  mail: ''
};

const reducerMusic = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ACTION_ERROR_MAIL:
        draft.mail = action.payload;
        break;
      case ACTION_MAIL_SENDED:
        draft.mail = action.payload;
        break;
      case ACTION_RESET_MSG_MAIL:
        draft.mail = action.payload;
        break;
      default:
        return state
    }
  })
};

export default reducerMusic;