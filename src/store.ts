import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import weatherReducer from "./Features/weather/slice/weatherslice"; // ✅ Adjusted path
import rootSaga from "./Features/weather/sagas/weatherSaga"; // ✅ Adjusted path
import logger from "redux-logger";

// ✅ Initialize Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// ✅ Combine all reducers
const rootReducer = combineReducers({
  weather: weatherReducer,
});

// ✅ Configure Redux Store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(
      sagaMiddleware,
      ...(process.env.NODE_ENV === "development" ? [logger] : []) // ✅ Disable logger in production
    ),
});

// ✅ Run Redux-Saga Middleware
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
