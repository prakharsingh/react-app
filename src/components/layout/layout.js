import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Grid } from 'react-flexbox-grid';
import Toast from '../toast';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default ({ component: Component }) => (
  <MuiThemeProvider theme={ theme }>
    <Grid fluid>
      <Component/>
      <Toast/>
    </Grid>
  </MuiThemeProvider>
);
