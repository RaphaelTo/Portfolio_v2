import React from 'react';
import Grid from '@material-ui/core/Grid';

import Text from '@/components/atoms/Text/Text';
import Loader from '@/components/atoms/Loader/Loader';

const Level = ({ lvl, exp }) => {
  return (
    <Grid container direction="column" justify="center" alignContent="center">
      <Text>{lvl}</Text>
      <Loader point={exp} />
    </Grid>
  );
};

export default Level;
