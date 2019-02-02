import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(
      applyMiddleware(
        ...middleware,
      ),
    ),
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
