import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Text from '@/components/atoms/Text/Text';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

import { sendMail } from '@/smtp/smtp';
import { mailSended, errorMail, resetMsgMail } from '@/store/action/ActionMail';

const useStyle = makeStyles<Theme>({
  form: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '100%',
  },
  input: {
    backgroundColor: 'black',
    border: '3px solid white',
    color: 'white',
    outline: 0,
    width: '50%',
    height: '5%',
    marginBottom: 10,
    fontSize: 15,
  },
  message: {
    backgroundColor: 'black',
    border: '3px solid white',
    color: 'white',
    outline: 0,
    width: '50%',
    height: '20%',
    marginBottom: 10,
    fontSize: 15,
    resize: 'none',
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    input: {
      fontSize: 10,
    },
    message: {
      fontSize: 10,
    },
  },
});

const Form: React.FC = () => {
  const classes = useStyle();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const dispatch = useDispatch();

  const handleInput = (e: any) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      dispatch(errorMail());
      return setTimeout(() => dispatch(resetMsgMail()), 2000);
    }
    const tryToSend = await sendMail(name, email, message);

    if (tryToSend === 'OK') {
      dispatch(mailSended());
      return setTimeout(() => dispatch(resetMsgMail()), 2000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid
          container
          direction="column"
          className={classes.container}
          alignContent="center"
          justify="center"
        >
          <Text fontSize={15} tag="label">
            Votre nom:{' '}
          </Text>
          <Input
            type="text"
            textarea={false}
            className={classes.input}
            valueInput={name}
            onChangeInput={handleInput}
            name="name"
          />
          <Text fontSize={15} tag="label">
            Votre email:{' '}
          </Text>
          <Input
            textarea={false}
            type="email"
            className={classes.input}
            onChangeInput={handleInput}
            valueInput={email}
            name="email"
          />
          <Text fontSize={15} tag="label">
            Votre message:{' '}
          </Text>
          <Input
            type="hidden"
            textarea={true}
            className={classes.message}
            onChangeInput={handleInput}
            valueInput={message}
            name="message"
          />
          <Button className={classes.input}>Envoyer le mail</Button>
        </Grid>
      </form>
    </>
  );
};

export default Form;
