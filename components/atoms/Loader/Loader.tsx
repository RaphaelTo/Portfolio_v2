import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { WidthProperty } from '@material-ui/styles/node_modules/csstype/index';
import { Theme } from '@material-ui/core';

type LoaderProps = {
  point: number;
};

type CSSProps = {
  point: WidthProperty<string | number>;
};

const useStyle = makeStyles<Theme, CSSProps>({
  bar: {
    width: 250,
    height: 20,
    border: '2px solid white',
    borderRadius: 5,
  },
  colorBar: {
    backgroundColor: '#70b8f0',
    animation: `$loader 3s`,
    width: ({ point }) => point,
  },
  '@keyframes loader': {
    '0%': { width: 0 },
    '100%': { width: ({ point }) => point },
  },
});

const Loader: React.FC<LoaderProps> = ({ point }) => {
  /*const [exp, setExp] = React.useState(0);

  React.useEffect(() => {
    let mounted: boolean = true;

    for (let index: number = 0; index <= point; index++) {
      setTimeout(() => {
        if (mounted) {
          setExp(index);
        }
      }, 1000);
    }

    return () => {
      mounted = false;
    };
  }, []);*/

  const classes = useStyle({ point });

  return (
    <Grid container className={classes.bar}>
      <span className={classes.colorBar}></span>
    </Grid>
  );
};

export default Loader;
