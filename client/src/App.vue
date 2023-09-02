<script setup lang="ts">
import TimeList from "./components/cards/TimeList.vue";
import Modal from "./components/modals/Modal.vue";
import SearchBar from "./components/search-bar/SearchBar.vue";
</script>

<template>
  <header>
    <h1 class="font-bold text-xl lg:text-3xl pb-4">Vibra Gaming Challenge</h1>
    <SearchBar />
  </header>
  <main>
    <TimeList />
    <Modal />
  </main>
</template>
