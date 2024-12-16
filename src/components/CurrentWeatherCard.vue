<script setup lang="ts">
import type { CurrentWeatherType } from '@/types/CurrentWeatherType';
import { format } from 'date-fns';
import CurrentWeatherCardDetail from './CurrentWeatherCardDetail.vue';

type CurrentWeatherCardPropTypes = {
  currentWeather: CurrentWeatherType;
};

defineProps<CurrentWeatherCardPropTypes>();
</script>
<template>
  <div class="w-1/3 border-2 rounded-md">
    <div class="flex justify-between border-b-2 border-t-black px-5">
      <p>TEMPO ATUAL</p>
      <p>{{ format(Date.now(), 'HH:mm') }}</p>
    </div>
    <div class="flex flex-row flex-initial">
      <div class="flex flex-col items-start justify-center px-5">
        <h1 class="text-7xl font-bold">{{ Math.round(currentWeather.temp) }}ºC</h1>
        <h3>Real Feel: {{ Math.round(currentWeather.feels_like) }}ºC</h3>
      </div>
      <div class="w-full">
        <CurrentWeatherCardDetail detail-label="Wind">
          <p>{{ currentWeather.wind_deg }} {{ currentWeather.wind_speed }}</p>
        </CurrentWeatherCardDetail>
        <CurrentWeatherCardDetail detail-label="Wind Gust">
          <p>{{ currentWeather.wind_gust }}</p>
        </CurrentWeatherCardDetail>
        <CurrentWeatherCardDetail detail-label="Air Quality">
          <p>{{ currentWeather.wind_gust }}</p>
        </CurrentWeatherCardDetail>
      </div>
    </div>
  </div>
</template>
