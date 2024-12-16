<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import WeatherTimeline from '@/components/WeatherTimeline.vue';
import CurrentWeatherCard from '@/components/CurrentWeatherCard.vue';
import type { UnitType } from '@/types/UnitType';
import type { GeoResponseType } from '@/types/GeoResponseType';
import type { WeatherType } from '@/types/WeatherType';
import cities from '../mocks/cities.json';

const unitList: UnitType[] = ['metric', 'imperial', 'standard'];
const unit = ref<UnitType>('metric');
const selectedCity = ref<string>('Lisboa, PT');
const weatherData = ref<WeatherType>();

onMounted(() => {
  if (selectedCity) {
    getWeatherData();
  }
});

watch(selectedCity, () => {
  getWeatherData();
});

function handleRefreshClick() {
  getWeatherData();
}

async function getCoordinates() {
  if (selectedCity) {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity.value}&limit=5&appid=`,
    );

    const responseBody: GeoResponseType[] = await response.json();
    if (responseBody.length > 0) {
      return { lat: responseBody[0].lat, lon: responseBody[0].lon };
    }
  }
}

async function getWeatherData() {
  if (selectedCity) {
    const coordinates = await getCoordinates();
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&appid=&units=Metric`,
    );

    weatherData.value = await response.json();
  }
}
</script>
<template>
  <h1 class="font-bold">Welcome to the weather app!</h1>

  <label for="cities">Select city:</label>
  <select v-model="selectedCity" name="cities">
    <option v-for="city in cities">{{ city.name }}, {{ city.countryCode }}</option>
  </select>

  <label for="unit">Select unit:</label>
  <select v-model="unit" name="unit">
    <option v-for="unit of unitList">{{ unit }}</option>
  </select>

  <button class="border-2 rounded-md bg-sky-600 px-4" @click="handleRefreshClick">Refresh</button>
  <CurrentWeatherCard v-if="weatherData" :current-weather="weatherData.current" />
  <WeatherTimeline v-if="weatherData" :weather-data="weatherData" :unit="unit" />
</template>
<style></style>
