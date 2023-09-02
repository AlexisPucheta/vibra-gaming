<script setup lang="ts">
import TimeList from './components/cards/TimeList.vue'
import SearchBar from './components/search-bar/SearchBar.vue'
</script>

<template>
  <header>
      <SearchBar />
  </header>
  <main>
    <TimeList/>
  </main>
</template>
