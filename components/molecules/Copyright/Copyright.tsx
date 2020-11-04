import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Text from '@/components/atoms/Text/Text';
import { Theme } from '@material-ui/core';

const useStyle = makeStyles<Theme>({
  copyright: {
    margin: 0,
    fontSize: 12,
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    copyright: {
      fontSize: 9,
    },
  },
  '@media screen and (min-width: 481px) and (max-width: 768px)': {
    copyright: {
      fontSize: 10,
    },
  },
  '@media screen and (min-width: 769px) and (max-width: 1024px)': {
    copyright: {
      fontSize: 11,
    },
  },
});

const Copyright: React.FC = () => {
  const classes = useStyle();
  return (
    <Text tag="p" className={classes.copyright}>
      2020©Raphael TORRES PAIVA
    </Text>
  );
};

export default Copyright;
