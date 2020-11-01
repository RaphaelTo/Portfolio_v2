import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import Level from '@/components/molecules/Level/Level';
import Image from '@/components/atoms/Image/Image';

const useStyle = makeStyles({
  imgDiv: {
    height: 300,
    objectFit: 'scale-down',
  },
  divImgLvl: {
    width: 'auto',
    margin: 15,
  },
});

const Skill = ({ srcImg, altImg, lvl, exp, mouseEnter, mouseLeave, ...anyProps }) => {
  const classes = useStyle();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.divImgLvl}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <Grid container className={classes.imgDiv} alignContent="center" justify="center">
        <Image src={srcImg} alt={altImg} {...anyProps} />
      </Grid>
      <Level lvl={lvl} exp={exp} />
    </Grid>
  );
};

export default Skill;
