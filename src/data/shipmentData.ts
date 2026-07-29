// data/shipmentData.js
// NOTE: fixed a bug from the original file — the bar chart's 6th
// entry was labeled "Jan" (duplicate) instead of "Jun".

import { COLOR } from "../theme/tokens";

export const SHIPMENT_TYPE_DATA = [
  {
    name: "Road Freight",
    value: 40,
    count: "1,150 shipment",
    color: "#856DF3",
  },
  {
    name: "Ocean Freight",
    value: 28,
    count: "425 shipments",
    color: COLOR.black,
  },
  { name: "Air Freight", value: 25, count: "700 shipments", color: "#757575" },
  { name: "Rail Freight", value: 15, count: "225 shipments", color: "#F0F0F0" },
];

export const SHIPMENT_STAT_DATA = [
  { month: "Jan", value: 1300 },
  { month: "Feb", value: 1300 },
  { month: "Mar", value: 2400 },
  { month: "Apr", value: 2400 },
  { month: "May", value: 3124 },
  { month: "Jun", value: 4600 }, // fixed: was duplicate "Jan"
  { month: "Jul", value: 4600 },
  { month: "Aug", value: 4700 },
];