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
export interface ITimeZone {
  name: string,
  localTime: string,
}
interface ITimeZoneState {
  timeZoneList: ITimeZone[];
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
        const data = await axios.get(`http://localhost:3000/timezones`);
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
        const path = payload.replace(/\//g,'+')
        const data = await axios.get(
          `http://localhost:3000/timezones/${path}`
        );
        const newValue: ITimeZoneSelected = convertTime(data.data.localTime);
        newValue.timeZone = data.data.name;
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
        const path = payload.replace(/\//g,'+')
        const data = await axios.get(
          `http://localhost:3000/timezones/${path}`
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
