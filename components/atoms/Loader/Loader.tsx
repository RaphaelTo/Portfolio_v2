import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(() => ({
  bar: {
    width: 250,
    height: 20,
    border: '2px solid white',
    borderRadius: 5,
  },
  colorBar: {
    backgroundColor: '#70b8f0',
    width: ({ exp }) => exp,
  },
}));

const Loader = ({ point }) => {
  const [exp, setExp] = React.useState(0);

  React.useEffect(() => {
    let mounted = true;

    for (let index = 0; index <= point; index++) {
      setTimeout(() => {
        if (mounted) {
          setExp(index);
        }
      }, 1000);
    }

    return () => {
      mounted = false;
    };
  }, []);

  const classes = useStyle({ exp });

  return (
    <Grid container className={classes.bar}>
      <span className={classes.colorBar}></span>
    </Grid>
  );
};

export default Loader;
