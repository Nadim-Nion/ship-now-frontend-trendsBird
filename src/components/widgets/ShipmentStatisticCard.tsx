import { ChevronDown } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { COLOR, cardStyle } from '../../theme/tokens'
import { SHIPMENT_STAT_DATA } from '../../data/shipmentData'

interface StatTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

const StatTooltip = ({ active, payload, label }: StatTooltipProps) => {
  if (!active || !payload || !payload.length) return null
  return (
    <div
      style={{
        backgroundColor: '#EFEBFF',
        borderRadius: 8,
        padding: '6px 10px',
        fontSize: 11,
        color: COLOR.textPrimary,
      }}
    >
      <div style={{ color: COLOR.textSecondary }}>{label}</div>
      <div style={{ fontWeight: 700 }}>{payload[0]?.value?.toLocaleString()}</div>
    </div>
  )
}

const ShipmentStatisticCard = () => {
  return (
    <div style={cardStyle}>
      <div className="flex justify-between items-center">
        <span style={{ fontSize: 15, fontWeight: 600, color: COLOR.textPrimary }}>
          Shipment Statistic
        </span>
        <div className="flex items-center gap-1 text-[12px] text-textSecondary">
          Last Year <ChevronDown size={13} />
        </div>
      </div>

      <div className="flex items-center gap-[10px] mt-[10px] mb-[6px]">
        <span style={{ fontSize: 24, fontWeight: 700, color: COLOR.textPrimary }}>
          4,352
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: COLOR.green,
            backgroundColor: '#E4FAF0',
            borderRadius: 999,
            padding: '2px 8px',
          }}
        >
          ↗ +8.7%
        </span>
      </div>

      <div style={{ width: '100%', height: 190 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SHIPMENT_STAT_DATA} barCategoryGap="30%">
            <CartesianGrid vertical={false} stroke="#F0F0F0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: COLOR.textSecondary }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: COLOR.textSecondary }}
              tickFormatter={(v) => `${v / 1000}K`}
              ticks={[0, 1200, 2400, 3600, 4800]}
            />
            <Tooltip cursor={false} content={<StatTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]}>
              {SHIPMENT_STAT_DATA.map((d, i) => (
                <Cell key={i} fill={d.month === 'May' ? COLOR.primary : '#EDEAFB'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ShipmentStatisticCard