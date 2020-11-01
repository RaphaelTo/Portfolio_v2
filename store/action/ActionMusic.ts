export const ACTIVATED_INACTIVATED_MUSIC: string = "ACTIVATED_INACTIVATED_MUSIC";

export const activatedInactivatedMusic: Function = (payload: boolean) => {
  return {
    type: ACTIVATED_INACTIVATED_MUSIC,
    payload
  }
};
