import React from 'react';
import { Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import IStoreMusic from '@/interfaces/IStoreMusic';
import useScreenSize from '@/hooks/useScreenSize';
import useMusic from '@/hooks/useMusic';
import { configMusic, pathStart, pathClose } from '@/utils/music';

import { activatedInactivatedMusic } from '@/store/action/ActionMusic';
import Copyright from '@/components/molecules/Copyright/Copyright';
import SoundIcon from '@/components/atoms/SoundIcon/SoundIcon';

const useStyle = makeStyles<Theme>({
  footer: {
    height: '5%',
  },
});

const Footer: React.FC = () => {
  const classes = useStyle();
  const musicOnOff = useSelector((state: IStoreMusic) => state.reducerMusic.music);
  const dispatch = useDispatch();
  const music = useMusic();
  const [width] = useScreenSize();

  const handleMusicOnOff = () => {
    if (!musicOnOff) {
      configMusic(true, width > 1400 ? new Audio(pathStart) : music.startMusic);
    }

    if (musicOnOff) {
      configMusic(musicOnOff, width > 1400 ? new Audio(pathClose) : music.closeMusic);
    }

    return musicOnOff
      ? dispatch(activatedInactivatedMusic(false))
      : dispatch(activatedInactivatedMusic(true));
  };

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        alignContent="flex-end"
        className={classes.footer}
      >
        <Copyright />
        <SoundIcon activate={musicOnOff} onClick={handleMusicOnOff} />
      </Grid>
    </>
  );
};

export default Footer;
