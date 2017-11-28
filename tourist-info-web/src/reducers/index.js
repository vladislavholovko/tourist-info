import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import appReducer from './app';
import dashboardReducer from './dashboard';

export default combineReducers({
  routing,
  appReducer,
  dashboardReducer,
});
