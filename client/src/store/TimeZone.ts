import { defineStore } from "pinia";
import axios from "axios";
import convertTime from "../utils/convertTime";

export const useTimeZoneStore = defineStore("timeZone", {
  state: () => ({
    timeZoneList: [],
    searchTerm: "",
    timeZonesSelected: [],
  }),
  getters: {
    getTimeZoneList(state) {
      return state.timeZoneList;
    },
    getTimeZonesSelected(state) {
      return state.timeZonesSelected;
    },
  },
  actions: {
    async fetchTimeZoneList() {
      try {
        const data = await axios.get(`http://worldtimeapi.org/api/timezone`);
        this.timeZoneList = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addTimeZoneSelected(payload: string) {
      if (
        this.timeZonesSelected.some((object) => object["timeZone"] === payload)
      )
        return;
      try {
        const data = await axios.get(
          `http://worldtimeapi.org/api/timezone/${payload}`
        );
        const newValue = convertTime(data.data.datetime);
        newValue.timeZone = data.data.timezone;
        this.timeZonesSelected.push(newValue);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
