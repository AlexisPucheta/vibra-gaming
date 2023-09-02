<script setup lang="ts">
import TimeCard from "./TimeCard.vue";
import { useTimeZoneStore } from "../../store/TimeZone";
import { computed } from "vue";

const store = useTimeZoneStore();

const timeZonesSelected = computed(() => store.getTimeZonesSelected);
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div v-for="option in timeZonesSelected">
        <TimeCard
          :timeZone="option.timeZone || ''"
          :date="option.date"
          :time="option.time"
        />
      </div>
    </div>
  </div>
</template>
