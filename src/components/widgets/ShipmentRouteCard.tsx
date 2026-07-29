import { Navigation as NavigationIcon, Search, Truck, ZoomIn, ZoomOut } from 'lucide-react'
import { COLOR, cardStyle } from '../../theme/tokens'

const ShipmentRouteCard = () => {
  return (
    <div style={{ ...cardStyle, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: 20, paddingBottom: 0, display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: `1px solid ${COLOR.border}`,
            borderRadius: 10,
            padding: '0 14px',
            height: 40,
            width: 260,
            backgroundColor: '#fff',
          }}
        >
          <input
            placeholder="Search by Shipping ID..."
            style={{ border: 'none', outline: 'none', fontSize: 13, width: '100%', color: COLOR.textPrimary }}
          />
          <Search size={15} color={COLOR.textSecondary} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div
            style={{
              width: 30, height: 30, borderRadius: 8, border: `1px solid ${COLOR.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
            }}
          >
            <ZoomIn size={14} color={COLOR.textSecondary} />
          </div>
          <div
            style={{
              width: 30, height: 30, borderRadius: 8, border: `1px solid ${COLOR.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',
            }}
          >
            <ZoomOut size={14} color={COLOR.textSecondary} />
          </div>
        </div>
      </div>

      {/* map area */}
      <div
        style={{
          flex: 1,
          minHeight: 150,
          margin: '16px 20px',
          borderRadius: 12,
          position: 'relative',
          backgroundColor: '#FAFAFB',
          backgroundImage: 'radial-gradient(#E4E4E7 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          overflow: 'hidden',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 600 190" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M 0 160 L 220 105 L 600 20" fill="none" stroke="#222222" strokeWidth="2" />
          <path d="M 220 105 L 600 30" fill="none" stroke={COLOR.primary} strokeWidth="3" />
        </svg>
        <div
          style={{
            position: 'absolute', left: '37%', top: '55%', width: 30, height: 30, borderRadius: '50%',
            backgroundColor: COLOR.primary, border: '3px solid #fff', boxShadow: '0 2px 8px rgba(123,97,255,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translate(-50%,-50%)',
          }}
        >
          <NavigationIcon size={13} color="#fff" style={{ transform: 'rotate(45deg)' }} />
        </div>
      </div>

      {/* info card */}
      <div style={{ margin: '0 20px 20px 20px', border: `1px solid ${COLOR.border}`, borderRadius: 14, padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: COLOR.textPrimary }}>#SH8743921</span>
              <span
                style={{
                  fontSize: 11, fontWeight: 600, color: COLOR.primary, backgroundColor: COLOR.navActiveBg,
                  borderRadius: 999, padding: '2px 10px',
                }}
              >
                In Transit
              </span>
            </div>
            <div style={{ fontSize: 11, color: COLOR.textSecondary, marginTop: 3 }}>On Schedule</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, color: COLOR.textSecondary }}>Courier:</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLOR.textPrimary }}>Daniel Cooper</div>
            <div style={{ fontSize: 11, color: COLOR.textSecondary }}>SkyLogix Express</div>
          </div>
        </div>

        <div style={{ position: 'relative', margin: '18px 4px 8px 4px', height: 6 }}>
          <div style={{ position: 'absolute', top: 2, left: 0, right: 0, height: 3, backgroundColor: '#EDEAFB', borderRadius: 2 }} />
          <div style={{ position: 'absolute', top: 2, left: 0, width: '45%', height: 3, backgroundColor: COLOR.primary, borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: 0, top: -3, width: 12, height: 12, borderRadius: '50%', backgroundColor: COLOR.primary }} />
          <div
            style={{
              position: 'absolute', left: '45%', top: -5, width: 16, height: 16, borderRadius: '50%',
              backgroundColor: COLOR.primary, display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: 'translateX(-50%)',
            }}
          >
            <Truck size={9} color="#fff" />
          </div>
          <div style={{ position: 'absolute', right: 0, top: -3, width: 12, height: 12, borderRadius: '50%', backgroundColor: '#D9D2FF' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLOR.textPrimary }}>San Francisco, CA, USA</div>
            <div style={{ fontSize: 11, color: COLOR.textSecondary }}>Mar 19, 2035 – 10:30 AM</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLOR.textPrimary }}>New York, NY, USA</div>
            <div style={{ fontSize: 11, color: COLOR.textSecondary }}>Mar 23, 2035 – 03:00 PM (estimated)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShipmentRouteCard