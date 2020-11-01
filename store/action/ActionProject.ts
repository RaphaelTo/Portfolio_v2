export const ACTION_GET_PROJECT = 'ACTION_GET_PROJECT';
export const ACTION_REMOVE_PROJECT = 'ACTION_REMOVE_PROJECT';

export const actionGetProject: Function = (payload) => {
  return {
    type: ACTION_GET_PROJECT,
    payload
  };
};

export const actionRemoveProject: Function = () => {
  return {
    type: ACTION_REMOVE_PROJECT
  }
}