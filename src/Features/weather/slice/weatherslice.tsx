import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherData {
  location?: { name: string };
  current?: {
    temp_c: number;
    condition: { text: string; icon: string };
    wind_kph: number;
  };
  forecast?: {
    forecastday: {
      hour: {
        time: string;
        temp_c: number;
        condition: { icon: string; text: string };
      }[];
    }[];
  };
}

interface WeatherState {
  data: WeatherData | null;
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchDataStart: (state, _action: PayloadAction<{ location: string }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<WeatherData>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  weatherSlice.actions;
export const weatherState = (state: { weather: WeatherState }) => state.weather;
export default weatherSlice.reducer;
