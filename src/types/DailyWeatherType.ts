import type { Weather } from './WeatherDescriptionType'

export type DailyWeatherType = {
  dt: number
  sunrise: number
  sunset: number
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  weather: Weather[]
  clouds: number
  pop: number
  uvi: number
}
