import type { CurrentWeatherType } from './CurrentWeatherType';
import type { DailyWeatherType } from './DailyWeatherType';
import type { HourlyWeatherType } from './HourlyWeatherType';

export type WeatherType = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherType;
  hourly: HourlyWeatherType[];
  daily: DailyWeatherType[];
};
