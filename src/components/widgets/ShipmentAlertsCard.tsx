import { ExternalLink, MoreHorizontal } from 'lucide-react'
import { COLOR, cardStyle } from '../../theme/tokens'
import { ALERTS, ALERT_SUMMARY } from '../../data/alertsData'

const ShipmentAlertsCard = () => {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: COLOR.textPrimary }}>
          Shipment Alerts
        </span>
        <MoreHorizontal size={18} color={COLOR.textSecondary} />
      </div>
      <div style={{ fontSize: 13, marginTop: 6 }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: COLOR.textPrimary }}>12</span>{' '}
        <span style={{ color: COLOR.textSecondary }}>Delays Detected</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginTop: 14 }}>
        {ALERT_SUMMARY.map((s) => (
          <div key={s.label} style={{ backgroundColor: COLOR.navActiveBg, borderRadius: 10, padding: '12px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: COLOR.textPrimary }}>{s.value}</div>
            <div style={{ fontSize: 10.5, color: COLOR.textSecondary, marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
        {ALERTS.map((a, i) => (
          <div
            key={a.id}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
              borderBottom: i < ALERTS.length - 1 ? `1px solid ${COLOR.border}` : 'none',
            }}
          >
            <div
              style={{
                width: 30, height: 30, borderRadius: 8, backgroundColor: COLOR.navActiveBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <a.icon size={14} color={COLOR.primary} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: COLOR.textPrimary }}>{a.type}</div>
              <div style={{ fontSize: 11, color: COLOR.textSecondary, marginTop: 2 }}>
                <span style={{ color: COLOR.primary, fontWeight: 600 }}>{a.id}</span> · {a.category} · {a.date}
              </div>
            </div>
            <ExternalLink size={14} color={COLOR.textSecondary} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShipmentAlertsCard