import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import AppReducer from './app-reducer';
import StorageReducer from './storage-reducer';

export default(history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  app: AppReducer,
  storage: StorageReducer
});
