import { MoreHorizontal } from 'lucide-react'
import { COLOR, cardStyle } from '../../theme/tokens'
import { CATEGORIES } from '../../data/productData'

const ProductCategoriesCard = () => {
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: COLOR.textPrimary }}>
          Product Categories
        </span>
        <MoreHorizontal size={18} color={COLOR.textSecondary} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14 }}>
        <span style={{ fontSize: 13, color: COLOR.textSecondary }}>Total Products</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: COLOR.textPrimary }}>1,000</span>
      </div>

      <div style={{ display: 'flex', height: 34, borderRadius: 8, overflow: 'hidden', marginTop: 12, gap: 3 }}>
        {CATEGORIES.map((c) => (
          <div key={c.name} style={{ flex: c.pct, backgroundColor: c.color, borderRadius: 6 }} />
        ))}
      </div>

      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {CATEGORIES.map((c) => (
          <div key={c.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: c.color, display: 'inline-block' }}
              />
              <span style={{ fontSize: 13, color: COLOR.textPrimary, fontWeight: 500 }}>{c.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span style={{ fontSize: 13, color: COLOR.textSecondary }}>{c.count}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: COLOR.textPrimary, width: 32, textAlign: 'right' }}>
                {c.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCategoriesCard