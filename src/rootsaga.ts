import { all } from 'redux-saga/effects';
import fetchDataWatcher from './Features/weather/sagas/weatherSaga';

export default function* rootSaga() {
  yield all([
    fetchDataWatcher(),
  ]);
}
