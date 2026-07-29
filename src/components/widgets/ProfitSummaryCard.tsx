/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { COLOR, cardStyle } from '../../theme/tokens'
import { PROFIT_DATA } from '../../data/financeData'

const ProfitTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ value?: number }> | any }) => {
  if (!active || !payload || !payload.length) return null
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: `1px solid ${COLOR.border}`,
        borderRadius: 8,
        padding: '8px 12px',
        fontSize: 11,
        boxShadow: '0 4px 20px rgba(0,0,0,.08)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLOR.primary }} />
        Revenue <b style={{ marginLeft: 'auto' }}>${payload[0]?.value?.toLocaleString()}</b>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: COLOR.black }} />
        Cost <b style={{ marginLeft: 'auto' }}>${payload[1]?.value?.toLocaleString()}</b>
      </div>
    </div>
  )
}

const ProfitSummaryCard = () => {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: COLOR.textPrimary }}>
          Profit Summary
        </span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontSize: 12,
            color: COLOR.textSecondary,
            border: `1px solid ${COLOR.border}`,
            borderRadius: 8,
            padding: '5px 10px',
          }}
        >
          Last 8 Months <ChevronDown size={13} />
        </div>
      </div>

      <div className="flex justify-between items-center mt-2.5 mb-1.5">
        <div className="flex items-center gap-[10px] mt-[10px] mb-[6px]">
          <span style={{ fontSize: 24, fontWeight: 700, color: COLOR.textPrimary }}>
            $624,550
          </span>
          <span className="text-[11px] font-semibold text-green bg-[#E4FAF0] rounded-full px-2 py-0.5">
            ↗ +5.62%
          </span>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 12, color: COLOR.textSecondary }}>
          <span className="flex items-center gap-1.25">
            <span
              style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: COLOR.primary, display: 'inline-block' }}
            />
            Revenue
          </span>
          <span className="flex items-center gap-1.25">
            <span
              style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: COLOR.black, display: 'inline-block' }}
            />
            Cost
          </span>
        </div>
      </div>

      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={PROFIT_DATA} barCategoryGap="24%" barGap={4}>
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
              tickFormatter={(v) => `$${v / 1000}K`}
              ticks={[0, 25000, 50000, 75000, 100000]}
            />
            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} content={<ProfitTooltip />} />
            <Bar dataKey="revenue" fill={COLOR.primary} radius={[4, 4, 0, 0]} barSize={16} />
            <Bar dataKey="cost" fill={COLOR.black} radius={[4, 4, 0, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProfitSummaryCard