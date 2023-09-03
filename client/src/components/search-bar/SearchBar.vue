<script setup lang="ts">
import { ref, computed } from "vue";
import ChevronIcon from "../icons/ChevronIcon.vue";
import { useTimeZoneStore } from "../../store/TimeZone";
import { ITimeZone } from "../../types/interfaces";
import LoadingIndicator from "../LoadingIndicator.vue";

const store = useTimeZoneStore();
store.fetchTimeZoneList();

const searchTerm = ref<string>("");
const selected = ref<string>("");

const timeZoneList = computed(() => store.getTimeZoneList);

const filteredItems = computed<ITimeZone[]>(() =>
  timeZoneList.value.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const selectItem = (item: ITimeZone) => {
  searchTerm.value = item.name;
  selected.value = item.name;
  store.addTimeZoneSelected(selected.value);
};

const showDropdown = computed(
  () => selected.value !== searchTerm.value && searchTerm.value !== ""
);
</script>

<template>
  <div class="relative">
    <div class="flex border-2 border-black h-10 p-2 rounded-xl w-full">
      <input
        v-model="searchTerm"
        placeholder="Enter the time zone"
        class="w-full focus-visible:outline-none font-normal"
      />
      <div class="w-4 h-4 mt-0.5">
        <ChevronIcon
          class="transition duration-200"
          :class="[showDropdown ? 'rotate-90' : 'rotate-0']"
        />
      </div>
    </div>
    <div
      v-if="showDropdown"
      class="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg py-2"
      key="list"
    >
      <div v-if="!filteredItems.length" class="flex justify-center">
        <LoadingIndicator />
      </div>
      <div v-else>
        <p class="px-4 font-bold bg-white w-full">
          Showing {{ filteredItems.length }} of {{ timeZoneList.length }}
        </p>
        <ul class="overflow-y-scroll max-h-40">
          <li
            v-for="item in filteredItems"
            :key="item.name"
            @click="selectItem(item)"
            class="px-4 pb-2 cursor-pointer hover:bg-gray-100"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
