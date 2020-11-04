import React from 'react';
import Grid, { GridJustification } from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { OverflowYProperty } from '@material-ui/styles/node_modules/csstype/index';
import { Theme } from '@material-ui/core';

type BorderProps = {
  overflow: OverflowYProperty;
  justify?: GridJustification;
  children?: React.ReactNode;
};

type PropsCSS = {
  overflow: OverflowYProperty;
};

const useStyle = makeStyles<Theme, PropsCSS>({
  border: {
    border: '3px solid #23b249',
    height: '100%',
    width: '90%',
    overflowY: ({ overflow }) => overflow,
    overflowX: 'hidden',
    animation: `$fadein 1s`,
  },
  '@keyframes fadein': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});

const Border: React.FC<BorderProps> = ({
  children,
  overflow = 'hidden',
  justify = 'flex-start',
}) => {
  const classes = useStyle({ overflow });

  return (
    <Grid container className={classes.border} justify={justify}>
      {children}
    </Grid>
  );
};

export default Border;
