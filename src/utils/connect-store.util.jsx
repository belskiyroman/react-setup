import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from '../core/reducers/index';
import sagas from '../core/sagas/index';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({ collapsed: true }));
}

const store = createStore(
  reducers,
  {},
  applyMiddleware(...middlewares),
);

const connectStore = Component => () => (
  <Provider store={store}>
    <Component />
  </Provider>
);

sagaMiddleware.run(sagas);

export default connectStore;
