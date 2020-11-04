export const ACTION_ERROR_MAIL: string = 'ACTION_ERROR_MAIL';
import IActionMail from '@/interfaces/IActionMail';

export const ACTION_MAIL_SENDED: string = 'ACTION_MAIL_SENDED';
export const ACTION_RESET_MSG_MAIL: string = 'ACTION_RESET_MSG_MAIL'; 

export const errorMail = () : IActionMail => {
  return {
    type: ACTION_ERROR_MAIL,
    payload: 'Veuillez renseigner tous les champs correctement'
  }
};

export const mailSended = (): IActionMail => {
  return {
    type: ACTION_MAIL_SENDED,
    payload: 'Votre message a bien ete envoye'
  }
};

export const resetMsgMail = (): IActionMail => {
  return {
    type: ACTION_RESET_MSG_MAIL,
    payload: ''
  }
};