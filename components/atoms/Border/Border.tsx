import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  border: {
    border: '3px solid #23b249',
    height: '100%',
    width: '90%',
    overflowY: (overflow) => overflow,
    overflowX: 'hidden',
    animation: `$fadein 1s`,
  },
  '@keyframes fadein': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});

const Border: React.FC = ({ children, overflow = 'hidden', justify = 'flex-start' }) => {
  const classes = useStyle({ overflow });

  return (
    <Grid container className={classes.border} justify={justify}>
      {children}
    </Grid>
  );
};

export default Border;
