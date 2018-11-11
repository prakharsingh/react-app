import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router-dom';
import store, { history } from '../stores';
import Layout from '../components/layout';
import Home from '../containers/home';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Switch>
        <Layout exact path="/" component={Home}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
