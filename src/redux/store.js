import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import testSlice from './slices/testSlice';
import rootSaga from './sagas';

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  test: testSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);
