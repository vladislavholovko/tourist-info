import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers/index';

const middleware = [thunk];

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  middleware.push(loggerMiddleware({
    level: 'info',
    collapsed: true,
  }));
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV !== 'production'
  ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
