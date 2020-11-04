import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Text from '@/components/atoms/Text/Text';
import LinkButton from '@/components/atoms/LinkButton/LinkButton';

const useStyle = makeStyles<Theme>({
  start: {
    fontSize: '1.3em',
  },
  '@media screen and (min-width: 320px) and (max-width: 480px)': {
    start: {
      fontSize: 10,
    },
  },
});

const EndCredits: React.FC = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.start}>
        <Text>
          Le portfolio a été réalisé avec la librairie ReactJS (NextJS pour le framework) et et
          MaterialUI pour l'utilisation de Grid ainsi que la création de CSS.
        </Text>
        <Text>
          Concernant les inspirations du portfolio il y a: <br /> - Du Zelda (Ocarina of Time pour
          être plus précis) <br />- Du Pokémon
          <br /> - Et du Undertale
        </Text>
        <Text>
          L'insparation de Zelda se ressent sur les musiques utilisées,et la page "Projets" qui
          ressemble au menu d'objet dans Ocarina of Time ou Majora's Mask.
        </Text>
        <Text>
          L'inspiration Pokémon est présente dans la page "Competences" avec ce système de niveau.
          D'ailleurs je vais expliquer rapidement ce que veux dire les niveaux. Dans pokémon, le
          niveau commence au niveau 5 (ou 1 pour les versions plus récentes). Et en fonction du
          niveau du pokémon, on peut avoir une idée où on en est au niveau de l'aventure. Par
          exemple pour le langage Typescript, je dis j'ai le niveau 16. Le niveau 16 dans pokémon
          veut dire qu'on est entre la première arene et la deuxième. Mais il veut dire aussi que
          notre pokémon vient surement évoluer en la deuxième évolution. Pour résumer cela veut dire
          qu'on commence à prendre ses repères.
        </Text>
        <Text>
          L'inspiration de Undertale est présente au niveau du design du site. Si vous connaissez le
          jeu, on peut voir qu'il ressemble au jeu pendant un combat.
        </Text>
        <Text>
          Avant de conclure, je voulais remercier Kyuji. Il s'agit de la personne ayant transformer
          les logos des langages en "pixelarts". Un grand merci à lui, vous pouvez le suivre sur les
          réseaux suivants: <LinkButton url="https://www.twitch.tv/kyuji_9g">Twitch</LinkButton>,
          <LinkButton url="https://twitter.com/Kyuji_9G">Twitter</LinkButton>,{' '}
          <LinkButton url="https://www.youtube.com/channel/UC6C3oeEM-cIug8t3xNJrbhw">
            Youtube
          </LinkButton>
        </Text>
        <Text>En espérant que mon Portfolio vous a plu</Text>
        <Grid container justify="center" alignContent="center">
          <Text>Merci beaucoup</Text>
        </Grid>
      </div>
    </>
  );
};

export default EndCredits;
