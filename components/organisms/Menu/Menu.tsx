import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { Theme } from '@material-ui/core';

import IStoreMusic from '@/interfaces/IStoreMusic';
import useMusic from '@/hooks/useMusic';
import useScreenMusic from '@/hooks/useScreenSize';
import { configMusic, pathSelect, pathCursor } from '@/utils/music';

import LinkButton from '@/components/atoms/LinkButton/LinkButton';

const useStyle = makeStyles<Theme>({
  menuButton: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignContent: 'center',
    width: '15%',
    height: '60%',
    padding: 20,
    border: '3px solid white',
    margin: '20px 0px',
    fontSize: '2.2em',
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    menuButton: {
      width: '75px',
      padding: 8,
      border: '3px solid white',
      margin: '10px 0px',
      fontSize: 8,
    },
  },
  '@media screen and (min-width: 481px) and (max-width: 768px)': {
    menuButton: {
      width: '110px',
      padding: 15,
      border: '3px solid white',
      margin: '10px 0px',
      fontSize: 11,
    },
  },
  '@media screen and (min-width: 769px) and (max-width: 1024px)': {
    menuButton: {
      width: '140px',
      padding: 15,
      border: '3px solid white',
      margin: '20px 0px',
      fontSize: 14,
    },
  },
});

const Menu: React.FC = () => {
  const classes = useStyle();
  const musicOnOff = useSelector((state: IStoreMusic) => state.reducerMusic.music);
  const music = useMusic();
  const [width] = useScreenMusic();

  const mouseEnterMusic = () => {
    configMusic(musicOnOff, width > 1400 ? new Audio(pathCursor) : music.cursorMusic);
  };

  const clickOnNav = () => {
    configMusic(musicOnOff, width > 1400 ? new Audio(pathSelect) : music.selectMusic);
  };

  return (
    <Grid container justify="space-around" alignItems="center">
      <LinkButton
        url="/projet"
        onMouseEnter={mouseEnterMusic}
        onClick={clickOnNav}
        className={classes.menuButton}
      >
        Projets
      </LinkButton>
      <LinkButton
        url="/competence"
        onMouseEnter={mouseEnterMusic}
        onClick={clickOnNav}
        className={classes.menuButton}
      >
        Competences
      </LinkButton>
      <LinkButton
        url="/contact"
        onMouseEnter={mouseEnterMusic}
        onClick={clickOnNav}
        className={classes.menuButton}
      >
        Contact
      </LinkButton>
      <LinkButton
        url="/credit"
        onMouseEnter={mouseEnterMusic}
        onClick={clickOnNav}
        className={classes.menuButton}
      >
        Credit
      </LinkButton>
    </Grid>
  );
};

export default Menu;
