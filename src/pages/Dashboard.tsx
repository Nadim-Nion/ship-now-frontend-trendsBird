import React from 'react'
import { DollarSign, Monitor, Package } from 'lucide-react'
import { COLOR, FONT } from './theme/tokens'

import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import StatCard from './components/common/StatCard'
import ShipmentTypeCard from './components/widgets/ShipmentTypeCard'
import ShipmentStatisticCard from './components/widgets/ShipmentStatisticCard'
import ProfitSummaryCard from './components/widgets/ProfitSummaryCard'
import ProductCategoriesCard from './components/widgets/ProductCategoriesCard'
import ShipmentRouteCard from './components/widgets/ShipmentRouteCard'
import ShipmentAlertsCard from './components/widgets/ShipmentAlertsCard'

// This file's only job is layout composition: which widgets exist
// and how they're arranged in the grid. It should never contain
// chart logic, mock data, or style-token definitions — those live
// in their own files so this stays readable at a glance.
const Dashboard = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor: COLOR.bg,
        fontFamily: FONT,
        color: COLOR.textPrimary,
        overflow: 'hidden',
      }}
    >
      <Sidebar />

      <main style={{ flex: 1, padding: 20, overflowY: 'auto', boxSizing: 'border-box' }}>
        <Header />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 300px',
            gap: 20,
            marginTop: 20,
          }}
        >
          <StatCard
            title="Active Shipments"
            value="1,284"
            unit="shipments"
            trend="+8.7%"
            positive
            note="from last week"
            icon={Package}
          />
          <StatCard
            title="Delivery Performance"
            value="94.3%"
            unit="on-time"
            trend="-1.2%"
            positive={false}
            note="from last week"
            icon={Monitor}
          />
          <StatCard
            title="Revenue"
            value="$82,450"
            unit="total"
            trend="+12.4%"
            positive
            note="from last month"
            icon={DollarSign}
          />

          <ShipmentTypeCard />

          <div style={{ gridColumn: 'span 3', display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 20 }}>
            <ShipmentStatisticCard />
            <ProfitSummaryCard />
          </div>

          <ProductCategoriesCard />
          <div style={{ gridColumn: 'span 2' }}>
            <ShipmentRouteCard />
          </div>
          <ShipmentAlertsCard />
        </div>
      </main>
    </div>
  )
}

export default Dashboard