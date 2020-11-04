import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Theme } from '@material-ui/core';

import { IStoreSkill } from '@/interfaces/IStoreSkill';
import { getSkill, forgetSkill } from '@/store/action/ActionSkill';
import { skills } from '@/constants/constants';

import Border from '@/components/atoms/Border/Border';
import BannerName from '@/components/molecules/BannerName/BannerName';
import Menu from '@/components/organisms/Menu/Menu';
import Footer from '@/components/organisms/Footer/Footer';
import Skill from '@/components/organisms/Skill/Skill';

const useStyle = makeStyles<Theme>({
  container: {
    height: '100%',
  },
  border: {
    marginTop: '30px',
    height: '70%',
  },
  borderSkill: {
    margin: 20,
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
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    borderSkill: {
      margin: 0,
    },
  },
});

const CompetenceView: React.FC = () => {
  const classes = useStyle();
  const titleProject = useSelector((state: IStoreSkill) => state.reducerSkill.skill);
  const dispatch = useDispatch();

  return (
    <Grid container className={classes.container}>
      <Grid container justify="center" className={classes.border}>
        <Border overflow="scroll">
          <Grid container className={classes.borderSkill} justify="center" alignItems="center">
            {skills.skill.map((item) => (
              <Skill
                lvl={`Lv: ${item.lvl}`}
                exp={item.exp}
                srcImg={item.src}
                altImg={item.name}
                width={item.width}
                height={item.height}
                mouseEnter={() => dispatch(getSkill(item.name))}
                mouseLeave={() => dispatch(forgetSkill())}
                key={item.name}
              />
            ))}
          </Grid>
        </Border>
      </Grid>
      <Grid container className={classes.menu}>
        <Grid container className={classes.banner}>
          <BannerName title={titleProject !== '' ? titleProject : ''} />
        </Grid>
        <Grid container className={classes.menuNav}>
          <Menu />
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default CompetenceView;
