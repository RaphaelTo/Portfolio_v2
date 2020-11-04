import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import StartMenu from '@/components/molecules/StartMenu/StartMenu';
import Text from '@/components/atoms/Text/Text';

const useStyle = makeStyles<Theme>({
  title: {
    marginTop: 0,
    fontSize: 100,
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    title: {
      fontSize: 35,
    },
  },
  '@media screen and (min-width: 481px) and (max-width: 768px)': {
    title: {
      fontSize: 70,
    },
  },
  '@media screen and (min-width: 769px) and (max-width: 1024px)': {
    title: {
      fontSize: 75,
    },
  },
});

const HomeScreen: React.FC = () => {
  const classes = useStyle();

  return (
    <>
      <Text textDecoration="underline" className={classes.title}>
        PORTFOLIO
      </Text>
      <StartMenu />
    </>
  );
};

export default HomeScreen;
