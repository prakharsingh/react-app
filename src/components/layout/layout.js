import React from 'react';
import { Grid } from 'react-flexbox-grid';

import './layout.css';

export default ({ component: Component }) => (
  <Grid fluid>
    <Component/>
  </Grid>
);
