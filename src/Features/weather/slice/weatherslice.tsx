import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number; // Wind speed in km/h
    humidity: number; // Humidity percentage
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        maxwind_kph: number; // Maximum wind speed in km/h
        avghumidity: number; // Average humidity percentage
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
      hour: {
        time: string; // Time of the forecast
        temp_c: number; // Temperature in Celsius
        temp_f: number; // Temperature in Fahrenheit
        condition: {
          text: string; // Weather condition description
          icon: string; // URL to weather condition icon
          code: number; // Weather condition code
        };
        wind_kph: number; // Wind speed in km/h
        humidity: number; // Humidity percentage
      }[];
    }[];
  };
}

interface WeatherState {
  data: WeatherData | string;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: "",
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<WeatherData>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  weatherSlice.actions;

export const weatherState = (state: { weather: WeatherState }) => state.weather;

export default weatherSlice.reducer;
