import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchData } from '../services/weatherService';
import { fetchDataSuccess, fetchDataFailure, fetchDataStart } from '../slice/weatherslice';
import { PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../slice/weatherslice';

function* fetchDataSaga(action: PayloadAction<{ location: string }>): Generator<unknown, void, WeatherData> {
  try {
    console.log("Saga: Fetching data for location:", action.payload.location);
    const { location } = action.payload;
    const data: WeatherData = yield call(fetchData, location);
    console.log("Saga: Data fetched successfully:", data);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    console.error("Saga: Error fetching data:", error);
    yield put(fetchDataFailure('Failed to fetch data. Please check the city name and try again.'));
  }
}

export default function* fetchDataWatcher() {
  yield takeEvery(fetchDataStart.type, fetchDataSaga);
}
