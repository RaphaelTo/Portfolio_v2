import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import clsx from 'clsx';
import {
  PaddingProperty,
  BackgroundColorProperty,
  FontSizeProperty,
  BorderProperty,
  MarginProperty,
} from '@material-ui/styles/node_modules/csstype/index';

type LinkProps = {
  children: React.ReactNode;
  padding?: PaddingProperty<any>;
  backgroundColor?: any;
  fontSize?: FontSizeProperty<any>;
  border?: BorderProperty<any>;
  margin?: MarginProperty<any>;
  onClick?: React.ReactEventHandler;
  className?: string;
  onMouseEnter?: React.ReactEventHandler;
  onMouseLeave?: React.ReactEventHandler;
  id?: string;
};

type PropsCSS = {
  padding: PaddingProperty<string | number>;
  backgroundColor: BackgroundColorProperty;
  fontSize: FontSizeProperty<string | number>;
  border: BorderProperty<string>;
  margin: MarginProperty<string>;
};

const useStyles = makeStyles<Theme, PropsCSS>(() => ({
  button: {
    padding: ({ padding }) => padding,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    textDecoration: 'none',
    color: 'white',
    fontSize: ({ fontSize }) => fontSize,
    border: ({ border }) => border,
    margin: ({ margin }) => margin,
    textAlign: 'center',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
    outline: '0',
  },
}));

const Button: React.FC<LinkProps> = ({
  children,
  padding,
  backgroundColor,
  fontSize,
  border,
  margin,
  className,
  id,
  onClick,
  onMouseLeave,
  onMouseEnter,
}) => {
  const classes = useStyles({ padding, backgroundColor, fontSize, border, margin });

  return (
    <button
      id={id}
      className={clsx(classes.button, className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
