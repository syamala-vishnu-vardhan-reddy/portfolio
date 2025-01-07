import { WeatherData } from "../slice/weatherslice";

export const fetchData = async (location: string): Promise<WeatherData> => {
  try {
    console.log(`Fetching data for location: ${location}`);
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=3`
    );

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage =
        errorData?.error?.message || "Failed to fetch weather data";
      throw new Error(errorMessage);
    }

    const data: WeatherData = await response.json();
    console.log("Service: Data received:", data);
    return data;
  } catch (error) {
    console.error("Service: Error fetching weather data:", error);
    throw new Error(
      error instanceof Error ? error.message : "Unknown error occurred"
    );
  }
};
