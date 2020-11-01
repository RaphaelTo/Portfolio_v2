import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import clsx from 'clsx';

type LinkProps = {
  url: String;
  children: any;
  padding?: String | Number;
  backgroundColor?: String;
  fontSize?: Number;
  border?: string;
  margin?: string | number;
  className?: String;
  onMouseEnter?: any;
  onMouseLeave?: any;
  onClick?: any;
  id?: string;
};

const useStyles = makeStyles<Theme>(() => ({
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
