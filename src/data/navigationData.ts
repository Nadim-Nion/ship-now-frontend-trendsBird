// data/navigationData.js
// Navigation data lives here so it can later be swapped for a
// role-based/permissions-driven list without touching Sidebar.jsx.

import {
  BarChart2,
  Bell,
  Calendar,
  FileText,
  LayoutGrid,
  MessageSquare,
  Navigation as NavigationIcon,
  Package,
  Settings,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

export const NAV_ITEMS = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: BarChart2, label: "Analytics" },
  { icon: Calendar, label: "Calendar" },
  { icon: Package, label: "Shipments" },
  { icon: NavigationIcon, label: "Tracking" },
  { icon: Warehouse, label: "Warehouse" },
  { icon: Truck, label: "Fleets" },
  { icon: Users, label: "Drivers" },
  { icon: FileText, label: "Invoices & Billing" },
];

export const BOTTOM_NAV_ITEMS = [
  { icon: MessageSquare, label: "Message", badge: 19 },
  { icon: Bell, label: "Notification", badge: 5 },
  { icon: Settings, label: "Settings" },
];