import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import clsx from 'clsx';

type LinkProps = {
  children: String | string[],
  padding?: String | Number,
  backgroundColor?: String,
  fontSize?: Number,
  border?: string,
  margin?: string | number,
  onClick?: any,
  className?: String,
  onMouseEnter?: any,
  onMouseLeave?: any,
  id?: string
};

const useStyles = makeStyles<Theme>(() => ({
  button: {
    padding: ({padding}) => padding,
    backgroundColor: ({backgroundColor}) => backgroundColor,
    textDecoration: 'none',
    color: 'white',
    fontSize: ({ fontSize }) => fontSize,
    border: ({ border }) => border,
    margin: ({ margin }) => margin,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
    outline: '0'
  }
}));

const Button: React.FC<LinkProps> = ({
  children,
  padding,
  backgroundColor,
  fontSize,
  border,
  margin,
  onClick,
  className,
  onMouseLeave,
  onMouseEnter,
  id
}) => {
  const classes = useStyles({ padding, backgroundColor, fontSize, border, margin});
  
  return <button id={id} className={clsx(classes.button, className)} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</button>
    
};

export default Button;