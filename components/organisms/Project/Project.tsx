import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from '@material-ui/core';

import { Img, StructureImgState } from '@/interfaces/IProjectImg';
import IStoreMusic from '@/interfaces/IStoreMusic';
import useScreenSize from '@/hooks/useScreenSize';
import useMusic from '@/hooks/useMusic';
import { configMusic, pathCursor, pathSelect, pathClose } from '@/utils/music';
import { img } from '@/constants/constants';
import { actionGetProject, actionRemoveProject } from '@/store/action/ActionProject';

import Image from '@/components/atoms/Image/Image';
import Modal from '@/components/atoms/Modal/Modal';
import Text from '@/components/atoms/Text/Text';
import LinkButton from '@/components/atoms/LinkButton/LinkButton';

const useStyle = makeStyles<Theme>({
  img: {
    width: 200,
    height: 200,
    paddingBottom: 10,
    objectFit: 'scale-down',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  imgScale: {
    objectFit: 'scale-down',
  },
  divImg: {
    width: 280,
    height: 260,
    margin: 30,
    objectFit: 'scale-down',
    '&:hover': {
      backgroundImage: `url('/img/selected.png')`,
      backgroundRepeat: 'no-repeat',
    },
  },
  modalContent: {
    border: '2px solid white',
    backgroundColor: 'black',
    height: '60%',
    width: '60%',
    outline: 0,
  },
  crossImg: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: '23% !important',
    right: '22% !important',
    cursor: 'pointer !important',
  },
  modalDescription: {
    width: '50%',
    paddingLeft: 50,
    fontSize: '1.1em',
  },
  imgModal: {
    width: 300,
    height: 300,
    objectFit: 'scale-down',
  },
  linkModal: {
    fontSize: 25,
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  '@media screen and (min-width: 320px) and (max-width: 374px)': {
    img: {
      width: '130px !important',
      height: '130px !important',
      paddingBottom: 5,
    },
    divImg: {
      width: '210px !important',
      height: '190px !important',
      margin: 30,
      '&:hover': {
        backgroundSize: '210px 190px',
        objectFit: 'scale-down',
      },
    },
    modalContent: {
      height: '70%',
      width: '80%',
      overflowY: 'scroll',
    },
    crossImg: {
      width: '30px !important',
      height: '30px !important',
      top: '18% !important',
      right: '15% !important',
    },
    modalDescription: {
      width: '100%',
      padding: 5,
      fontSize: 8,
    },
    imgModal: {
      display: 'none !important',
    },
    linkModal: {
      fontSize: 12,
    },
  },
  '@media screen and (min-width: 375px) and (max-width: 413px)': {
    img: {
      width: '130px !important',
      height: '130px !important',
      paddingBottom: 5,
    },
    divImg: {
      width: '220px !important',
      height: 190,
      margin: '20%',
      '&:hover': {
        backgroundSize: '200px 190px',
        objectFit: 'scale-down',
      },
    },
    modalContent: {
      height: '70%',
      width: '80%',
      overflowY: 'scroll',
    },
    crossImg: {
      width: '30px !important',
      height: '30px !important',
      top: '18% !important',
      right: '15% !important',
    },
    modalDescription: {
      width: '100%',
      padding: 5,
      fontSize: 8,
    },
    imgModal: {
      display: 'none !important',
    },
    linkModal: {
      fontSize: 12,
    },
  },
  '@media screen and (min-width: 414px) and (max-width: 480px)': {
    img: {
      width: '130px !important',
      height: '130px !important',
      paddingBottom: 5,
    },
    divImg: {
      width: '220px !important',
      height: '190px !important',
      margin: '20%',
      '&:hover': {
        backgroundSize: '220px 190px',
        objectFit: 'scale-down',
      },
    },
    modalContent: {
      height: '70%',
      width: '80%',
      overflowY: 'scroll',
    },
    crossImg: {
      width: '30px !important',
      height: '30px !important',
      top: '18% !important',
      right: '15% !important',
    },
    modalDescription: {
      width: '100%',
      padding: 5,
      fontSize: 8,
    },
    imgModal: {
      display: 'none !important',
    },
    linkModal: {
      fontSize: 12,
    },
  },
  '@media screen and (min-width: 481px) and (max-width: 768px)': {
    divImg: {
      justifyContent: 'center',
    },
    crossImg: {
      width: '40px !important',
      height: '40px !important',
      position: 'absolute',
      top: '18% !important',
      right: '22% !important',
      cursor: 'pointer',
    },
    modalContent: {
      height: '70%',
    },
    modalDescription: {
      width: '80%',
      paddingLeft: 0,
      fontSize: '0.9em',
    },
    imgModal: {
      width: '150px !important',
      height: '150px !important',
      objectFit: 'scale-down',
    },
    linkModal: {
      fontSize: 18,
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  },
  '@media screen and (min-width: 769px) and (max-width: 1024px)': {
    divImg: {
      justifyContent: 'center',
    },
    crossImg: {
      width: '40px !important',
      height: '40px !important',
      position: 'absolute',
      top: '23% !important',
      right: '22% !important',
      cursor: 'pointer',
    },
    modalDescription: {
      width: '80%',
      paddingLeft: 0,
      fontSize: '0.9em',
    },
    imgModal: {
      width: '190px !important',
      height: '190px !important',
      objectFit: 'scale-down',
    },
    linkModal: {
      fontSize: 18,
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  },
});

const Project: React.FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const musicOnOff = useSelector((state: IStoreMusic) => state.reducerMusic.music);
  const music = useMusic();
  const [width] = useScreenSize();
  const [modal, setModal] = React.useState(false);
  const [contentProjects, setContentProjects] = React.useState<StructureImgState>({
    projet: { title: '', src: '', description: '', github: '' },
  });

  const handleEnterMouseImage = (image: Img) => {
    configMusic(musicOnOff, width > 1400 ? new Audio(pathCursor) : music.cursorMusic);
    dispatch(actionGetProject(image));
  };

  const handleLeaveMouseImage = () => {
    dispatch(actionRemoveProject());
  };

  const clickOnImage = (image: Img) => {
    configMusic(musicOnOff, width > 1400 ? new Audio(pathSelect) : music.selectMusic);
    setModal(true);
    setContentProjects({ projet: image });
  };

  const handleCloseModal = () => {
    configMusic(musicOnOff, width > 1400 ? new Audio(pathClose) : music.closeMusic);
    setModal(false);
  };

  return (
    <>
      <Grid container>
        {img.project.map((image) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.divImg}
            onMouseEnter={() => handleEnterMouseImage(image)}
            onMouseLeave={handleLeaveMouseImage}
            key={image.title}
          >
            <Image
              src={image.src}
              alt={image.title}
              height={200}
              width={200}
              className={classes.img}
              onClick={() => clickOnImage(image)}
            />
          </Grid>
        ))}
        <Modal openState={modal} closeMethod={handleCloseModal} cssClass={classes.modal}>
          <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            className={classes.modalContent}
          >
            <Grid className={classes.crossImg}>
              <Image
                src="/img/cross.png"
                alt="cross"
                width={40}
                height={40}
                onClick={handleCloseModal}
              />
            </Grid>
            <Grid className={classes.imgModal}>
              <Image
                src={contentProjects.projet.src}
                alt={contentProjects.projet.title}
                className={classes.imgScale}
                width={300}
                height={300}
              />
            </Grid>
            <Grid container direction="column" className={classes.modalDescription}>
              <Text>{contentProjects.projet.title}</Text>
              <Text>{contentProjects.projet.description}</Text>
              <Grid container>
                <LinkButton url={contentProjects.projet.github} className={classes.linkModal}>
                  Le lien du depot
                </LinkButton>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </Grid>
    </>
  );
};

export default Project;
