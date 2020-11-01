import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

import Border from '@/components/atoms/Border/Border';
import Form from '@/components/organisms/Form/Form';
import BannerName from '@/components/molecules/BannerName/BannerName';
import Menu from '@/components/organisms/Menu/Menu';
import Footer from '@/components/organisms/Footer/Footer';

const useStyle = makeStyles({
  container: {
    height: '100%',
  },
  border: {
    marginTop: '30px',
    height: '70%',
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

const ContactView = () => {
  const classes = useStyle();
  const mail = useSelector((state) => state.reducerMail.mail);
  return (
    <>
      <Grid container className={classes.container}>
        <Grid container justify="center" className={classes.border}>
          <Border>
            <Form />
          </Border>
        </Grid>
        <Grid container className={classes.menu}>
          <Grid container className={classes.banner}>
            <BannerName title={mail} />
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

export default ContactView;
