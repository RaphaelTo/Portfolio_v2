import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import IStructureImg from '@/interfaces/IStructureImg';

import Text from '@/components/atoms/Text/Text';
import Image from '@/components/atoms/Image/Image';

type BannerNameProps = {
  title?: string;
  img?: Array<IStructureImg>;
};

const useStyle = makeStyles<Theme>({
  banner: {
    border: '2px solid white',
    width: '90%',
    height: '100px',
  },
  nameBanner: {
    fontSize: '2.2em',
  },
  img: {
    height: 50,
    width: 50,
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    banner: {
      height: '50px',
    },
    nameBanner: {
      fontSize: '1.3em',
    },
    img: {
      height: 25,
      width: 25,
    },
  },
  '@media screen and (min-width: 481px) and (max-width: 768px)': {
    nameBanner: {
      fontSize: '1.7em',
    },
  },
});

const BannerName: React.FC<BannerNameProps> = ({ title, img }) => {
  const classes = useStyle();

  return (
    <Grid container justify="center" alignContent="center">
      <Grid
        container
        justify="center"
        className={classes.banner}
        alignContent="center"
        alignItems="center"
      >
        {title && (
          <Text tag="p" className={classes.nameBanner}>
            {title}
          </Text>
        )}
        {img &&
          img.map((image, key) => (
            <Image
              src={image.src}
              alt={image.name}
              height={50}
              width={50}
              className={classes.img}
              key={key}
            />
          ))}
      </Grid>
    </Grid>
  );
};

export default BannerName;
