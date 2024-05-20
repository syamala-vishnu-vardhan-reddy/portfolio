import { WeatherData } from '../slice/weatherslice'

export const fetchData = async (location: string): Promise<WeatherData> => {
  try {
    console.log(`Fetching data for location: ${location}`)
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a47e1c756b6e44d1b0d104134231410&q=${location}`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch weather data')
    }
    const data = await response.json()
    console.log('Service: Data received:', data)
    return data
  } catch (error) {
    console.error('Service: Error fetching weather data:', error)
    throw error
  }
}
