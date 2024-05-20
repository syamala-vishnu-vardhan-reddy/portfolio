import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
    }[];
  };
}


interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
}

interface FetchDataPayload {
  location: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchDataStart(state, _action: PayloadAction<FetchDataPayload>) {
      state.loading = true;
      state.error = null;
      const { location } = _action.payload;
      console.log('Location:', location);
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

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = weatherSlice.actions;

export const weatherState = (state: { weather: WeatherState }) => state.weather;

export default weatherSlice.reducer;
