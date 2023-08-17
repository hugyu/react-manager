export namespace DashBoard {
  export interface Report {
    driverCount: number
    totalMoney: number
    orderCount: number
    cityNum: number
  }
  export interface Line {
    label: Array<string>,
    order: Array<number>,
    money:Array<number>
  }
  export interface PieItem {
    value: number,
    name: string
  }
  export type Pie = Array<PieItem>

  export interface RadarIndicator {
    name: string,
    value: number
  }
  export interface RadarData {
    value: Array<number>,
    name:string
  }
  export interface Radar {
    indicator: Array<RadarIndicator>,
    data: Array<RadarData>
  }

}
