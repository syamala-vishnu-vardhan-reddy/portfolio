import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from '../src/Features/weather/slice/weatherslice';
import rootSaga from '../src/Features/weather/sagas/weatherSaga';
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

