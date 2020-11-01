export const ACTION_ERROR_MAIL = 'ACTION_ERROR_MAIL';
export const ACTION_MAIL_SENDED = 'ACTION_MAIL_SENDED';
export const ACTION_RESET_MSG_MAIL = 'ACTION_RESET_MSG_MAIL'; 

export const errorMail = () => {
  return {
    type: ACTION_ERROR_MAIL,
    payload: 'Veuillez renseigner tous les champs correctement'
  }
};

export const mailSended = () => {
  return {
    type: ACTION_MAIL_SENDED,
    payload: 'Votre message a bien ete envoye'
  }
};

export const resetMsgMail = () => {
  return {
    type: ACTION_RESET_MSG_MAIL,
    payload: ''
  }
};