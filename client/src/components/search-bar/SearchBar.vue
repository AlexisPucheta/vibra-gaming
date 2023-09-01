<script setup lang="ts">
import { watch, ref } from 'vue';
import ChevronIcon from "../icons/ChevronIcon.vue";

const timeZone = ref(undefined)

watch(timeZone,(v) =>{
    console.log("ASD", v)
})


</script>

<template>
    <div class="flex border-2 border-black h-10 p-2 rounded-xl">
        <input v-model="timeZone" placeholder="Search a Time Zone" class="w-full focus-visible:outline-none font-normal"/>
        <div class="w-4 h-4 mt-0.5">
            <ChevronIcon />
        </div>
    </div>
</template>