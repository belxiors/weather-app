<script setup lang="ts">
import { computed } from 'vue';
import { format } from 'date-fns';
import type { DailyWeatherType } from '@/types/DailyWeatherType';
import type { Units, UnitType } from '@/types/UnitType';
import units from '@/mocks/units.json';

type WeatherTimelineItemPropTypes = {
  weatherData: DailyWeatherType;
  unit: UnitType;
};

const unitSystem: Units = units;
const props = defineProps<WeatherTimelineItemPropTypes>();
const dayFormated = computed(() => format(props.weatherData.dt * 1000, 'EEEEEE, d'));
const temperatureLabel = computed(() => unitSystem[props.unit].temperature);
</script>
<template>
  <div
    class="flex flex-col items-center justify-center w-1/4 h-1/4 bg-gray-200 rounded-lg shadow-lg m-4 p-4"
  >
    <h2>{{ dayFormated }}</h2>
    <div class="flex flex-row gap-2">
      <div>{{ Math.trunc(weatherData.temp.min) }}{{ temperatureLabel }}</div>
      <div>{{ Math.trunc(weatherData.temp.max) }}{{ temperatureLabel }}</div>
    </div>
  </div>
</template>
