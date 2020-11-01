import produce from 'immer';

import { ACTION_GET_PROJECT, ACTION_REMOVE_PROJECT } from '@/store/action/ActionProject';

const initialeState = {
  project: {}
};

const reducerProject = (state = initialeState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ACTION_GET_PROJECT:
        draft.project = action.payload;
        break;
      case ACTION_REMOVE_PROJECT:
        draft.project = {};
        break;
      default:
        return state
    }
  })
};

export default reducerProject;