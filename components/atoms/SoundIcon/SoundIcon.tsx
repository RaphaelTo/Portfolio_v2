import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { img } from '@/constants/constants';

type SoundIconProps = {
  activate: boolean;
  onClick?: any;
};

const useStyle = makeStyles({
  icon: {
    cursor: 'pointer',
  },
});

const srcImg = img.soundIcon;

const SoundIcon: React.FC<SoundIconProps> = ({ activate, onClick }) => {
  const checkImg: any = !activate ? srcImg[0] : srcImg[1];
  const classes = useStyle();

  return (
    <img
      className={classes.icon}
      src={checkImg.src}
      alt={checkImg.name}
      onClick={onClick}
      height="20"
      width="20"
    />
  );
};

export default SoundIcon;
