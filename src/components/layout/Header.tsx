import { Plus, Search } from 'lucide-react'
import { COLOR } from '../../theme/tokens'

const Header = () => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="text-[14px] text-[#8E8E8E] mb-[4px]">Hello John!</div>
        <div className="text-[30px] font-bold text-[#2E2E2E]">Good Morning</div>
      </div>

      <div className="flex items-center gap-12">
        <div className="w-[280px] h-10 rounded-[10px] border border-border bg-white flex items-center gap-2 px-[14px]">
          <Search size={16} color={COLOR.textSecondary} />
          <input
            placeholder="Search anything"
            className="border-none outline-none text-[13px] text-[#2E2E2E] w-full bg-transparent"
          />
        </div>
        <button className="flex items-center gap-[6px] bg-[#161616] text-white border-none rounded-[10px] px-[18px] h-[40px] text-[13px] font-semibold cursor-pointer">
          <Plus size={15} />
          Add New Shipping
        </button>
      </div>
    </div>
  )
}

export default Header
