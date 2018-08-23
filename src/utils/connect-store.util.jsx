import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { localStorageMiddleware, reHydrateStore } from './index';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({ collapsed: true }));
}

let store;
export const getStore = () => store;

export default (reducers, sagas, storageKey) => {
  store = createStore(
    reducers,
    reHydrateStore(storageKey),
    composeEnhancers(applyMiddleware(
      ...middlewares,
      localStorageMiddleware(storageKey),
    )),
  );

  const connectStore = Component => () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );

  sagaMiddleware.run(sagas);

  return connectStore;
};
