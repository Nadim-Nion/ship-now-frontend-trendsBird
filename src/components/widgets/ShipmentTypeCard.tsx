import { MoreHorizontal } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { COLOR, cardStyle } from '../../theme/tokens'
import { SHIPMENT_TYPE_DATA } from '../../data/shipmentData'

const ShipmentTypeCard = () => {
  return (
    <div className="row-span-2 flex flex-col" style={cardStyle}>
      <div className="flex justify-between items-center">
        <span style={{ fontSize: 15, fontWeight: 600, color: COLOR.textPrimary }}>
          Shipment Type
        </span>
        <MoreHorizontal size={18} color={COLOR.textSecondary} />
      </div>

      <div style={{ position: 'relative', height: 190, marginTop: 6 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={SHIPMENT_TYPE_DATA}
              dataKey="value"
              innerRadius={62}
              outerRadius={85}
              startAngle={90}
              endAngle={-270}
              stroke="none"
              paddingAngle={2}
            >
              {SHIPMENT_TYPE_DATA.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div style={{ fontSize: 12, color: COLOR.textSecondary }}>Total Shipment</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: COLOR.textPrimary }}>
            2,500
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-[16px] gap-x-[8px] mt-[12px]">
        {SHIPMENT_TYPE_DATA.map((d) => (
          <div key={d.name} className="flex flex-col gap-[4px]">
            <span
              className="inline-block text-[11px] font-bold text-white rounded-[5px] px-[5px] py-[1px] w-fit"
              style={{ backgroundColor: d.color }}
            >
              {d.value}%
            </span>
            <span style={{ fontSize: 13, fontWeight: 600, color: COLOR.textPrimary }}>
              {d.name}
            </span>
            <span style={{ fontSize: 11, color: COLOR.textSecondary }}>{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShipmentTypeCard