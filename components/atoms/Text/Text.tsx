import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  TextDecorationProperty,
  FontSizeProperty,
} from '@material-ui/styles/node_modules/csstype/index';
import { Theme } from '@material-ui/core';

type TextProps = {
  tag?: string;
  fontSize?: FontSizeProperty<string | number>;
  textDecoration?: TextDecorationProperty<string>;
  children: React.ReactNode;
  className?: string;
};

type CSSProps = {
  fontSize: FontSizeProperty<any>;
  textDecoration: TextDecorationProperty<any>;
};

const possibilityTag: [string, string, string, string, string, string, string, string, string] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'label',
  'span',
];

const useStyle = makeStyles<Theme, CSSProps>(() => ({
  text: {
    fontSize: ({ fontSize }) => fontSize,
    textDecoration: ({ textDecoration }) => textDecoration,
  },
}));

const Text: React.FC<TextProps> = ({
  tag = 'h1',
  fontSize,
  textDecoration,
  children,
  className,
}) => {
  const Component: any = possibilityTag.includes(tag) ? tag : 'h1';
  const classes = useStyle({ fontSize, textDecoration });

  return <Component className={clsx(classes.text, className)}>{children}</Component>;
};

export default Text;
