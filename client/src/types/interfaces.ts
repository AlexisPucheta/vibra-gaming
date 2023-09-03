export interface ITimeZoneSelected {
  time: string;
  timeZone?: string;
  date: string;
}

export interface IModalWarning {
  open: boolean;
  timeZone: string;
}
export interface ITimeZone {
  name: string;
  localTime: string;
}
export interface ITimeZoneState {
  timeZoneList: ITimeZone[];
  searchTerm: string;
  timeZonesSelected: ITimeZoneSelected[];
  modalWarning: IModalWarning;
}
