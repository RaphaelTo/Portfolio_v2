import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

type TextProps = {
  tag?: string,
  fontSize?: number,
  textDecoration?: string,
  children: string,
  className?: string
}; 

const possibilityTag: [string, string, string, string, string, string, string, string, string] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'span'];

const useStyle = makeStyles(() => ({
  text: {
    fontSize: ({ fontSize }) => fontSize,
    textDecoration: ({ textDecoration }) => textDecoration,
  }
}));

const Text: React.FC<TextProps> = ({
  tag = "h1",
  fontSize,
  textDecoration,
  children,
  className
}) => {
  const Component = possibilityTag.includes(tag) ? tag : 'h1';
  const classes = useStyle({fontSize, textDecoration});
  
  return (
    <Component className={clsx(classes.text, className)}>{children}</Component>
  )
};

export default Text;
