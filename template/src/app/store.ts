import {persistStore} from 'redux-persist';
import {logger} from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {rootSaga,rootReducer} from "app";

const STATUS_APP = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: STATUS_APP,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: false,
      thunk: false
    });
    const appendSagaMiddleware = defaultMiddleware.concat(sagaMiddleware);

    return STATUS_APP ? appendSagaMiddleware.concat(logger) : appendSagaMiddleware;
  },
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;