import produce from 'immer';
import IActionProject, { Projet } from '@/interfaces/IActionProject';
import { ACTION_GET_PROJECT, ACTION_REMOVE_PROJECT } from '@/store/action/ActionProject';

type StateProject = {
  project: Projet
};

const initialeState: StateProject = {
  project: {
    title: '',
    src: '',
    description: '',
    github: ''
  }
};

const reducerProject = (state = initialeState, action: IActionProject) => {
  return produce(state, draft => {
    switch (action.type) {
      case ACTION_GET_PROJECT:
        draft.project = action.payload;
        break;
      case ACTION_REMOVE_PROJECT:
        draft.project = {
          title: '',
          src: '',
          description: '',
          github: ''
        };
        break;
      default:
        return state
    }
  })
};

export default reducerProject;