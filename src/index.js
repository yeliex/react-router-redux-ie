import syncHistoryWithStore from 'react-router-redux/src/sync';
import { LOCATION_CHANGE, routerReducer } from 'react-router-redux/src/reducer';
import {
  CALL_HISTORY_METHOD,
  push, replace, go, goBack, goForward,
  routerActions
} from 'react-router-redux/src/actions';
import routerMiddleware from 'react-router-redux/src/middleware';

export {
  syncHistoryWithStore,
  LOCATION_CHANGE, routerReducer,
  CALL_HISTORY_METHOD, push, replace, go, goBack, goForward, routerActions,
  routerMiddleware
};