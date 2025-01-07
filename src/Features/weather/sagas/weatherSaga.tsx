import { takeEvery, call, put } from "redux-saga/effects";
import { fetchData } from "../services/weatherService";
import {
  fetchDataSuccess,
  fetchDataFailure,
  fetchDataStart,
} from "../slice/weatherslice";
import { PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../slice/weatherslice";

// Saga to handle the fetch weather data action
function* fetchDataSaga(action: PayloadAction<{ location: string }>) {
  try {
    const { location } = action.payload; // Use the location here
    console.log("Saga: Fetching data for location:", location);

    // Call the API to fetch data
    const data: WeatherData = yield call(fetchData, location);

    console.log("Saga: Data fetched successfully:", data);
    yield put(fetchDataSuccess(data)); // Dispatch success
  } catch (error) {
    console.error("Saga: Error fetching data:", error);
    yield put(
      fetchDataFailure(
        "Failed to fetch data. Please check the city name and try again."
      )
    ); // Dispatch failure
  }
}

// Watch for the fetchDataStart action
export default function* fetchDataWatcher() {
  yield takeEvery(fetchDataStart.type, fetchDataSaga); // Listen for the start action
}
