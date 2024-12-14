<script setup lang="ts">
import WeatherTimeline from '@/components/WeatherTimeline.vue';
import cities from '../mocks/cities.json';
import { ref } from 'vue';
import type { UnitType } from '@/types/UnitType';
import CurrentWeatherCard from '@/components/CurrentWeatherCard.vue';
import weatherData from '@/mocks/weatherData.json';

const unitList: UnitType[] = ['metric', 'imperial', 'standard'];
const unit = ref<UnitType>('metric');
</script>
<template>
  <h1 class="font-bold">Welcome to the weather app!</h1>

  <label for="cities">Select city:</label>
  <select name="cities">
    <option v-for="city in cities">{{ city.name }}, {{ city.countryCode }}</option>
  </select>

  <label for="unit">Select unit:</label>
  <select v-model="unit" name="unit">
    <option v-for="unit of unitList">{{ unit }}</option>
  </select>
  <CurrentWeatherCard :current-weather="weatherData.current" />
  <WeatherTimeline :unit="unit" />
</template>
<style></style>
