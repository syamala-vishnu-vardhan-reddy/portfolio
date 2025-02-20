import { takeEvery, call, put } from "redux-saga/effects";
import { fetchData } from "../services/weatherService";
import {
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataStart,
} from "../slice/weatherslice";
import { PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../slice/weatherslice";

function* fetchDataSaga(action: PayloadAction<{ location: string }>) {
  try {
    const { location } = action.payload;
    console.log("Fetching weather data for:", location);
    const data: WeatherData = yield call(fetchData, location);
    console.log("Weather data received:", data);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    console.error("Error fetching weather data:", error);
    yield put(
      fetchDataFailure(
        "Failed to fetch data. Please check the city name and try again."
      )
    );
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchDataStart.type, fetchDataSaga);
}
