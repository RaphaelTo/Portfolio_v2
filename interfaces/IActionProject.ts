export interface Projet {
  title: string,
  src: string,
  description: string,
  github: string
};

export interface IActionPropsLessPayload {
  type: string
};

export default interface IActionProjet {
  type: string,
  payload: Projet
};