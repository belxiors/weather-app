<script setup lang="ts">
import WeatherTimelineItem from './WeatherTimelineItem.vue';
import type { UnitType } from '@/types/UnitType';
import type { WeatherType } from '@/types/WeatherType';

type WeatherTimelinePropTypes = {
  weatherData: WeatherType;
  unit: UnitType;
};

defineProps<WeatherTimelinePropTypes>();
</script>
<template>
  <div class="flex flex-row">
    <WeatherTimelineItem v-for="data in weatherData.daily" :unit="unit" :weather-data="data" />
  </div>
</template>
