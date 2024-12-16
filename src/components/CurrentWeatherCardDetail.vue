<script setup lang="ts">
type CurrentWeatherCardDetailPropType = {
  detailLabel: string;
};
defineProps<CurrentWeatherCardDetailPropType>();
</script>
<template>
  <div class="flex flex-row justify-between px-5 border-b-2 border-t-black">
    <p>{{ detailLabel }}</p>
    <slot></slot>
  </div>
</template>
