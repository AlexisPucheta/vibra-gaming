<script setup lang="ts">
import { toRefs } from "vue";
import CloseIcon from "../icons/CloseIcon.vue";
const props = defineProps<{
  timeZone: string;
  date: string;
  time: string;
}>();

const { timeZone, date, time } = toRefs(props);
</script>

<template>
  <div
    class="w-60 p-2 rounded-xl border-black border-2 text-3xl bg-[#87CEFA] m-2 hover:bg-[#E0FFFF] cursor-pointer"
  >
    <div class="w-full flex justify-end">
      <div class="w-4 h-4 text-[#000000] hover:text-[#ff0000]">
        <CloseIcon />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center h-36 w-full">
      <p class="truncate text-3xl font-bold w-full text-center">
        {{ timeZone }}
      </p>
      <p class="text-2xl">{{ date }}</p>
      <p class="text-2xl">{{ time }}</p>
    </div>
  </div>
</template>
