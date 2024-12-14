<script setup lang="ts">
import type { CurrentWeatherType } from '@/types/CurrentWeatherType';
import { format } from 'date-fns';

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
        <div class="flex flex-row justify-between px-5 border-b-2 border-t-black">
          <p>Wind</p>
          <p>{{ currentWeather.wind_deg }} {{ currentWeather.wind_speed }}</p>
        </div>
        <div class="flex flex-row justify-between px-5 border-b-2 border-t-black">
          <p>Wind Gust</p>
          <p>{{ currentWeather.wind_gust }}</p>
        </div>
        <div class="flex flex-row justify-between px-5 border-b-2 border-t-black">
          <p>Air Quality</p>
          <p>{{ currentWeather.wind_gust }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
