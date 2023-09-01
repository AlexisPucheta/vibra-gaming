<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue';
</script>

<template>
  <div class="w-52 p-2 rounded-xl border-black border-2 text-3xl bg-[#87CEFA] m-2 hover:bg-[#E0FFFF] cursor-pointer">
    <div class="w-full flex justify-end">
      <div class="w-4 h-4 text-[#000000] hover:text-[#ff0000]">
        <CloseIcon class="" />
      </div>
      </div>
    <div class="flex flex-col justify-center items-center h-36">
      <p class="line-clamp-1 text-3xl font-bold">Europe/Rome</p>
      <p class="text-2xl">11/06/2020</p>
      <p class="text-2xl">5:35PM</p>
    </div>
  </div>
</template>
