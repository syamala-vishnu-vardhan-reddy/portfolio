import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure for the WeatherData
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

// Define the state structure
interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

// Initial state for the weather slice
const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

// Create the weather slice
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchDataStart(state, _action: PayloadAction<{ location: string }>) {
      state.loading = true;
      state.error = null;
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

// Export actions and reducer
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  weatherSlice.actions;

export const weatherState = (state: { weather: WeatherState }) => state.weather;

export default weatherSlice.reducer;
