import IActionProject, { Projet, IActionPropsLessPayload } from '@/interfaces/IActionProject';

export const ACTION_GET_PROJECT: string = 'ACTION_GET_PROJECT';
export const ACTION_REMOVE_PROJECT: string = 'ACTION_REMOVE_PROJECT';

export const actionGetProject: Function = (payload: Projet): IActionProject => {
  return {
    type: ACTION_GET_PROJECT,
    payload
  };
};

export const actionRemoveProject: Function = (): IActionPropsLessPayload => {
  return {
    type: ACTION_REMOVE_PROJECT
  }
}