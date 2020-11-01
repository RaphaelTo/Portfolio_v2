export const ACTION_GET_SKILL = "ACTION_GET_SKILL";

export const ACTION_FORGET_SKILL = "ACTION_FORGET_SKILL";

export const getSkill = payload => {
  return {
    type: ACTION_GET_SKILL,
    payload
    }
}

export const forgetSkill = () => {
  return {
    type: ACTION_FORGET_SKILL
  }
}