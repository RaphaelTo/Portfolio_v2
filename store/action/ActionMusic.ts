import IActionMusic from '@/interfaces/IActionMusic';

export const ACTIVATED_INACTIVATED_MUSIC: string = "ACTIVATED_INACTIVATED_MUSIC";

export const activatedInactivatedMusic: Function = (payload: boolean): IActionMusic => {
  return {
    type: ACTIVATED_INACTIVATED_MUSIC,
    payload
  }
};
