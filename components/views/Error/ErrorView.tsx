import React from 'react';
import { useRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import Text from '@/components/atoms/Text/Text';
import Button from '@/components/atoms/Button/Button';
import { Theme } from '@material-ui/core';

const useStyle = makeStyles<Theme>({
  error: {
    height: '100%',
  },
  input: {
    backgroundColor: 'black',
    border: '3px solid white',
    color: 'white',
    outline: 0,
    height: '5%',
    marginBottom: 10,
    fontSize: 15,
  },
});

const ErrorView: React.FC = () => {
  const redirect = useRouter();
  const classes = useStyle();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      className={classes.error}
    >
      <Text tag="h1">Whoops :/ bad URL</Text>
      <Button className={classes.input} onClick={() => redirect.push('/')}>
        Click here to be redirect
      </Button>
    </Grid>
  );
};

export default ErrorView;
