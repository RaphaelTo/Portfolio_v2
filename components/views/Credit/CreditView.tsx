import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Theme } from '@material-ui/core';

import IStoreMusic from '@/interfaces/IStoreMusic';
import { configImg } from '@/utils/img';
import { PlayerEndMusic } from '@/utils/music';

import Border from '@/components/atoms/Border/Border';
import Menu from '@/components/organisms/Menu/Menu';
import BannerName from '@/components/molecules/BannerName/BannerName';
import Footer from '@/components/organisms/Footer/Footer';
import EndCredits from '@/components/organisms/EndCredits/EndCredits';

const useStyle = makeStyles<Theme>({
  container: {
    height: '100%',
  },
  border: {
    marginTop: '30px',
    height: '70%',
  },
  endCredits: {
    width: '60%',
  },
  menu: {
    height: '24%',
  },
  banner: {
    height: '45%',
  },
  menuNav: {
    height: '55%',
  },
});

const CreditView: React.FC = () => {
  const classes = useStyle();
  const musicOnOff = useSelector((state: IStoreMusic) => state.reducerMusic.music);
  const [music] = React.useState(new Audio('/sound/End_Credits.mp3'));

  React.useEffect(() => {
    PlayerEndMusic(musicOnOff, music);

    return () => {
      music?.pause();
    };
  }, [musicOnOff]);

  return (
    <>
      <Grid container className={classes.container}>
        <Grid container justify="center" className={classes.border}>
          <Border justify="center" overflow="scroll">
            <Grid container className={classes.endCredits} alignContent="stretch">
              <EndCredits />
            </Grid>
          </Border>
        </Grid>
        <Grid container className={classes.menu}>
          <Grid container className={classes.banner}>
            <BannerName img={configImg} />
          </Grid>
          <Grid container className={classes.menuNav}>
            <Menu />
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default CreditView;
