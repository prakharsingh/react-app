import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const middlewares = [routerMiddleware(history), sagaMiddleware];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;
