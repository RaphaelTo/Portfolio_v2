import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { activatedInactivatedMusic } from '@/store/action/ActionMusic';
import IStoreMusic from '@/interfaces/IStoreMusic';
import IUseMusic from '@/interfaces/IUseMusic';
import useScreenSize from '@/hooks/useScreenSize';
import useMusic from '@/hooks/useMusic';
import { configMusic, pathStart, pathClose, pathCursor, pathSelect } from '@/utils/music';
import LinkButton from '@/components/atoms/LinkButton/LinkButton';
import Button from '@/components/atoms/Button/Button';

const useStyle = makeStyles<Theme>({
  button: {
    width: '700px',
    fontSize: 50,
    padding: '20px 200px',
    border: '3px solid white',
    margin: '20px 0',
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    button: {
      width: '250px',
      fontSize: 16,
      padding: '10px 70px',
    },
  },
  '@media screen and (min-width: 481px) and (max-width: 768px)': {
    button: {
      width: '600px',
      fontSize: 30,
      padding: '20px 70px',
    },
  },
  '@media screen and (min-width: 769px) and (max-width: 1024px)': {
    button: {
      width: '650px',
      fontSize: 35,
      padding: '20px 70px',
    },
  },
});

const StartMenu: React.FC = () => {
  const classes = useStyle();

  const [binaryOperator, setBinaryOperator] = React.useState({ home: '', music: '' });
  const music: IUseMusic<HTMLAudioElement | string> = useMusic();
  const [width] = useScreenSize();

  const dispatch = useDispatch();
  const musicOnOff = useSelector((state: IStoreMusic) => state.reducerMusic.music);

  const mouseEnterBinary = (e: any) => {
    if (e.target.id === 'home') {
      setBinaryOperator({ home: '>', music: '' });
      configMusic(musicOnOff, width > 1400 ? new Audio(pathCursor) : music.cursorMusic);
    }

    if (e.target.id === 'music') {
      setBinaryOperator({ home: '', music: '>' });
      configMusic(musicOnOff, width > 1400 ? new Audio(pathCursor) : music.cursorMusic);
    }
  };

  const mouseLeaveBinary: () => void = () => {
    setBinaryOperator({ home: '', music: '' });
  };

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

  const clickOnStart = () => {
    configMusic(musicOnOff, width > 1400 ? new Audio(pathSelect) : music.selectMusic);
  };

  return (
    <Grid container direction="column" alignContent="center">
      <LinkButton
        url="/projet"
        className={classes.button}
        onMouseEnter={mouseEnterBinary}
        onMouseLeave={mouseLeaveBinary}
        onClick={clickOnStart}
        id="home"
      >
        {binaryOperator.home} Accueil
      </LinkButton>
      <Button
        backgroundColor="black"
        onClick={handleMusicOnOff}
        className={classes.button}
        onMouseEnter={mouseEnterBinary}
        onMouseLeave={mouseLeaveBinary}
        id="music"
      >
        {binaryOperator.music} Music {musicOnOff ? 'off' : 'on'}
      </Button>
    </Grid>
  );
};

export default StartMenu;
