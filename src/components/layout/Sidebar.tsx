import { ChevronDown } from 'lucide-react'
import NavRow from './NavRow'
import { NAV_ITEMS, BOTTOM_NAV_ITEMS } from '../../data/navigationData'
import { COLOR } from '../../theme/tokens'

const Sidebar = () => {
  return (
    <aside className="w-[220px] min-w-[220px] h-screen bg-[#FFFFFF] border-r border-[#ECECEC] p-[24px] flex flex-col box-border">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-7">
        <img src="./src/assets/Ship_Now_Logo_2.png" alt="logo" />
        <span className="font-bold text-[17px] text-[#111] tracking-[0.2px] italic">
          SHIPNOW
        </span>
      </div>

      {/* User card */}
      <div className="flex items-center gap-[10px] border border-[#ECECEC] rounded-[12px] p-[12px] mb-[20px]">
        <img
          src="https://i.pravatar.cc/64?img=12"
          alt="John Doe"
          className="w-[34px] h-[34px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-[4px]">
          <div className="text-[13px] font-semibold text-[#2E2E2E]">John Doe</div>
          <div className="text-[12px] text-[#8E8E8E]">Admin</div>
        </div>
        <ChevronDown size={16} color={COLOR.textSecondary} />
      </div>

      {/* Nav */}
      <nav className="flex-1">
        {NAV_ITEMS.map((item) => (
          <NavRow key={item.label} {...item} />
        ))}
      </nav>

      {/* Bottom nav */}
      <div className="border-t border-[#ECECEC] pt-2">
        {BOTTOM_NAV_ITEMS.map((item) => (
          <NavRow key={item.label} {...item} />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar