import { defineStore } from "pinia";
import axios from "axios";
import convertTime from "../utils/convertTime";

interface ITimeZoneSelected {
  time: string;
  timeZone?: string;
  date: string;
}

interface IModalWarning {
  open: boolean,
  timeZone: string
}
interface ITimeZoneState {
  timeZoneList: string[];
  searchTerm: string;
  timeZonesSelected: ITimeZoneSelected[];
  modalWarning: IModalWarning;
}

export const useTimeZoneStore = defineStore("timeZone", {
  state: (): ITimeZoneState => ({
    timeZoneList: [],
    searchTerm: "",
    timeZonesSelected: [],
    modalWarning: {
      open: false,
      timeZone: ''
    }
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
        const newValue: ITimeZoneSelected = convertTime(data.data.datetime);
        newValue.timeZone = data.data.timezone;
        this.timeZonesSelected.push(newValue);
      } catch (error) {
        console.log(error);
      }
    },
    deleteZoneTimeSelected(payload: string) {
      this.timeZonesSelected = this.timeZonesSelected.filter(
        (e) => e.timeZone !== payload
      );
    },
    async refresh(payload: string) {
      try {
        const data = await axios.get(
          `http://worldtimeapi.org/api/timezone/${payload}`
        );
        const newValue: ITimeZoneSelected = convertTime(data.data.datetime);
        newValue.timeZone = data.data.timezone;
        const index = this.timeZonesSelected.findIndex(
          (ele) => ele.timeZone === payload
        );
        this.timeZonesSelected[index] = newValue;
      } catch (error) {
        console.log(error);
      }
    },
    openModal(payload: string) {
      this.modalWarning = {
        open: true,
        timeZone: payload
      }
    },
    closeModal() {
      this.modalWarning = {
        open: false,
        timeZone: ''
      }
    }
  },
});
