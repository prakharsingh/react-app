import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Router } from 'react-router-dom';
import store, { history } from '../stores';
import Layout from '../components/layout';
import Home from '../containers/home';

export default () => (
  <Provider store={store}>
    <Router
      history={history}
      basename={process.env.PUBLIC_URL || ''}
    >
      <Switch>
        <Layout exact path="/" component={Home}/>
      </Switch>
    </Router>
  </Provider>
);
