import React from 'react';
import { makeStyles } from '@material-ui/styles';

import LinkButton from '@/components/atoms/LinkButton/LinkButton';
import Image from '@/components/atoms/Image/Image';

const useStyle = makeStyles({
  img: {
    width: 80,
    height: 80,
    margin: '0 10px',
  },
  hoverImg: {
    '&:hover': {
      backgroundColor: 'black',
    },
  },
});

const Account = () => {
  const classes = useStyle();
  return (
    <>
      <LinkButton
        url="https://www.linkedin.com/in/torres-paiva-raphael-677b60182/"
        className={classes.hoverImg}
      >
        <Image src="/img/linkedin.png" alt="linkedin" className={classes.img} />
      </LinkButton>
      <LinkButton url="https://github.com/RaphaelTo" className={classes.hoverImg}>
        <Image src="/img/github.png" alt="github" className={classes.img} />
      </LinkButton>
    </>
  );
};

export default Account;
