import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import HomeScreen from '@/components/organisms/HomeScreen/HomeScreen';
import Copyright from '@/components/molecules/Copyright/Copyright';

const useStyle = makeStyles({
  home: {
    height: '100%',
    width: '100%',
    outline: 0,
    overflow: 'hidden',
    animation: `$fadein 1s`,
  },
  homeScreen: {
    height: '98%',
    width: '100%',
  },
  copyright: {
    height: '2%',
    width: '100%',
  },
  '@keyframes fadein': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});

const HomeView: React.FC = () => {
  const classes = useStyle();

  return (
    <>
      <Grid container className={classes.home}>
        <Grid container justify="center" alignContent="center" className={classes.homeScreen}>
          <HomeScreen />
        </Grid>
        <Grid container className={classes.copyright} direction="column" justify="flex-end">
          <Copyright />
        </Grid>
      </Grid>
    </>
  );
};

export default HomeView;
