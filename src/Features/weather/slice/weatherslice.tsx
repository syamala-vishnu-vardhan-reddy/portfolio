import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
    wind_kph: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        maxwind_kph: number;
        condition: { text: string };
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
    }>;
  };
}

interface WeatherState {
  data: WeatherData | null; // Ensure the state can be null initially
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchDataStart(state, action: PayloadAction<{ location: string }>) {
      state.loading = true;
      state.error = null;
      state.data = action.payload;
    },
    fetchDataSuccess(state, action: PayloadAction<WeatherData>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  weatherSlice.actions;

export const weatherState = (state: { weather: WeatherState }) => state.weather;

export default weatherSlice.reducer;
