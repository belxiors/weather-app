<script setup lang="ts">
import weatherData from '@/mocks/weatherData.json';
import WeatherTimelineItem from './WeatherTimelineItem.vue';
import type { UnitType } from '@/types/UnitType';

type WeatherTimelinePropTypes = {
  unit: UnitType;
};

defineProps<WeatherTimelinePropTypes>();
</script>
<template>
  <div class="flex flex-row">
    <WeatherTimelineItem v-for="data in weatherData.daily" :unit="unit" :weather-data="data" />
  </div>
</template>
