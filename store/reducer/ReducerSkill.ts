import produce from 'immer';
import { ACTION_GET_SKILL, ACTION_FORGET_SKILL } from '@/store/action/ActionSkill';
import IActionSkill from '@/interfaces/IActionSkill';

type stateSkill = {
  skill: string
};

const initialeState: stateSkill = {
  skill: ''
};

const reducerSkill = (state = initialeState, action: IActionSkill) => {
  return produce(state, draft => {
    switch (action.type) {
      case ACTION_GET_SKILL:
        draft.skill = action.payload;
        break;
      case ACTION_FORGET_SKILL:
        draft.skill = '';
        break;
      default:
        return state
    }
  })
};

export default reducerSkill;