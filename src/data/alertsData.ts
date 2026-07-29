// data/alertsData.js

import { CloudRain, FileWarning, MapPin } from "lucide-react";

export const ALERTS = [
  {
    icon: FileWarning,
    id: "#SH8743921",
    category: "Ocean Freight",
    date: "Mar 20",
    type: "Customs Clearance Delay",
  },
  {
    icon: MapPin,
    id: "#SH8725810",
    category: "Road Freight",
    date: "Mar 20",
    type: "Incorrect Address Provided",
  },
  {
    icon: CloudRain,
    id: "#SH8790043",
    category: "Air Freight",
    date: "Mar 19",
    type: "Weather-Related Hold",
  },
  {
    icon: MapPin,
    id: "#SH8716654",
    category: "Rail Freight",
    date: "Mar 18",
    type: "Incorrect Address Provided",
  },
];

export const ALERT_SUMMARY = [
  { value: 5, label: "Customs Clearance Delay" },
  { value: 4, label: "Incorrect Address Provided" },
  { value: 3, label: "Weather-Related Hold" },
];