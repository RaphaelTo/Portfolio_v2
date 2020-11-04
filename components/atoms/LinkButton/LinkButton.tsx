import React from 'react';
import Link from 'next/link';
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
  url: string;
  children: React.ReactNode;
  padding?: PaddingProperty<any>;
  backgroundColor?: any;
  fontSize?: FontSizeProperty<any>;
  border?: BorderProperty<any>;
  margin?: MarginProperty<any>;
  className?: string;
  onMouseEnter?: React.ReactEventHandler;
  onMouseLeave?: React.ReactEventHandler;
  onClick?: React.ReactEventHandler;
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
  },
}));

const LinkButton: React.FC<LinkProps> = ({
  url,
  children,
  padding,
  backgroundColor,
  fontSize,
  border,
  margin,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  id,
}) => {
  const classes = useStyles({ padding, backgroundColor, fontSize, border, margin });

  return (
    <Link href={url}>
      <a
        id={id}
        className={clsx(classes.button, className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
