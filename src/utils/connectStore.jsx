import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../core/reducers/index';
import sagas from '../core/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

const connectStore = Component => () => (
  <Provider store={store}>
    <Component />
  </Provider>
);

sagaMiddleware.run(sagas);

export default connectStore;
