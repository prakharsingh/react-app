import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const initialState = {};
const middlewares = [routerMiddleware(history), thunk];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

export default store;
